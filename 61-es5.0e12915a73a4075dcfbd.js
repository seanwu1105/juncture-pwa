!function(){function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return e(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{MTLF:function(e,o,s){"use strict";s.r(o),s.d(o,"PhotoPageModule",function(){return N});var r,c,a,l,u,b,h=s("fXoL"),d=s("O1h7"),p=s("TEn/"),f=s("ofXK"),m=["sliderRef"],g=function(t){return{"no-title":t}},v=function(t){return{"no-text":t}},w=((a=function(){function t(e){n(this,t),this.modalController=e,this.alt="",this.scheme="auto",this.slideOptions={},this.srcFallback="",this.srcHighRes="",this.swipeToClose=!0,this.text="",this.title="",this.titleSize="",this.defaultSlideOptions={centeredSlides:!0,passiveListeners:!1,zoom:{enabled:!0}},this.options={},this.swipeState={phase:"init",direction:"none",swipeType:"none",startX:0,startY:0,distance:0,distanceX:0,distanceY:0,threshold:150,restraint:100,allowedTime:500,elapsedTime:0,startTime:0}}return i(t,[{key:"ngOnInit",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.options=Object.assign({},this.defaultSlideOptions,this.slideOptions),this.src=this.srcHighRes||this.src,this.setStyle(),this.setScheme(this.scheme),this.initSwipeToClose(this.swipeToClose),t.next=7,this.slides.getSwiper();case 7:t.sent.appendSlide('<ion-slide><img alt="'.concat(this.alt,'" src="').concat(this.src,'" onerror="this.src=\'').concat(this.srcFallback,"'\"/></ion-slide>"));case 8:case"end":return t.stop()}},t,this)}))}},{key:"setStyle",value:function(){var t=document.querySelector(".ion-img-viewer");t.style.setProperty("--height","100%"),t.style.setProperty("--width","100%"),t.style.setProperty("--border-radius","0")}},{key:"setScheme",value:function(t){if("auto"!==t){var e=document.querySelector(".ion-img-viewer");"light"===this.scheme&&(e.style.setProperty("--ion-background-color","#ffffff"),e.style.setProperty("--ion-background-color-rgb","255, 255, 255"),e.style.setProperty("--ion-text-color","#000"),e.style.setProperty("--ion-text-color-rgb","0,0,0")),"dark"===this.scheme&&(e.classList.contains("ios")?(e.style.setProperty("--ion-background-color","#000000"),e.style.setProperty("--ion-background-color-rgb","0, 0, 0")):(e.style.setProperty("--ion-background-color","#121212"),e.style.setProperty("--ion-background-color-rgb","18,18,18")),e.style.setProperty("--ion-text-color","#ffffff"),e.style.setProperty("--ion-text-color-rgb","255,255,255"))}}},{key:"initSwipeToClose",value:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(e){var n=document.querySelector("ion-modal");n.addEventListener("mousedown",function(e){return t.swipeStart(e)},!0),n.addEventListener("mousemove",function(e){return t.swipeMove(e)},!0),n.addEventListener("mouseup",function(e){return t.swipeEnd(e)},!0),n.addEventListener("touchstart",function(e){return t.swipeStart(e)},!0),n.addEventListener("touchmove",function(e){return t.swipeMove(e)},!0),n.addEventListener("touchend",function(e){return t.swipeEnd(e)},!0),this.modalController.getTop().then(function(e){e.onWillDismiss().then(function(){document.removeEventListener("mousedown",t.swipeStart,!0),document.removeEventListener("mousemove",t.swipeMove,!0),document.removeEventListener("mouseup",t.swipeMove,!0),document.removeEventListener("touchstart",t.swipeStart,!0),document.removeEventListener("touchmove",t.swipeMove,!0),document.removeEventListener("touchend",t.swipeMove,!0)})})}}},{key:"swipeStart",value:function(t){var e="touchstart"===t.type?t.changedTouches[0]:t,n=e.pageX,o=e.pageY;this.swipeState=Object.assign({},this.swipeState,{phase:"start",direction:"none",distance:0,startX:n,startY:o,startTime:(new Date).getTime()})}},{key:"swipeMove",value:function(t){if("none"!==this.swipeState.phase){var e,n,o="touchmove"===t.type?t.changedTouches[0]:t,i=o.pageX,s=o.pageY,r=i-this.swipeState.startX,c=s-this.swipeState.startY;Math.abs(r)>Math.abs(c)?(e=r<0?"left":"right",n=r):(e=c<0?"up":"down",n=c),this.swipeState=Object.assign({},this.swipeState,{phase:"move",direction:e,distance:n,distanceX:r,distanceY:c}),t.preventDefault()}}},{key:"swipeEnd",value:function(t){if("none"!==this.swipeState.phase){var e,n=this.swipeState,o=n.allowedTime,i=n.direction,s=n.restraint,r=n.startTime,c=n.threshold,a=n.distanceX,l=n.distanceY;return(new Date).getTime()-r<=o&&(Math.abs(a)>=c&&Math.abs(l)<=s||Math.abs(l)>=c&&Math.abs(a)<=s)&&(e=i),this.swipeState=Object.assign({},this.swipeState,{phase:"end",swipeType:e}),"down"===e?this.closeModal():void 0}}},{key:"closeModal",value:function(){this.modalController.dismiss()}}]),t}()).\u0275fac=function(t){return new(t||a)(h.Kb(p.E))},a.\u0275cmp=h.Eb({type:a,selectors:[["ion-viewer-modal"]],viewQuery:function(t,e){var n;1&t&&h.mc(m,3),2&t&&h.fc(n=h.Wb())&&(e.slides=n.first)},inputs:{alt:"alt",scheme:"scheme",slideOptions:"slideOptions",srcFallback:"srcFallback",srcHighRes:"srcHighRes",swipeToClose:"swipeToClose",text:"text",title:"title",titleSize:"titleSize",src:"src"},decls:14,vars:11,consts:[[3,"ngClass"],["slot","primary"],[3,"click"],["slot","icon-only","name","close"],[3,"size"],[3,"forceOverscroll"],[3,"options"],["sliderRef",""],[1,"ion-text-center"]],template:function(t,e){1&t&&(h.Nb(0,"ion-header",0),h.Nb(1,"ion-toolbar"),h.Nb(2,"ion-buttons",1),h.Nb(3,"ion-button",2),h.Vb("click",function(){return e.closeModal()}),h.Lb(4,"ion-icon",3),h.Mb(),h.Mb(),h.Nb(5,"ion-title",4),h.kc(6),h.Mb(),h.Mb(),h.Mb(),h.Nb(7,"ion-content",5),h.Lb(8,"ion-slides",6,7),h.Mb(),h.Nb(10,"ion-footer",0),h.Nb(11,"ion-toolbar",8),h.Nb(12,"ion-text"),h.kc(13),h.Mb(),h.Mb(),h.Mb()),2&t&&(h.cc("ngClass",h.ec(7,g,e.title.length<=0)),h.Ab(5),h.cc("size",e.titleSize),h.Ab(1),h.lc(e.title),h.Ab(1),h.cc("forceOverscroll",!1),h.Ab(1),h.cc("options",e.options),h.Ab(2),h.cc("ngClass",h.ec(9,v,e.text.length<=0)),h.Ab(3),h.lc(e.text))},directives:[p.n,f.i,p.B,p.g,p.f,p.o,p.z,p.i,p.x,p.l,p.y],styles:["ion-slides[_ngcontent-%COMP%]{--height:100%;height:100%}ion-toolbar[_ngcontent-%COMP%]{--border-style:none;--background:rgba(var(--ion-background-color-rgb, (255, 255, 255)), 0.6);background:rgba(var(--ion-background-color-rgb,255,255,255),.6)}ion-header[_ngcontent-%COMP%]{opacity:1;position:absolute}ion-header.no-title[_ngcontent-%COMP%]:after{content:none}ion-header.no-title[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:rgba(0, 0, 0, 0);background:rgba(0,0,0,0)}ion-footer[_ngcontent-%COMP%]{position:absolute;bottom:0}ion-footer.no-text[_ngcontent-%COMP%]:before{content:none}ion-footer.no-text[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:rgba(0, 0, 0, 0);background:rgba(0,0,0,0)}"]}),a),y=((c=function(){function e(t,o,i){n(this,e),this.el=t,this.renderer=o,this.modalController=i}return i(e,[{key:"onClick",value:function(){this.viewImage(this.src,this.srcFallback,this.srcHighRes,this.title,this.titleSize,this.text,this.scheme,this.slideOptions,this.swipeToClose)}},{key:"onError",value:function(t){this.src!==this.el.nativeElement.src&&(this.src=this.el.nativeElement.src),this.srcFallback&&this.renderer.setAttribute(this.el.nativeElement,"src",this.srcFallback)}},{key:"ngOnInit",value:function(){this.el.nativeElement.hasAttribute("src")||this.renderer.setAttribute(this.el.nativeElement,"src",this.src)}},{key:"viewImage",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"auto",a=arguments.length>7&&void 0!==arguments[7]?arguments[7]:{},l=!(arguments.length>8&&void 0!==arguments[8])||arguments[8];return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function u(){var b;return regeneratorRuntime.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,this.modalController.create({component:w,componentProps:{src:e,srcFallback:n,srcHighRes:o,title:i,titleSize:s,text:r,scheme:c,slideOptions:a,swipeToClose:l},cssClass:this.cssClass instanceof Array?["ion-img-viewer"].concat(t(this.cssClass)):["ion-img-viewer",this.cssClass],keyboardClose:!0,showBackdrop:!0});case 2:return b=u.sent,u.next=5,b.present();case 5:return u.abrupt("return",u.sent);case 6:case"end":return u.stop()}},u,this)}))}}]),e}()).\u0275fac=function(t){return new(t||c)(h.Kb(h.m),h.Kb(h.F),h.Kb(p.E))},c.\u0275dir=h.Fb({type:c,selectors:[["","ionImgViewer",""]],hostBindings:function(t,e){1&t&&h.Vb("click",function(){return e.onClick()})("error",function(t){return e.onError(t)})},inputs:{src:"src",cssClass:"cssClass",scheme:"scheme",slideOptions:"slideOptions",srcFallback:"srcFallback",srcHighRes:"srcHighRes",swipeToClose:"swipeToClose",text:"text",title:"title",titleSize:"titleSize"}}),c),M=((r=function t(){n(this,t)}).\u0275mod=h.Ib({type:r}),r.\u0275inj=h.Hb({factory:function(t){return new(t||r)},imports:[[f.c,p.C]]}),r),k=s("PCNd"),C=s("tyNb"),S=[{path:"",component:(l=function t(){n(this,t),this.photoSlidesOptions={resistanceRatio:0}},l.\u0275fac=function(t){return new(t||l)},l.\u0275cmp=h.Eb({type:l,selectors:[["app-photo"]],decls:41,vars:1,consts:[[1,"ion-no-border"],["slot","start"],["color","light"],[1,"photo-slides",3,"options"],["ionImgViewer","","src","https://picsum.photos/id/101/1920/1980"],["ionImgViewer","","src","https://picsum.photos/id/102/720/1080"],["ionImgViewer","","src","https://picsum.photos/id/103/1920/1580"],["fullscreen",""],["lines","none"],["name","code-outline","slot","start"],["name","document-outline","slot","start"],["name","location-outline","slot","start"],["name","home-outline","slot","start"]],template:function(t,e){1&t&&(h.Nb(0,"ion-header",0),h.Nb(1,"ion-toolbar"),h.Nb(2,"ion-buttons",1),h.Lb(3,"ion-back-button",2),h.Mb(),h.Mb(),h.Nb(4,"ion-slides",3),h.Nb(5,"ion-slide"),h.Lb(6,"img",4),h.Mb(),h.Nb(7,"ion-slide"),h.Lb(8,"img",5),h.Mb(),h.Nb(9,"ion-slide"),h.Lb(10,"img",6),h.Mb(),h.Mb(),h.Mb(),h.Nb(11,"ion-content",7),h.Nb(12,"ion-list",8),h.Nb(13,"ion-item"),h.Lb(14,"ion-icon",9),h.Nb(15,"ion-label"),h.Nb(16,"h3"),h.kc(17,"Hash"),h.Mb(),h.Nb(18,"p"),h.kc(19,"1234567890abcdef"),h.Mb(),h.Mb(),h.Mb(),h.Nb(20,"ion-item"),h.Lb(21,"ion-icon",10),h.Nb(22,"ion-label"),h.Nb(23,"h3"),h.kc(24,"MIME Type"),h.Mb(),h.Nb(25,"p"),h.kc(26,"1234567890abcdef"),h.Mb(),h.Mb(),h.Mb(),h.Nb(27,"ion-item"),h.Lb(28,"ion-icon",11),h.Nb(29,"ion-label"),h.Nb(30,"h3"),h.kc(31,"Geolocation"),h.Mb(),h.Nb(32,"p"),h.kc(33,"121.69, 23.22"),h.Mb(),h.Mb(),h.Mb(),h.Nb(34,"ion-item"),h.Lb(35,"ion-icon",12),h.Nb(36,"ion-label"),h.Nb(37,"h3"),h.kc(38,"Address"),h.Mb(),h.Nb(39,"p"),h.kc(40,"7F.-1, No.429, Guangfu S. Rd., Xinyi District, Taipei City, 11074"),h.Mb(),h.Mb(),h.Mb(),h.Mb(),h.Mb()),2&t&&(h.Ab(4),h.cc("options",e.photoSlidesOptions))},directives:[p.n,p.B,p.g,p.d,p.e,p.x,p.w,y,p.i,p.s,p.q,p.o,p.r],styles:["ion-toolbar[_ngcontent-%COMP%]{position:absolute;--background:transparent}.photo-slides[_ngcontent-%COMP%]{overflow:hidden;border-radius:0 0 32px 32px;box-shadow:0 3px 8px rgba(0,0,0,.24)}.photo-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]{height:auto}.photo-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;width:100%;max-height:40vh;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}"]}),l)}],O=((b=function t(){n(this,t)}).\u0275mod=h.Ib({type:b}),b.\u0275inj=h.Hb({factory:function(t){return new(t||b)},imports:[[C.i.forChild(S)],C.i]}),b),N=((u=function t(){n(this,t)}).\u0275mod=h.Ib({type:u}),u.\u0275inj=h.Hb({factory:function(t){return new(t||u)},imports:[[k.a,O,M]]}),u)}}])}();