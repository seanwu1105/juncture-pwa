!function(){function t(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],o=!0,i=!1,r=void 0;try{for(var c,a=t[Symbol.iterator]();!(o=(c=a.next()).done)&&(e.push(c.value),!n||e.length!==n);o=!0);}catch(u){i=!0,r=u}finally{try{o||null==a.return||a.return()}finally{if(i)throw r}}return e}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return n(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function o(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{MTLF:function(n,i,r){"use strict";r.r(i),r.d(i,"PhotoPageModule",function(){return A});var c=r("6g0+"),a=r("PCNd"),u=r("tyNb"),b=r("mrSG"),s=r("VfN6"),l=r("itXk"),p=r("lJxs"),h=r("/uUt"),d=r("eIep"),f=r("KJy6"),m=r("fXoL"),g=r("kTgZ"),O=r("TEn/"),P=r("9A8T"),y=r("ofXK"),v=r("/T4s");function j(t,n){1&t&&m.Lb(0,"app-image",20),2&t&&m.ec("src",n.ngrxLet)}function x(t,n){if(1&t&&(m.Pb(0,"ion-slide"),m.kc(1,j,1,1,"app-image",19),m.Ob()),2&t){var e=n.$implicit;m.Ab(1),m.ec("ngrxLet",e.photoUrl$)}}function w(t,n){if(1&t){var e=m.Qb();m.Pb(0,"ion-slides",17),m.Xb("ionSlideDidChange",function(t){return m.hc(e),m.Zb().onPhotoSlidesChanged(t)}),m.kc(1,x,2,1,"ion-slide",18),m.ac(2,"ngrxPush"),m.Ob()}if(2&t){var o=n.ngrxLet,i=m.Zb();m.ec("options",o),m.Ab(1),m.ec("ngForOf",m.bc(2,2,i.junctures$))}}var C,L,$,I=[{path:"",component:(C=function(){function n(o,i,r){e(this,n),this.junctureRepository=o,this.route=i,this.router=r,this.currentJunctureId$=this.route.queryParamMap.pipe(Object(p.a)(function(t){return t.get("id")}),Object(f.b)(),Object(h.a)()),this.junctures$=this.junctureRepository.all$,this.currentJunctureIndex$=Object(l.a)([this.junctures$,this.currentJunctureId$]).pipe(Object(p.a)(function(n){var e=t(n,2),o=e[0],i=e[1];return o.findIndex(function(t){return t.id===i})})),this.currentJuncture$=Object(l.a)([this.junctures$,this.currentJunctureIndex$]).pipe(Object(p.a)(function(n){var e=t(n,2);return e[0][e[1]]})),this.photoSlidesOptions$=this.currentJunctureIndex$.pipe(Object(p.a)(function(t){return{resistanceRatio:0,initialSlide:t}}))}var i,r,c;return i=n,(r=[{key:"onPhotoSlidesChanged",value:function(t){var n=this,e=t.target;return this.junctures$.pipe(Object(d.a)(function(t){return Object(b.a)(n,void 0,void 0,regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.getActiveIndex();case 2:return n.t0=n.sent,n.abrupt("return",t[n.t0].id);case 4:case"end":return n.stop()}},n)}))}),Object(d.a)(function(t){return n.router.navigate([],{queryParams:{id:t},relativeTo:n.route,replaceUrl:!0})}),Object(s.b)(this)).subscribe()}}])&&o(i.prototype,r),c&&o(i,c),n}(),C.\u0275fac=function(t){return new(t||C)(m.Kb(g.a),m.Kb(u.a),m.Kb(u.g))},C.\u0275cmp=m.Eb({type:C,selectors:[["app-photo"]],decls:52,vars:7,consts:[[1,"ion-no-border"],["slot","start"],["color","light"],["slot","end"],["slot","primary","color","light"],["name","trash-outline","slot","icon-only"],["slot","secondary","color","light"],["name","share-social-outline","slot","icon-only"],["class","photo-slides",3,"options","ionSlideDidChange",4,"ngrxLet"],["fullscreen",""],["lines","none"],["name","code-outline","slot","start"],["name","document-outline","slot","start"],["name","time-outline","slot","start"],["name","location-outline","slot","start"],["name","home-outline","slot","start"],["src","https://maps.google.com/maps?q=35.856737, 10.606619&z=15&output=embed","frameborder","0","loading","lazy"],[1,"photo-slides",3,"options","ionSlideDidChange"],[4,"ngFor","ngForOf"],["ionImgViewer","",3,"src",4,"ngrxLet"],["ionImgViewer","",3,"src"]],template:function(t,n){var e,o;(1&t&&(m.Pb(0,"ion-header",0),m.Pb(1,"ion-toolbar"),m.Pb(2,"ion-buttons",1),m.Lb(3,"ion-back-button",2),m.Ob(),m.Pb(4,"ion-buttons",3),m.Pb(5,"ion-button",4),m.Lb(6,"ion-icon",5),m.Ob(),m.Pb(7,"ion-button",6),m.Lb(8,"ion-icon",7),m.Ob(),m.Ob(),m.Ob(),m.kc(9,w,3,4,"ion-slides",8),m.Ob(),m.Pb(10,"ion-content",9),m.Pb(11,"ion-list",10),m.Pb(12,"ion-item"),m.Lb(13,"ion-icon",11),m.Pb(14,"ion-label"),m.Pb(15,"h3"),m.lc(16,"Hash"),m.Ob(),m.Pb(17,"p"),m.lc(18),m.ac(19,"ngrxPush"),m.Ob(),m.Ob(),m.Ob(),m.Pb(20,"ion-item"),m.Lb(21,"ion-icon",12),m.Pb(22,"ion-label"),m.Pb(23,"h3"),m.lc(24,"MIME Type"),m.Ob(),m.Pb(25,"p"),m.lc(26),m.ac(27,"ngrxPush"),m.Ob(),m.Ob(),m.Ob(),m.Pb(28,"ion-item"),m.Lb(29,"ion-icon",13),m.Pb(30,"ion-label"),m.Pb(31,"h3"),m.lc(32,"Timestamp"),m.Ob(),m.Pb(33,"p"),m.lc(34,"2020/02/01 10:10:10"),m.Ob(),m.Ob(),m.Ob(),m.Pb(35,"ion-item"),m.Lb(36,"ion-icon",14),m.Pb(37,"ion-label"),m.Pb(38,"h3"),m.lc(39,"Geolocation"),m.Ob(),m.Pb(40,"p"),m.lc(41,"121.69, 23.22"),m.Ob(),m.Ob(),m.Ob(),m.Pb(42,"ion-item"),m.Lb(43,"ion-icon",15),m.Pb(44,"ion-label"),m.Pb(45,"h3"),m.lc(46,"Address"),m.Ob(),m.Pb(47,"p"),m.lc(48,"7F.-1, No.429, Guangfu S. Rd., Xinyi District, Taipei City, 11074"),m.Ob(),m.Ob(),m.Ob(),m.Pb(49,"ion-item"),m.Lb(50,"ion-icon",1),m.Lb(51,"iframe",16),m.Ob(),m.Ob(),m.Ob()),2&t)&&(m.Ab(9),m.ec("ngrxLet",n.photoSlidesOptions$),m.Ab(9),m.mc(null==(e=m.bc(19,3,n.currentJuncture$))?null:e.id),m.Ab(8),m.mc(null==(o=m.bc(27,5,n.currentJuncture$))?null:o.mimeType))},directives:[O.m,O.C,O.f,O.c,O.d,O.e,O.n,P.a,O.h,O.r,O.p,O.q,O.z,y.i,O.y,v.a,c.a],pipes:[P.b],styles:["ion-toolbar[_ngcontent-%COMP%]{position:absolute;--background:transparent}.photo-slides[_ngcontent-%COMP%]{overflow:hidden;border-radius:0 0 32px 32px;box-shadow:0 3px 8px rgba(0,0,0,.24)}.photo-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]{height:auto}.photo-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   app-image[_ngcontent-%COMP%]{height:100%;max-height:40vh;min-height:100px;width:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}iframe[_ngcontent-%COMP%]{width:100%;height:100px;border-radius:4px}"]}),C=Object(b.b)([Object(s.a)()],C))}],S=(($=function t(){e(this,t)}).\u0275mod=m.Ib({type:$}),$.\u0275inj=m.Hb({factory:function(t){return new(t||$)},imports:[[u.i.forChild(I)],u.i]}),$),A=((L=function t(){e(this,t)}).\u0275mod=m.Ib({type:L}),L.\u0275inj=m.Hb({factory:function(t){return new(t||L)},imports:[[a.a,S,c.b]]}),L)}}])}();