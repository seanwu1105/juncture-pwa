import { Injectable } from '@angular/core';
import { RxCollection } from 'rxdb';
import { defer, forkJoin, Observable } from 'rxjs';
import { concatMap, first, map, pluck, shareReplay } from 'rxjs/operators';
import { sha256WithBlob } from '../../utils/crypto';
import { getCurrentPositionOrUndefined } from '../../utils/geolocation';
import { Database } from '../database/database.service';
import { MemontIndex, Moment, schema } from './moment';

@Injectable({
  providedIn: 'root',
})
export class MomentRepository {
  private readonly collection$: Observable<
    RxCollection<MemontIndex>
  > = this.database.main$.pipe(
    concatMap(database =>
      database.addCollections({
        [COLLECTION_NAME]: { schema },
      })
    ),
    pluck(COLLECTION_NAME),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  readonly all$ = this.collection$.pipe(
    concatMap(c => c.find().sort({ timestamp: 'desc' }).$),
    map(documents => documents.map(d => new Moment(d)))
  );

  constructor(private readonly database: Database) {}

  add$(photo: Blob) {
    return defer(() =>
      forkJoin([
        this.collection$.pipe(first()),
        sha256WithBlob(photo),
        getCurrentPositionOrUndefined(),
      ])
    ).pipe(
      concatMap(([collection, id, geolocationPosition]) =>
        collection.atomicUpsert({
          id,
          timestamp: Date.now(),
          geolocationPosition: geolocationPosition
            ? {
                latitude: geolocationPosition.coords.latitude,
                longitude: geolocationPosition.coords.longitude,
              }
            : undefined,
          userAgent: navigator.userAgent,
        })
      ),
      concatMap(document =>
        document.putAttachment(
          { id: Moment.PHOTO_ATTACHMENT_ID, data: photo, type: photo.type },
          true
        )
      ),
      map(attachment => attachment.doc)
    );
  }

  remove$(id: string) {
    return this.collection$.pipe(concatMap(c => c.bulkRemove([id])));
  }
}

const COLLECTION_NAME = 'moments';
