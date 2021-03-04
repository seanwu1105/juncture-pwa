import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { LanguagesService } from './shared/languages/languages.service';
import { ThemesService } from './shared/themes/themes.service';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private readonly platform: Platform,
    private readonly themesService: ThemesService,
    private readonly languagesService: LanguagesService
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.platform.ready();
    this.themesService.initialize$().pipe(untilDestroyed(this)).subscribe();
    this.languagesService.initialize$().pipe(untilDestroyed(this)).subscribe();
  }
}
