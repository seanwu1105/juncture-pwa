(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

  function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _slicedToArray2(arr, i) { return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest2(); }

  function _nonIterableRest2() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit2(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles2(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray2(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray2(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray2(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray2(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray2(arr); }

  function _arrayLikeToArray2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1], {
    /***/
    "/Q3I":
    /*!**************************************!*\
      !*** ./src/app/utils/geolocation.ts ***!
      \**************************************/

    /*! exports provided: getCurrentPositionOrUndefined */

    /***/
    function Q3I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getCurrentPositionOrUndefined", function () {
        return getCurrentPositionOrUndefined;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");

      function getCurrentPosition() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", new Promise(function (resolve, reject) {
                    navigator.geolocation.getCurrentPosition(function (success) {
                      return resolve(success);
                    }, function (error) {
                      return reject(error);
                    }, {
                      enableHighAccuracy: true,
                      timeout: 10000,
                      maximumAge: 60000
                    });
                  }));

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
      }

      function getCurrentPositionOrUndefined() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return getCurrentPosition();

                case 3:
                  return _context2.abrupt("return", _context2.sent);

                case 6:
                  _context2.prev = 6;
                  _context2.t0 = _context2["catch"](0);
                  return _context2.abrupt("return", undefined);

                case 9:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, null, [[0, 6]]);
        }));
      }
      /***/

    },

    /***/
    "/T4s":
    /*!*************************************************!*\
      !*** ./src/app/shared/image/image.component.ts ***!
      \*************************************************/

    /*! exports provided: ImageComponent */

    /***/
    function T4s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageComponent", function () {
        return ImageComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _utils_rx_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../utils/rx-operators */
      "KJy6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngrx_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngrx/component */
      "9A8T");

      function ImageComponent_ion_icon_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-icon", 3);
        }
      }

      function ImageComponent_ion_img_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionImgDidLoad", function ImageComponent_ion_img_1_Template_ion_img_ionImgDidLoad_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r3.onImageLoaded($event);
          })("ionError", function ImageComponent_ion_img_1_Template_ion_img_ionError_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r5.onImageError();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "ngrxPush");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, ctx_r1.src$));
        }
      }

      function ImageComponent_ng_content_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](0, 0, ["*ngIf", "!isImageError"]);
        }
      }

      var _c0 = ["*"];

      var ImageComponent = /*@__PURE__*/function () {
        var ImageComponent = /*#__PURE__*/function () {
          function ImageComponent() {
            var _this4 = this;

            _classCallCheck(this, ImageComponent);

            this._src$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
            this.src$ = this._src$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(TINIEST_GIF), Object(_utils_rx_operators__WEBPACK_IMPORTED_MODULE_4__["isNonNullable"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
              return _this4.isImageError = false;
            }));
            this.isImageError = false;
          }

          _createClass(ImageComponent, [{
            key: "src",
            set: function set(value) {
              this._src$.next(value);
            }
          }, {
            key: "onImageLoaded",
            value: function onImageLoaded(event) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var imgElement, fadeInAnimation;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        imgElement = event.target;
                        fadeInAnimation = Object(_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["createAnimation"])().addElement(imgElement).duration(300).iterations(1).fromTo('opacity', '0', '1');
                        return _context3.abrupt("return", fadeInAnimation.play());

                      case 3:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));
            }
          }, {
            key: "onImageError",
            value: function onImageError() {
              this.isImageError = true;
            }
          }]);

          return ImageComponent;
        }();

        ImageComponent.ɵfac = function ImageComponent_Factory(t) {
          return new (t || ImageComponent)();
        };

        ImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
          type: ImageComponent,
          selectors: [["app-image"]],
          inputs: {
            src: "src"
          },
          ngContentSelectors: _c0,
          decls: 3,
          vars: 3,
          consts: [["src", "/assets/icons/broken-image.svg", "color", "danger", "size", "large", 4, "ngIf"], [3, "ionImgDidLoad", "ionError", 4, "ngIf"], [4, "ngIf"], ["src", "/assets/icons/broken-image.svg", "color", "danger", "size", "large"], [3, "ionImgDidLoad", "ionError"]],
          template: function ImageComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojectionDef"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ImageComponent_ion_icon_0_Template, 1, 0, "ion-icon", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ImageComponent_ion_img_1_Template, 2, 3, "ion-img", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ImageComponent_ng_content_2_Template, 1, 0, "ng-content", 2);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isImageError);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isImageError);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isImageError);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonImg"]],
          pipes: [_ngrx_component__WEBPACK_IMPORTED_MODULE_7__["PushPipe"]],
          styles: ["[_nghost-%COMP%] {\n  display: block;\n  overflow: hidden;\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: relative;\n  -webkit-animation: loading 2.5s ease-in-out alternate infinite;\n          animation: loading 2.5s ease-in-out alternate infinite;\n}\n\nion-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: inherit;\n     object-fit: inherit;\n  -o-object-position: inherit;\n     object-position: inherit;\n  opacity: 0;\n}\n\n@-webkit-keyframes loading {\n  0% {\n    background-color: var(--ion-color-light-shade);\n  }\n  100% {\n    background-color: var(--ion-color-light);\n  }\n}\n\n@keyframes loading {\n  0% {\n    background-color: var(--ion-color-light-shade);\n  }\n  100% {\n    background-color: var(--ion-color-light);\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  @-webkit-keyframes loading {\n    0% {\n      background-color: var(--ion-color-step-150);\n    }\n    100% {\n      background-color: var(--ion-color-step-100);\n    }\n  }\n  @keyframes loading {\n    0% {\n      background-color: var(--ion-color-step-150);\n    }\n    100% {\n      background-color: var(--ion-color-step-100);\n    }\n  }\n}\n\nion-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ltYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOERBQUE7VUFBQSxzREFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0EsMkJBQUE7S0FBQSx3QkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsOENBQUE7RUFDRjtFQUVBO0lBQ0Usd0NBQUE7RUFBRjtBQUNGOztBQVBBO0VBQ0U7SUFDRSw4Q0FBQTtFQUNGO0VBRUE7SUFDRSx3Q0FBQTtFQUFGO0FBQ0Y7O0FBR0E7RUFDRTtJQUNFO01BQ0UsMkNBQUE7SUFERjtJQUlBO01BQ0UsMkNBQUE7SUFGRjtFQUNGO0VBTEE7SUFDRTtNQUNFLDJDQUFBO0lBREY7SUFJQTtNQUNFLDJDQUFBO0lBRkY7RUFDRjtBQUNGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUFIRiIsImZpbGUiOiJpbWFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFuaW1hdGlvbjogbG9hZGluZyAyLjVzIGVhc2UtaW4tb3V0IGFsdGVybmF0ZSBpbmZpbml0ZTtcbn1cblxuaW9uLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGluaGVyaXQ7XG4gIG9iamVjdC1wb3NpdGlvbjogaW5oZXJpdDtcbiAgb3BhY2l0eTogMDtcbn1cblxuQGtleWZyYW1lcyBsb2FkaW5nIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICB9XG59XG5cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgQGtleWZyYW1lcyBsb2FkaW5nIHtcbiAgICAwJSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTApO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwKTtcbiAgICB9XG4gIH1cbn1cblxuaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1yaWdodDogLTUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4iXX0= */"]
        });
        return ImageComponent;
      }();

      var TINIEST_GIF = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
      /***/
    },

    /***/
    "6g0+":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/ngx-ionic-image-viewer/__ivy_ngcc__/fesm2015/ngx-ionic-image-viewer.js ***!
      \*********************************************************************************************/

    /*! exports provided: NgxIonicImageViewerComponent, NgxIonicImageViewerDirective, NgxIonicImageViewerModule, NgxIonicImageViewerService, ViewerModalComponent */

    /***/
    function g0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxIonicImageViewerComponent", function () {
        return NgxIonicImageViewerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxIonicImageViewerDirective", function () {
        return NgxIonicImageViewerDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxIonicImageViewerModule", function () {
        return NgxIonicImageViewerModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxIonicImageViewerService", function () {
        return NgxIonicImageViewerService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewerModalComponent", function () {
        return ViewerModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      "O1h7");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/ngx-ionic-image-viewer.service.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var _c0 = ["sliderRef"];

      var _c1 = function _c1(a0) {
        return {
          "no-title": a0
        };
      };

      var _c2 = function _c2(a0) {
        return {
          "no-text": a0
        };
      };

      var NgxIonicImageViewerService = /*@__PURE__*/function () {
        var NgxIonicImageViewerService = function NgxIonicImageViewerService() {
          _classCallCheck(this, NgxIonicImageViewerService);
        };

        NgxIonicImageViewerService.ɵfac = function NgxIonicImageViewerService_Factory(t) {
          return new (t || NgxIonicImageViewerService)();
        };

        NgxIonicImageViewerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: NgxIonicImageViewerService,
          factory: NgxIonicImageViewerService.ɵfac,
          providedIn: 'root'
        });
        /** @nocollapse */

        NgxIonicImageViewerService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
          factory: function NgxIonicImageViewerService_Factory() {
            return new NgxIonicImageViewerService();
          },
          token: NgxIonicImageViewerService,
          providedIn: "root"
        });
        return NgxIonicImageViewerService;
      }();

      var ViewerModalComponent = /*@__PURE__*/function () {
        var ViewerModalComponent = /*#__PURE__*/function () {
          /**
           * @param {?} modalController
           */
          function ViewerModalComponent(modalController) {
            _classCallCheck(this, ViewerModalComponent);

            this.modalController = modalController; // tslint:disable: no-inferrable-types

            this.alt = '';
            this.scheme = 'auto';
            this.slideOptions = {};
            this.srcFallback = '';
            this.srcHighRes = '';
            this.swipeToClose = true;
            this.text = '';
            this.title = '';
            this.titleSize = ''; // tslint:enable: no-inferrable-types

            this.defaultSlideOptions = {
              centeredSlides: true,
              passiveListeners: false,
              zoom: {
                enabled: true
              }
            };
            this.options = {};
            this.swipeState = {
              phase: 'init',
              direction: 'none',
              swipeType: 'none',
              startX: 0,
              startY: 0,
              distance: 0,
              distanceX: 0,
              distanceY: 0,
              threshold: 150,
              // required min distance traveled to be considered swipe
              restraint: 100,
              // maximum distance allowed at the same time in perpendicular direction
              allowedTime: 500,
              // maximum time allowed to travel that distance
              elapsedTime: 0,
              startTime: 0
            };
          }
          /**
           * @return {?}
           */


          _createClass(ViewerModalComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var swiper;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        this.options = Object.assign({}, this.defaultSlideOptions, this.slideOptions);
                        this.src = this.srcHighRes || this.src;
                        this.setStyle();
                        this.setScheme(this.scheme);
                        this.initSwipeToClose(this.swipeToClose);
                        /**
                         * Current Workaround
                         * See reported bug: https://github.com/ionic-team/ionic/issues/19638#issuecomment-584828315
                         * Hint: Comment in '<ion-slide>' in component
                         * @type {?}
                         */

                        _context4.next = 7;
                        return this.slides.getSwiper();

                      case 7:
                        swiper = _context4.sent;
                        swiper.appendSlide("<ion-slide><img alt=\"".concat(this.alt, "\" src=\"").concat(this.src, "\" onerror=\"this.src='").concat(this.srcFallback, "'\"/></ion-slide>"));

                      case 9:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));
            }
            /**
             * @return {?}
             */

          }, {
            key: "setStyle",
            value: function setStyle() {
              /** @type {?} */
              var el = document.querySelector('.ion-img-viewer');
              el.style.setProperty('--height', '100%');
              el.style.setProperty('--width', '100%');
              el.style.setProperty('--border-radius', '0');
            }
            /**
             * @param {?} scheme
             * @return {?}
             */

          }, {
            key: "setScheme",
            value: function setScheme(scheme) {
              if (scheme === 'auto') {
                return;
              }
              /** @type {?} */


              var el = document.querySelector('.ion-img-viewer');

              if (this.scheme === 'light') {
                el.style.setProperty('--ion-background-color', '#ffffff');
                el.style.setProperty('--ion-background-color-rgb', '255, 255, 255');
                el.style.setProperty('--ion-text-color', '#000');
                el.style.setProperty('--ion-text-color-rgb', '0,0,0');
              }

              if (this.scheme === 'dark') {
                if (el.classList.contains('ios')) {
                  el.style.setProperty('--ion-background-color', '#000000');
                  el.style.setProperty('--ion-background-color-rgb', '0, 0, 0');
                } else {
                  el.style.setProperty('--ion-background-color', '#121212');
                  el.style.setProperty('--ion-background-color-rgb', '18,18,18');
                }

                el.style.setProperty('--ion-text-color', '#ffffff');
                el.style.setProperty('--ion-text-color-rgb', '255,255,255');
              }
            }
            /**
             * @see http://www.javascriptkit.com/javatutors/touchevents3.shtml
             * @param {?=} isActive
             * @return {?}
             */

          }, {
            key: "initSwipeToClose",
            value: function initSwipeToClose() {
              var _this5 = this;

              var isActive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

              if (!isActive) {
                return;
              }
              /** @type {?} */


              var el = document.querySelector('ion-modal');
              el.addEventListener('mousedown',
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                return _this5.swipeStart(event);
              }, true);
              el.addEventListener('mousemove',
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                return _this5.swipeMove(event);
              }, true);
              el.addEventListener('mouseup',
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                return _this5.swipeEnd(event);
              }, true);
              el.addEventListener('touchstart',
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                return _this5.swipeStart(event);
              }, true);
              el.addEventListener('touchmove',
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                return _this5.swipeMove(event);
              }, true);
              el.addEventListener('touchend',
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                return _this5.swipeEnd(event);
              }, true);
              this.modalController.getTop().then(
              /**
              * @param {?} modal
              * @return {?}
              */
              function (modal) {
                modal.onWillDismiss().then(
                /**
                * @return {?}
                */
                function () {
                  document.removeEventListener('mousedown', _this5.swipeStart, true);
                  document.removeEventListener('mousemove', _this5.swipeMove, true);
                  document.removeEventListener('mouseup', _this5.swipeMove, true);
                  document.removeEventListener('touchstart', _this5.swipeStart, true);
                  document.removeEventListener('touchmove', _this5.swipeMove, true);
                  document.removeEventListener('touchend', _this5.swipeMove, true);
                });
              });
            }
            /**
             * @param {?} event
             * @return {?}
             */

          }, {
            key: "swipeStart",
            value: function swipeStart(event) {
              var _ref = event.type === 'touchstart' ? event.changedTouches[0] : event,
                  pageX = _ref.pageX,
                  pageY = _ref.pageY;

              this.swipeState = Object.assign({}, this.swipeState, {
                phase: 'start',
                direction: 'none',
                distance: 0,
                startX: pageX,
                startY: pageY,
                startTime: new Date().getTime()
              });
            }
            /**
             * @param {?} event
             * @return {?}
             */

          }, {
            key: "swipeMove",
            value: function swipeMove(event) {
              if (this.swipeState.phase === 'none') {
                return;
              }

              var _ref2 = event.type === 'touchmove' ? event.changedTouches[0] : event,
                  pageX = _ref2.pageX,
                  pageY = _ref2.pageY; // get horizontal dist traveled by finger while in contact with surface

              /** @type {?} */


              var distanceX = pageX - this.swipeState.startX; // get vertical dist traveled by finger while in contact with surface

              /** @type {?} */

              var distanceY = pageY - this.swipeState.startY;
              /** @type {?} */

              var direction;
              /** @type {?} */

              var distance;

              if (Math.abs(distanceX) > Math.abs(distanceY)) {
                // if distance traveled horizontally is greater than vertically, consider this a horizontal swipe
                direction = distanceX < 0 ? 'left' : 'right';
                distance = distanceX;
              } else {
                // else consider this a vertical swipe
                direction = distanceY < 0 ? 'up' : 'down';
                distance = distanceY;
              }

              this.swipeState = Object.assign({}, this.swipeState, {
                phase: 'move',
                direction: direction,
                distance: distance,
                distanceX: distanceX,
                distanceY: distanceY
              });
              event.preventDefault();
            }
            /**
             * @param {?} event
             * @return {?}
             */

          }, {
            key: "swipeEnd",
            value: function swipeEnd(event) {
              if (this.swipeState.phase === 'none') {
                return;
              }

              var _this$swipeState = this.swipeState,
                  allowedTime = _this$swipeState.allowedTime,
                  direction = _this$swipeState.direction,
                  restraint = _this$swipeState.restraint,
                  startTime = _this$swipeState.startTime,
                  threshold = _this$swipeState.threshold,
                  distanceX = _this$swipeState.distanceX,
                  distanceY = _this$swipeState.distanceY;
              /** @type {?} */

              var swipeType;
              /** @type {?} */

              var elapsedTime = new Date().getTime() - startTime;

              if (elapsedTime <= allowedTime) {
                // first condition for a swipe met
                if (Math.abs(distanceX) >= threshold && Math.abs(distanceY) <= restraint) {
                  // 2nd condition for horizontal swipe met
                  swipeType = direction; // set swipeType to either "left" or "right"
                } else if (Math.abs(distanceY) >= threshold && Math.abs(distanceX) <= restraint) {
                  // 2nd condition for vertical swipe met
                  swipeType = direction; // set swipeType to either "top" or "down"
                }
              }

              this.swipeState = Object.assign({}, this.swipeState, {
                phase: 'end',
                swipeType: swipeType
              });

              if (swipeType === 'down') {
                return this.closeModal();
              }
            }
            /**
             * @return {?}
             */

          }, {
            key: "closeModal",
            value: function closeModal() {
              this.modalController.dismiss();
            }
          }]);

          return ViewerModalComponent;
        }();

        ViewerModalComponent.ɵfac = function ViewerModalComponent_Factory(t) {
          return new (t || ViewerModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]));
        };

        ViewerModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ViewerModalComponent,
          selectors: [["ion-viewer-modal"]],
          viewQuery: function ViewerModalComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slides = _t.first);
            }
          },
          inputs: {
            alt: "alt",
            scheme: "scheme",
            slideOptions: "slideOptions",
            srcFallback: "srcFallback",
            srcHighRes: "srcHighRes",
            swipeToClose: "swipeToClose",
            text: "text",
            title: "title",
            titleSize: "titleSize",
            src: "src"
          },
          decls: 14,
          vars: 11,
          consts: [[3, "ngClass"], ["slot", "primary"], [3, "click"], ["slot", "icon-only", "name", "close"], [3, "size"], [3, "forceOverscroll"], [3, "options"], ["sliderRef", ""], [1, "ion-text-center"]],
          template: function ViewerModalComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-button", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewerModalComponent_Template_ion_button_click_3_listener() {
                return ctx.closeModal();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-icon", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-title", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-content", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ion-slides", 6, 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-footer", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-toolbar", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-text");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.title.length <= 0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", ctx.titleSize);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("forceOverscroll", false);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c2, ctx.text.length <= 0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
            }
          },
          directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonText"]],
          styles: ["ion-slides[_ngcontent-%COMP%]{--height:100%;height:100%}ion-toolbar[_ngcontent-%COMP%]{--border-style:none;--background:rgba(var(--ion-background-color-rgb, (255, 255, 255)), 0.6);background:rgba(var(--ion-background-color-rgb,255,255,255),.6)}ion-header[_ngcontent-%COMP%]{opacity:1;position:absolute}ion-header.no-title[_ngcontent-%COMP%]:after{content:none}ion-header.no-title[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:rgba(0, 0, 0, 0);background:rgba(0,0,0,0)}ion-footer[_ngcontent-%COMP%]{position:absolute;bottom:0}ion-footer.no-text[_ngcontent-%COMP%]:before{content:none}ion-footer.no-text[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:rgba(0, 0, 0, 0);background:rgba(0,0,0,0)}"]
        });
        return ViewerModalComponent;
      }();

      if (false) {}

      var NgxIonicImageViewerComponent = /*@__PURE__*/function () {
        var NgxIonicImageViewerComponent = /*#__PURE__*/function () {
          /**
           * @param {?} modalController
           */
          function NgxIonicImageViewerComponent(modalController) {
            _classCallCheck(this, NgxIonicImageViewerComponent);

            this.modalController = modalController;
          }
          /**
           * @param {?} src
           * @param {?=} srcFallback
           * @param {?=} srcHighRes
           * @param {?=} title
           * @param {?=} titleSize
           * @param {?=} text
           * @param {?=} scheme
           * @param {?=} slideOptions
           * @param {?=} swipeToClose
           * @return {?}
           */


          _createClass(NgxIonicImageViewerComponent, [{
            key: "viewImage",
            value: function viewImage(src) {
              var srcFallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
              var srcHighRes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
              var title = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
              var titleSize = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
              var text = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
              var scheme = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'auto';
              var slideOptions = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : {};
              var swipeToClose = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : true;
              return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                var modal;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.next = 2;
                        return this.modalController.create({
                          component: ViewerModalComponent,
                          componentProps: {
                            src: src,
                            srcFallback: srcFallback,
                            srcHighRes: srcHighRes,
                            title: title,
                            titleSize: titleSize,
                            text: text,
                            scheme: scheme,
                            slideOptions: slideOptions,
                            swipeToClose: swipeToClose
                          },
                          cssClass: this.cssClass instanceof Array ? ['ion-img-viewer'].concat(_toConsumableArray(this.cssClass)) : ['ion-img-viewer', this.cssClass],
                          keyboardClose: true,
                          showBackdrop: true
                        });

                      case 2:
                        modal = _context5.sent;
                        _context5.next = 5;
                        return modal.present();

                      case 5:
                        return _context5.abrupt("return", _context5.sent);

                      case 6:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, this);
              }));
            }
            /**
             * @return {?}
             */

          }, {
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return NgxIonicImageViewerComponent;
        }();

        NgxIonicImageViewerComponent.ɵfac = function NgxIonicImageViewerComponent_Factory(t) {
          return new (t || NgxIonicImageViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]));
        };

        NgxIonicImageViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: NgxIonicImageViewerComponent,
          selectors: [["ion-img-viewer"]],
          inputs: {
            alt: "alt",
            cssClass: "cssClass",
            scheme: "scheme",
            slideOptions: "slideOptions",
            src: "src",
            srcFallback: "srcFallback",
            srcHighRes: "srcHighRes",
            swipeToClose: "swipeToClose",
            text: "text",
            title: "title",
            titleSize: "titleSize"
          },
          decls: 1,
          vars: 2,
          consts: [[3, "alt", "src", "click", "error"]],
          template: function NgxIonicImageViewerComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxIonicImageViewerComponent_Template_img_click_0_listener() {
                return ctx.viewImage(ctx.src, ctx.srcFallback, ctx.srcHighRes, ctx.title, ctx.titleSize, ctx.text, ctx.scheme, ctx.slideOptions, ctx.swipeToClose);
              })("error", function NgxIonicImageViewerComponent_Template_img_error_0_listener() {
                return ctx.src = ctx.srcFallback;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", ctx.alt)("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
            }
          },
          styles: ["[_nghost-%COMP%] {\n        display: block;\n      }"]
        });
        return NgxIonicImageViewerComponent;
      }();

      if (false) {}

      var NgxIonicImageViewerDirective = /*@__PURE__*/function () {
        var NgxIonicImageViewerDirective = /*#__PURE__*/function () {
          /**
           * @param {?} el
           * @param {?} renderer
           * @param {?} modalController
           */
          function NgxIonicImageViewerDirective(el, renderer, modalController) {
            _classCallCheck(this, NgxIonicImageViewerDirective);

            this.el = el;
            this.renderer = renderer;
            this.modalController = modalController;
          }
          /**
           * @return {?}
           */


          _createClass(NgxIonicImageViewerDirective, [{
            key: "onClick",
            value: function onClick() {
              this.viewImage(this.src, this.srcFallback, this.srcHighRes, this.title, this.titleSize, this.text, this.scheme, this.slideOptions, this.swipeToClose);
            }
            /**
             * @param {?} error
             * @return {?}
             */

          }, {
            key: "onError",
            value: function onError(error) {
              if (this.src !== this.el.nativeElement.src) {
                this.src = this.el.nativeElement.src;
              }

              if (this.srcFallback) {
                this.renderer.setAttribute(this.el.nativeElement, 'src', this.srcFallback);
              }
            }
            /**
             * @return {?}
             */

          }, {
            key: "ngOnInit",
            value: function ngOnInit() {
              if (!this.el.nativeElement.hasAttribute('src')) {
                this.renderer.setAttribute(this.el.nativeElement, 'src', this.src);
              }
            }
            /**
             * @param {?} src
             * @param {?=} srcFallback
             * @param {?=} srcHighRes
             * @param {?=} title
             * @param {?=} titleSize
             * @param {?=} text
             * @param {?=} scheme
             * @param {?=} slideOptions
             * @param {?=} swipeToClose
             * @return {?}
             */

          }, {
            key: "viewImage",
            value: function viewImage(src) {
              var srcFallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
              var srcHighRes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
              var title = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
              var titleSize = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
              var text = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
              var scheme = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'auto';
              var slideOptions = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : {};
              var swipeToClose = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : true;
              return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                var modal;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        _context6.next = 2;
                        return this.modalController.create({
                          component: ViewerModalComponent,
                          componentProps: {
                            src: src,
                            srcFallback: srcFallback,
                            srcHighRes: srcHighRes,
                            title: title,
                            titleSize: titleSize,
                            text: text,
                            scheme: scheme,
                            slideOptions: slideOptions,
                            swipeToClose: swipeToClose
                          },
                          cssClass: this.cssClass instanceof Array ? ['ion-img-viewer'].concat(_toConsumableArray(this.cssClass)) : ['ion-img-viewer', this.cssClass],
                          keyboardClose: true,
                          showBackdrop: true
                        });

                      case 2:
                        modal = _context6.sent;
                        _context6.next = 5;
                        return modal.present();

                      case 5:
                        return _context6.abrupt("return", _context6.sent);

                      case 6:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6, this);
              }));
            }
          }]);

          return NgxIonicImageViewerDirective;
        }();

        NgxIonicImageViewerDirective.ɵfac = function NgxIonicImageViewerDirective_Factory(t) {
          return new (t || NgxIonicImageViewerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]));
        };

        NgxIonicImageViewerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: NgxIonicImageViewerDirective,
          selectors: [["", "ionImgViewer", ""]],
          hostBindings: function NgxIonicImageViewerDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxIonicImageViewerDirective_click_HostBindingHandler() {
                return ctx.onClick();
              })("error", function NgxIonicImageViewerDirective_error_HostBindingHandler($event) {
                return ctx.onError($event);
              });
            }
          },
          inputs: {
            src: "src",
            cssClass: "cssClass",
            scheme: "scheme",
            slideOptions: "slideOptions",
            srcFallback: "srcFallback",
            srcHighRes: "srcHighRes",
            swipeToClose: "swipeToClose",
            text: "text",
            title: "title",
            titleSize: "titleSize"
          }
        });
        return NgxIonicImageViewerDirective;
      }();

      if (false) {}

      var NgxIonicImageViewerModule = /*@__PURE__*/function () {
        var NgxIonicImageViewerModule = function NgxIonicImageViewerModule() {
          _classCallCheck(this, NgxIonicImageViewerModule);
        };

        NgxIonicImageViewerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: NgxIonicImageViewerModule
        });
        NgxIonicImageViewerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function NgxIonicImageViewerModule_Factory(t) {
            return new (t || NgxIonicImageViewerModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]]]
        });
        return NgxIonicImageViewerModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxIonicImageViewerModule, {
          declarations: function declarations() {
            return [NgxIonicImageViewerComponent, NgxIonicImageViewerDirective, ViewerModalComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]];
          },
          exports: function exports() {
            return [NgxIonicImageViewerComponent, NgxIonicImageViewerDirective, ViewerModalComponent];
          }
        });
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: public-api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: ngx-ionic-image-viewer.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /***/

    },

    /***/
    "6y+t":
    /*!*********************************!*\
      !*** ./src/app/utils/crypto.ts ***!
      \*********************************/

    /*! exports provided: sha256WithBlob */

    /***/
    function yT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sha256WithBlob", function () {
        return sha256WithBlob;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _encoding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./encoding */
      "PXhR");

      function sha256WithBlob(blob) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
          var digested;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.t0 = crypto.subtle;
                  _context7.next = 3;
                  return blob.arrayBuffer();

                case 3:
                  _context7.t1 = _context7.sent;
                  _context7.next = 6;
                  return _context7.t0.digest.call(_context7.t0, 'SHA-256', _context7.t1);

                case 6:
                  digested = _context7.sent;
                  return _context7.abrupt("return", Object(_encoding__WEBPACK_IMPORTED_MODULE_1__["arrayBufferToHex"])(digested));

                case 8:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));
      }
      /***/

    },

    /***/
    "7fvk":
    /*!********************************************!*\
      !*** ./src/app/features/home/home.page.ts ***!
      \********************************************/

    /*! exports provided: HomePage */

    /***/
    function fvk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _utils_rx_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../utils/rx-operators */
      "KJy6");
      /* harmony import */


      var _camera_camera_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./camera/camera.component */
      "fIW9");
      /* harmony import */


      var _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./settings/settings.component */
      "k0O3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_moment_moment_repository_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../shared/moment/moment-repository.service */
      "BJdS");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _moment_thumbnail_moment_thumbnail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./moment-thumbnail/moment-thumbnail.component */
      "lK9d");
      /* harmony import */


      var _ngrx_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngrx/component */
      "9A8T");

      function HomePage_ion_col_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-col", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-moment-thumbnail", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var moment_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("moment", moment_r1);
        }
      }

      var HomePage = /*@__PURE__*/function () {
        var HomePage = /*#__PURE__*/function () {
          function HomePage(popoverController, modalController, momentRepository) {
            var _this6 = this;

            _classCallCheck(this, HomePage);

            this.popoverController = popoverController;
            this.modalController = modalController;
            this.momentRepository = momentRepository;
            this.moments$ = this.momentRepository.all$;
            this._ionContent$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
            this.ionContent$ = this._ionContent$.pipe(Object(_utils_rx_operators__WEBPACK_IMPORTED_MODULE_4__["isNonNullable"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
            this._scrollEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            this.scrollEvent$ = this._scrollEvent$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
            this.noFooterBorder$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this.ionContent$, this.scrollEvent$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_ref3) {
              var _ref4 = _slicedToArray2(_ref3, 1),
                  ionContent = _ref4[0];

              return _this6.detectBottom(ionContent);
            }));
          }

          _createClass(HomePage, [{
            key: "ionContent",
            set: function set(value) {
              this._ionContent$.next(value);
            }
          }, {
            key: "onScroll",
            value: function onScroll(event) {
              this._scrollEvent$.next(event);
            }
          }, {
            key: "detectBottom",
            value: function detectBottom(ionContent) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                var scrollElement;
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        _context8.next = 2;
                        return ionContent.getScrollElement();

                      case 2:
                        scrollElement = _context8.sent;
                        return _context8.abrupt("return", scrollElement.scrollTop === scrollElement.scrollHeight - scrollElement.clientHeight);

                      case 4:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8);
              }));
            }
          }, {
            key: "presentSettings",
            value: function presentSettings(event) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                var settingsPopover;
                return regeneratorRuntime.wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        _context9.next = 2;
                        return this.popoverController.create({
                          component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"],
                          event: event
                        });

                      case 2:
                        settingsPopover = _context9.sent;
                        _context9.next = 5;
                        return settingsPopover.present();

                      case 5:
                        return _context9.abrupt("return", _context9.sent);

                      case 6:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee9, this);
              }));
            }
          }, {
            key: "presentCamera",
            value: function presentCamera() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                var cameraModal;
                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        _context10.next = 2;
                        return this.modalController.create({
                          component: _camera_camera_component__WEBPACK_IMPORTED_MODULE_5__["CameraComponent"]
                        });

                      case 2:
                        cameraModal = _context10.sent;
                        _context10.next = 5;
                        return cameraModal.present();

                      case 5:
                        return _context10.abrupt("return", _context10.sent);

                      case 6:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10, this);
              }));
            }
          }, {
            key: "trackMoment",
            value: function trackMoment(_, item) {
              return item.id;
            }
          }]);

          return HomePage;
        }();

        HomePage.ɵfac = function HomePage_Factory(t) {
          return new (t || HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_moment_moment_repository_service__WEBPACK_IMPORTED_MODULE_8__["MomentRepository"]));
        };

        HomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
          type: HomePage,
          selectors: [["app-home"]],
          viewQuery: function HomePage_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], 1);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.ionContent = _t.first);
            }
          },
          decls: 14,
          vars: 8,
          consts: [["scrollEvents", "", 3, "ionScroll"], ["size", "6", "size-sm", "4", "size-md", "3", "size-lg", "2", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["vertical", "bottom", "horizontal", "center", "slot", "fixed", "edge", ""], [3, "click"], ["name", "camera-outline"], ["slot", "primary"], ["slot", "secondary", 3, "click"], ["slot", "icon-only", "name", "settings-outline"], ["size", "6", "size-sm", "4", "size-md", "3", "size-lg", "2"], ["col", ""], [3, "moment"]],
          template: function HomePage_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-content", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ionScroll", function HomePage_Template_ion_content_ionScroll_0_listener($event) {
                return ctx.onScroll($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ion-grid");

              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "ion-row");

              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, HomePage_ion_col_3_Template, 3, 1, "ion-col", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "ngrxPush");

              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "ion-fab", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "ion-fab-button", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HomePage_Template_ion_fab_button_click_6_listener() {
                return ctx.presentCamera();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "ion-icon", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "ion-footer");

              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "ngrxPush");

              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "ion-toolbar");

              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "ion-buttons", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "ion-button", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HomePage_Template_ion_button_click_12_listener($event) {
                return ctx.presentSettings($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "ion-icon", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 4, ctx.moments$))("ngForTrackBy", ctx.trackMoment);

              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("ion-no-border", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 6, ctx.noFooterBorder$));
            }
          },
          directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonFabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _moment_thumbnail_moment_thumbnail_component__WEBPACK_IMPORTED_MODULE_10__["MomentThumbnailComponent"]],
          pipes: [_ngrx_component__WEBPACK_IMPORTED_MODULE_11__["PushPipe"]],
          styles: ["app-moment-thumbnail[_ngcontent-%COMP%] {\n  height: 150px;\n  border-radius: 4px;\n  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkNBQUE7QUFDRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1tb21lbnQtdGh1bWJuYWlsIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiByZ2JhKDk5LCA5OSwgOTksIDAuMikgMCAycHggOHB4IDA7XG59XG4iXX0= */"]
        });
        return HomePage;
      }();
      /***/

    },

    /***/
    "9A8T":
    /*!******************************************************************************!*\
      !*** ./node_modules/@ngrx/component/__ivy_ngcc__/fesm2015/ngrx-component.js ***!
      \******************************************************************************/

    /*! exports provided: LetDirective, PushPipe, ReactiveComponentModule */

    /***/
    function A8T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LetDirective", function () {
        return LetDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PushPipe", function () {
        return PushPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReactiveComponentModule", function () {
        return ReactiveComponentModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * @fileoverview added by tsickle
       * Generated from: src/core/cd-aware/cd-aware_creator.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @record
       * @template U
       */


      function CdAware() {}

      if (false) {}
      /**
       * class CdAware
       *
       * \@description
       * This abstract class holds all the shared logic for the push pipe and the let directive
       * responsible for change detection
       * If you extend this class you need to implement how the update of the rendered value happens.
       * Also custom behaviour is something you need to implement in the extending class
       * @template U
       * @param {?} cfg
       * @return {?}
       */


      function createCdAware(cfg) {
        /** @type {?} */
        var potentialObservablesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /** @type {?} */

        var observablesFromTemplate$ = potentialObservablesSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
        /** @type {?} */

        var rendering$ = observablesFromTemplate$.pipe( // Compose the observables from the template and the strategy
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(
        /**
        * @param {?} observable$
        * @return {?}
        */
        function (observable$) {
          // If the passed observable is:
          // - undefined - No value set
          // - null - null passed directly or no value set over `async` pipe
          if (observable$ == null) {
            // Update the value to render_creator with null/undefined
            cfg.updateViewContextObserver.next(
            /** @type {?} */
            observable$); // Render the view

            cfg.render(); // Stop further processing

            return rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
          }
          /** @type {?} */


          var ob$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(observable$) ?
          /** @type {?} */
          observable$ : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(observable$); // If a new Observable arrives, reset the value to render_creator
          // We do this because we don't know when the next value arrives and want to get rid of the old value

          cfg.resetContextObserver.next();
          cfg.render();
          return (
            /** @type {?} */
            ob$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(cfg.updateViewContextObserver), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(
            /**
            * @return {?}
            */
            function () {
              return cfg.render();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              return rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
            }))
          );
        }));
        return (
          /** @type {?} */
          {
            /**
             * @param {?} value
             * @return {?}
             */
            nextPotentialObservable: function nextPotentialObservable(value) {
              potentialObservablesSubject.next(value);
            },

            /**
             * @return {?}
             */
            subscribe: function subscribe() {
              return rendering$.subscribe();
            }
          }
        );
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: src/core/utils/has-zone.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * \@description
       *
       * Determines if the application uses `NgZone` or `NgNoopZone` as ngZone service instance.
       *
       * The function can be just imported and used everywhere.
       *
       * ```ts
       * import { hasZone } from `utils/has-zone`;
       *
       * console.log(hasZone());
       * ```
       * @param {?} z
       * @return {?}
       */


      function hasZone(z) {
        return z instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"];
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: src/core/cd-aware/creator_render.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @record
       */


      function RenderConfig() {}

      if (false) {}
      /**
       * @template T
       * @param {?} config
       * @return {?}
       */


      function createRender(config) {
        /**
         * @return {?}
         */
        function render() {
          if (hasZone(config.ngZone)) {
            config.cdRef.markForCheck();
          } else {
            config.cdRef.detectChanges();
          }
        }

        return render;
      }

      var PushPipe = /*@__PURE__*/function () {
        var PushPipe = /*#__PURE__*/function () {
          /**
           * @param {?} cdRef
           * @param {?} ngZone
           */
          function PushPipe(cdRef, ngZone) {
            var _this7 = this;

            _classCallCheck(this, PushPipe);

            this.resetContextObserver = {
              next:
              /**
              * @return {?}
              */
              function next() {
                return _this7.renderedValue = undefined;
              }
            };
            this.updateViewContextObserver = {
              next:
              /**
              * @param {?} value
              * @return {?}
              */
              function next(value) {
                return _this7.renderedValue = value;
              }
            };
            this.cdAware = createCdAware({
              render: createRender({
                cdRef: cdRef,
                ngZone: ngZone
              }),
              updateViewContextObserver: this.updateViewContextObserver,
              resetContextObserver: this.resetContextObserver
            });
            this.subscription = this.cdAware.subscribe();
          }
          /**
           * @template T
           * @param {?} potentialObservable
           * @return {?}
           */


          _createClass(PushPipe, [{
            key: "transform",
            value: function transform(potentialObservable) {
              this.cdAware.nextPotentialObservable(potentialObservable);
              return (
                /** @type {?} */
                this.renderedValue
              );
            }
            /**
             * @return {?}
             */

          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.subscription.unsubscribe();
            }
          }]);

          return PushPipe;
        }();

        PushPipe.ɵfac = function PushPipe_Factory(t) {
          return new (t || PushPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectPipeChangeDetectorRef"](), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
        };

        PushPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
          name: "ngrxPush",
          type: PushPipe,
          pure: false
        });
        return PushPipe;
      }();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: src/let/let.directive.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @record
       * @template T
       */


      function LetViewContext() {}

      if (false) {}

      var LetDirective = /*@__PURE__*/function () {
        var LetDirective = /*#__PURE__*/function () {
          /**
           * @param {?} cdRef
           * @param {?} ngZone
           * @param {?} templateRef
           * @param {?} viewContainerRef
           */
          function LetDirective(cdRef, ngZone, templateRef, viewContainerRef) {
            var _this8 = this;

            _classCallCheck(this, LetDirective);

            this.templateRef = templateRef;
            this.viewContainerRef = viewContainerRef;
            this.ViewContext = {
              $implicit: undefined,
              ngrxLet: undefined,
              $error: false,
              $complete: false
            };
            this.resetContextObserver = {
              next:
              /**
              * @return {?}
              */
              function next() {
                // if not initialized no need to set undefined
                if (_this8.embeddedView) {
                  _this8.ViewContext.$implicit = undefined;
                  _this8.ViewContext.ngrxLet = undefined;
                  _this8.ViewContext.$error = false;
                  _this8.ViewContext.$complete = false;
                }
              }
            };
            this.updateViewContextObserver = {
              next:
              /**
              * @param {?} value
              * @return {?}
              */
              function next(value) {
                // to have init lazy
                if (!_this8.embeddedView) {
                  _this8.createEmbeddedView();
                }

                _this8.ViewContext.$implicit = value;
                _this8.ViewContext.ngrxLet = value;
              },
              error:
              /**
              * @param {?} error
              * @return {?}
              */
              function error(_error) {
                // to have init lazy
                if (!_this8.embeddedView) {
                  _this8.createEmbeddedView();
                }

                _this8.ViewContext.$error = true;
              },
              complete:
              /**
              * @return {?}
              */
              function complete() {
                // to have init lazy
                if (!_this8.embeddedView) {
                  _this8.createEmbeddedView();
                }

                _this8.ViewContext.$complete = true;
              }
            };
            this.cdAware = createCdAware({
              render: createRender({
                cdRef: cdRef,
                ngZone: ngZone
              }),
              resetContextObserver: this.resetContextObserver,
              updateViewContextObserver: this.updateViewContextObserver
            });
            this.subscription = this.cdAware.subscribe();
          }
          /**
           * @template U
           * @param {?} dir
           * @param {?} ctx
           * @return {?}
           */


          _createClass(LetDirective, [{
            key: "ngrxLet",
            set:
            /**
             * @param {?} potentialObservable
             * @return {?}
             */
            function set(potentialObservable) {
              this.cdAware.nextPotentialObservable(potentialObservable);
            }
            /**
             * @return {?}
             */

          }, {
            key: "createEmbeddedView",
            value: function createEmbeddedView() {
              this.embeddedView = this.viewContainerRef.createEmbeddedView(this.templateRef, this.ViewContext);
            }
            /**
             * @return {?}
             */

          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.subscription.unsubscribe();
              this.viewContainerRef.clear();
            }
          }], [{
            key: "ngTemplateContextGuard",
            value: function ngTemplateContextGuard(dir, ctx) {
              return true;
            }
          }]);

          return LetDirective;
        }();

        LetDirective.ɵfac = function LetDirective_Factory(t) {
          return new (t || LetDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]));
        };

        LetDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: LetDirective,
          selectors: [["", "ngrxLet", ""]],
          inputs: {
            ngrxLet: "ngrxLet"
          }
        });
        return LetDirective;
      }();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: src/reactive-component.module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var DECLARATIONS = [LetDirective, PushPipe];
      /** @type {?} */

      var EXPORTS = [DECLARATIONS];

      var ReactiveComponentModule = /*@__PURE__*/function () {
        var ReactiveComponentModule = function ReactiveComponentModule() {
          _classCallCheck(this, ReactiveComponentModule);
        };

        ReactiveComponentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: ReactiveComponentModule
        });
        ReactiveComponentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function ReactiveComponentModule_Factory(t) {
            return new (t || ReactiveComponentModule)();
          }
        });
        return ReactiveComponentModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReactiveComponentModule, {
          declarations: [LetDirective, PushPipe],
          exports: [LetDirective, PushPipe]
        });
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: src/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: public_api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: ngrx-component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /***/

    },

    /***/
    "9GuR":
    /*!***********************************************************************!*\
      !*** ./node_modules/image-blob-reduce/dist/image-blob-reduce.esm.mjs ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function GuR(__webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*! image-blob-reduce 2.2.2 https://github.com/nodeca/image-blob-reduce @license MIT */


      var assign = function assign(to) {
        var from;

        for (var s = 1; s < arguments.length; s++) {
          from = Object(arguments[s]);

          for (var key in from) {
            if (Object.prototype.hasOwnProperty.call(from, key)) to[key] = from[key];
          }
        }

        return to;
      };

      function pick(from, props) {
        var to = {};
        props.forEach(function (key) {
          if (Object.prototype.hasOwnProperty.call(from, key)) to[key] = from[key];
        });
        return to;
      }

      function pick_pica_resize_options(from) {
        return pick(from, ['alpha', 'unsharpAmount', 'unsharpRadius', 'unsharpThreshold', 'cancelToken']);
      }

      var pick_1 = pick;
      var pick_pica_resize_options_1 = pick_pica_resize_options;
      var utils = {
        assign: assign,
        pick: pick_1,
        pick_pica_resize_options: pick_pica_resize_options_1
      };

      function createCommonjsModule(fn) {
        var module = {
          exports: {}
        };
        return fn(module, module.exports), module.exports;
      }

      function commonjsRequire(target) {
        throw new Error('Could not dynamically require "' + target + '". Please configure the dynamicRequireTargets option of @rollup/plugin-commonjs appropriately for this require call to behave properly.');
      }
      /*!
      
      pica
      https://github.com/nodeca/pica
      
      */


      var pica = createCommonjsModule(function (module, exports) {
        (function (f) {
          {
            module.exports = f();
          }
        })(function () {
          return function () {
            function r(e, n, t) {
              function o(i, f) {
                if (!n[i]) {
                  if (!e[i]) {
                    var c = "function" == typeof commonjsRequire && commonjsRequire;
                    if (!f && c) return c(i, !0);
                    if (u) return u(i, !0);
                    var a = new Error("Cannot find module '" + i + "'");
                    throw a.code = "MODULE_NOT_FOUND", a;
                  }

                  var p = n[i] = {
                    exports: {}
                  };
                  e[i][0].call(p.exports, function (r) {
                    var n = e[i][1][r];
                    return o(n || r);
                  }, p, p.exports, r, e, n, t);
                }

                return n[i].exports;
              }

              for (var u = "function" == typeof commonjsRequire && commonjsRequire, i = 0; i < t.length; i++) {
                o(t[i]);
              }

              return o;
            }

            return r;
          }()({
            1: [function (_dereq_, module, exports) {
              var inherits = _dereq_('inherits');

              var Multimath = _dereq_('multimath');

              var mm_unsharp_mask = _dereq_('multimath/lib/unsharp_mask');

              var mm_resize = _dereq_('./mm_resize');

              function MathLib(requested_features) {
                var __requested_features = requested_features || [];

                var features = {
                  js: __requested_features.indexOf('js') >= 0,
                  wasm: __requested_features.indexOf('wasm') >= 0
                };
                Multimath.call(this, features);
                this.features = {
                  js: features.js,
                  wasm: features.wasm && this.has_wasm()
                };
                this.use(mm_unsharp_mask);
                this.use(mm_resize);
              }

              inherits(MathLib, Multimath);

              MathLib.prototype.resizeAndUnsharp = function resizeAndUnsharp(options, cache) {
                var result = this.resize(options, cache);

                if (options.unsharpAmount) {
                  this.unsharp_mask(result, options.toWidth, options.toHeight, options.unsharpAmount, options.unsharpRadius, options.unsharpThreshold);
                }

                return result;
              };

              module.exports = MathLib;
            }, {
              "./mm_resize": 4,
              "inherits": 15,
              "multimath": 16,
              "multimath/lib/unsharp_mask": 19
            }],
            2: [function (_dereq_, module, exports) {
              //var FIXED_FRAC_BITS = 14;
              function clampTo8(i) {
                return i < 0 ? 0 : i > 255 ? 255 : i;
              } // Convolve image in horizontal directions and transpose output. In theory,
              // transpose allow:
              //
              // - use the same convolver for both passes (this fails due different
              //   types of input array and temporary buffer)
              // - making vertical pass by horisonltal lines inprove CPU cache use.
              //
              // But in real life this doesn't work :)
              //


              function convolveHorizontally(src, dest, srcW, srcH, destW, filters) {
                var r, g, b, a;
                var filterPtr, filterShift, filterSize;
                var srcPtr, srcY, destX, filterVal;
                var srcOffset = 0,
                    destOffset = 0; // For each row

                for (srcY = 0; srcY < srcH; srcY++) {
                  filterPtr = 0; // Apply precomputed filters to each destination row point

                  for (destX = 0; destX < destW; destX++) {
                    // Get the filter that determines the current output pixel.
                    filterShift = filters[filterPtr++];
                    filterSize = filters[filterPtr++];
                    srcPtr = srcOffset + filterShift * 4 | 0;
                    r = g = b = a = 0; // Apply the filter to the row to get the destination pixel r, g, b, a

                    for (; filterSize > 0; filterSize--) {
                      filterVal = filters[filterPtr++]; // Use reverse order to workaround deopts in old v8 (node v.10)
                      // Big thanks to @mraleph (Vyacheslav Egorov) for the tip.

                      a = a + filterVal * src[srcPtr + 3] | 0;
                      b = b + filterVal * src[srcPtr + 2] | 0;
                      g = g + filterVal * src[srcPtr + 1] | 0;
                      r = r + filterVal * src[srcPtr] | 0;
                      srcPtr = srcPtr + 4 | 0;
                    } // Bring this value back in range. All of the filter scaling factors
                    // are in fixed point with FIXED_FRAC_BITS bits of fractional part.
                    //
                    // (!) Add 1/2 of value before clamping to get proper rounding. In other
                    // case brightness loss will be noticeable if you resize image with white
                    // border and place it on white background.
                    //


                    dest[destOffset + 3] = clampTo8(a + (1 << 13) >> 14
                    /*FIXED_FRAC_BITS*/
                    );
                    dest[destOffset + 2] = clampTo8(b + (1 << 13) >> 14
                    /*FIXED_FRAC_BITS*/
                    );
                    dest[destOffset + 1] = clampTo8(g + (1 << 13) >> 14
                    /*FIXED_FRAC_BITS*/
                    );
                    dest[destOffset] = clampTo8(r + (1 << 13) >> 14
                    /*FIXED_FRAC_BITS*/
                    );
                    destOffset = destOffset + srcH * 4 | 0;
                  }

                  destOffset = (srcY + 1) * 4 | 0;
                  srcOffset = (srcY + 1) * srcW * 4 | 0;
                }
              } // Technically, convolvers are the same. But input array and temporary
              // buffer can be of different type (especially, in old browsers). So,
              // keep code in separate functions to avoid deoptimizations & speed loss.


              function convolveVertically(src, dest, srcW, srcH, destW, filters) {
                var r, g, b, a;
                var filterPtr, filterShift, filterSize;
                var srcPtr, srcY, destX, filterVal;
                var srcOffset = 0,
                    destOffset = 0; // For each row

                for (srcY = 0; srcY < srcH; srcY++) {
                  filterPtr = 0; // Apply precomputed filters to each destination row point

                  for (destX = 0; destX < destW; destX++) {
                    // Get the filter that determines the current output pixel.
                    filterShift = filters[filterPtr++];
                    filterSize = filters[filterPtr++];
                    srcPtr = srcOffset + filterShift * 4 | 0;
                    r = g = b = a = 0; // Apply the filter to the row to get the destination pixel r, g, b, a

                    for (; filterSize > 0; filterSize--) {
                      filterVal = filters[filterPtr++]; // Use reverse order to workaround deopts in old v8 (node v.10)
                      // Big thanks to @mraleph (Vyacheslav Egorov) for the tip.

                      a = a + filterVal * src[srcPtr + 3] | 0;
                      b = b + filterVal * src[srcPtr + 2] | 0;
                      g = g + filterVal * src[srcPtr + 1] | 0;
                      r = r + filterVal * src[srcPtr] | 0;
                      srcPtr = srcPtr + 4 | 0;
                    } // Bring this value back in range. All of the filter scaling factors
                    // are in fixed point with FIXED_FRAC_BITS bits of fractional part.
                    //
                    // (!) Add 1/2 of value before clamping to get proper rounding. In other
                    // case brightness loss will be noticeable if you resize image with white
                    // border and place it on white background.
                    //


                    dest[destOffset + 3] = clampTo8(a + (1 << 13) >> 14
                    /*FIXED_FRAC_BITS*/
                    );
                    dest[destOffset + 2] = clampTo8(b + (1 << 13) >> 14
                    /*FIXED_FRAC_BITS*/
                    );
                    dest[destOffset + 1] = clampTo8(g + (1 << 13) >> 14
                    /*FIXED_FRAC_BITS*/
                    );
                    dest[destOffset] = clampTo8(r + (1 << 13) >> 14
                    /*FIXED_FRAC_BITS*/
                    );
                    destOffset = destOffset + srcH * 4 | 0;
                  }

                  destOffset = (srcY + 1) * 4 | 0;
                  srcOffset = (srcY + 1) * srcW * 4 | 0;
                }
              }

              module.exports = {
                convolveHorizontally: convolveHorizontally,
                convolveVertically: convolveVertically
              };
            }, {}],
            3: [function (_dereq_, module, exports) {
              /* eslint-disable max-len */
              module.exports = 'AGFzbQEAAAABFAJgBn9/f39/fwBgB39/f39/f38AAg8BA2VudgZtZW1vcnkCAAEDAwIAAQQEAXAAAAcZAghjb252b2x2ZQAACmNvbnZvbHZlSFYAAQkBAArmAwLBAwEQfwJAIANFDQAgBEUNACAFQQRqIRVBACEMQQAhDQNAIA0hDkEAIRFBACEHA0AgB0ECaiESAn8gBSAHQQF0IgdqIgZBAmouAQAiEwRAQQAhCEEAIBNrIRQgFSAHaiEPIAAgDCAGLgEAakECdGohEEEAIQlBACEKQQAhCwNAIBAoAgAiB0EYdiAPLgEAIgZsIAtqIQsgB0H/AXEgBmwgCGohCCAHQRB2Qf8BcSAGbCAKaiEKIAdBCHZB/wFxIAZsIAlqIQkgD0ECaiEPIBBBBGohECAUQQFqIhQNAAsgEiATagwBC0EAIQtBACEKQQAhCUEAIQggEgshByABIA5BAnRqIApBgMAAakEOdSIGQf8BIAZB/wFIG0EQdEGAgPwHcUEAIAZBAEobIAtBgMAAakEOdSIGQf8BIAZB/wFIG0EYdEEAIAZBAEobciAJQYDAAGpBDnUiBkH/ASAGQf8BSBtBCHRBgP4DcUEAIAZBAEobciAIQYDAAGpBDnUiBkH/ASAGQf8BSBtB/wFxQQAgBkEAShtyNgIAIA4gA2ohDiARQQFqIhEgBEcNAAsgDCACaiEMIA1BAWoiDSADRw0ACwsLIQACQEEAIAIgAyAEIAUgABAAIAJBACAEIAUgBiABEAALCw==';
            }, {}],
            4: [function (_dereq_, module, exports) {
              module.exports = {
                name: 'resize',
                fn: _dereq_('./resize'),
                wasm_fn: _dereq_('./resize_wasm'),
                wasm_src: _dereq_('./convolve_wasm_base64')
              };
            }, {
              "./convolve_wasm_base64": 3,
              "./resize": 5,
              "./resize_wasm": 8
            }],
            5: [function (_dereq_, module, exports) {
              var createFilters = _dereq_('./resize_filter_gen');

              var convolveHorizontally = _dereq_('./convolve').convolveHorizontally;

              var convolveVertically = _dereq_('./convolve').convolveVertically;

              function resetAlpha(dst, width, height) {
                var ptr = 3,
                    len = width * height * 4 | 0;

                while (ptr < len) {
                  dst[ptr] = 0xFF;
                  ptr = ptr + 4 | 0;
                }
              }

              module.exports = function resize(options) {
                var src = options.src;
                var srcW = options.width;
                var srcH = options.height;
                var destW = options.toWidth;
                var destH = options.toHeight;
                var scaleX = options.scaleX || options.toWidth / options.width;
                var scaleY = options.scaleY || options.toHeight / options.height;
                var offsetX = options.offsetX || 0;
                var offsetY = options.offsetY || 0;
                var dest = options.dest || new Uint8Array(destW * destH * 4);
                var quality = typeof options.quality === 'undefined' ? 3 : options.quality;
                var alpha = options.alpha || false;
                var filtersX = createFilters(quality, srcW, destW, scaleX, offsetX),
                    filtersY = createFilters(quality, srcH, destH, scaleY, offsetY);
                var tmp = new Uint8Array(destW * srcH * 4); // To use single function we need src & tmp of the same type.
                // But src can be CanvasPixelArray, and tmp - Uint8Array. So, keep
                // vertical and horizontal passes separately to avoid deoptimization.

                convolveHorizontally(src, tmp, srcW, srcH, destW, filtersX);
                convolveVertically(tmp, dest, srcH, destW, destH, filtersY); // That's faster than doing checks in convolver.
                // !!! Note, canvas data is not premultipled. We don't need other
                // alpha corrections.

                if (!alpha) resetAlpha(dest, destW, destH);
                return dest;
              };
            }, {
              "./convolve": 2,
              "./resize_filter_gen": 6
            }],
            6: [function (_dereq_, module, exports) {
              var FILTER_INFO = _dereq_('./resize_filter_info'); // Precision of fixed FP values


              var FIXED_FRAC_BITS = 14;

              function toFixedPoint(num) {
                return Math.round(num * ((1 << FIXED_FRAC_BITS) - 1));
              }

              module.exports = function resizeFilterGen(quality, srcSize, destSize, scale, offset) {
                var filterFunction = FILTER_INFO[quality].filter;
                var scaleInverted = 1.0 / scale;
                var scaleClamped = Math.min(1.0, scale); // For upscale
                // Filter window (averaging interval), scaled to src image

                var srcWindow = FILTER_INFO[quality].win / scaleClamped;
                var destPixel, srcPixel, srcFirst, srcLast, filterElementSize, floatFilter, fxpFilter, total, pxl, idx, floatVal, filterTotal, filterVal;
                var leftNotEmpty, rightNotEmpty, filterShift, filterSize;
                var maxFilterElementSize = Math.floor((srcWindow + 1) * 2);
                var packedFilter = new Int16Array((maxFilterElementSize + 2) * destSize);
                var packedFilterPtr = 0;
                var slowCopy = !packedFilter.subarray || !packedFilter.set; // For each destination pixel calculate source range and built filter values

                for (destPixel = 0; destPixel < destSize; destPixel++) {
                  // Scaling should be done relative to central pixel point
                  srcPixel = (destPixel + 0.5) * scaleInverted + offset;
                  srcFirst = Math.max(0, Math.floor(srcPixel - srcWindow));
                  srcLast = Math.min(srcSize - 1, Math.ceil(srcPixel + srcWindow));
                  filterElementSize = srcLast - srcFirst + 1;
                  floatFilter = new Float32Array(filterElementSize);
                  fxpFilter = new Int16Array(filterElementSize);
                  total = 0.0; // Fill filter values for calculated range

                  for (pxl = srcFirst, idx = 0; pxl <= srcLast; pxl++, idx++) {
                    floatVal = filterFunction((pxl + 0.5 - srcPixel) * scaleClamped);
                    total += floatVal;
                    floatFilter[idx] = floatVal;
                  } // Normalize filter, convert to fixed point and accumulate conversion error


                  filterTotal = 0;

                  for (idx = 0; idx < floatFilter.length; idx++) {
                    filterVal = floatFilter[idx] / total;
                    filterTotal += filterVal;
                    fxpFilter[idx] = toFixedPoint(filterVal);
                  } // Compensate normalization error, to minimize brightness drift


                  fxpFilter[destSize >> 1] += toFixedPoint(1.0 - filterTotal); //
                  // Now pack filter to useable form
                  //
                  // 1. Trim heading and tailing zero values, and compensate shitf/length
                  // 2. Put all to single array in this format:
                  //
                  //    [ pos shift, data length, value1, value2, value3, ... ]
                  //

                  leftNotEmpty = 0;

                  while (leftNotEmpty < fxpFilter.length && fxpFilter[leftNotEmpty] === 0) {
                    leftNotEmpty++;
                  }

                  if (leftNotEmpty < fxpFilter.length) {
                    rightNotEmpty = fxpFilter.length - 1;

                    while (rightNotEmpty > 0 && fxpFilter[rightNotEmpty] === 0) {
                      rightNotEmpty--;
                    }

                    filterShift = srcFirst + leftNotEmpty;
                    filterSize = rightNotEmpty - leftNotEmpty + 1;
                    packedFilter[packedFilterPtr++] = filterShift; // shift

                    packedFilter[packedFilterPtr++] = filterSize; // size

                    if (!slowCopy) {
                      packedFilter.set(fxpFilter.subarray(leftNotEmpty, rightNotEmpty + 1), packedFilterPtr);
                      packedFilterPtr += filterSize;
                    } else {
                      // fallback for old IE < 11, without subarray/set methods
                      for (idx = leftNotEmpty; idx <= rightNotEmpty; idx++) {
                        packedFilter[packedFilterPtr++] = fxpFilter[idx];
                      }
                    }
                  } else {
                    // zero data, write header only
                    packedFilter[packedFilterPtr++] = 0; // shift

                    packedFilter[packedFilterPtr++] = 0; // size
                  }
                }

                return packedFilter;
              };
            }, {
              "./resize_filter_info": 7
            }],
            7: [function (_dereq_, module, exports) {
              module.exports = [{
                // Nearest neibor (Box)
                win: 0.5,
                filter: function filter(x) {
                  return x >= -0.5 && x < 0.5 ? 1.0 : 0.0;
                }
              }, {
                // Hamming
                win: 1.0,
                filter: function filter(x) {
                  if (x <= -1.0 || x >= 1.0) {
                    return 0.0;
                  }

                  if (x > -1.19209290E-07 && x < 1.19209290E-07) {
                    return 1.0;
                  }

                  var xpi = x * Math.PI;
                  return Math.sin(xpi) / xpi * (0.54 + 0.46 * Math.cos(xpi / 1.0));
                }
              }, {
                // Lanczos, win = 2
                win: 2.0,
                filter: function filter(x) {
                  if (x <= -2.0 || x >= 2.0) {
                    return 0.0;
                  }

                  if (x > -1.19209290E-07 && x < 1.19209290E-07) {
                    return 1.0;
                  }

                  var xpi = x * Math.PI;
                  return Math.sin(xpi) / xpi * Math.sin(xpi / 2.0) / (xpi / 2.0);
                }
              }, {
                // Lanczos, win = 3
                win: 3.0,
                filter: function filter(x) {
                  if (x <= -3.0 || x >= 3.0) {
                    return 0.0;
                  }

                  if (x > -1.19209290E-07 && x < 1.19209290E-07) {
                    return 1.0;
                  }

                  var xpi = x * Math.PI;
                  return Math.sin(xpi) / xpi * Math.sin(xpi / 3.0) / (xpi / 3.0);
                }
              }];
            }, {}],
            8: [function (_dereq_, module, exports) {
              var createFilters = _dereq_('./resize_filter_gen');

              function resetAlpha(dst, width, height) {
                var ptr = 3,
                    len = width * height * 4 | 0;

                while (ptr < len) {
                  dst[ptr] = 0xFF;
                  ptr = ptr + 4 | 0;
                }
              }

              function asUint8Array(src) {
                return new Uint8Array(src.buffer, 0, src.byteLength);
              }

              var IS_LE = true; // should not crash everything on module load in old browsers

              try {
                IS_LE = new Uint32Array(new Uint8Array([1, 0, 0, 0]).buffer)[0] === 1;
              } catch (__) {}

              function copyInt16asLE(src, target, target_offset) {
                if (IS_LE) {
                  target.set(asUint8Array(src), target_offset);
                  return;
                }

                for (var ptr = target_offset, i = 0; i < src.length; i++) {
                  var data = src[i];
                  target[ptr++] = data & 0xFF;
                  target[ptr++] = data >> 8 & 0xFF;
                }
              }

              module.exports = function resize_wasm(options) {
                var src = options.src;
                var srcW = options.width;
                var srcH = options.height;
                var destW = options.toWidth;
                var destH = options.toHeight;
                var scaleX = options.scaleX || options.toWidth / options.width;
                var scaleY = options.scaleY || options.toHeight / options.height;
                var offsetX = options.offsetX || 0.0;
                var offsetY = options.offsetY || 0.0;
                var dest = options.dest || new Uint8Array(destW * destH * 4);
                var quality = typeof options.quality === 'undefined' ? 3 : options.quality;
                var alpha = options.alpha || false;
                var filtersX = createFilters(quality, srcW, destW, scaleX, offsetX),
                    filtersY = createFilters(quality, srcH, destH, scaleY, offsetY); // destination is 0 too.

                var src_offset = 0; // buffer between convolve passes

                var tmp_offset = this.__align(src_offset + Math.max(src.byteLength, dest.byteLength));

                var filtersX_offset = this.__align(tmp_offset + srcH * destW * 4);

                var filtersY_offset = this.__align(filtersX_offset + filtersX.byteLength);

                var alloc_bytes = filtersY_offset + filtersY.byteLength;

                var instance = this.__instance('resize', alloc_bytes); //
                // Fill memory block with data to process
                //


                var mem = new Uint8Array(this.__memory.buffer);
                var mem32 = new Uint32Array(this.__memory.buffer); // 32-bit copy is much faster in chrome

                var src32 = new Uint32Array(src.buffer);
                mem32.set(src32); // We should guarantee LE bytes order. Filters are not big, so
                // speed difference is not significant vs direct .set()

                copyInt16asLE(filtersX, mem, filtersX_offset);
                copyInt16asLE(filtersY, mem, filtersY_offset); //
                // Now call webassembly method
                // emsdk does method names with '_'

                var fn = instance.exports.convolveHV || instance.exports._convolveHV;
                fn(filtersX_offset, filtersY_offset, tmp_offset, srcW, srcH, destW, destH); //
                // Copy data back to typed array
                //
                // 32-bit copy is much faster in chrome

                var dest32 = new Uint32Array(dest.buffer);
                dest32.set(new Uint32Array(this.__memory.buffer, 0, destH * destW)); // That's faster than doing checks in convolver.
                // !!! Note, canvas data is not premultipled. We don't need other
                // alpha corrections.

                if (!alpha) resetAlpha(dest, destW, destH);
                return dest;
              };
            }, {
              "./resize_filter_gen": 6
            }],
            9: [function (_dereq_, module, exports) {
              var GC_INTERVAL = 100;

              function Pool(create, idle) {
                this.create = create;
                this.available = [];
                this.acquired = {};
                this.lastId = 1;
                this.timeoutId = 0;
                this.idle = idle || 2000;
              }

              Pool.prototype.acquire = function () {
                var _this = this;

                var resource;

                if (this.available.length !== 0) {
                  resource = this.available.pop();
                } else {
                  resource = this.create();
                  resource.id = this.lastId++;

                  resource.release = function () {
                    return _this.release(resource);
                  };
                }

                this.acquired[resource.id] = resource;
                return resource;
              };

              Pool.prototype.release = function (resource) {
                var _this2 = this;

                delete this.acquired[resource.id];
                resource.lastUsed = Date.now();
                this.available.push(resource);

                if (this.timeoutId === 0) {
                  this.timeoutId = setTimeout(function () {
                    return _this2.gc();
                  }, GC_INTERVAL);
                }
              };

              Pool.prototype.gc = function () {
                var _this3 = this;

                var now = Date.now();
                this.available = this.available.filter(function (resource) {
                  if (now - resource.lastUsed > _this3.idle) {
                    resource.destroy();
                    return false;
                  }

                  return true;
                });

                if (this.available.length !== 0) {
                  this.timeoutId = setTimeout(function () {
                    return _this3.gc();
                  }, GC_INTERVAL);
                } else {
                  this.timeoutId = 0;
                }
              };

              module.exports = Pool;
            }, {}],
            10: [function (_dereq_, module, exports) {
              // min size = 1 can consume large amount of memory
              var MIN_INNER_TILE_SIZE = 2;

              module.exports = function createStages(fromWidth, fromHeight, toWidth, toHeight, srcTileSize, destTileBorder) {
                var scaleX = toWidth / fromWidth;
                var scaleY = toHeight / fromHeight; // derived from createRegions equation:
                // innerTileWidth = pixelFloor(srcTileSize * scaleX) - 2 * destTileBorder;

                var minScale = (2 * destTileBorder + MIN_INNER_TILE_SIZE + 1) / srcTileSize; // refuse to scale image multiple times by less than twice each time,
                // it could only happen because of invalid options

                if (minScale > 0.5) return [[toWidth, toHeight]];
                var stageCount = Math.ceil(Math.log(Math.min(scaleX, scaleY)) / Math.log(minScale)); // no additional resizes are necessary,
                // stageCount can be zero or be negative when enlarging the image

                if (stageCount <= 1) return [[toWidth, toHeight]];
                var result = [];

                for (var i = 0; i < stageCount; i++) {
                  var width = Math.round(Math.pow(Math.pow(fromWidth, stageCount - i - 1) * Math.pow(toWidth, i + 1), 1 / stageCount));
                  var height = Math.round(Math.pow(Math.pow(fromHeight, stageCount - i - 1) * Math.pow(toHeight, i + 1), 1 / stageCount));
                  result.push([width, height]);
                }

                return result;
              };
            }, {}],
            11: [function (_dereq_, module, exports) {
              /*
               * pixelFloor and pixelCeil are modified versions of Math.floor and Math.ceil
               * functions which take into account floating point arithmetic errors.
               * Those errors can cause undesired increments/decrements of sizes and offsets:
               * Math.ceil(36 / (36 / 500)) = 501
               * pixelCeil(36 / (36 / 500)) = 500
               */
              var PIXEL_EPSILON = 1e-5;

              function pixelFloor(x) {
                var nearest = Math.round(x);

                if (Math.abs(x - nearest) < PIXEL_EPSILON) {
                  return nearest;
                }

                return Math.floor(x);
              }

              function pixelCeil(x) {
                var nearest = Math.round(x);

                if (Math.abs(x - nearest) < PIXEL_EPSILON) {
                  return nearest;
                }

                return Math.ceil(x);
              }

              module.exports = function createRegions(options) {
                var scaleX = options.toWidth / options.width;
                var scaleY = options.toHeight / options.height;
                var innerTileWidth = pixelFloor(options.srcTileSize * scaleX) - 2 * options.destTileBorder;
                var innerTileHeight = pixelFloor(options.srcTileSize * scaleY) - 2 * options.destTileBorder; // prevent infinite loop, this should never happen

                if (innerTileWidth < 1 || innerTileHeight < 1) {
                  throw new Error('Internal error in pica: target tile width/height is too small.');
                }

                var x, y;
                var innerX, innerY, toTileWidth, toTileHeight;
                var tiles = [];
                var tile; // we go top-to-down instead of left-to-right to make image displayed from top to
                // doesn in the browser

                for (innerY = 0; innerY < options.toHeight; innerY += innerTileHeight) {
                  for (innerX = 0; innerX < options.toWidth; innerX += innerTileWidth) {
                    x = innerX - options.destTileBorder;

                    if (x < 0) {
                      x = 0;
                    }

                    toTileWidth = innerX + innerTileWidth + options.destTileBorder - x;

                    if (x + toTileWidth >= options.toWidth) {
                      toTileWidth = options.toWidth - x;
                    }

                    y = innerY - options.destTileBorder;

                    if (y < 0) {
                      y = 0;
                    }

                    toTileHeight = innerY + innerTileHeight + options.destTileBorder - y;

                    if (y + toTileHeight >= options.toHeight) {
                      toTileHeight = options.toHeight - y;
                    }

                    tile = {
                      toX: x,
                      toY: y,
                      toWidth: toTileWidth,
                      toHeight: toTileHeight,
                      toInnerX: innerX,
                      toInnerY: innerY,
                      toInnerWidth: innerTileWidth,
                      toInnerHeight: innerTileHeight,
                      offsetX: x / scaleX - pixelFloor(x / scaleX),
                      offsetY: y / scaleY - pixelFloor(y / scaleY),
                      scaleX: scaleX,
                      scaleY: scaleY,
                      x: pixelFloor(x / scaleX),
                      y: pixelFloor(y / scaleY),
                      width: pixelCeil(toTileWidth / scaleX),
                      height: pixelCeil(toTileHeight / scaleY)
                    };
                    tiles.push(tile);
                  }
                }

                return tiles;
              };
            }, {}],
            12: [function (_dereq_, module, exports) {
              function objClass(obj) {
                return Object.prototype.toString.call(obj);
              }

              module.exports.isCanvas = function isCanvas(element) {
                var cname = objClass(element);
                return cname === '[object HTMLCanvasElement]'
                /* browser */
                || cname === '[object OffscreenCanvas]' || cname === '[object Canvas]'
                /* node-canvas */
                ;
              };

              module.exports.isImage = function isImage(element) {
                return objClass(element) === '[object HTMLImageElement]';
              };

              module.exports.isImageBitmap = function isImageBitmap(element) {
                return objClass(element) === '[object ImageBitmap]';
              };

              module.exports.limiter = function limiter(concurrency) {
                var active = 0,
                    queue = [];

                function roll() {
                  if (active < concurrency && queue.length) {
                    active++;
                    queue.shift()();
                  }
                }

                return function limit(fn) {
                  return new Promise(function (resolve, reject) {
                    queue.push(function () {
                      fn().then(function (result) {
                        resolve(result);
                        active--;
                        roll();
                      }, function (err) {
                        reject(err);
                        active--;
                        roll();
                      });
                    });
                    roll();
                  });
                };
              };

              module.exports.cib_quality_name = function cib_quality_name(num) {
                switch (num) {
                  case 0:
                    return 'pixelated';

                  case 1:
                    return 'low';

                  case 2:
                    return 'medium';
                }

                return 'high';
              };

              module.exports.cib_support = function cib_support(createCanvas) {
                return Promise.resolve().then(function () {
                  if (typeof createImageBitmap === 'undefined') {
                    return false;
                  }

                  var c = createCanvas(100, 100);
                  return createImageBitmap(c, 0, 0, 100, 100, {
                    resizeWidth: 10,
                    resizeHeight: 10,
                    resizeQuality: 'high'
                  }).then(function (bitmap) {
                    var status = bitmap.width === 10; // Branch below is filtered on upper level. We do not call resize
                    // detection for basic ImageBitmap.
                    //
                    // https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmap
                    // old Crome 51 has ImageBitmap without .close(). Then this code
                    // will throw and return 'false' as expected.
                    //

                    bitmap.close();
                    c = null;
                    return status;
                  });
                })["catch"](function () {
                  return false;
                });
              };
            }, {}],
            13: [function (_dereq_, module, exports) {
              module.exports = function () {
                var MathLib = _dereq_('./mathlib');

                var mathLib;
                /* eslint-disable no-undef */

                onmessage = function onmessage(ev) {
                  var opts = ev.data.opts;
                  if (!mathLib) mathLib = new MathLib(ev.data.features); // Use multimath's sync auto-init. Avoid Promise use in old browsers,
                  // because polyfills are not propagated to webworker.

                  var result = mathLib.resizeAndUnsharp(opts);
                  postMessage({
                    result: result
                  }, [result.buffer]);
                };
              };
            }, {
              "./mathlib": 1
            }],
            14: [function (_dereq_, module, exports) {
              // Calculate Gaussian blur of an image using IIR filter
              // The method is taken from Intel's white paper and code example attached to it:
              // https://software.intel.com/en-us/articles/iir-gaussian-blur-filter
              // -implementation-using-intel-advanced-vector-extensions
              var a0, a1, a2, a3, b1, b2, left_corner, right_corner;

              function gaussCoef(sigma) {
                if (sigma < 0.5) {
                  sigma = 0.5;
                }

                var a = Math.exp(0.726 * 0.726) / sigma,
                    g1 = Math.exp(-a),
                    g2 = Math.exp(-2 * a),
                    k = (1 - g1) * (1 - g1) / (1 + 2 * a * g1 - g2);
                a0 = k;
                a1 = k * (a - 1) * g1;
                a2 = k * (a + 1) * g1;
                a3 = -k * g2;
                b1 = 2 * g1;
                b2 = -g2;
                left_corner = (a0 + a1) / (1 - b1 - b2);
                right_corner = (a2 + a3) / (1 - b1 - b2); // Attempt to force type to FP32.

                return new Float32Array([a0, a1, a2, a3, b1, b2, left_corner, right_corner]);
              }

              function convolveMono16(src, out, line, coeff, width, height) {
                // takes src image and writes the blurred and transposed result into out
                var prev_src, curr_src, curr_out, prev_out, prev_prev_out;
                var src_index, out_index, line_index;
                var i, j;
                var coeff_a0, coeff_a1, coeff_b1, coeff_b2;

                for (i = 0; i < height; i++) {
                  src_index = i * width;
                  out_index = i;
                  line_index = 0; // left to right

                  prev_src = src[src_index];
                  prev_prev_out = prev_src * coeff[6];
                  prev_out = prev_prev_out;
                  coeff_a0 = coeff[0];
                  coeff_a1 = coeff[1];
                  coeff_b1 = coeff[4];
                  coeff_b2 = coeff[5];

                  for (j = 0; j < width; j++) {
                    curr_src = src[src_index];
                    curr_out = curr_src * coeff_a0 + prev_src * coeff_a1 + prev_out * coeff_b1 + prev_prev_out * coeff_b2;
                    prev_prev_out = prev_out;
                    prev_out = curr_out;
                    prev_src = curr_src;
                    line[line_index] = prev_out;
                    line_index++;
                    src_index++;
                  }

                  src_index--;
                  line_index--;
                  out_index += height * (width - 1); // right to left

                  prev_src = src[src_index];
                  prev_prev_out = prev_src * coeff[7];
                  prev_out = prev_prev_out;
                  curr_src = prev_src;
                  coeff_a0 = coeff[2];
                  coeff_a1 = coeff[3];

                  for (j = width - 1; j >= 0; j--) {
                    curr_out = curr_src * coeff_a0 + prev_src * coeff_a1 + prev_out * coeff_b1 + prev_prev_out * coeff_b2;
                    prev_prev_out = prev_out;
                    prev_out = curr_out;
                    prev_src = curr_src;
                    curr_src = src[src_index];
                    out[out_index] = line[line_index] + prev_out;
                    src_index--;
                    line_index--;
                    out_index -= height;
                  }
                }
              }

              function blurMono16(src, width, height, radius) {
                // Quick exit on zero radius
                if (!radius) {
                  return;
                }

                var out = new Uint16Array(src.length),
                    tmp_line = new Float32Array(Math.max(width, height));
                var coeff = gaussCoef(radius);
                convolveMono16(src, out, tmp_line, coeff, width, height);
                convolveMono16(out, src, tmp_line, coeff, height, width);
              }

              module.exports = blurMono16;
            }, {}],
            15: [function (_dereq_, module, exports) {
              if (typeof Object.create === 'function') {
                // implementation from standard node.js 'util' module
                module.exports = function inherits(ctor, superCtor) {
                  if (superCtor) {
                    ctor.super_ = superCtor;
                    ctor.prototype = Object.create(superCtor.prototype, {
                      constructor: {
                        value: ctor,
                        enumerable: false,
                        writable: true,
                        configurable: true
                      }
                    });
                  }
                };
              } else {
                // old school shim for old browsers
                module.exports = function inherits(ctor, superCtor) {
                  if (superCtor) {
                    ctor.super_ = superCtor;

                    var TempCtor = function TempCtor() {};

                    TempCtor.prototype = superCtor.prototype;
                    ctor.prototype = new TempCtor();
                    ctor.prototype.constructor = ctor;
                  }
                };
              }
            }, {}],
            16: [function (_dereq_, module, exports) {
              var assign = _dereq_('object-assign');

              var base64decode = _dereq_('./lib/base64decode');

              var hasWebAssembly = _dereq_('./lib/wa_detect');

              var DEFAULT_OPTIONS = {
                js: true,
                wasm: true
              };

              function MultiMath(options) {
                if (!(this instanceof MultiMath)) return new MultiMath(options);
                var opts = assign({}, DEFAULT_OPTIONS, options || {});
                this.options = opts;
                this.__cache = {};
                this.__init_promise = null;
                this.__modules = opts.modules || {};
                this.__memory = null;
                this.__wasm = {};
                this.__isLE = new Uint32Array(new Uint8Array([1, 0, 0, 0]).buffer)[0] === 1;

                if (!this.options.js && !this.options.wasm) {
                  throw new Error('mathlib: at least "js" or "wasm" should be enabled');
                }
              }

              MultiMath.prototype.has_wasm = hasWebAssembly;

              MultiMath.prototype.use = function (module) {
                this.__modules[module.name] = module; // Pin the best possible implementation

                if (this.options.wasm && this.has_wasm() && module.wasm_fn) {
                  this[module.name] = module.wasm_fn;
                } else {
                  this[module.name] = module.fn;
                }

                return this;
              };

              MultiMath.prototype.init = function () {
                if (this.__init_promise) return this.__init_promise;

                if (!this.options.js && this.options.wasm && !this.has_wasm()) {
                  return Promise.reject(new Error('mathlib: only "wasm" was enabled, but it\'s not supported'));
                }

                var self = this;
                this.__init_promise = Promise.all(Object.keys(self.__modules).map(function (name) {
                  var module = self.__modules[name];
                  if (!self.options.wasm || !self.has_wasm() || !module.wasm_fn) return null; // If already compiled - exit

                  if (self.__wasm[name]) return null; // Compile wasm source

                  return WebAssembly.compile(self.__base64decode(module.wasm_src)).then(function (m) {
                    self.__wasm[name] = m;
                  });
                })).then(function () {
                  return self;
                });
                return this.__init_promise;
              }; ////////////////////////////////////////////////////////////////////////////////
              // Methods below are for internal use from plugins
              // Simple decode base64 to typed array. Useful to load embedded webassembly
              // code. You probably don't need to call this method directly.
              //


              MultiMath.prototype.__base64decode = base64decode; // Increase current memory to include specified number of bytes. Do nothing if
              // size is already ok. You probably don't need to call this method directly,
              // because it will be invoked from `.__instance()`.
              //

              MultiMath.prototype.__reallocate = function mem_grow_to(bytes) {
                if (!this.__memory) {
                  this.__memory = new WebAssembly.Memory({
                    initial: Math.ceil(bytes / (64 * 1024))
                  });
                  return this.__memory;
                }

                var mem_size = this.__memory.buffer.byteLength;

                if (mem_size < bytes) {
                  this.__memory.grow(Math.ceil((bytes - mem_size) / (64 * 1024)));
                }

                return this.__memory;
              }; // Returns instantinated webassembly item by name, with specified memory size
              // and environment.
              // - use cache if available
              // - do sync module init, if async init was not called earlier
              // - allocate memory if not enougth
              // - can export functions to webassembly via "env_extra",
              //   for example, { exp: Math.exp }
              //


              MultiMath.prototype.__instance = function instance(name, memsize, env_extra) {
                if (memsize) this.__reallocate(memsize); // If .init() was not called, do sync compile

                if (!this.__wasm[name]) {
                  var module = this.__modules[name];
                  this.__wasm[name] = new WebAssembly.Module(this.__base64decode(module.wasm_src));
                }

                if (!this.__cache[name]) {
                  var env_base = {
                    memoryBase: 0,
                    memory: this.__memory,
                    tableBase: 0,
                    table: new WebAssembly.Table({
                      initial: 0,
                      element: 'anyfunc'
                    })
                  };
                  this.__cache[name] = new WebAssembly.Instance(this.__wasm[name], {
                    env: assign(env_base, env_extra || {})
                  });
                }

                return this.__cache[name];
              }; // Helper to calculate memory aligh for pointers. Webassembly does not require
              // this, but you may wish to experiment. Default base = 8;
              //


              MultiMath.prototype.__align = function align(number, base) {
                base = base || 8;
                var reminder = number % base;
                return number + (reminder ? base - reminder : 0);
              };

              module.exports = MultiMath;
            }, {
              "./lib/base64decode": 17,
              "./lib/wa_detect": 23,
              "object-assign": 24
            }],
            17: [function (_dereq_, module, exports) {
              var BASE64_MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

              module.exports = function base64decode(str) {
                var input = str.replace(/[\r\n=]/g, ''),
                    // remove CR/LF & padding to simplify scan
                max = input.length;
                var out = new Uint8Array(max * 3 >> 2); // Collect by 6*4 bits (3 bytes)

                var bits = 0;
                var ptr = 0;

                for (var idx = 0; idx < max; idx++) {
                  if (idx % 4 === 0 && idx) {
                    out[ptr++] = bits >> 16 & 0xFF;
                    out[ptr++] = bits >> 8 & 0xFF;
                    out[ptr++] = bits & 0xFF;
                  }

                  bits = bits << 6 | BASE64_MAP.indexOf(input.charAt(idx));
                } // Dump tail


                var tailbits = max % 4 * 6;

                if (tailbits === 0) {
                  out[ptr++] = bits >> 16 & 0xFF;
                  out[ptr++] = bits >> 8 & 0xFF;
                  out[ptr++] = bits & 0xFF;
                } else if (tailbits === 18) {
                  out[ptr++] = bits >> 10 & 0xFF;
                  out[ptr++] = bits >> 2 & 0xFF;
                } else if (tailbits === 12) {
                  out[ptr++] = bits >> 4 & 0xFF;
                }

                return out;
              };
            }, {}],
            18: [function (_dereq_, module, exports) {
              module.exports = function hsl_l16_js(img, width, height) {
                var size = width * height;
                var out = new Uint16Array(size);
                var r, g, b, min, max;

                for (var i = 0; i < size; i++) {
                  r = img[4 * i];
                  g = img[4 * i + 1];
                  b = img[4 * i + 2];
                  max = r >= g && r >= b ? r : g >= b && g >= r ? g : b;
                  min = r <= g && r <= b ? r : g <= b && g <= r ? g : b;
                  out[i] = (max + min) * 257 >> 1;
                }

                return out;
              };
            }, {}],
            19: [function (_dereq_, module, exports) {
              module.exports = {
                name: 'unsharp_mask',
                fn: _dereq_('./unsharp_mask'),
                wasm_fn: _dereq_('./unsharp_mask_wasm'),
                wasm_src: _dereq_('./unsharp_mask_wasm_base64')
              };
            }, {
              "./unsharp_mask": 20,
              "./unsharp_mask_wasm": 21,
              "./unsharp_mask_wasm_base64": 22
            }],
            20: [function (_dereq_, module, exports) {
              var glur_mono16 = _dereq_('glur/mono16');

              var hsl_l16 = _dereq_('./hsl_l16');

              module.exports = function unsharp(img, width, height, amount, radius, threshold) {
                var r, g, b;
                var h, s, l;
                var min, max;
                var m1, m2, hShifted;
                var diff, iTimes4;

                if (amount === 0 || radius < 0.5) {
                  return;
                }

                if (radius > 2.0) {
                  radius = 2.0;
                }

                var lightness = hsl_l16(img, width, height);
                var blured = new Uint16Array(lightness); // copy, because blur modify src

                glur_mono16(blured, width, height, radius);
                var amountFp = amount / 100 * 0x1000 + 0.5 | 0;
                var thresholdFp = threshold * 257 | 0;
                var size = width * height;
                /* eslint-disable indent */

                for (var i = 0; i < size; i++) {
                  diff = 2 * (lightness[i] - blured[i]);

                  if (Math.abs(diff) >= thresholdFp) {
                    iTimes4 = i * 4;
                    r = img[iTimes4];
                    g = img[iTimes4 + 1];
                    b = img[iTimes4 + 2]; // convert RGB to HSL
                    // take RGB, 8-bit unsigned integer per each channel
                    // save HSL, H and L are 16-bit unsigned integers, S is 12-bit unsigned integer
                    // math is taken from here: http://www.easyrgb.com/index.php?X=MATH&H=18
                    // and adopted to be integer (fixed point in fact) for sake of performance

                    max = r >= g && r >= b ? r : g >= r && g >= b ? g : b; // min and max are in [0..0xff]

                    min = r <= g && r <= b ? r : g <= r && g <= b ? g : b;
                    l = (max + min) * 257 >> 1; // l is in [0..0xffff] that is caused by multiplication by 257

                    if (min === max) {
                      h = s = 0;
                    } else {
                      s = l <= 0x7fff ? (max - min) * 0xfff / (max + min) | 0 : (max - min) * 0xfff / (2 * 0xff - max - min) | 0; // s is in [0..0xfff]
                      // h could be less 0, it will be fixed in backward conversion to RGB, |h| <= 0xffff / 6

                      h = r === max ? (g - b) * 0xffff / (6 * (max - min)) | 0 : g === max ? 0x5555 + ((b - r) * 0xffff / (6 * (max - min)) | 0) // 0x5555 == 0xffff / 3
                      : 0xaaaa + ((r - g) * 0xffff / (6 * (max - min)) | 0); // 0xaaaa == 0xffff * 2 / 3
                    } // add unsharp mask mask to the lightness channel


                    l += amountFp * diff + 0x800 >> 12;

                    if (l > 0xffff) {
                      l = 0xffff;
                    } else if (l < 0) {
                      l = 0;
                    } // convert HSL back to RGB
                    // for information about math look above


                    if (s === 0) {
                      r = g = b = l >> 8;
                    } else {
                      m2 = l <= 0x7fff ? l * (0x1000 + s) + 0x800 >> 12 : l + ((0xffff - l) * s + 0x800 >> 12);
                      m1 = 2 * l - m2 >> 8;
                      m2 >>= 8; // save result to RGB channels
                      // R channel

                      hShifted = h + 0x5555 & 0xffff; // 0x5555 == 0xffff / 3

                      r = hShifted >= 0xaaaa ? m1 // 0xaaaa == 0xffff * 2 / 3
                      : hShifted >= 0x7fff ? m1 + ((m2 - m1) * 6 * (0xaaaa - hShifted) + 0x8000 >> 16) : hShifted >= 0x2aaa ? m2 // 0x2aaa == 0xffff / 6
                      : m1 + ((m2 - m1) * 6 * hShifted + 0x8000 >> 16); // G channel

                      hShifted = h & 0xffff;
                      g = hShifted >= 0xaaaa ? m1 // 0xaaaa == 0xffff * 2 / 3
                      : hShifted >= 0x7fff ? m1 + ((m2 - m1) * 6 * (0xaaaa - hShifted) + 0x8000 >> 16) : hShifted >= 0x2aaa ? m2 // 0x2aaa == 0xffff / 6
                      : m1 + ((m2 - m1) * 6 * hShifted + 0x8000 >> 16); // B channel

                      hShifted = h - 0x5555 & 0xffff;
                      b = hShifted >= 0xaaaa ? m1 // 0xaaaa == 0xffff * 2 / 3
                      : hShifted >= 0x7fff ? m1 + ((m2 - m1) * 6 * (0xaaaa - hShifted) + 0x8000 >> 16) : hShifted >= 0x2aaa ? m2 // 0x2aaa == 0xffff / 6
                      : m1 + ((m2 - m1) * 6 * hShifted + 0x8000 >> 16);
                    }

                    img[iTimes4] = r;
                    img[iTimes4 + 1] = g;
                    img[iTimes4 + 2] = b;
                  }
                }
              };
            }, {
              "./hsl_l16": 18,
              "glur/mono16": 14
            }],
            21: [function (_dereq_, module, exports) {
              module.exports = function unsharp(img, width, height, amount, radius, threshold) {
                if (amount === 0 || radius < 0.5) {
                  return;
                }

                if (radius > 2.0) {
                  radius = 2.0;
                }

                var pixels = width * height;
                var img_bytes_cnt = pixels * 4;
                var hsl_bytes_cnt = pixels * 2;
                var blur_bytes_cnt = pixels * 2;
                var blur_line_byte_cnt = Math.max(width, height) * 4; // float32 array

                var blur_coeffs_byte_cnt = 8 * 4; // float32 array

                var img_offset = 0;
                var hsl_offset = img_bytes_cnt;
                var blur_offset = hsl_offset + hsl_bytes_cnt;
                var blur_tmp_offset = blur_offset + blur_bytes_cnt;
                var blur_line_offset = blur_tmp_offset + blur_bytes_cnt;
                var blur_coeffs_offset = blur_line_offset + blur_line_byte_cnt;

                var instance = this.__instance('unsharp_mask', img_bytes_cnt + hsl_bytes_cnt + blur_bytes_cnt * 2 + blur_line_byte_cnt + blur_coeffs_byte_cnt, {
                  exp: Math.exp
                }); // 32-bit copy is much faster in chrome


                var img32 = new Uint32Array(img.buffer);
                var mem32 = new Uint32Array(this.__memory.buffer);
                mem32.set(img32); // HSL

                var fn = instance.exports.hsl_l16 || instance.exports._hsl_l16;
                fn(img_offset, hsl_offset, width, height); // BLUR

                fn = instance.exports.blurMono16 || instance.exports._blurMono16;
                fn(hsl_offset, blur_offset, blur_tmp_offset, blur_line_offset, blur_coeffs_offset, width, height, radius); // UNSHARP

                fn = instance.exports.unsharp || instance.exports._unsharp;
                fn(img_offset, img_offset, hsl_offset, blur_offset, width, height, amount, threshold); // 32-bit copy is much faster in chrome

                img32.set(new Uint32Array(this.__memory.buffer, 0, pixels));
              };
            }, {}],
            22: [function (_dereq_, module, exports) {
              /* eslint-disable max-len */
              module.exports = 'AGFzbQEAAAABMQZgAXwBfGACfX8AYAZ/f39/f38AYAh/f39/f39/fQBgBH9/f38AYAh/f39/f39/fwACGQIDZW52A2V4cAAAA2VudgZtZW1vcnkCAAEDBgUBAgMEBQQEAXAAAAdMBRZfX2J1aWxkX2dhdXNzaWFuX2NvZWZzAAEOX19nYXVzczE2X2xpbmUAAgpibHVyTW9ubzE2AAMHaHNsX2wxNgAEB3Vuc2hhcnAABQkBAAqJEAXZAQEGfAJAIAFE24a6Q4Ia+z8gALujIgOaEAAiBCAEoCIGtjgCECABIANEAAAAAAAAAMCiEAAiBbaMOAIUIAFEAAAAAAAA8D8gBKEiAiACoiAEIAMgA6CiRAAAAAAAAPA/oCAFoaMiArY4AgAgASAEIANEAAAAAAAA8L+gIAKioiIHtjgCBCABIAQgA0QAAAAAAADwP6AgAqKiIgO2OAIIIAEgBSACoiIEtow4AgwgASACIAegIAVEAAAAAAAA8D8gBqGgIgKjtjgCGCABIAMgBKEgAqO2OAIcCwu3AwMDfwR9CHwCQCADKgIUIQkgAyoCECEKIAMqAgwhCyADKgIIIQwCQCAEQX9qIgdBAEgiCA0AIAIgAC8BALgiDSADKgIYu6IiDiAJuyIQoiAOIAq7IhGiIA0gAyoCBLsiEqIgAyoCALsiEyANoqCgoCIPtjgCACACQQRqIQIgAEECaiEAIAdFDQAgBCEGA0AgAiAOIBCiIA8iDiARoiANIBKiIBMgAC8BALgiDaKgoKAiD7Y4AgAgAkEEaiECIABBAmohACAGQX9qIgZBAUoNAAsLAkAgCA0AIAEgByAFbEEBdGogAEF+ai8BACIIuCINIAu7IhGiIA0gDLsiEqKgIA0gAyoCHLuiIg4gCrsiE6KgIA4gCbsiFKKgIg8gAkF8aioCALugqzsBACAHRQ0AIAJBeGohAiAAQXxqIQBBACAFQQF0ayEHIAEgBSAEQQF0QXxqbGohBgNAIAghAyAALwEAIQggBiANIBGiIAO4Ig0gEqKgIA8iECAToqAgDiAUoqAiDyACKgIAu6CrOwEAIAYgB2ohBiAAQX5qIQAgAkF8aiECIBAhDiAEQX9qIgRBAUoNAAsLCwvfAgIDfwZ8AkAgB0MAAAAAWw0AIARE24a6Q4Ia+z8gB0MAAAA/l7ujIgyaEAAiDSANoCIPtjgCECAEIAxEAAAAAAAAAMCiEAAiDraMOAIUIAREAAAAAAAA8D8gDaEiCyALoiANIAwgDKCiRAAAAAAAAPA/oCAOoaMiC7Y4AgAgBCANIAxEAAAAAAAA8L+gIAuioiIQtjgCBCAEIA0gDEQAAAAAAADwP6AgC6KiIgy2OAIIIAQgDiALoiINtow4AgwgBCALIBCgIA5EAAAAAAAA8D8gD6GgIgujtjgCGCAEIAwgDaEgC6O2OAIcIAYEQCAFQQF0IQogBiEJIAIhCANAIAAgCCADIAQgBSAGEAIgACAKaiEAIAhBAmohCCAJQX9qIgkNAAsLIAVFDQAgBkEBdCEIIAUhAANAIAIgASADIAQgBiAFEAIgAiAIaiECIAFBAmohASAAQX9qIgANAAsLC7wBAQV/IAMgAmwiAwRAQQAgA2shBgNAIAAoAgAiBEEIdiIHQf8BcSECAn8gBEH/AXEiAyAEQRB2IgRB/wFxIgVPBEAgAyIIIAMgAk8NARoLIAQgBCAHIAIgA0kbIAIgBUkbQf8BcQshCAJAIAMgAk0EQCADIAVNDQELIAQgByAEIAMgAk8bIAIgBUsbQf8BcSEDCyAAQQRqIQAgASADIAhqQYECbEEBdjsBACABQQJqIQEgBkEBaiIGDQALCwvTBgEKfwJAIAazQwAAgEWUQwAAyEKVu0QAAAAAAADgP6CqIQ0gBSAEbCILBEAgB0GBAmwhDgNAQQAgAi8BACADLwEAayIGQQF0IgdrIAcgBkEASBsgDk8EQCAAQQJqLQAAIQUCfyAALQAAIgYgAEEBai0AACIESSIJRQRAIAYiCCAGIAVPDQEaCyAFIAUgBCAEIAVJGyAGIARLGwshCAJ/IAYgBE0EQCAGIgogBiAFTQ0BGgsgBSAFIAQgBCAFSxsgCRsLIgogCGoiD0GBAmwiEEEBdiERQQAhDAJ/QQAiCSAIIApGDQAaIAggCmsiCUH/H2wgD0H+AyAIayAKayAQQYCABEkbbSEMIAYgCEYEQCAEIAVrQf//A2wgCUEGbG0MAQsgBSAGayAGIARrIAQgCEYiBhtB//8DbCAJQQZsbUHVqgFBqtUCIAYbagshCSARIAcgDWxBgBBqQQx1aiIGQQAgBkEAShsiBkH//wMgBkH//wNIGyEGAkACfwJAIAxB//8DcSIFBEAgBkH//wFKDQEgBUGAIGogBmxBgBBqQQx2DAILIAZBCHYiBiEFIAYhBAwCCyAFIAZB//8Dc2xBgBBqQQx2IAZqCyIFQQh2IQcgBkEBdCAFa0EIdiIGIQQCQCAJQdWqAWpB//8DcSIFQanVAksNACAFQf//AU8EQEGq1QIgBWsgByAGa2xBBmxBgIACakEQdiAGaiEEDAELIAchBCAFQanVAEsNACAFIAcgBmtsQQZsQYCAAmpBEHYgBmohBAsCfyAGIgUgCUH//wNxIghBqdUCSw0AGkGq1QIgCGsgByAGa2xBBmxBgIACakEQdiAGaiAIQf//AU8NABogByIFIAhBqdUASw0AGiAIIAcgBmtsQQZsQYCAAmpBEHYgBmoLIQUgCUGr1QJqQf//A3EiCEGp1QJLDQAgCEH//wFPBEBBqtUCIAhrIAcgBmtsQQZsQYCAAmpBEHYgBmohBgwBCyAIQanVAEsEQCAHIQYMAQsgCCAHIAZrbEEGbEGAgAJqQRB2IAZqIQYLIAEgBDoAACABQQFqIAU6AAAgAUECaiAGOgAACyADQQJqIQMgAkECaiECIABBBGohACABQQRqIQEgC0F/aiILDQALCwsL';
            }, {}],
            23: [function (_dereq_, module, exports) {
              var wa;

              module.exports = function hasWebAssembly() {
                // use cache if called before;
                if (typeof wa !== 'undefined') return wa;
                wa = false;
                if (typeof WebAssembly === 'undefined') return wa; // If WebAssenbly is disabled, code can throw on compile

                try {
                  // https://github.com/brion/min-wasm-fail/blob/master/min-wasm-fail.in.js
                  // Additional check that WA internals are correct

                  /* eslint-disable comma-spacing, max-len */
                  var bin = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 6, 1, 96, 1, 127, 1, 127, 3, 2, 1, 0, 5, 3, 1, 0, 1, 7, 8, 1, 4, 116, 101, 115, 116, 0, 0, 10, 16, 1, 14, 0, 32, 0, 65, 1, 54, 2, 0, 32, 0, 40, 2, 0, 11]);
                  var module = new WebAssembly.Module(bin);
                  var instance = new WebAssembly.Instance(module, {}); // test storing to and loading from a non-zero location via a parameter.
                  // Safari on iOS 11.2.5 returns 0 unexpectedly at non-zero locations

                  if (instance.exports.test(4) !== 0) wa = true;
                  return wa;
                } catch (__) {}

                return wa;
              };
            }, {}],
            24: [function (_dereq_, module, exports) {
              /* eslint-disable no-unused-vars */
              var getOwnPropertySymbols = Object.getOwnPropertySymbols;
              var hasOwnProperty = Object.prototype.hasOwnProperty;
              var propIsEnumerable = Object.prototype.propertyIsEnumerable;

              function toObject(val) {
                if (val === null || val === undefined) {
                  throw new TypeError('Object.assign cannot be called with null or undefined');
                }

                return Object(val);
              }

              function shouldUseNative() {
                try {
                  if (!Object.assign) {
                    return false;
                  } // Detect buggy property enumeration order in older V8 versions.
                  // https://bugs.chromium.org/p/v8/issues/detail?id=4118


                  var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

                  test1[5] = 'de';

                  if (Object.getOwnPropertyNames(test1)[0] === '5') {
                    return false;
                  } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


                  var test2 = {};

                  for (var i = 0; i < 10; i++) {
                    test2['_' + String.fromCharCode(i)] = i;
                  }

                  var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
                    return test2[n];
                  });

                  if (order2.join('') !== '0123456789') {
                    return false;
                  } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


                  var test3 = {};
                  'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
                    test3[letter] = letter;
                  });

                  if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
                    return false;
                  }

                  return true;
                } catch (err) {
                  // We don't expect any of the above to throw, but better to be safe.
                  return false;
                }
              }

              module.exports = shouldUseNative() ? Object.assign : function (target, source) {
                var from;
                var to = toObject(target);
                var symbols;

                for (var s = 1; s < arguments.length; s++) {
                  from = Object(arguments[s]);

                  for (var key in from) {
                    if (hasOwnProperty.call(from, key)) {
                      to[key] = from[key];
                    }
                  }

                  if (getOwnPropertySymbols) {
                    symbols = getOwnPropertySymbols(from);

                    for (var i = 0; i < symbols.length; i++) {
                      if (propIsEnumerable.call(from, symbols[i])) {
                        to[symbols[i]] = from[symbols[i]];
                      }
                    }
                  }
                }

                return to;
              };
            }, {}],
            25: [function (_dereq_, module, exports) {
              var bundleFn = arguments[3];
              var sources = arguments[4];
              var cache = arguments[5];
              var stringify = JSON.stringify;

              module.exports = function (fn, options) {
                var wkey;
                var cacheKeys = Object.keys(cache);

                for (var i = 0, l = cacheKeys.length; i < l; i++) {
                  var key = cacheKeys[i];
                  var exp = cache[key].exports; // Using babel as a transpiler to use esmodule, the export will always
                  // be an object with the default export as a property of it. To ensure
                  // the existing api and babel esmodule exports are both supported we
                  // check for both

                  if (exp === fn || exp && exp["default"] === fn) {
                    wkey = key;
                    break;
                  }
                }

                if (!wkey) {
                  wkey = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);
                  var wcache = {};

                  for (var i = 0, l = cacheKeys.length; i < l; i++) {
                    var key = cacheKeys[i];
                    wcache[key] = key;
                  }

                  sources[wkey] = ['function(require,module,exports){' + fn + '(self); }', wcache];
                }

                var skey = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);
                var scache = {};
                scache[wkey] = wkey;
                sources[skey] = ['function(require,module,exports){' + // try to call default if defined to also support babel esmodule exports
                'var f = require(' + stringify(wkey) + ');' + '(f.default ? f.default : f)(self);' + '}', scache];
                var workerSources = {};
                resolveSources(skey);

                function resolveSources(key) {
                  workerSources[key] = true;

                  for (var depPath in sources[key][1]) {
                    var depKey = sources[key][1][depPath];

                    if (!workerSources[depKey]) {
                      resolveSources(depKey);
                    }
                  }
                }

                var src = '(' + bundleFn + ')({' + Object.keys(workerSources).map(function (key) {
                  return stringify(key) + ':[' + sources[key][0] + ',' + stringify(sources[key][1]) + ']';
                }).join(',') + '},{},[' + stringify(skey) + '])';
                var URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
                var blob = new Blob([src], {
                  type: 'text/javascript'
                });

                if (options && options.bare) {
                  return blob;
                }

                var workerUrl = URL.createObjectURL(blob);
                var worker = new Worker(workerUrl);
                worker.objectURL = workerUrl;
                return worker;
              };
            }, {}],
            "/index.js": [function (_dereq_, module, exports) {
              function _slicedToArray(arr, i) {
                return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
              }

              function _nonIterableRest() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }

              function _unsupportedIterableToArray(o, minLen) {
                if (!o) return;
                if (typeof o === "string") return _arrayLikeToArray(o, minLen);
                var n = Object.prototype.toString.call(o).slice(8, -1);
                if (n === "Object" && o.constructor) n = o.constructor.name;
                if (n === "Map" || n === "Set") return Array.from(o);
                if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
              }

              function _arrayLikeToArray(arr, len) {
                if (len == null || len > arr.length) len = arr.length;

                for (var i = 0, arr2 = new Array(len); i < len; i++) {
                  arr2[i] = arr[i];
                }

                return arr2;
              }

              function _iterableToArrayLimit(arr, i) {
                if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
                var _arr = [];
                var _n = true;
                var _d = false;
                var _e = undefined;

                try {
                  for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);

                    if (i && _arr.length === i) break;
                  }
                } catch (err) {
                  _d = true;
                  _e = err;
                } finally {
                  try {
                    if (!_n && _i["return"] != null) _i["return"]();
                  } finally {
                    if (_d) throw _e;
                  }
                }

                return _arr;
              }

              function _arrayWithHoles(arr) {
                if (Array.isArray(arr)) return arr;
              }

              var assign = _dereq_('object-assign');

              var webworkify = _dereq_('webworkify');

              var MathLib = _dereq_('./lib/mathlib');

              var Pool = _dereq_('./lib/pool');

              var utils = _dereq_('./lib/utils');

              var worker = _dereq_('./lib/worker');

              var createStages = _dereq_('./lib/stepper');

              var createRegions = _dereq_('./lib/tiler'); // Deduplicate pools & limiters with the same configs
              // when user creates multiple pica instances.


              var singletones = {};
              var NEED_SAFARI_FIX = false;

              try {
                if (typeof navigator !== 'undefined' && navigator.userAgent) {
                  NEED_SAFARI_FIX = navigator.userAgent.indexOf('Safari') >= 0;
                }
              } catch (e) {}

              var concurrency = 1;

              if (typeof navigator !== 'undefined') {
                concurrency = Math.min(navigator.hardwareConcurrency || 1, 4);
              }

              var DEFAULT_PICA_OPTS = {
                tile: 1024,
                concurrency: concurrency,
                features: ['js', 'wasm', 'ww'],
                idle: 2000,
                createCanvas: function createCanvas(width, height) {
                  var tmpCanvas = document.createElement('canvas');
                  tmpCanvas.width = width;
                  tmpCanvas.height = height;
                  return tmpCanvas;
                }
              };
              var DEFAULT_RESIZE_OPTS = {
                quality: 3,
                alpha: false,
                unsharpAmount: 0,
                unsharpRadius: 0.0,
                unsharpThreshold: 0
              };
              var CAN_NEW_IMAGE_DATA;
              var CAN_CREATE_IMAGE_BITMAP;

              function workerFabric() {
                return {
                  value: webworkify(worker),
                  destroy: function destroy() {
                    this.value.terminate();

                    if (typeof window !== 'undefined') {
                      var url = window.URL || window.webkitURL || window.mozURL || window.msURL;

                      if (url && url.revokeObjectURL && this.value.objectURL) {
                        url.revokeObjectURL(this.value.objectURL);
                      }
                    }
                  }
                };
              } ////////////////////////////////////////////////////////////////////////////////
              // API methods


              function Pica(options) {
                if (!(this instanceof Pica)) return new Pica(options);
                this.options = assign({}, DEFAULT_PICA_OPTS, options || {});
                var limiter_key = "lk_".concat(this.options.concurrency); // Share limiters to avoid multiple parallel workers when user creates
                // multiple pica instances.

                this.__limit = singletones[limiter_key] || utils.limiter(this.options.concurrency);
                if (!singletones[limiter_key]) singletones[limiter_key] = this.__limit; // List of supported features, according to options & browser/node.js

                this.features = {
                  js: false,
                  // pure JS implementation, can be disabled for testing
                  wasm: false,
                  // webassembly implementation for heavy functions
                  cib: false,
                  // resize via createImageBitmap (only FF at this moment)
                  ww: false // webworkers

                };
                this.__workersPool = null; // Store requested features for webworkers

                this.__requested_features = [];
                this.__mathlib = null;
              }

              Pica.prototype.init = function () {
                var _this = this;

                if (this.__initPromise) return this.__initPromise; // Test if we can create ImageData without canvas and memory copy

                if (CAN_NEW_IMAGE_DATA !== false && CAN_NEW_IMAGE_DATA !== true) {
                  CAN_NEW_IMAGE_DATA = false;

                  if (typeof ImageData !== 'undefined' && typeof Uint8ClampedArray !== 'undefined') {
                    try {
                      /* eslint-disable no-new */
                      new ImageData(new Uint8ClampedArray(400), 10, 10);
                      CAN_NEW_IMAGE_DATA = true;
                    } catch (__) {}
                  }
                } // ImageBitmap can be effective in 2 places:
                //
                // 1. Threaded jpeg unpack (basic)
                // 2. Built-in resize (blocked due problem in chrome, see issue #89)
                //
                // For basic use we also need ImageBitmap wo support .close() method,
                // see https://developer.mozilla.org/ru/docs/Web/API/ImageBitmap


                if (CAN_CREATE_IMAGE_BITMAP !== false && CAN_CREATE_IMAGE_BITMAP !== true) {
                  CAN_CREATE_IMAGE_BITMAP = false;

                  if (typeof ImageBitmap !== 'undefined') {
                    if (ImageBitmap.prototype && ImageBitmap.prototype.close) {
                      CAN_CREATE_IMAGE_BITMAP = true;
                    } else {
                      this.debug('ImageBitmap does not support .close(), disabled');
                    }
                  }
                }

                var features = this.options.features.slice();

                if (features.indexOf('all') >= 0) {
                  features = ['cib', 'wasm', 'js', 'ww'];
                }

                this.__requested_features = features;
                this.__mathlib = new MathLib(features); // Check WebWorker support if requested

                if (features.indexOf('ww') >= 0) {
                  if (typeof window !== 'undefined' && 'Worker' in window) {
                    // IE <= 11 don't allow to create webworkers from string. We should check it.
                    // https://connect.microsoft.com/IE/feedback/details/801810/web-workers-from-blob-urls-in-ie-10-and-11
                    try {
                      var wkr = _dereq_('webworkify')(function () {});

                      wkr.terminate();
                      this.features.ww = true; // pool uniqueness depends on pool config + webworker config

                      var wpool_key = "wp_".concat(JSON.stringify(this.options));

                      if (singletones[wpool_key]) {
                        this.__workersPool = singletones[wpool_key];
                      } else {
                        this.__workersPool = new Pool(workerFabric, this.options.idle);
                        singletones[wpool_key] = this.__workersPool;
                      }
                    } catch (__) {}
                  }
                }

                var initMath = this.__mathlib.init().then(function (mathlib) {
                  // Copy detected features
                  assign(_this.features, mathlib.features);
                });

                var checkCibResize;

                if (!CAN_CREATE_IMAGE_BITMAP) {
                  checkCibResize = Promise.resolve(false);
                } else {
                  checkCibResize = utils.cib_support(this.options.createCanvas).then(function (status) {
                    if (_this.features.cib && features.indexOf('cib') < 0) {
                      _this.debug('createImageBitmap() resize supported, but disabled by config');

                      return;
                    }

                    if (features.indexOf('cib') >= 0) _this.features.cib = status;
                  });
                } // Init math lib. That's async because can load some


                this.__initPromise = Promise.all([initMath, checkCibResize]).then(function () {
                  return _this;
                });
                return this.__initPromise;
              };

              Pica.prototype.resize = function (from, to, options) {
                var _this2 = this;

                this.debug('Start resize...');
                var opts = assign({}, DEFAULT_RESIZE_OPTS);

                if (!isNaN(options)) {
                  opts = assign(opts, {
                    quality: options
                  });
                } else if (options) {
                  opts = assign(opts, options);
                }

                opts.toWidth = to.width;
                opts.toHeight = to.height;
                opts.width = from.naturalWidth || from.width;
                opts.height = from.naturalHeight || from.height; // Prevent stepper from infinite loop

                if (to.width === 0 || to.height === 0) {
                  return Promise.reject(new Error("Invalid output size: ".concat(to.width, "x").concat(to.height)));
                }

                if (opts.unsharpRadius > 2) opts.unsharpRadius = 2;
                var canceled = false;
                var cancelToken = null;

                if (opts.cancelToken) {
                  // Wrap cancelToken to avoid successive resolve & set flag
                  cancelToken = opts.cancelToken.then(function (data) {
                    canceled = true;
                    throw data;
                  }, function (err) {
                    canceled = true;
                    throw err;
                  });
                }

                var DEST_TILE_BORDER = 3; // Max possible filter window size

                var destTileBorder = Math.ceil(Math.max(DEST_TILE_BORDER, 2.5 * opts.unsharpRadius | 0));
                return this.init().then(function () {
                  if (canceled) return cancelToken; // if createImageBitmap supports resize, just do it and return

                  if (_this2.features.cib) {
                    var toCtx = to.getContext('2d', {
                      alpha: Boolean(opts.alpha)
                    });

                    _this2.debug('Resize via createImageBitmap()');

                    return createImageBitmap(from, {
                      resizeWidth: opts.toWidth,
                      resizeHeight: opts.toHeight,
                      resizeQuality: utils.cib_quality_name(opts.quality)
                    }).then(function (imageBitmap) {
                      if (canceled) return cancelToken; // if no unsharp - draw directly to output canvas

                      if (!opts.unsharpAmount) {
                        toCtx.drawImage(imageBitmap, 0, 0);
                        imageBitmap.close();
                        toCtx = null;

                        _this2.debug('Finished!');

                        return to;
                      }

                      _this2.debug('Unsharp result');

                      var tmpCanvas = _this2.options.createCanvas(opts.toWidth, opts.toHeight);

                      var tmpCtx = tmpCanvas.getContext('2d', {
                        alpha: Boolean(opts.alpha)
                      });
                      tmpCtx.drawImage(imageBitmap, 0, 0);
                      imageBitmap.close();
                      var iData = tmpCtx.getImageData(0, 0, opts.toWidth, opts.toHeight);

                      _this2.__mathlib.unsharp_mask(iData.data, opts.toWidth, opts.toHeight, opts.unsharpAmount, opts.unsharpRadius, opts.unsharpThreshold);

                      toCtx.putImageData(iData, 0, 0); // Safari 12 workaround
                      // https://github.com/nodeca/pica/issues/199

                      tmpCanvas.width = tmpCanvas.height = 0;
                      iData = tmpCtx = tmpCanvas = toCtx = null;

                      _this2.debug('Finished!');

                      return to;
                    });
                  } //
                  // No easy way, let's resize manually via arrays
                  //
                  // Share cache between calls:
                  //
                  // - wasm instance
                  // - wasm memory object
                  //


                  var cache = {}; // Call resizer in webworker or locally, depending on config

                  var invokeResize = function invokeResize(opts) {
                    return Promise.resolve().then(function () {
                      if (!_this2.features.ww) return _this2.__mathlib.resizeAndUnsharp(opts, cache);
                      return new Promise(function (resolve, reject) {
                        var w = _this2.__workersPool.acquire();

                        if (cancelToken) cancelToken["catch"](function (err) {
                          return reject(err);
                        });

                        w.value.onmessage = function (ev) {
                          w.release();
                          if (ev.data.err) reject(ev.data.err);else resolve(ev.data.result);
                        };

                        w.value.postMessage({
                          opts: opts,
                          features: _this2.__requested_features,
                          preload: {
                            wasm_nodule: _this2.__mathlib.__
                          }
                        }, [opts.src.buffer]);
                      });
                    });
                  };

                  var tileAndResize = function tileAndResize(from, to, opts) {
                    var srcCtx;
                    var srcImageBitmap;
                    var isImageBitmapReused = false;
                    var toCtx;

                    var processTile = function processTile(tile) {
                      return _this2.__limit(function () {
                        if (canceled) return cancelToken;
                        var srcImageData; // Extract tile RGBA buffer, depending on input type

                        if (utils.isCanvas(from)) {
                          _this2.debug('Get tile pixel data'); // If input is Canvas - extract region data directly


                          srcImageData = srcCtx.getImageData(tile.x, tile.y, tile.width, tile.height);
                        } else {
                          // If input is Image or decoded to ImageBitmap,
                          // draw region to temporary canvas and extract data from it
                          //
                          // Note! Attempt to reuse this canvas causes significant slowdown in chrome
                          //
                          _this2.debug('Draw tile imageBitmap/image to temporary canvas');

                          var tmpCanvas = _this2.options.createCanvas(tile.width, tile.height);

                          var tmpCtx = tmpCanvas.getContext('2d', {
                            alpha: Boolean(opts.alpha)
                          });
                          tmpCtx.globalCompositeOperation = 'copy';
                          tmpCtx.drawImage(srcImageBitmap || from, tile.x, tile.y, tile.width, tile.height, 0, 0, tile.width, tile.height);

                          _this2.debug('Get tile pixel data');

                          srcImageData = tmpCtx.getImageData(0, 0, tile.width, tile.height); // Safari 12 workaround
                          // https://github.com/nodeca/pica/issues/199

                          tmpCanvas.width = tmpCanvas.height = 0;
                          tmpCtx = tmpCanvas = null;
                        }

                        var o = {
                          src: srcImageData.data,
                          width: tile.width,
                          height: tile.height,
                          toWidth: tile.toWidth,
                          toHeight: tile.toHeight,
                          scaleX: tile.scaleX,
                          scaleY: tile.scaleY,
                          offsetX: tile.offsetX,
                          offsetY: tile.offsetY,
                          quality: opts.quality,
                          alpha: opts.alpha,
                          unsharpAmount: opts.unsharpAmount,
                          unsharpRadius: opts.unsharpRadius,
                          unsharpThreshold: opts.unsharpThreshold
                        };

                        _this2.debug('Invoke resize math');

                        return Promise.resolve().then(function () {
                          return invokeResize(o);
                        }).then(function (result) {
                          if (canceled) return cancelToken;
                          srcImageData = null;
                          var toImageData;

                          _this2.debug('Convert raw rgba tile result to ImageData');

                          if (CAN_NEW_IMAGE_DATA) {
                            // this branch is for modern browsers
                            // If `new ImageData()` & Uint8ClampedArray suported
                            toImageData = new ImageData(new Uint8ClampedArray(result), tile.toWidth, tile.toHeight);
                          } else {
                            // fallback for `node-canvas` and old browsers
                            // (IE11 has ImageData but does not support `new ImageData()`)
                            toImageData = toCtx.createImageData(tile.toWidth, tile.toHeight);

                            if (toImageData.data.set) {
                              toImageData.data.set(result);
                            } else {
                              // IE9 don't have `.set()`
                              for (var i = toImageData.data.length - 1; i >= 0; i--) {
                                toImageData.data[i] = result[i];
                              }
                            }
                          }

                          _this2.debug('Draw tile');

                          if (NEED_SAFARI_FIX) {
                            // Safari draws thin white stripes between tiles without this fix
                            toCtx.putImageData(toImageData, tile.toX, tile.toY, tile.toInnerX - tile.toX, tile.toInnerY - tile.toY, tile.toInnerWidth + 1e-5, tile.toInnerHeight + 1e-5);
                          } else {
                            toCtx.putImageData(toImageData, tile.toX, tile.toY, tile.toInnerX - tile.toX, tile.toInnerY - tile.toY, tile.toInnerWidth, tile.toInnerHeight);
                          }

                          return null;
                        });
                      });
                    }; // Need to normalize data source first. It can be canvas or image.
                    // If image - try to decode in background if possible


                    return Promise.resolve().then(function () {
                      toCtx = to.getContext('2d', {
                        alpha: Boolean(opts.alpha)
                      });

                      if (utils.isCanvas(from)) {
                        srcCtx = from.getContext('2d', {
                          alpha: Boolean(opts.alpha)
                        });
                        return null;
                      }

                      if (utils.isImageBitmap(from)) {
                        srcImageBitmap = from;
                        isImageBitmapReused = true;
                        return null;
                      }

                      if (utils.isImage(from)) {
                        // try do decode image in background for faster next operations
                        if (!CAN_CREATE_IMAGE_BITMAP) return null;

                        _this2.debug('Decode image via createImageBitmap');

                        return createImageBitmap(from).then(function (imageBitmap) {
                          srcImageBitmap = imageBitmap;
                        }) // Suppress error to use fallback, if method fails
                        // https://github.com/nodeca/pica/issues/190

                        /* eslint-disable no-unused-vars */
                        ["catch"](function (e) {
                          return null;
                        });
                      }

                      throw new Error('Pica: ".from" should be Image, Canvas or ImageBitmap');
                    }).then(function () {
                      if (canceled) return cancelToken;

                      _this2.debug('Calculate tiles'); //
                      // Here we are with "normalized" source,
                      // follow to tiling
                      //


                      var regions = createRegions({
                        width: opts.width,
                        height: opts.height,
                        srcTileSize: _this2.options.tile,
                        toWidth: opts.toWidth,
                        toHeight: opts.toHeight,
                        destTileBorder: destTileBorder
                      });
                      var jobs = regions.map(function (tile) {
                        return processTile(tile);
                      });

                      function cleanup() {
                        if (srcImageBitmap) {
                          if (!isImageBitmapReused) srcImageBitmap.close();
                          srcImageBitmap = null;
                        }
                      }

                      _this2.debug('Process tiles');

                      return Promise.all(jobs).then(function () {
                        _this2.debug('Finished!');

                        cleanup();
                        return to;
                      }, function (err) {
                        cleanup();
                        throw err;
                      });
                    });
                  };

                  var processStages = function processStages(stages, from, to, opts) {
                    if (canceled) return cancelToken;

                    var _stages$shift = stages.shift(),
                        _stages$shift2 = _slicedToArray(_stages$shift, 2),
                        toWidth = _stages$shift2[0],
                        toHeight = _stages$shift2[1];

                    var isLastStage = stages.length === 0;
                    opts = assign({}, opts, {
                      toWidth: toWidth,
                      toHeight: toHeight,
                      // only use user-defined quality for the last stage,
                      // use simpler (Hamming) filter for the first stages where
                      // scale factor is large enough (more than 2-3)
                      quality: isLastStage ? opts.quality : Math.min(1, opts.quality)
                    });
                    var tmpCanvas;

                    if (!isLastStage) {
                      // create temporary canvas
                      tmpCanvas = _this2.options.createCanvas(toWidth, toHeight);
                    }

                    return tileAndResize(from, isLastStage ? to : tmpCanvas, opts).then(function () {
                      if (isLastStage) return to;
                      opts.width = toWidth;
                      opts.height = toHeight;
                      return processStages(stages, tmpCanvas, to, opts);
                    }).then(function (res) {
                      if (tmpCanvas) {
                        // Safari 12 workaround
                        // https://github.com/nodeca/pica/issues/199
                        tmpCanvas.width = tmpCanvas.height = 0;
                      }

                      return res;
                    });
                  };

                  var stages = createStages(opts.width, opts.height, opts.toWidth, opts.toHeight, _this2.options.tile, destTileBorder);
                  return processStages(stages, from, to, opts);
                });
              }; // RGBA buffer resize
              //


              Pica.prototype.resizeBuffer = function (options) {
                var _this3 = this;

                var opts = assign({}, DEFAULT_RESIZE_OPTS, options);
                return this.init().then(function () {
                  return _this3.__mathlib.resizeAndUnsharp(opts);
                });
              };

              Pica.prototype.toBlob = function (canvas, mimeType, quality) {
                mimeType = mimeType || 'image/png';
                return new Promise(function (resolve) {
                  if (canvas.toBlob) {
                    canvas.toBlob(function (blob) {
                      return resolve(blob);
                    }, mimeType, quality);
                    return;
                  }

                  if (canvas.convertToBlob) {
                    resolve(canvas.convertToBlob({
                      type: mimeType,
                      quality: quality
                    }));
                    return;
                  } // Fallback for old browsers


                  var asString = atob(canvas.toDataURL(mimeType, quality).split(',')[1]);
                  var len = asString.length;
                  var asBuffer = new Uint8Array(len);

                  for (var i = 0; i < len; i++) {
                    asBuffer[i] = asString.charCodeAt(i);
                  }

                  resolve(new Blob([asBuffer], {
                    type: mimeType
                  }));
                });
              };

              Pica.prototype.debug = function () {};

              module.exports = Pica;
            }, {
              "./lib/mathlib": 1,
              "./lib/pool": 9,
              "./lib/stepper": 10,
              "./lib/tiler": 11,
              "./lib/utils": 12,
              "./lib/worker": 13,
              "object-assign": 24,
              "webworkify": 25
            }]
          }, {}, [])("/index.js");
        });
      });
      var image_traverse = createCommonjsModule(function (module) {
        //////////////////////////////////////////////////////////////////////////
        // Helpers
        //
        function error(message, code) {
          var err = new Error(message);
          err.code = code;
          return err;
        } // Convert number to 0xHH string
        //


        function to_hex(number) {
          var n = number.toString(16).toUpperCase();

          for (var i = 2 - n.length; i > 0; i--) {
            n = '0' + n;
          }

          return '0x' + n;
        }

        function utf8_encode(str) {
          try {
            return unescape(encodeURIComponent(str));
          } catch (_) {
            return str;
          }
        }

        function utf8_decode(str) {
          try {
            return decodeURIComponent(escape(str));
          } catch (_) {
            return str;
          }
        } // Check if input is a Uint8Array
        //


        function is_uint8array(bin) {
          return Object.prototype.toString.call(bin) === '[object Uint8Array]';
        } //////////////////////////////////////////////////////////////////////////
        // Exif parser
        //
        // Input:
        //  - jpeg_bin:   Uint8Array - jpeg file
        //  - exif_start: Number     - start of TIFF header (after Exif\0\0)
        //  - exif_end:   Number     - end of Exif segment
        //  - on_entry:   Number     - callback
        //


        function ExifParser(jpeg_bin, exif_start, exif_end) {
          // Uint8Array, exif without signature (which isn't included in offsets)
          this.input = jpeg_bin.subarray(exif_start, exif_end); // offset correction for `on_entry` callback

          this.start = exif_start; // Check TIFF header (includes byte alignment and first IFD offset)

          var sig = String.fromCharCode.apply(null, this.input.subarray(0, 4));

          if (sig !== 'II\x2A\0' && sig !== 'MM\0\x2A') {
            throw error('invalid TIFF signature', 'EBADDATA');
          } // true if motorola (big endian) byte alignment, false if intel


          this.big_endian = sig[0] === 'M';
        }

        ExifParser.prototype.each = function (on_entry) {
          // allow premature exit
          this.aborted = false;
          var offset = this.read_uint32(4);
          this.ifds_to_read = [{
            id: 0,
            offset: offset
          }];

          while (this.ifds_to_read.length > 0 && !this.aborted) {
            var i = this.ifds_to_read.shift();
            if (!i.offset) continue;
            this.scan_ifd(i.id, i.offset, on_entry);
          }
        };

        ExifParser.prototype.filter = function (on_entry) {
          var ifds = {}; // make sure IFD0 always exists

          ifds.ifd0 = {
            id: 0,
            entries: []
          };
          this.each(function (entry) {
            if (on_entry(entry) === false && !entry.is_subifd_link) return;
            if (entry.is_subifd_link && entry.count !== 1 && entry.format !== 4) return; // filter out bogus links

            if (!ifds['ifd' + entry.ifd]) {
              ifds['ifd' + entry.ifd] = {
                id: entry.ifd,
                entries: []
              };
            }

            ifds['ifd' + entry.ifd].entries.push(entry);
          }); // thumbnails are not supported just yet, so delete all information related to it

          delete ifds.ifd1; // Calculate output size

          var length = 8;
          Object.keys(ifds).forEach(function (ifd_no) {
            length += 2;
            ifds[ifd_no].entries.forEach(function (entry) {
              length += 12 + (entry.data_length > 4 ? Math.ceil(entry.data_length / 2) * 2 : 0);
            });
            length += 4;
          });
          this.output = new Uint8Array(length);
          this.output[0] = this.output[1] = (this.big_endian ? 'M' : 'I').charCodeAt(0);
          this.write_uint16(2, 0x2A);
          var offset = 8;
          var self = this;
          this.write_uint32(4, offset);
          Object.keys(ifds).forEach(function (ifd_no) {
            ifds[ifd_no].written_offset = offset;
            var ifd_start = offset;
            var ifd_end = ifd_start + 2 + ifds[ifd_no].entries.length * 12 + 4;
            offset = ifd_end;
            self.write_uint16(ifd_start, ifds[ifd_no].entries.length);
            ifds[ifd_no].entries.sort(function (a, b) {
              // IFD entries must be in order of increasing tag IDs
              return a.tag - b.tag;
            }).forEach(function (entry, idx) {
              var entry_offset = ifd_start + 2 + idx * 12;
              self.write_uint16(entry_offset, entry.tag);
              self.write_uint16(entry_offset + 2, entry.format);
              self.write_uint32(entry_offset + 4, entry.count);

              if (entry.is_subifd_link) {
                // filled in later
                if (ifds['ifd' + entry.tag]) ifds['ifd' + entry.tag].link_offset = entry_offset + 8;
              } else if (entry.data_length <= 4) {
                self.output.set(self.input.subarray(entry.data_offset - self.start, entry.data_offset - self.start + 4), entry_offset + 8);
              } else {
                self.write_uint32(entry_offset + 8, offset);
                self.output.set(self.input.subarray(entry.data_offset - self.start, entry.data_offset - self.start + entry.data_length), offset);
                offset += Math.ceil(entry.data_length / 2) * 2;
              }
            });
            var next_ifd = ifds['ifd' + (ifds[ifd_no].id + 1)];
            if (next_ifd) next_ifd.link_offset = ifd_end - 4;
          });
          Object.keys(ifds).forEach(function (ifd_no) {
            if (ifds[ifd_no].written_offset && ifds[ifd_no].link_offset) {
              self.write_uint32(ifds[ifd_no].link_offset, ifds[ifd_no].written_offset);
            }
          });
          if (this.output.length !== offset) throw error('internal error: incorrect buffer size allocated');
          return this.output;
        };

        ExifParser.prototype.read_uint16 = function (offset) {
          var d = this.input;
          if (offset + 2 > d.length) throw error('unexpected EOF', 'EBADDATA');
          return this.big_endian ? d[offset] * 0x100 + d[offset + 1] : d[offset] + d[offset + 1] * 0x100;
        };

        ExifParser.prototype.read_uint32 = function (offset) {
          var d = this.input;
          if (offset + 4 > d.length) throw error('unexpected EOF', 'EBADDATA');
          return this.big_endian ? d[offset] * 0x1000000 + d[offset + 1] * 0x10000 + d[offset + 2] * 0x100 + d[offset + 3] : d[offset] + d[offset + 1] * 0x100 + d[offset + 2] * 0x10000 + d[offset + 3] * 0x1000000;
        };

        ExifParser.prototype.write_uint16 = function (offset, value) {
          var d = this.output;

          if (this.big_endian) {
            d[offset] = value >>> 8 & 0xFF;
            d[offset + 1] = value & 0xFF;
          } else {
            d[offset] = value & 0xFF;
            d[offset + 1] = value >>> 8 & 0xFF;
          }
        };

        ExifParser.prototype.write_uint32 = function (offset, value) {
          var d = this.output;

          if (this.big_endian) {
            d[offset] = value >>> 24 & 0xFF;
            d[offset + 1] = value >>> 16 & 0xFF;
            d[offset + 2] = value >>> 8 & 0xFF;
            d[offset + 3] = value & 0xFF;
          } else {
            d[offset] = value & 0xFF;
            d[offset + 1] = value >>> 8 & 0xFF;
            d[offset + 2] = value >>> 16 & 0xFF;
            d[offset + 3] = value >>> 24 & 0xFF;
          }
        };

        ExifParser.prototype.is_subifd_link = function (ifd, tag) {
          return ifd === 0 && tag === 0x8769 || // SubIFD
          ifd === 0 && tag === 0x8825 || // GPS Info
          ifd === 0x8769 && tag === 0xA005; // Interop IFD
        }; // Returns byte length of a single component of a given format
        //


        ExifParser.prototype.exif_format_length = function (format) {
          switch (format) {
            case 1: // byte

            case 2: // ascii

            case 6: // sbyte

            case 7:
              // undefined
              return 1;

            case 3: // short

            case 8:
              // sshort
              return 2;

            case 4: // long

            case 9: // slong

            case 11:
              // float
              return 4;

            case 5: // rational

            case 10: // srational

            case 12:
              // double
              return 8;

            default:
              // unknown type
              return 0;
          }
        }; // Reads Exif data
        //


        ExifParser.prototype.exif_format_read = function (format, offset) {
          var v;

          switch (format) {
            case 1: // byte

            case 2:
              // ascii
              v = this.input[offset];
              return v;

            case 6:
              // sbyte
              v = this.input[offset];
              return v | (v & 0x80) * 0x1fffffe;

            case 3:
              // short
              v = this.read_uint16(offset);
              return v;

            case 8:
              // sshort
              v = this.read_uint16(offset);
              return v | (v & 0x8000) * 0x1fffe;

            case 4:
              // long
              v = this.read_uint32(offset);
              return v;

            case 9:
              // slong
              v = this.read_uint32(offset);
              return v | 0;

            case 5: // rational

            case 10: // srational

            case 11: // float

            case 12:
              // double
              return null;
            // not implemented

            case 7:
              // undefined
              return null;
            // blob

            default:
              // unknown type
              return null;
          }
        };

        ExifParser.prototype.scan_ifd = function (ifd_no, offset, on_entry) {
          var entry_count = this.read_uint16(offset);
          offset += 2;

          for (var i = 0; i < entry_count; i++) {
            var tag = this.read_uint16(offset);
            var format = this.read_uint16(offset + 2);
            var count = this.read_uint32(offset + 4);
            var comp_length = this.exif_format_length(format);
            var data_length = count * comp_length;
            var data_offset = data_length <= 4 ? offset + 8 : this.read_uint32(offset + 8);
            var is_subifd_link = false;

            if (data_offset + data_length > this.input.length) {
              throw error('unexpected EOF', 'EBADDATA');
            }

            var value = [];
            var comp_offset = data_offset;

            for (var j = 0; j < count; j++, comp_offset += comp_length) {
              var item = this.exif_format_read(format, comp_offset);

              if (item === null) {
                value = null;
                break;
              }

              value.push(item);
            }

            if (Array.isArray(value) && format === 2) {
              try {
                value = utf8_decode(String.fromCharCode.apply(null, value));
              } catch (_) {
                value = null;
              }

              if (value && value[value.length - 1] === '\0') value = value.slice(0, -1);
            }

            if (this.is_subifd_link(ifd_no, tag)) {
              if (Array.isArray(value) && Number.isInteger(value[0]) && value[0] > 0) {
                this.ifds_to_read.push({
                  id: tag,
                  offset: value[0]
                });
                is_subifd_link = true;
              }
            }

            var entry = {
              is_big_endian: this.big_endian,
              ifd: ifd_no,
              tag: tag,
              format: format,
              count: count,
              entry_offset: offset + this.start,
              data_length: data_length,
              data_offset: data_offset + this.start,
              value: value,
              is_subifd_link: is_subifd_link
            };

            if (on_entry(entry) === false) {
              this.aborted = true;
              return;
            }

            offset += 12;
          }

          if (ifd_no === 0) {
            this.ifds_to_read.push({
              id: 1,
              offset: this.read_uint32(offset)
            });
          }
        }; // Check whether input is a JPEG image
        //
        // Input:
        //  - jpeg_bin: Uint8Array - jpeg file
        //
        // Returns true if it is and false otherwise
        //


        module.exports.is_jpeg = function (jpeg_bin) {
          return jpeg_bin.length >= 4 && jpeg_bin[0] === 0xFF && jpeg_bin[1] === 0xD8 && jpeg_bin[2] === 0xFF;
        }; // Call an iterator on each segment in the given JPEG image
        //
        // Input:
        //  - jpeg_bin:   Uint8Array - jpeg file
        //  - on_segment: Function - callback executed on each JPEG marker segment
        //    - segment:  Object
        //      - code:   Number - marker type (2nd byte, e.g. 0xE0 for APP0)
        //      - offset: Number - offset of the first byte (0xFF) relative to `jpeg_bin` start
        //      - length: Number - length of the entire marker segment including first two bytes and length
        //        - 2 for standalone markers
        //        - 4+length for markers with data
        //
        // Iteration stops when `EOI` (0xFFD9) marker is reached or if `on_segment`
        // function returns `false`.
        //


        module.exports.jpeg_segments_each = function (jpeg_bin, on_segment) {
          if (!is_uint8array(jpeg_bin)) {
            throw error('Invalid argument (jpeg_bin), Uint8Array expected', 'EINVAL');
          }

          if (typeof on_segment !== 'function') {
            throw error('Invalid argument (on_segment), Function expected', 'EINVAL');
          }

          if (!module.exports.is_jpeg(jpeg_bin)) {
            throw error('Unknown file format', 'ENOTJPEG');
          }

          var offset = 0,
              length = jpeg_bin.length,
              inside_scan = false;

          for (;;) {
            var segment_code, segment_length;
            if (offset + 1 >= length) throw error('Unexpected EOF', 'EBADDATA');
            var byte1 = jpeg_bin[offset];
            var byte2 = jpeg_bin[offset + 1];

            if (byte1 === 0xFF && byte2 === 0xFF) {
              // padding
              segment_code = 0xFF;
              segment_length = 1;
            } else if (byte1 === 0xFF && byte2 !== 0) {
              // marker
              segment_code = byte2;
              segment_length = 2;
              if (0xD0 <= segment_code && segment_code <= 0xD9 || segment_code === 0x01) ;else {
                if (offset + 3 >= length) throw error('Unexpected EOF', 'EBADDATA');
                segment_length += jpeg_bin[offset + 2] * 0x100 + jpeg_bin[offset + 3];
                if (segment_length < 2) throw error('Invalid segment length', 'EBADDATA');
                if (offset + segment_length - 1 >= length) throw error('Unexpected EOF', 'EBADDATA');
              }

              if (inside_scan) {
                if (segment_code >= 0xD0 && segment_code <= 0xD7) ;else {
                  inside_scan = false;
                }
              }

              if (segment_code === 0xDA
              /* SOS */
              ) inside_scan = true;
            } else if (inside_scan) {
              // entropy-encoded segment
              for (var pos = offset + 1;; pos++) {
                // scan until we find FF
                if (pos >= length) throw error('Unexpected EOF', 'EBADDATA');

                if (jpeg_bin[pos] === 0xFF) {
                  if (pos + 1 >= length) throw error('Unexpected EOF', 'EBADDATA');

                  if (jpeg_bin[pos + 1] !== 0) {
                    segment_code = 0;
                    segment_length = pos - offset;
                    break;
                  }
                }
              }
            } else {
              throw error('Unexpected byte at segment start: ' + to_hex(byte1) + ' (offset ' + to_hex(offset) + ')', 'EBADDATA');
            }

            if (on_segment({
              code: segment_code,
              offset: offset,
              length: segment_length
            }) === false) break;
            if (segment_code === 0xD9
            /* EOI */
            ) break;
            offset += segment_length;
          }
        }; // Replace or remove segments in the given JPEG image
        //
        // Input:
        //  - jpeg_bin:   Uint8Array - jpeg file
        //  - on_segment: Function - callback executed on each JPEG marker segment
        //    - segment:  Object
        //      - code:   Number - marker type (2nd byte, e.g. 0xE0 for APP0)
        //      - offset: Number - offset of the first byte (0xFF) relative to `jpeg_bin` start
        //      - length: Number - length of the entire marker segment including first two bytes and length
        //        - 2 for standalone markers
        //        - 4+length for markers with data
        //
        // `on_segment` function should return one of the following:
        //  - `false`        - segment is removed from the output
        //  - Uint8Array     - segment is replaced with the new data
        //  - [ Uint8Array ] - segment is replaced with the new data
        //  - anything else  - segment is copied to the output as is
        //
        // Any data after `EOI` (0xFFD9) marker is removed.
        //


        module.exports.jpeg_segments_filter = function (jpeg_bin, on_segment) {
          if (!is_uint8array(jpeg_bin)) {
            throw error('Invalid argument (jpeg_bin), Uint8Array expected', 'EINVAL');
          }

          if (typeof on_segment !== 'function') {
            throw error('Invalid argument (on_segment), Function expected', 'EINVAL');
          }

          var ranges = [];
          var out_length = 0;
          module.exports.jpeg_segments_each(jpeg_bin, function (segment) {
            var new_segment = on_segment(segment);

            if (is_uint8array(new_segment)) {
              ranges.push({
                data: new_segment
              });
              out_length += new_segment.length;
            } else if (Array.isArray(new_segment)) {
              new_segment.filter(is_uint8array).forEach(function (s) {
                ranges.push({
                  data: s
                });
                out_length += s.length;
              });
            } else if (new_segment !== false) {
              var new_range = {
                start: segment.offset,
                end: segment.offset + segment.length
              };

              if (ranges.length > 0 && ranges[ranges.length - 1].end === new_range.start) {
                ranges[ranges.length - 1].end = new_range.end;
              } else {
                ranges.push(new_range);
              }

              out_length += segment.length;
            }
          });
          var result = new Uint8Array(out_length);
          var offset = 0;
          ranges.forEach(function (range) {
            var data = range.data || jpeg_bin.subarray(range.start, range.end);
            result.set(data, offset);
            offset += data.length;
          });
          return result;
        }; // Call an iterator on each Exif entry in the given JPEG image
        //
        // Input:
        //  - jpeg_bin: Uint8Array - jpeg file
        //  - on_entry: Function - callback executed on each Exif entry
        //    - entry:  Object
        //      - is_big_endian:  Boolean - whether Exif uses big or little endian byte alignment
        //      - ifd:            Number  - IFD identifier (0 for IFD0, 1 for IFD1, 0x8769 for SubIFD,
        //                                 0x8825 for GPS Info, 0xA005 for Interop IFD)
        //      - tag:            Number  - exif entry tag (0x0110 - camera name, 0x0112 - orientation, etc. - see Exif spec)
        //      - format:         Number  - exif entry format (1 - byte, 2 - ascii, 3 - short, etc. - see Exif spec)
        //      - count:          Number  - number of components of the given format inside data
        //                                 (usually 1, or string length for ascii format)
        //      - entry_offset:   Number  - start of Exif entry (entry length is always 12, so not included)
        //      - data_offset:    Number  - start of data attached to Exif entry (will overlap with entry if length <= 4)
        //      - data_length:    Number  - length of data attached to Exif entry
        //      - value:          Array|String|Null - our best attempt at parsing data (not all formats supported right now)
        //      - is_subifd_link: Boolean - whether this entry is recognized to be a link to subifd (can't filter these out)
        //
        // Iteration stops early if iterator returns `false`.
        //
        // If Exif wasn't found anywhere (before start of the image data, SOS),
        // iterator is never executed.
        //


        module.exports.jpeg_exif_tags_each = function (jpeg_bin, on_exif_entry) {
          if (!is_uint8array(jpeg_bin)) {
            throw error('Invalid argument (jpeg_bin), Uint8Array expected', 'EINVAL');
          }

          if (typeof on_exif_entry !== 'function') {
            throw error('Invalid argument (on_exif_entry), Function expected', 'EINVAL');
          }
          /* eslint-disable consistent-return */


          module.exports.jpeg_segments_each(jpeg_bin, function (segment) {
            if (segment.code === 0xDA
            /* SOS */
            ) return false; // look for APP1 segment and compare header with 'Exif\0\0'

            if (segment.code === 0xE1 && segment.length >= 10 && jpeg_bin[segment.offset + 4] === 0x45 && jpeg_bin[segment.offset + 5] === 0x78 && jpeg_bin[segment.offset + 6] === 0x69 && jpeg_bin[segment.offset + 7] === 0x66 && jpeg_bin[segment.offset + 8] === 0x00 && jpeg_bin[segment.offset + 9] === 0x00) {
              new ExifParser(jpeg_bin, segment.offset + 10, segment.offset + segment.length).each(on_exif_entry);
              return false;
            }
          });
        }; // Remove Exif entries in the given JPEG image
        //
        // Input:
        //  - jpeg_bin: Uint8Array - jpeg file
        //  - on_entry: Function - callback executed on each Exif entry
        //    - entry:  Object
        //      - is_big_endian:  Boolean - whether Exif uses big or little endian byte alignment
        //      - ifd:            Number  - IFD identifier (0 for IFD0, 1 for IFD1, 0x8769 for SubIFD,
        //                                  0x8825 for GPS Info, 0xA005 for Interop IFD)
        //      - tag:            Number  - exif entry tag (0x0110 - camera name, 0x0112 - orientation, etc. - see Exif spec)
        //      - format:         Number  - exif entry format (1 - byte, 2 - ascii, 3 - short, etc. - see Exif spec)
        //      - count:          Number  - number of components of the given format inside data
        //                                  (usually 1, or string length for ascii format)
        //      - entry_offset:   Number  - start of Exif entry (entry length is always 12, so not included)
        //      - data_offset:    Number  - start of data attached to Exif entry (will overlap with entry if length <= 4)
        //      - data_length:    Number  - length of data attached to Exif entry
        //      - value:          Array|String|Null - our best attempt at parsing data (not all formats supported right now)
        //      - is_subifd_link: Boolean - whether this entry is recognized to be a link to subifd (can't filter these out)
        //
        // This function removes following from Exif:
        //  - all entries where iterator returned false (except subifd links which are mandatory)
        //  - IFD1 and thumbnail image (the purpose of this function is to reduce file size,
        //    so thumbnail is usually the first thing to go)
        //  - all other data that isn't in IFD0, SubIFD, GPSIFD, InteropIFD
        //    (theoretically possible proprietary extensions, I haven't seen any of these yet)
        //
        // Changing data inside Exif entries is NOT supported yet (modifying `entry` object inside callback may break stuff).
        //
        // If Exif wasn't found anywhere (before start of the image data, SOS),
        // iterator is never executed, and original JPEG is returned as is.
        //


        module.exports.jpeg_exif_tags_filter = function (jpeg_bin, on_exif_entry) {
          if (!is_uint8array(jpeg_bin)) {
            throw error('Invalid argument (jpeg_bin), Uint8Array expected', 'EINVAL');
          }

          if (typeof on_exif_entry !== 'function') {
            throw error('Invalid argument (on_exif_entry), Function expected', 'EINVAL');
          }

          var stop_search = false;
          return module.exports.jpeg_segments_filter(jpeg_bin, function (segment) {
            if (stop_search) return;
            if (segment.code === 0xDA
            /* SOS */
            ) stop_search = true; // look for APP1 segment and compare header with 'Exif\0\0'

            if (segment.code === 0xE1 && segment.length >= 10 && jpeg_bin[segment.offset + 4] === 0x45 && jpeg_bin[segment.offset + 5] === 0x78 && jpeg_bin[segment.offset + 6] === 0x69 && jpeg_bin[segment.offset + 7] === 0x66 && jpeg_bin[segment.offset + 8] === 0x00 && jpeg_bin[segment.offset + 9] === 0x00) {
              var new_exif = new ExifParser(jpeg_bin, segment.offset + 10, segment.offset + segment.length).filter(on_exif_entry);
              if (!new_exif) return false;
              var header = new Uint8Array(10);
              header.set(jpeg_bin.slice(segment.offset, segment.offset + 10));
              header[2] = new_exif.length + 8 >>> 8 & 0xFF;
              header[3] = new_exif.length + 8 & 0xFF;
              stop_search = true;
              return [header, new_exif];
            }
          });
        }; // Inserts a custom comment marker segment into JPEG file.
        //
        // Input:
        //  - jpeg_bin: Uint8Array - jpeg file
        //  - comment:  String
        //
        // Comment is inserted after first two bytes (FFD8, SOI).
        //
        // If JFIF (APP0) marker exists immediately after SOI (as mandated by the JFIF
        // spec), we insert comment after it instead.
        //


        module.exports.jpeg_add_comment = function (jpeg_bin, comment) {
          var comment_inserted = false,
              segment_count = 0;
          return module.exports.jpeg_segments_filter(jpeg_bin, function (segment) {
            segment_count++;
            if (segment_count === 1 && segment.code === 0xD8
            /* SOI  */
            ) return;
            if (segment_count === 2 && segment.code === 0xE0
            /* APP0 */
            ) return;
            if (comment_inserted) return;
            comment = utf8_encode(comment); // comment segment

            var csegment = new Uint8Array(5 + comment.length);
            var offset = 0;
            csegment[offset++] = 0xFF;
            csegment[offset++] = 0xFE;
            csegment[offset++] = comment.length + 3 >>> 8 & 0xFF;
            csegment[offset++] = comment.length + 3 & 0xFF;
            comment.split('').forEach(function (c) {
              csegment[offset++] = c.charCodeAt(0) & 0xFF;
            });
            csegment[offset++] = 0;
            comment_inserted = true;
            return [csegment, jpeg_bin.subarray(segment.offset, segment.offset + segment.length)];
          });
        };
      });

      function jpeg_patch_exif(env) {
        return this._getUint8Array(env.blob).then(function (data) {
          env.is_jpeg = image_traverse.is_jpeg(data);
          if (!env.is_jpeg) return Promise.resolve(env);
          env.orig_blob = env.blob;

          try {
            var exif_is_big_endian, orientation_offset;
            /* eslint-disable consistent-return */

            image_traverse.jpeg_exif_tags_each(data, function (entry) {
              if (entry.ifd === 0 && entry.tag === 0x112 && Array.isArray(entry.value)) {
                env.orientation = entry.value[0] || 1;
                exif_is_big_endian = entry.big_endian;
                orientation_offset = entry.data_offset;
                return false;
              }
            });

            if (orientation_offset) {
              var orientation_patch = exif_is_big_endian ? new Uint8Array([0, 1]) : new Uint8Array([1, 0]);
              env.blob = new Blob([data.slice(0, orientation_offset), orientation_patch, data.slice(orientation_offset + 2)], {
                type: 'image/jpeg'
              });
            }
          } catch (_) {}

          return env;
        });
      }

      function jpeg_rotate_canvas(env) {
        if (!env.is_jpeg) return Promise.resolve(env);
        var orientation = env.orientation - 1;
        if (!orientation) return Promise.resolve(env);
        var canvas;

        if (orientation & 4) {
          canvas = this.pica.options.createCanvas(env.out_canvas.height, env.out_canvas.width);
        } else {
          canvas = this.pica.options.createCanvas(env.out_canvas.width, env.out_canvas.height);
        }

        var ctx = canvas.getContext('2d');
        ctx.save();
        if (orientation & 1) ctx.transform(-1, 0, 0, 1, canvas.width, 0);
        if (orientation & 2) ctx.transform(-1, 0, 0, -1, canvas.width, canvas.height);
        if (orientation & 4) ctx.transform(0, 1, 1, 0, 0, 0);
        ctx.drawImage(env.out_canvas, 0, 0);
        ctx.restore(); // Safari 12 workaround
        // https://github.com/nodeca/pica/issues/199

        env.out_canvas.width = env.out_canvas.height = 0;
        env.out_canvas = canvas;
        return Promise.resolve(env);
      }

      function jpeg_attach_orig_segments(env) {
        if (!env.is_jpeg) return Promise.resolve(env);
        return Promise.all([this._getUint8Array(env.blob), this._getUint8Array(env.out_blob)]).then(function (res) {
          var data = res[0];
          var data_out = res[1];
          if (image_traverse.is_jpeg(data_out)) return Promise.resolve(env);
          var segments = [];
          image_traverse.jpeg_segments_each(data, function (segment) {
            if (segment.code === 0xDA
            /* SOS */
            ) return false;
            segments.push(segment);
          });
          segments = segments.filter(function (segment) {
            if (segment.code === 0xE2) {
              var hdr = data.slice(segment.offset + 4, segment.offset + 11);

              if (String.fromCharCode.apply(hdr) === 'ICC_PROFILE') {
                return false;
              }
            } // Keep all APPn segments excluding APP2 (ICC_PROFILE),
            // remove others because most of them depend on image data (DCT and such).
            //
            // APP0 - JFIF, APP1 - Exif, the rest are photoshop metadata and such
            //
            // See full list at https://www.w3.org/Graphics/JPEG/itu-t81.pdf (table B.1 on page 32)
            //


            if (segment.code >= 0xE0 && segment.code < 0xF0) return true; // Keep comments
            //

            if (segment.code === 0xFE) return true;
            return false;
          }).map(function (segment) {
            return data.slice(segment.offset, segment.offset + segment.length);
          });
          env.blob = new Blob([data.slice(0, 20)].concat(segments).concat([data.slice(20)]), {
            type: 'image/jpeg'
          });
          return env;
        });
      }

      function assign$1(reducer) {
        reducer.before('_blob_to_image', jpeg_patch_exif);
        reducer.after('_transform', jpeg_rotate_canvas);
        reducer.after('_create_blob', jpeg_attach_orig_segments);
      }

      var jpeg_patch_exif_1 = jpeg_patch_exif;
      var jpeg_rotate_canvas_1 = jpeg_rotate_canvas;
      var jpeg_attach_orig_segments_1 = jpeg_attach_orig_segments;
      var assign_1 = assign$1;
      var jpeg_plugins = {
        jpeg_patch_exif: jpeg_patch_exif_1,
        jpeg_rotate_canvas: jpeg_rotate_canvas_1,
        jpeg_attach_orig_segments: jpeg_attach_orig_segments_1,
        assign: assign_1
      };

      function ImageBlobReduce(options) {
        if (!(this instanceof ImageBlobReduce)) return new ImageBlobReduce(options);
        options = options || {};
        this.pica = options.pica || pica({});
        this.initialized = false;
        this.utils = utils;
      }

      ImageBlobReduce.prototype.use = function (plugin
      /*, params, ... */
      ) {
        var args = [this].concat(Array.prototype.slice.call(arguments, 1));
        plugin.apply(plugin, args);
        return this;
      };

      ImageBlobReduce.prototype.init = function () {
        this.use(jpeg_plugins.assign);
      };

      ImageBlobReduce.prototype.toBlob = function (blob, options) {
        var opts = utils.assign({
          max: Infinity
        }, options);
        var env = {
          blob: blob,
          opts: opts
        };

        if (!this.initialized) {
          this.init();
          this.initialized = true;
        }

        return Promise.resolve(env).then(this._blob_to_image).then(this._calculate_size).then(this._transform).then(this._cleanup).then(this._create_blob).then(function (_env) {
          // Safari 12 workaround
          // https://github.com/nodeca/pica/issues/199
          _env.out_canvas.width = _env.out_canvas.height = 0;
          return _env.out_blob;
        });
      };

      ImageBlobReduce.prototype.toCanvas = function (blob, options) {
        var opts = utils.assign({
          max: Infinity
        }, options);
        var env = {
          blob: blob,
          opts: opts
        };

        if (!this.initialized) {
          this.init();
          this.initialized = true;
        }

        return Promise.resolve(env).then(this._blob_to_image).then(this._calculate_size).then(this._transform).then(this._cleanup).then(function (_env) {
          return _env.out_canvas;
        });
      };

      ImageBlobReduce.prototype.before = function (method_name, fn) {
        if (!this[method_name]) throw new Error('Method "' + method_name + '" does not exist');
        if (typeof fn !== 'function') throw new Error('Invalid argument "fn", function expected');
        var old_fn = this[method_name];
        var self = this;

        this[method_name] = function (env) {
          return fn.call(self, env).then(function (_env) {
            return old_fn.call(self, _env);
          });
        };

        return this;
      };

      ImageBlobReduce.prototype.after = function (method_name, fn) {
        if (!this[method_name]) throw new Error('Method "' + method_name + '" does not exist');
        if (typeof fn !== 'function') throw new Error('Invalid argument "fn", function expected');
        var old_fn = this[method_name];
        var self = this;

        this[method_name] = function (env) {
          return old_fn.call(self, env).then(function (_env) {
            return fn.call(self, _env);
          });
        };

        return this;
      };

      ImageBlobReduce.prototype._blob_to_image = function (env) {
        var URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
        env.image = document.createElement('img');
        env.image_url = URL.createObjectURL(env.blob);
        env.image.src = env.image_url;
        return new Promise(function (resolve, reject) {
          env.image.onerror = function () {
            reject(new Error('ImageBlobReduce: failed to create Image() from blob'));
          };

          env.image.onload = function () {
            resolve(env);
          };
        });
      };

      ImageBlobReduce.prototype._calculate_size = function (env) {
        //
        // Note, if your need not "symmetric" resize logic, you MUST check
        // `env.orientation` (set by plugins) and swap width/height appropriately.
        //
        var scale_factor = env.opts.max / Math.max(env.image.width, env.image.height);
        if (scale_factor > 1) scale_factor = 1;
        env.transform_width = Math.max(Math.round(env.image.width * scale_factor), 1);
        env.transform_height = Math.max(Math.round(env.image.height * scale_factor), 1); // Info for user plugins, to check if scaling applied

        env.scale_factor = scale_factor;
        return Promise.resolve(env);
      };

      ImageBlobReduce.prototype._transform = function (env) {
        env.out_canvas = this.pica.options.createCanvas(env.transform_width, env.transform_height); // Dim env temporary vars to prohibit use and avoid confusion when orientation
        // changed. You should take real size from canvas.

        env.transform_width = null;
        env.transform_height = null; // By default use alpha for png only

        var pica_opts = {
          alpha: env.blob.type === 'image/png'
        }; // Extract pica options if been passed

        this.utils.assign(pica_opts, this.utils.pick_pica_resize_options(env.opts));
        return this.pica.resize(env.image, env.out_canvas, pica_opts).then(function () {
          return env;
        });
      };

      ImageBlobReduce.prototype._cleanup = function (env) {
        env.image.src = '';
        env.image = null;
        var URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
        if (URL.revokeObjectURL) URL.revokeObjectURL(env.image_url);
        env.image_url = null;
        return Promise.resolve(env);
      };

      ImageBlobReduce.prototype._create_blob = function (env) {
        return this.pica.toBlob(env.out_canvas, env.blob.type).then(function (blob) {
          env.out_blob = blob;
          return env;
        });
      };

      ImageBlobReduce.prototype._getUint8Array = function (blob) {
        if (blob.arrayBuffer) {
          return blob.arrayBuffer().then(function (buf) {
            return new Uint8Array(buf);
          });
        }

        return new Promise(function (resolve, reject) {
          var fr = new FileReader();
          fr.readAsArrayBuffer(blob);

          fr.onload = function () {
            resolve(new Uint8Array(fr.result));
          };

          fr.onerror = function () {
            reject(new Error('ImageBlobReduce: failed to load data from input blob'));
            fr.abort();
          };

          fr.onabort = function () {
            reject(new Error('ImageBlobReduce: failed to load data from input blob (aborted)'));
          };
        });
      };

      ImageBlobReduce.pica = pica;
      var imageBlobReduce = ImageBlobReduce;
      /* harmony default export */

      __webpack_exports__["default"] = imageBlobReduce;
      /***/
    },

    /***/
    "BJdS":
    /*!************************************************************!*\
      !*** ./src/app/shared/moment/moment-repository.service.ts ***!
      \************************************************************/

    /*! exports provided: MomentRepository */

    /***/
    function BJdS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MomentRepository", function () {
        return MomentRepository;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _utils_crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../utils/crypto */
      "6y+t");
      /* harmony import */


      var _utils_geolocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../utils/geolocation */
      "/Q3I");
      /* harmony import */


      var _moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./moment */
      "uxeB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _database_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../database/database.service */
      "aNgo");

      var MomentRepository = /*@__PURE__*/function () {
        var MomentRepository = /*#__PURE__*/function () {
          function MomentRepository(database) {
            _classCallCheck(this, MomentRepository);

            this.database = database;
            this.collection$ = this.database.main$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])(function (database) {
              return database.addCollections(_defineProperty({}, COLLECTION_NAME, {
                schema: _moment__WEBPACK_IMPORTED_MODULE_4__["schema"]
              }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])(COLLECTION_NAME), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])({
              bufferSize: 1,
              refCount: true
            }));
            this.all$ = this.collection$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])(function (c) {
              return c.find().sort({
                timestamp: 'desc'
              }).$;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (documents) {
              return documents.map(function (d) {
                return new _moment__WEBPACK_IMPORTED_MODULE_4__["Moment"](d);
              });
            }));
          }

          _createClass(MomentRepository, [{
            key: "add$",
            value: function add$(photo) {
              var _this9 = this;

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["defer"])(function () {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["forkJoin"])([_this9.collection$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()), Object(_utils_crypto__WEBPACK_IMPORTED_MODULE_2__["sha256WithBlob"])(photo), Object(_utils_geolocation__WEBPACK_IMPORTED_MODULE_3__["getCurrentPositionOrUndefined"])()]);
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])(function (_ref5) {
                var _ref6 = _slicedToArray2(_ref5, 3),
                    collection = _ref6[0],
                    id = _ref6[1],
                    geolocationPosition = _ref6[2];

                return collection.insert({
                  id: id,
                  timestamp: Date.now(),
                  geolocationPosition: geolocationPosition ? {
                    latitude: geolocationPosition.coords.latitude,
                    longitude: geolocationPosition.coords.longitude
                  } : undefined
                });
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])(function (document) {
                return document.putAttachment({
                  id: _moment__WEBPACK_IMPORTED_MODULE_4__["Moment"].PHOTO_ATTACHMENT_ID,
                  data: photo,
                  type: photo.type
                }, true);
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (attachment) {
                return attachment.doc;
              }));
            }
          }, {
            key: "remove$",
            value: function remove$(id) {
              return this.collection$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])(function (c) {
                return c.bulkRemove([id]);
              }));
            }
          }]);

          return MomentRepository;
        }();

        MomentRepository.ɵfac = function MomentRepository_Factory(t) {
          return new (t || MomentRepository)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_database_database_service__WEBPACK_IMPORTED_MODULE_6__["Database"]));
        };

        MomentRepository.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
          token: MomentRepository,
          factory: MomentRepository.ɵfac,
          providedIn: 'root'
        });
        return MomentRepository;
      }();

      var COLLECTION_NAME = 'moments';
      /***/
    },

    /***/
    "PCNd":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngneat/transloco */
      "QPBi");
      /* harmony import */


      var _ngneat_transloco_locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngneat/transloco-locale */
      "pNjf");
      /* harmony import */


      var _ngrx_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngrx/component */
      "9A8T");
      /* harmony import */


      var _image_image_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./image/image.component */
      "/T4s");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SharedModule = /*@__PURE__*/function () {
        var SharedModule = function SharedModule() {
          _classCallCheck(this, SharedModule);
        };

        SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
          type: SharedModule
        });
        SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
          factory: function SharedModule_Factory(t) {
            return new (t || SharedModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _ngrx_component__WEBPACK_IMPORTED_MODULE_6__["ReactiveComponentModule"], _ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__["TranslocoModule"], _ngneat_transloco_locale__WEBPACK_IMPORTED_MODULE_5__["TranslocoLocaleModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _ngrx_component__WEBPACK_IMPORTED_MODULE_6__["ReactiveComponentModule"], _ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__["TranslocoModule"], _ngneat_transloco_locale__WEBPACK_IMPORTED_MODULE_5__["TranslocoLocaleModule"]]
        });
        return SharedModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](SharedModule, {
          declarations: [_image_image_component__WEBPACK_IMPORTED_MODULE_7__["ImageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _ngrx_component__WEBPACK_IMPORTED_MODULE_6__["ReactiveComponentModule"], _ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__["TranslocoModule"], _ngneat_transloco_locale__WEBPACK_IMPORTED_MODULE_5__["TranslocoLocaleModule"]],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _ngrx_component__WEBPACK_IMPORTED_MODULE_6__["ReactiveComponentModule"], _ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__["TranslocoModule"], _ngneat_transloco_locale__WEBPACK_IMPORTED_MODULE_5__["TranslocoLocaleModule"], _image_image_component__WEBPACK_IMPORTED_MODULE_7__["ImageComponent"]]
        });
      })();
      /***/

    },

    /***/
    "PXhR":
    /*!***********************************!*\
      !*** ./src/app/utils/encoding.ts ***!
      \***********************************/

    /*! exports provided: arrayBufferToHex */

    /***/
    function PXhR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "arrayBufferToHex", function () {
        return arrayBufferToHex;
      });

      function arrayBufferToHex(arrayBuffer) {
        return _toConsumableArray(new Uint8Array(arrayBuffer)).map(function (b) {
          return b.toString(16).padStart(2, '0');
        }).join('');
      }
      /***/

    },

    /***/
    "RxMv":
    /*!******************************************************!*\
      !*** ./src/app/features/home/home-routing.module.ts ***!
      \******************************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function RxMv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home.page */
      "7fvk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_1__["HomePage"]
      }, {
        path: 'photo',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          2).then(__webpack_require__.bind(null,
          /*! ./photo/photo.module */
          "MTLF")).then(function (m) {
            return m.PhotoPageModule;
          });
        }
      }];

      var HomePageRoutingModule = /*@__PURE__*/function () {
        var HomePageRoutingModule = function HomePageRoutingModule() {
          _classCallCheck(this, HomePageRoutingModule);
        };

        HomePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
          type: HomePageRoutingModule
        });
        HomePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
          factory: function HomePageRoutingModule_Factory(t) {
            return new (t || HomePageRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
        return HomePageRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomePageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "XjKM":
    /*!************************************!*\
      !*** ./src/app/utils/thumbnail.ts ***!
      \************************************/

    /*! exports provided: makeThumbnail */

    /***/
    function XjKM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "makeThumbnail", function () {
        return makeThumbnail;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var image_blob_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! image-blob-reduce */
      "9GuR");

      var imageBlobReduce = new image_blob_reduce__WEBPACK_IMPORTED_MODULE_1__["default"]();

      function makeThumbnail(_ref7) {
        var image = _ref7.image,
            maxSize = _ref7.maxSize;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  return _context11.abrupt("return", imageBlobReduce.toBlob(image, {
                    max: maxSize
                  }));

                case 1:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11);
        }));
      }
      /***/

    },

    /***/
    "fIW9":
    /*!**********************************************************!*\
      !*** ./src/app/features/home/camera/camera.component.ts ***!
      \**********************************************************/

    /*! exports provided: CameraComponent */

    /***/
    function fIW9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CameraComponent", function () {
        return CameraComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngneat/until-destroy */
      "VfN6");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _utils_rx_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../utils/rx-operators */
      "KJy6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _shared_moment_moment_repository_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../shared/moment/moment-repository.service */
      "BJdS");
      /* harmony import */


      var _ngrx_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngrx/component */
      "9A8T");
      /* harmony import */


      var _shared_image_image_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../shared/image/image.component */
      "/T4s");
      /* harmony import */


      var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-ionic-image-viewer */
      "6g0+");

      var _c0 = ["video"];

      function CameraComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-image", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var capturedImageUrl_r2 = ctx.ngrxLet;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", capturedImageUrl_r2);
        }
      }

      var CameraComponent = /*@__PURE__*/function () {
        var CameraComponent = /*#__PURE__*/function () {
          function CameraComponent(modalController, alertController, momentRepository) {
            var _this10 = this;

            _classCallCheck(this, CameraComponent);

            this.modalController = modalController;
            this.alertController = alertController;
            this.momentRepository = momentRepository;
            this._videoElement$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
            this.videoElement$ = this._videoElement$.pipe(Object(_utils_rx_operators__WEBPACK_IMPORTED_MODULE_4__["isNonNullable"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
            this.mediaStream$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["defer"])(function () {
              return navigator.mediaDevices.getUserMedia({
                video: {
                  facingMode: 'environment'
                }
              });
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
                return regeneratorRuntime.wrap(function _callee12$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        _context12.next = 2;
                        return this.presentErrorDialog(err);

                      case 2:
                        _context12.next = 4;
                        return this.dismiss();

                      case 4:
                        return _context12.abrupt("return", undefined);

                      case 5:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee12, this);
              }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])({
              bufferSize: 1,
              refCount: true
            }));
            this.imageCapture$ = this.mediaStream$.pipe(Object(_utils_rx_operators__WEBPACK_IMPORTED_MODULE_4__["isNonNullable"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (mediaStream) {
              return new ImageCapture(mediaStream.getVideoTracks()[0]);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])({
              bufferSize: 1,
              refCount: true
            }));
            this._capturedImageUrl$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
            this.revokePreviousImageUrl$ = this._capturedImageUrl$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_ref8) {
              var _ref9 = _slicedToArray2(_ref8, 1),
                  previous = _ref9[0];

              if (previous) URL.revokeObjectURL(previous);
            }));
            this.capturedImageUrl$ = this._capturedImageUrl$.pipe(Object(_utils_rx_operators__WEBPACK_IMPORTED_MODULE_4__["isNonNullable"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
            this.cameraPreview$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this.videoElement$, this.mediaStream$.pipe(Object(_utils_rx_operators__WEBPACK_IMPORTED_MODULE_4__["isNonNullable"])())]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_ref10) {
              var _ref11 = _slicedToArray2(_ref10, 2),
                  videoElement = _ref11[0],
                  mediaStream = _ref11[1];

              videoElement.srcObject = mediaStream;
            }));
            this.revokePreviousImageUrl$.pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__["untilDestroyed"])(this)).subscribe();
            this.cameraPreview$.pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__["untilDestroyed"])(this)).subscribe();
          }

          _createClass(CameraComponent, [{
            key: "videoElement",
            set: function set(value) {
              this._videoElement$.next(value.nativeElement);
            }
          }, {
            key: "capture",
            value: function capture() {
              var _this11 = this;

              this.imageCapture$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (imageCapture) {
                return imageCapture.takePhoto();
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (imageBlob) {
                _this11._capturedImageUrl$.next(URL.createObjectURL(imageBlob));
              }), Object(_utils_rx_operators__WEBPACK_IMPORTED_MODULE_4__["concatTap"])(function (imageBlob) {
                return _this11.momentRepository.add$(imageBlob);
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                  return regeneratorRuntime.wrap(function _callee13$(_context13) {
                    while (1) {
                      switch (_context13.prev = _context13.next) {
                        case 0:
                          // eslint-disable-next-line no-console
                          console.error(err);
                          _context13.next = 3;
                          return this.presentErrorDialog(err);

                        case 3:
                          return _context13.abrupt("return", undefined);

                        case 4:
                        case "end":
                          return _context13.stop();
                      }
                    }
                  }, _callee13, this);
                }));
              }), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__["untilDestroyed"])(this)).subscribe();
            }
          }, {
            key: "dismiss",
            value: function dismiss() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
                return regeneratorRuntime.wrap(function _callee14$(_context14) {
                  while (1) {
                    switch (_context14.prev = _context14.next) {
                      case 0:
                        return _context14.abrupt("return", this.modalController.dismiss());

                      case 1:
                      case "end":
                        return _context14.stop();
                    }
                  }
                }, _callee14, this);
              }));
            }
          }, {
            key: "presentErrorDialog",
            value: function presentErrorDialog(err) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
                var alert;
                return regeneratorRuntime.wrap(function _callee15$(_context15) {
                  while (1) {
                    switch (_context15.prev = _context15.next) {
                      case 0:
                        _context15.next = 2;
                        return this.alertController.create({
                          header: err instanceof Error ? err.name : 'Unknown Error',
                          message: err instanceof Error ? err.message : JSON.stringify(err),
                          buttons: [{
                            text: 'ok'
                          }]
                        });

                      case 2:
                        alert = _context15.sent;
                        _context15.next = 5;
                        return alert.present();

                      case 5:
                      case "end":
                        return _context15.stop();
                    }
                  }
                }, _callee15, this);
              }));
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.mediaStream$.pipe(Object(_utils_rx_operators__WEBPACK_IMPORTED_MODULE_4__["isNonNullable"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (mediaStream) {
                return mediaStream.getTracks().forEach(function (track) {
                  return track.stop();
                });
              })).subscribe();
            }
          }]);

          return CameraComponent;
        }();

        CameraComponent.ɵfac = function CameraComponent_Factory(t) {
          return new (t || CameraComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_moment_moment_repository_service__WEBPACK_IMPORTED_MODULE_7__["MomentRepository"]));
        };

        CameraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
          type: CameraComponent,
          selectors: [["app-camera"]],
          viewQuery: function CameraComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 1);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.videoElement = _t.first);
            }
          },
          decls: 7,
          vars: 1,
          consts: [["fill", "clear", 1, "dismiss", 3, "click"], ["slot", "icon-only", "name", "close-outline", "color", "light"], ["fill", "clear", 1, "capture", 3, "click"], ["slot", "icon-only", "name", "radio-button-on-outline", "color", "light"], ["class", "captured ion-margin", 4, "ngrxLet"], ["playsinline", "", "autoplay", ""], ["video", ""], [1, "captured", "ion-margin"], ["ionImgViewer", "", 3, "src"]],
          template: function CameraComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-button", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CameraComponent_Template_ion_button_click_0_listener() {
                return ctx.dismiss();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-button", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CameraComponent_Template_ion_button_click_2_listener() {
                return ctx.capture();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-icon", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, CameraComponent_div_4_Template, 2, 1, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "video", 5, 6);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngrxLet", ctx.capturedImageUrl$);
            }
          },
          directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonIcon"], _ngrx_component__WEBPACK_IMPORTED_MODULE_8__["LetDirective"], _shared_image_image_component__WEBPACK_IMPORTED_MODULE_9__["ImageComponent"], ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_10__["NgxIonicImageViewerDirective"]],
          styles: ["[_nghost-%COMP%] {\n  display: contents;\n  position: relative;\n}\n\nvideo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n\nion-button.dismiss[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  z-index: 1;\n  width: 48px;\n  height: 48px;\n  --border-radius: 50%;\n  --padding-end: 0;\n  --padding-start: 0;\n}\n\nion-button.capture[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translate(-50%);\n  z-index: 1;\n  height: 72px;\n  width: 72px;\n  margin: 0 0 var(--ion-margin, 16px);\n  --border-radius: 50%;\n  --padding-end: 0;\n  --padding-start: 0;\n  --background: #0006;\n}\n\nion-button.capture[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n}\n\n.captured[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 16px;\n  right: 16px;\n  overflow: hidden;\n  border-radius: 4px;\n  border: 1px solid var(--ion-color-light-shade);\n}\n\n.captured[_ngcontent-%COMP%]   app-image[_ngcontent-%COMP%] {\n  z-index: 1;\n  width: 60px;\n  height: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NhbWVyYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLDBCQUFBO0tBQUEsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7RUFFQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQURGOztBQUdFO0VBQ0UsZUFBQTtBQURKOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4Q0FBQTtBQUZGOztBQUlFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRkoiLCJmaWxlIjoiY2FtZXJhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBjb250ZW50cztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG52aWRlbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuaW9uLWJ1dHRvbi5kaXNtaXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcblxuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xufVxuXG5pb24tYnV0dG9uLmNhcHR1cmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbiAgei1pbmRleDogMTtcbiAgaGVpZ2h0OiA3MnB4O1xuICB3aWR0aDogNzJweDtcbiAgbWFyZ2luOiAwIDAgdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG5cbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1iYWNrZ3JvdW5kOiAjMDAwNjtcblxuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiA2NHB4O1xuICB9XG59XG5cbi5jYXB0dXJlZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxNnB4O1xuICByaWdodDogMTZweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuXG4gIGFwcC1pbWFnZSB7XG4gICAgei1pbmRleDogMTtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gIH1cbn1cbiJdfQ== */"]
        });
        CameraComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__["UntilDestroy"])()], CameraComponent);
        return CameraComponent;
      }();
      /***/

    },

    /***/
    "fOOd":
    /*!**********************************************!*\
      !*** ./src/app/features/home/home.module.ts ***!
      \**********************************************/

    /*! exports provided: HomePageModule */

    /***/
    function fOOd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
      });
      /* harmony import */


      var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ngx-ionic-image-viewer */
      "6g0+");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _camera_camera_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./camera/camera.component */
      "fIW9");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home-routing.module */
      "RxMv");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./home.page */
      "7fvk");
      /* harmony import */


      var _moment_thumbnail_moment_thumbnail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./moment-thumbnail/moment-thumbnail.component */
      "lK9d");
      /* harmony import */


      var _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./settings/settings.component */
      "k0O3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomePageModule = /*@__PURE__*/function () {
        var HomePageModule = function HomePageModule() {
          _classCallCheck(this, HomePageModule);
        };

        HomePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
          type: HomePageModule
        });
        HomePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
          factory: function HomePageModule_Factory(t) {
            return new (t || HomePageModule)();
          },
          imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomePageRoutingModule"], ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_0__["NgxIonicImageViewerModule"]]]
        });
        return HomePageModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](HomePageModule, {
          declarations: [_home_page__WEBPACK_IMPORTED_MODULE_4__["HomePage"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"], _camera_camera_component__WEBPACK_IMPORTED_MODULE_2__["CameraComponent"], _moment_thumbnail_moment_thumbnail_component__WEBPACK_IMPORTED_MODULE_5__["MomentThumbnailComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomePageRoutingModule"], ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_0__["NgxIonicImageViewerModule"]]
        });
      })();
      /***/

    },

    /***/
    "k0O3":
    /*!**************************************************************!*\
      !*** ./src/app/features/home/settings/settings.component.ts ***!
      \**************************************************************/

    /*! exports provided: SettingsComponent */

    /***/
    function k0O3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
        return SettingsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngneat/until-destroy */
      "VfN6");
      /* harmony import */


      var _package_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../package.json */
      "kiQV");

      var _package_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../../../../../package.json */
      "kiQV", 1);
      /* harmony import */


      var _shared_themes_themes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/themes/themes.service */
      "+JQf");
      /* harmony import */


      var _shared_transloco_transloco_root_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../shared/transloco/transloco-root.module */
      "AZLn");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_languages_languages_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../shared/languages/languages.service */
      "PmnW");
      /* harmony import */


      var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngneat/transloco */
      "QPBi");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ngrx_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngrx/component */
      "9A8T");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function SettingsComponent_ion_list_0_ion_select_5_ion_select_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-select-option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var theme_r6 = ctx.$implicit;

          var t_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", theme_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", t_r1("theme." + theme_r6), " ");
        }
      }

      function SettingsComponent_ion_list_0_ion_select_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function SettingsComponent_ion_list_0_ion_select_5_Template_ion_select_ionChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r8.onChangeTheme($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SettingsComponent_ion_list_0_ion_select_5_ion_select_option_1_Template, 2, 2, "ion-select-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var theme_r4 = ctx.ngrxLet;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", theme_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.themes);
        }
      }

      function SettingsComponent_ion_list_0_ion_select_10_ion_select_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-select-option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var language_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", language_r12.key);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](language_r12.value);
        }
      }

      function SettingsComponent_ion_list_0_ion_select_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function SettingsComponent_ion_list_0_ion_select_10_Template_ion_select_ionChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r13.onChangeLanguage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SettingsComponent_ion_list_0_ion_select_10_ion_select_option_1_Template, 2, 2, "ion-select-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "keyvalue");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var language_r10 = ctx.ngrxLet;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", language_r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, ctx_r3.languages));
        }
      }

      function SettingsComponent_ion_list_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-list", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ion-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, SettingsComponent_ion_list_0_ion_select_5_Template, 2, 2, "ion-select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "ion-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, SettingsComponent_ion_list_0_ion_select_10_Template, 3, 4, "ion-select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "ion-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "ion-note", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var t_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](t_r1(".theme"));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngrxLet", ctx_r0.theme$);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](t_r1("languages"));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngrxLet", ctx_r0.language$);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](t_r1("version"));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.version);
        }
      }

      var SettingsComponent = /*@__PURE__*/function () {
        var SettingsComponent = /*#__PURE__*/function () {
          function SettingsComponent(themesService, languagesService) {
            _classCallCheck(this, SettingsComponent);

            this.themesService = themesService;
            this.languagesService = languagesService;
            this.themes = _shared_themes_themes_service__WEBPACK_IMPORTED_MODULE_3__["ThemesService"].THEMES;
            this.theme$ = this.themesService.theme$;
            this.languages = _shared_transloco_transloco_root_module__WEBPACK_IMPORTED_MODULE_4__["languages"];
            this.language$ = this.languagesService.language$;
            this.version = _package_json__WEBPACK_IMPORTED_MODULE_2__["version"];
          }

          _createClass(SettingsComponent, [{
            key: "onChangeTheme",
            value: function onChangeTheme(event) {
              return this.themesService.setTheme$(event.detail.value).pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__["untilDestroyed"])(this)).subscribe();
            }
          }, {
            key: "onChangeLanguage",
            value: function onChangeLanguage(event) {
              return this.languagesService.setLanguage$(event.detail.value).pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__["untilDestroyed"])(this)).subscribe();
            }
          }]);

          return SettingsComponent;
        }();

        SettingsComponent.ɵfac = function SettingsComponent_Factory(t) {
          return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_themes_themes_service__WEBPACK_IMPORTED_MODULE_3__["ThemesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_languages_languages_service__WEBPACK_IMPORTED_MODULE_6__["LanguagesService"]));
        };

        SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
          type: SettingsComponent,
          selectors: [["app-settings"]],
          decls: 1,
          vars: 0,
          consts: [["lines", "none", 4, "transloco"], ["lines", "none"], ["name", "moon-outline", "slot", "start"], [3, "value", "ionChange", 4, "ngrxLet"], ["name", "language-outline", "slot", "start"], ["name", "information-outline", "slot", "start"], ["slot", "end"], [3, "value", "ionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
          template: function SettingsComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, SettingsComponent_ion_list_0_Template, 17, 6, "ion-list", 0);
            }
          },
          directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_7__["TranslocoDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonLabel"], _ngrx_component__WEBPACK_IMPORTED_MODULE_9__["LetDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonNote"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["SelectValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonSelectOption"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["KeyValuePipe"]],
          styles: ["ion-select[_ngcontent-%COMP%] {\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0FBQ0YiLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VsZWN0IHtcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbn1cbiJdfQ== */"]
        });
        SettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__["UntilDestroy"])()], SettingsComponent);
        return SettingsComponent;
      }();
      /***/

    },

    /***/
    "kiQV":
    /*!**********************!*\
      !*** ./package.json ***!
      \**********************/

    /*! exports provided: name, version, author, homepage, scripts, private, dependencies, devDependencies, husky, lint-staged, default */

    /***/
    function kiQV(module) {
      module.exports = JSON.parse("{\"name\":\"moment\",\"version\":\"0.0.1\",\"author\":\"Sean Wu\",\"homepage\":\"https://github.com/seanwu1105\",\"scripts\":{\"serve\":\"ionic serve\",\"serve.hmr\":\"ionic serve -- --hmr\",\"build\":\"ionic build --prod\",\"build.watch.pwa\":\"ionic build --prod --watch\",\"test\":\"ng test\",\"test.ci\":\"ng test --no-watch --no-progress --browsers=ChromeHeadlessCI\",\"lint\":\"prettier --check . && stylelint \\\"**/*.{css,scss,sass}\\\" && ng lint\",\"e2e\":\"ng e2e\",\"prepare\":\"husky install\"},\"private\":true,\"dependencies\":{\"@angular/common\":\"~11.2.3\",\"@angular/core\":\"~11.2.3\",\"@angular/forms\":\"~11.2.3\",\"@angular/platform-browser\":\"~11.2.3\",\"@angular/platform-browser-dynamic\":\"~11.2.3\",\"@angular/router\":\"~11.2.3\",\"@angular/service-worker\":\"~11.2.3\",\"@ionic-native/core\":\"^5.0.0\",\"@ionic/angular\":\"^5.5.5\",\"@ngneat/transloco\":\"^2.20.1\",\"@ngneat/transloco-locale\":\"^1.4.0\",\"@ngneat/until-destroy\":\"^8.0.4\",\"@ngrx/component\":\"^11.0.1\",\"buffer\":\"^6.0.3\",\"image-blob-reduce\":\"^2.2.2\",\"ngx-ionic-image-viewer\":\"^0.7.4\",\"pouchdb-adapter-memory\":\"^7.2.2\",\"process\":\"^0.11.10\",\"rxdb\":\"^9.15.0\",\"rxjs\":\"^6.6.6\",\"stream-browserify\":\"^3.0.0\",\"tslib\":\"^2.0.0\",\"zone.js\":\"^0.11.4\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"^0.1101.0\",\"@angular-eslint/builder\":\"1.2.0\",\"@angular-eslint/eslint-plugin\":\"1.2.0\",\"@angular-eslint/eslint-plugin-template\":\"1.2.0\",\"@angular-eslint/schematics\":\"1.2.0\",\"@angular-eslint/template-parser\":\"1.2.0\",\"@angular/cli\":\"~11.2.3\",\"@angular/compiler\":\"~11.2.3\",\"@angular/compiler-cli\":\"~11.2.3\",\"@angular/language-service\":\"~11.2.3\",\"@ionic/angular-toolkit\":\"^3.0.0\",\"@types/geojson\":\"^7946.0.7\",\"@types/jasmine\":\"^3.6.4\",\"@types/jasminewd2\":\"~2.0.3\",\"@types/node\":\"^14.14.31\",\"@types/pouchdb-adapter-memory\":\"^6.1.3\",\"@types/w3c-image-capture\":\"^1.0.2\",\"@typescript-eslint/eslint-plugin\":\"4.16.1\",\"@typescript-eslint/parser\":\"4.16.1\",\"eslint\":\"^7.21.0\",\"eslint-plugin-import\":\"2.22.1\",\"eslint-plugin-jsdoc\":\"32.2.0\",\"eslint-plugin-prefer-arrow\":\"1.2.3\",\"eslint-plugin-rxjs\":\"^3.1.0\",\"husky\":\"^5.1.3\",\"jasmine-core\":\"^3.6.0\",\"jasmine-spec-reporter\":\"^6.0.0\",\"karma\":\"^5.2.0\",\"karma-chrome-launcher\":\"~3.1.0\",\"karma-coverage\":\"^2.0.3\",\"karma-jasmine\":\"^4.0.1\",\"karma-jasmine-html-reporter\":\"^1.5.0\",\"lint-staged\":\"^10.5.4\",\"prettier\":\"^2.2.1\",\"protractor\":\"~7.0.0\",\"stylelint\":\"^13.11.0\",\"stylelint-config-standard\":\"^20.0.0\",\"stylelint-scss\":\"^3.19.0\",\"ts-node\":\"^9.1.1\",\"typescript\":\"~4.1.3\"},\"husky\":{\"hooks\":{\"pre-commit\":\"lint-staged\"}},\"lint-staged\":{\"*.{js,ts,scss,css,html,md,yml,json}\":\"prettier --write\"}}");
      /***/
    },

    /***/
    "lK9d":
    /*!******************************************************************************!*\
      !*** ./src/app/features/home/moment-thumbnail/moment-thumbnail.component.ts ***!
      \******************************************************************************/

    /*! exports provided: MomentThumbnailComponent */

    /***/
    function lK9d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MomentThumbnailComponent", function () {
        return MomentThumbnailComponent;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _utils_rx_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../utils/rx-operators */
      "KJy6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngrx_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/component */
      "9A8T");
      /* harmony import */


      var _shared_image_image_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../shared/image/image.component */
      "/T4s");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0(a0) {
        return {
          id: a0
        };
      };

      function MomentThumbnailComponent_ng_container_0_app_image_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-image", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-ripple-effect");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var thumbnailUrl_r3 = ctx.ngrxLet;

          var moment_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngrxLet;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, moment_r1.id))("src", thumbnailUrl_r3);
        }
      }

      function MomentThumbnailComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MomentThumbnailComponent_ng_container_0_app_image_1_Template, 2, 4, "app-image", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var moment_r1 = ctx.ngrxLet;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngrxLet", moment_r1.thumbnailUrl$);
        }
      }

      var MomentThumbnailComponent = /*@__PURE__*/function () {
        var MomentThumbnailComponent = /*#__PURE__*/function () {
          function MomentThumbnailComponent() {
            _classCallCheck(this, MomentThumbnailComponent);

            this._moment$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](undefined);
            this.moment$ = this._moment$.pipe(Object(_utils_rx_operators__WEBPACK_IMPORTED_MODULE_2__["isNonNullable"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(function (x, y) {
              return x.id === y.id;
            }));
          }

          _createClass(MomentThumbnailComponent, [{
            key: "moment",
            set: function set(value) {
              this._moment$.next(value);
            }
          }]);

          return MomentThumbnailComponent;
        }();

        MomentThumbnailComponent.ɵfac = function MomentThumbnailComponent_Factory(t) {
          return new (t || MomentThumbnailComponent)();
        };

        MomentThumbnailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
          type: MomentThumbnailComponent,
          selectors: [["app-moment-thumbnail"]],
          inputs: {
            moment: "moment"
          },
          decls: 1,
          vars: 1,
          consts: [[4, "ngrxLet"], ["routerLink", "photo", "class", "ion-activatable", 3, "queryParams", "src", 4, "ngrxLet"], ["routerLink", "photo", 1, "ion-activatable", 3, "queryParams", "src"]],
          template: function MomentThumbnailComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MomentThumbnailComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngrxLet", ctx.moment$);
            }
          },
          directives: [_ngrx_component__WEBPACK_IMPORTED_MODULE_4__["LetDirective"], _shared_image_image_component__WEBPACK_IMPORTED_MODULE_5__["ImageComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRippleEffect"]],
          styles: ["[_nghost-%COMP%] {\n  display: block;\n  overflow: hidden;\n}\n\napp-image[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21vbWVudC10aHVtYm5haWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDRiIsImZpbGUiOiJtb21lbnQtdGh1bWJuYWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuYXBwLWltYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"]
        });
        return MomentThumbnailComponent;
      }();
      /***/

    },

    /***/
    "tOV+":
    /*!*********************************!*\
      !*** ./src/app/utils/errors.ts ***!
      \*********************************/

    /*! exports provided: DataNotFoundError */

    /***/
    function tOV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataNotFoundError", function () {
        return DataNotFoundError;
      });

      var DataNotFoundError = /*#__PURE__*/function (_Error) {
        _inherits(DataNotFoundError, _Error);

        var _super = _createSuper(DataNotFoundError);

        function DataNotFoundError() {
          var _this12;

          _classCallCheck(this, DataNotFoundError);

          _this12 = _super.apply(this, arguments);
          _this12.name = DataNotFoundError.name;
          return _this12;
        }

        return DataNotFoundError;
      }( /*#__PURE__*/_wrapNativeSuper(Error));
      /***/

    },

    /***/
    "uxeB":
    /*!*****************************************!*\
      !*** ./src/app/shared/moment/moment.ts ***!
      \*****************************************/

    /*! exports provided: schema, Moment */

    /***/
    function uxeB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "schema", function () {
        return schema;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Moment", function () {
        return Moment;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _utils_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../utils/errors */
      "tOV+");
      /* harmony import */


      var _utils_thumbnail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../utils/thumbnail */
      "XjKM");

      var schema = {
        version: 0,
        type: 'object',
        properties: {
          id: {
            type: 'string',
            primary: true
          },
          timestamp: {
            type: 'number'
          },
          geolocationPosition: {
            type: 'object',
            properties: {
              latitude: {
                type: 'number'
              },
              longitude: {
                type: 'number'
              }
            },
            required: ['latitude', 'longitude']
          }
        },
        indexes: ['timestamp'],
        required: ['timestamp'],
        attachments: {
          encrypted: false
        }
      };

      var Moment = /*@__PURE__*/function () {
        var Moment = /*#__PURE__*/function () {
          function Moment(document) {
            var _this13 = this;

            _classCallCheck(this, Moment);

            this.document = document;
            this.id = this.document.id;
            this.mimeType = this.getAttachment(Moment.PHOTO_ATTACHMENT_ID).type;
            this.timestamp = this.document.timestamp;
            this.geolocationPosition = this.document.geolocationPosition;
            this.photoUrl$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(function () {
              return _this13.getAttachment(Moment.PHOTO_ATTACHMENT_ID).getData();
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (blob) {
              return URL.createObjectURL(blob);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])({
              bufferSize: 1,
              refCount: true
            }));
            this.thumbnailUrl$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_this13.document.getAttachment(Moment.THUMBNAIL_ATTACHMENT_ID));
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (attachment) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this13, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
                var thumbnail;
                return regeneratorRuntime.wrap(function _callee16$(_context16) {
                  while (1) {
                    switch (_context16.prev = _context16.next) {
                      case 0:
                        if (!attachment) {
                          _context16.next = 2;
                          break;
                        }

                        return _context16.abrupt("return", attachment.getData());

                      case 2:
                        _context16.t0 = Object(_utils_thumbnail__WEBPACK_IMPORTED_MODULE_4__["makeThumbnail"]);
                        _context16.next = 5;
                        return this.getAttachment(Moment.PHOTO_ATTACHMENT_ID).getData();

                      case 5:
                        _context16.t1 = _context16.sent;
                        _context16.t2 = {
                          image: _context16.t1,
                          maxSize: 300
                        };
                        _context16.next = 9;
                        return (0, _context16.t0)(_context16.t2);

                      case 9:
                        thumbnail = _context16.sent;
                        _context16.next = 12;
                        return this.document.putAttachment({
                          id: Moment.THUMBNAIL_ATTACHMENT_ID,
                          data: thumbnail,
                          type: this.mimeType
                        }, true);

                      case 12:
                        return _context16.abrupt("return", thumbnail);

                      case 13:
                      case "end":
                        return _context16.stop();
                    }
                  }
                }, _callee16, this);
              }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (blob) {
              return URL.createObjectURL(blob);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])({
              bufferSize: 1,
              refCount: true
            }));
          }

          _createClass(Moment, [{
            key: "getAttachment",
            value: function getAttachment(id) {
              var attachment = this.document.getAttachment(id);
              if (attachment) return attachment;
              throw new _utils_errors__WEBPACK_IMPORTED_MODULE_3__["DataNotFoundError"]("Cannot get the attachment with ID: ".concat(id));
            }
          }]);

          return Moment;
        }();

        Moment.PHOTO_ATTACHMENT_ID = 'original';
        Moment.THUMBNAIL_ATTACHMENT_ID = 'thumbnail';
        return Moment;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=1-es5.af86f1df9c2db08a71a7.js.map