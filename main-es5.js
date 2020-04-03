function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/aboutus/aboutus.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/aboutus/aboutus.component.ts ***!
    \**********************************************/

  /*! exports provided: AboutusComponent */

  /***/
  function srcAppAboutusAboutusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutusComponent", function () {
      return AboutusComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutusComponent =
    /*#__PURE__*/
    function () {
      function AboutusComponent() {
        _classCallCheck(this, AboutusComponent);
      }

      _createClass(AboutusComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutusComponent;
    }();

    AboutusComponent.ɵfac = function AboutusComponent_Factory(t) {
      return new (t || AboutusComponent)();
    };

    AboutusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutusComponent,
      selectors: [["app-aboutus"]],
      decls: 19,
      vars: 0,
      consts: [[1, "container-fluid", "img-fluid", "imagess"], [1, "row"], [1, "col-lg-6"], [1, "text-white"], [2, "margin-bottom", "0px"], ["href", "#", 1, "download-btn"], [1, "bx", "bxs-like", "bx-spin"], ["src", "../../assets/img/hero-img.png", "alt", "", 1, "img-fluid"]],
      template: function AboutusComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Vision");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "To be a respected technology company recognized for its integrity and innovation. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Mission");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "To provide compelling value to our clients by blending technology, people and business acumen. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Read More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".imagess[_ngcontent-%COMP%]{\r\n    background-image: url('Digital-Transformation.jpg');\r\n    background-size: cover;\r\n    height: 700px;\r\n    padding: 140px;\r\n}\r\n@media (max-width: 768px) { \r\n    .imagess[_ngcontent-%COMP%]{\r\n        padding: 40px;\r\n        height: 500px;\r\n    }\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXR1cy9hYm91dHVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7SUFDSSxtREFBeUU7SUFDekUsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixjQUFjO0FBQ2xCO0FBQ0E7SUFDSTtRQUNJLGFBQWE7UUFDYixhQUFhO0lBQ2pCO0NBQ0giLCJmaWxlIjoic3JjL2FwcC9hYm91dHVzL2Fib3V0dXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi5pbWFnZXNze1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvYmFubmVyL0RpZ2l0YWwtVHJhbnNmb3JtYXRpb24uanBnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDcwMHB4O1xyXG4gICAgcGFkZGluZzogMTQwcHg7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7IFxyXG4gICAgLmltYWdlc3N7XHJcbiAgICAgICAgcGFkZGluZzogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgfVxyXG4gfVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-aboutus',
          templateUrl: './aboutus.component.html',
          styleUrls: ['./aboutus.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'satwic';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _scrollspy_scrollspy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./scrollspy/scrollspy.component */
    "./src/app/scrollspy/scrollspy.component.ts");
    /* harmony import */


    var _scroll_spy_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./scroll-spy.directive */
    "./src/app/scroll-spy.directive.ts");
    /* harmony import */


    var _demosection_demosection_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./demosection/demosection.component */
    "./src/app/demosection/demosection.component.ts");
    /* harmony import */


    var _operationalsection_operationalsection_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./operationalsection/operationalsection.component */
    "./src/app/operationalsection/operationalsection.component.ts");
    /* harmony import */


    var _practicesection_practicesection_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./practicesection/practicesection.component */
    "./src/app/practicesection/practicesection.component.ts");
    /* harmony import */


    var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./aboutus/aboutus.component */
    "./src/app/aboutus/aboutus.component.ts");
    /* harmony import */


    var _servicesectiion_servicesectiion_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./servicesectiion/servicesectiion.component */
    "./src/app/servicesectiion/servicesectiion.component.ts");
    /* harmony import */


    var _lovecustomer_lovecustomer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./lovecustomer/lovecustomer.component */
    "./src/app/lovecustomer/lovecustomer.component.ts");
    /* harmony import */


    var _client_client_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./client/client.component */
    "./src/app/client/client.component.ts");
    /* harmony import */


    var _industries_industries_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./industries/industries.component */
    "./src/app/industries/industries.component.ts");
    /* harmony import */


    var _ourteam_ourteam_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./ourteam/ourteam.component */
    "./src/app/ourteam/ourteam.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var routes = [{
      path: 'test',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: '',
      component: _scrollspy_scrollspy_component__WEBPACK_IMPORTED_MODULE_6__["ScrollspyComponent"]
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _scrollspy_scrollspy_component__WEBPACK_IMPORTED_MODULE_6__["ScrollspyComponent"], _scroll_spy_directive__WEBPACK_IMPORTED_MODULE_7__["ScrollSpyDirective"], _demosection_demosection_component__WEBPACK_IMPORTED_MODULE_8__["DemosectionComponent"], _operationalsection_operationalsection_component__WEBPACK_IMPORTED_MODULE_9__["OperationalsectionComponent"], _practicesection_practicesection_component__WEBPACK_IMPORTED_MODULE_10__["PracticesectionComponent"], _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_11__["AboutusComponent"], _servicesectiion_servicesectiion_component__WEBPACK_IMPORTED_MODULE_12__["ServicesectiionComponent"], _lovecustomer_lovecustomer_component__WEBPACK_IMPORTED_MODULE_13__["LovecustomerComponent"], _client_client_component__WEBPACK_IMPORTED_MODULE_14__["ClientComponent"], _industries_industries_component__WEBPACK_IMPORTED_MODULE_15__["IndustriesComponent"], _ourteam_ourteam_component__WEBPACK_IMPORTED_MODULE_16__["OurteamComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _scrollspy_scrollspy_component__WEBPACK_IMPORTED_MODULE_6__["ScrollspyComponent"], _scroll_spy_directive__WEBPACK_IMPORTED_MODULE_7__["ScrollSpyDirective"], _demosection_demosection_component__WEBPACK_IMPORTED_MODULE_8__["DemosectionComponent"], _operationalsection_operationalsection_component__WEBPACK_IMPORTED_MODULE_9__["OperationalsectionComponent"], _practicesection_practicesection_component__WEBPACK_IMPORTED_MODULE_10__["PracticesectionComponent"], _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_11__["AboutusComponent"], _servicesectiion_servicesectiion_component__WEBPACK_IMPORTED_MODULE_12__["ServicesectiionComponent"], _lovecustomer_lovecustomer_component__WEBPACK_IMPORTED_MODULE_13__["LovecustomerComponent"], _client_client_component__WEBPACK_IMPORTED_MODULE_14__["ClientComponent"], _industries_industries_component__WEBPACK_IMPORTED_MODULE_15__["IndustriesComponent"], _ourteam_ourteam_component__WEBPACK_IMPORTED_MODULE_16__["OurteamComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/client/client.component.ts":
  /*!********************************************!*\
    !*** ./src/app/client/client.component.ts ***!
    \********************************************/

  /*! exports provided: ClientComponent */

  /***/
  function srcAppClientClientComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientComponent", function () {
      return ClientComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ClientComponent =
    /*#__PURE__*/
    function () {
      function ClientComponent() {
        _classCallCheck(this, ClientComponent);
      }

      _createClass(ClientComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ClientComponent;
    }();

    ClientComponent.ɵfac = function ClientComponent_Factory(t) {
      return new (t || ClientComponent)();
    };

    ClientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientComponent,
      selectors: [["app-client"]],
      decls: 89,
      vars: 0,
      consts: [[1, "counts", "section-bg", 2, "padding", "40px"], [1, "container"], [1, "section-title"], [1, "row", 2, "padding", "0px 40px"], ["id", "demo", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#demo", "data-slide-to", "0", 1, "active"], ["data-target", "#demo", "data-slide-to", "1"], ["data-target", "#demo", "data-slide-to", "2"], [1, "carousel-inner"], [1, "carousel-item", "active"], [1, "row"], [1, "col-lg-3", "col-md-3", "col-sm-12"], [1, "count-boxs"], ["src", "../../assets/assets/img/client/city.png", "height", "150px", "alt", "partnerLogo", 1, "partnerLogos"], ["src", "../../assets/assets/img/client/country.png", "height", "150px", "alt", "partnerLogo", 1, "partnerLogos"], ["src", "../../assets/assets/img/client/distric.png", "height", "150px", "alt", "partnerLogo", 1, "partnerLogos"], ["src", "../../assets/assets/img/client/justice.png", "height", "150px", "alt", "partnerLogo", 1, "partnerLogos"], [1, "carousel-item"], [1, "col-lg-3", "col-md-6", "text-center"], [1, "count-box"], ["src", "../../assets/assets/img/client/water.png", "width", "280px", "height", "150px", "alt", "partnerLogo", 1, "partnerLogos"], ["src", "../../assets/assets/img/client/metro.png", "width", "200px", "height", "150px", "alt", "partnerLogo", 1, "partnerLogos"], ["src", "../../assets/assets/img/client/ladot.png", "width", "200px", "height", "150px", "alt", "partnerLogo", 1, "partnerLogos"], ["src", "../../assets/assets/img/client/calpers.png", "width", "200px", "height", "150px", "alt", "partnerLogo"], ["href", "#demo", "data-slide", "prev", 1, "carousel-control-prev"], [1, "carousel-control-prev-icon"], ["href", "#demo", "data-slide", "next", 1, "carousel-control-next"], [1, "carousel-control-next-icon"], [1, "count-boxss"], ["src", "../../assets/assets/img/partner/informatica.png", "alt", "partnerLogo", 1, "img-fluid"], [1, "count-boxss", 2, "padding-top", "45px"], ["src", "../../assets/assets/img/partner/microstrategy.png", "alt", "partnerLogo", 1, "img-fluid"], ["src", "../../assets/assets/img/partner/ms.png", "alt", "partnerLogo", 1, "img-fluid"], [1, "count-boxss", 2, "padding-top", "15px"], ["src", "../../assets/assets/img/partner/google.webp", "alt", "partnerLogo", 1, "img-fluid"], ["src", "../../assets/assets/img/partner/oracle.png", "alt", "partnerLogo", 1, "img-fluid"], [1, "count-boxss", 2, "padding-top", "5px"], ["src", "../../assets/assets/img/partner/aws.png", "alt", "partnerLogo", 1, "img-fluid"], ["src", "../../assets/assets/img/partner/tableau.png", "alt", "partnerLogo", "width", "200px", "height", "90px", 1, "partnerLogos"], [1, "count-boxss", 2, "padding-top", "30px", "padding-left", "65px"], ["src", "../../assets/assets/img/partner/ibm.png", "alt", "partnerLogo", "width", "200px", "height", "90px", 1, "partnerLogos"]],
      template: function ClientComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Public Sector Clients ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Alliances & Technology");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".clients[_ngcontent-%COMP%]   .clients-wrap[_ngcontent-%COMP%] {\r\n    border-top: 1px solid #f1eeed;\r\n    border-left: 1px solid #f1eeed;\r\n  }\r\n  \r\n  .clients[_ngcontent-%COMP%]   .client-logo[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-right: 1px solid #f1eeed;\r\n    border-bottom: 1px solid #f1eeed;\r\n    overflow: hidden;\r\n    border-color: #fff;\r\n    border-width: 1px;\r\n    height: 250px;\r\n  }\r\n  \r\n  .clients[_ngcontent-%COMP%]   .client-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    transition: all 0.3s ease-in-out;\r\n      height: auto;\r\n      width: auto;\r\n    -webkit-filter: grayscale(100%);\r\n    filter: grayscale(100%);\r\n  }\r\n  \r\n  .clients[_ngcontent-%COMP%]   .client-logo[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\r\n    -webkit-filter: none;\r\n    filter: none;\r\n    transform: scale(1.1);\r\n  }\r\n  \r\n  .counts[_ngcontent-%COMP%] {\r\n  padding-bottom: 30px;\r\n}\r\n  \r\n  .counts[_ngcontent-%COMP%]   .count-box[_ngcontent-%COMP%] {\r\n  box-shadow: 0px 0 16px rgba(0, 0, 0, 0.1);\r\n  padding: 30px;\r\n  background: #fff;\r\n  margin-bottom: 30px;\r\n}\r\n  \r\n  .counts[_ngcontent-%COMP%]   .count-boxs[_ngcontent-%COMP%] {\r\n  box-shadow: 0px 0 16px rgba(0, 0, 0, 0.1);\r\n  padding: 30px;\r\n  background: #fff;\r\n  margin-bottom: 30px;\r\n \r\n}\r\n  \r\n  .counts[_ngcontent-%COMP%]   .count-boxss[_ngcontent-%COMP%] {\r\n  box-shadow: 0px 0 16px rgba(0, 0, 0, 0.1);\r\n  padding: 30px;\r\n  background: #fff;\r\n  margin-bottom: 30px;\r\n height: 150px;\r\n}\r\n  \r\n  .counts[_ngcontent-%COMP%]   .count-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-size: 64px;\r\n  margin-bottom: 15px;\r\n}\r\n  \r\n  .counts[_ngcontent-%COMP%]   .count-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 42px;\r\n  display: block;\r\n  font-weight: 700;\r\n  color: #1c5c93;\r\n}\r\n  \r\n  .counts[_ngcontent-%COMP%]   .count-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: \"Raleway\", sans-serif;\r\n  font-size: 14px;\r\n}\r\n  \r\n  .partnerLogos[_ngcontent-%COMP%]{\r\n  width: auto;\r\n}\r\n  \r\n  [out-back][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%] {\r\n  transition-timing-function: cubic-bezier(.68,-.55,.265,1.55);\r\n}\r\n  \r\n  [data-aos][data-aos][data-aos-duration=\"1000\"][_ngcontent-%COMP%], body[data-aos-duration=\"1000\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%] {\r\n  transition-duration: 1s;\r\n}\r\n  \r\n  [data-aos^=fade][data-aos^=fade][_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  transition-property: opacity,transform;\r\n}\r\n  \r\n  [data-aos=fade-up][_ngcontent-%COMP%] {\r\n  transform: translate3d(0,100px,0);\r\n}\r\n  \r\n  .team[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n  padding: 60px 0 30px 0;\r\n}\r\n  \r\n  .team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-bottom: 80px;\r\n  position: relative;\r\n}\r\n  \r\n  *[_ngcontent-%COMP%], [_ngcontent-%COMP%]::after, [_ngcontent-%COMP%]::before {\r\n  box-sizing: border-box;\r\n}\r\n  \r\n  .team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n  overflow: hidden;\r\n}\r\n  \r\n  .team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  transition: all ease-in-out 0.4s;\r\n}\r\n  \r\n  .team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\r\n  transform: scale(1.1);\r\n}\r\n  \r\n  .team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: -48px;\r\n  left: 20px;\r\n  right: 20px;\r\n  background: linear-gradient(360deg, #5c768d 0%, rgba(92, 118, 141, 0.9) 35%, rgba(140, 167, 191, 0.8) 100%);\r\n  padding: 15px 0;\r\n  border-radius: 4px;\r\n}\r\n  \r\n  .team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n  margin-bottom: 10px;\r\n  font-size: 16px;\r\n  color: #fff;\r\n  position: relative;\r\n  padding-bottom: 10px;\r\n}\r\n  \r\n  .team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-style: italic;\r\n  display: block;\r\n  font-size: 13px;\r\n  color: #fff;\r\n}\r\n  \r\n  .team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\r\n  margin-top: 15px;\r\n}\r\n  \r\n  .team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  transition: color 0.3s;\r\n  color: #fff;\r\n}\r\n  \r\n  .team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  margin: 0 2px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50L2NsaWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLDZCQUE2QjtJQUM3Qiw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxnQ0FBZ0M7TUFDOUIsWUFBWTtNQUNaLFdBQVc7SUFDYiwrQkFBK0I7SUFDL0IsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7O0VBT0Q7RUFDQyxvQkFBb0I7QUFDdEI7O0VBRUE7RUFDRSx5Q0FBeUM7RUFDekMsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0VBQ0E7RUFDRSx5Q0FBeUM7RUFDekMsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7O0FBRXJCOztFQUNBO0VBQ0UseUNBQXlDO0VBQ3pDLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0NBQ3BCLGFBQWE7QUFDZDs7RUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztFQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7RUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsa0NBQWtDO0VBQ2xDLGVBQWU7QUFDakI7O0VBSUE7RUFDRSxXQUFXO0FBQ2I7O0VBR0E7RUFDRSw0REFBNEQ7QUFDOUQ7O0VBQ0E7RUFDRSx1QkFBdUI7QUFDekI7O0VBQ0E7RUFDRSxVQUFVO0VBQ1Ysc0NBQXNDO0FBQ3hDOztFQUNBO0VBQ0UsaUNBQWlDO0FBQ25DOztFQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7RUFHQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztFQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCOztFQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7RUFDQTtFQUNFLGdDQUFnQztBQUNsQzs7RUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7RUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsVUFBVTtFQUNWLFdBQVc7RUFDWCwyR0FBMkc7RUFDM0csZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7RUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztFQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsV0FBVztBQUNiOztFQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztFQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7RUFDQTtFQUNFLGVBQWU7RUFDZixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jbGllbnQvY2xpZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNsaWVudHMgLmNsaWVudHMtd3JhcCB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2YxZWVlZDtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2YxZWVlZDtcclxuICB9XHJcbiAgXHJcbiAgLmNsaWVudHMgLmNsaWVudC1sb2dvIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YxZWVlZDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFlZWVkO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNsaWVudHMgLmNsaWVudC1sb2dvIGltZyB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICB3aWR0aDogYXV0bztcclxuICAgIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XHJcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcclxuICB9XHJcbiAgXHJcbiAgLmNsaWVudHMgLmNsaWVudC1sb2dvOmhvdmVyIGltZyB7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogbm9uZTtcclxuICAgIGZpbHRlcjogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICB9XHJcbiAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuIC5jb3VudHMge1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uY291bnRzIC5jb3VudC1ib3gge1xyXG4gIGJveC1zaGFkb3c6IDBweCAwIDE2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbi5jb3VudHMgLmNvdW50LWJveHMge1xyXG4gIGJveC1zaGFkb3c6IDBweCAwIDE2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gXHJcbn1cclxuLmNvdW50cyAuY291bnQtYm94c3Mge1xyXG4gIGJveC1zaGFkb3c6IDBweCAwIDE2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gaGVpZ2h0OiAxNTBweDtcclxufVxyXG4uY291bnRzIC5jb3VudC1ib3ggaSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiA2NHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5jb3VudHMgLmNvdW50LWJveCBzcGFuIHtcclxuICBmb250LXNpemU6IDQycHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzFjNWM5MztcclxufVxyXG5cclxuLmNvdW50cyAuY291bnQtYm94IHAge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcblxyXG5cclxuLnBhcnRuZXJMb2dvc3tcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuXHJcbltvdXQtYmFja10gW2RhdGEtYW9zXSB7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllciguNjgsLS41NSwuMjY1LDEuNTUpO1xyXG59XHJcbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiXSwgYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIl0gW2RhdGEtYW9zXSB7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XHJcbn1cclxuW2RhdGEtYW9zXj1mYWRlXVtkYXRhLWFvc149ZmFkZV0ge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eSx0cmFuc2Zvcm07XHJcbn1cclxuW2RhdGEtYW9zPWZhZGUtdXBdIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMTAwcHgsMCk7XHJcbn1cclxuXHJcbi50ZWFtIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDYwcHggMCAzMHB4IDA7XHJcbn1cclxuXHJcblxyXG4udGVhbSAubWVtYmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuKiwgOjphZnRlciwgOjpiZWZvcmUge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLnRlYW0gLm1lbWJlciAucGljIHtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4udGVhbSAubWVtYmVyIGltZyB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuNHM7XHJcbn1cclxuLnRlYW0gLm1lbWJlcjpob3ZlciBpbWcge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG5cclxuLnRlYW0gLm1lbWJlciAubWVtYmVyLWluZm8ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IC00OHB4O1xyXG4gIGxlZnQ6IDIwcHg7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgIzVjNzY4ZCAwJSwgcmdiYSg5MiwgMTE4LCAxNDEsIDAuOSkgMzUlLCByZ2JhKDE0MCwgMTY3LCAxOTEsIDAuOCkgMTAwJSk7XHJcbiAgcGFkZGluZzogMTVweCAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4udGVhbSAubWVtYmVyIGg0IHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG4udGVhbSAubWVtYmVyIHNwYW4ge1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLnRlYW0gLm1lbWJlciAuc29jaWFsIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcbi50ZWFtIC5tZW1iZXIgLnNvY2lhbCBhIHtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi50ZWFtIC5tZW1iZXIgLnNvY2lhbCBpIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luOiAwIDJweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-client',
          templateUrl: './client.component.html',
          styleUrls: ['./client.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/demosection/demosection.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/demosection/demosection.component.ts ***!
    \******************************************************/

  /*! exports provided: DemosectionComponent */

  /***/
  function srcAppDemosectionDemosectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DemosectionComponent", function () {
      return DemosectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DemosectionComponent =
    /*#__PURE__*/
    function () {
      function DemosectionComponent() {
        _classCallCheck(this, DemosectionComponent);
      }

      _createClass(DemosectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DemosectionComponent;
    }();

    DemosectionComponent.ɵfac = function DemosectionComponent_Factory(t) {
      return new (t || DemosectionComponent)();
    };

    DemosectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DemosectionComponent,
      selectors: [["app-demosection"]],
      decls: 11,
      vars: 0,
      consts: [[1, "container-fluid", "img-fluid", "imagess"], [1, "row"], [1, "col-lg-6"], [1, "text-white"], ["href", "#", 1, "btn", "btn-shutter-more"], [1, "bx", "bxl-apple"]],
      template: function DemosectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Digital Transformation Made Simple");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "For many industries digital is a daunting challenge. But as with any challenge there are great rewards for those who master the Digital Transformation. Technimove has identified 4 clear steps to Digital Transformation. With each step on this journey, you and your organisation can discover true value.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " App Store");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".imagess[_ngcontent-%COMP%]{\r\n    background-image: url('Digital-Transformation.jpg');\r\n    background-size: cover;\r\n    height: 700px;\r\n    padding: 140px;\r\n}\r\n@media (max-width: 768px) { \r\n    .imagess[_ngcontent-%COMP%]{\r\n        padding: 40px;\r\n        height: 500px;\r\n    }\r\n }\r\n.btn-shutter-more[_ngcontent-%COMP%] {\r\n\tcolor: #fff;\r\n\tborder: 1px solid #fff;\r\n\tposition: relative;\r\n\tz-index: 1;\r\n\tdisplay: inline-block;\r\n\tbackground-color: transparent;\r\n\ttransition: all 0.3s ease-in-out;\r\n\tpadding: 12px 50px;\r\n\tborder-radius: 0;\r\n\tletter-spacing: 1.5px;\r\n\tmargin-top: 20px;\r\n\tfont-weight: 700;\r\n\tfont-size: 14px;\r\n}\r\n.btn-shutter-more[_ngcontent-%COMP%]:before {\r\n\tcontent: '';\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\theight: 100%;\r\n\twidth: 0;\r\n\ttransition: all 0.3s ease-in-out;\r\n\tbackground-color: #000;\r\n\tz-index: -1;\r\n}\r\n.btn-shutter-more[_ngcontent-%COMP%]:hover {\r\n\tborder: 1px solid #000;\r\n\tbackground-color: transparent;\r\n\tcolor: #ffffff;\r\n}\r\n.btn-shutter-more[_ngcontent-%COMP%]:hover:before {\r\n\twidth: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtb3NlY3Rpb24vZGVtb3NlY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQTtJQUNJLG1EQUF5RTtJQUN6RSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGNBQWM7QUFDbEI7QUFDQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLGFBQWE7SUFDakI7Q0FDSDtBQUdEO0NBQ0MsV0FBVztDQUNYLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLHFCQUFxQjtDQUNyQiw2QkFBNkI7Q0FLN0IsZ0NBQWdDO0NBQ2hDLGtCQUFrQjtDQUdsQixnQkFBZ0I7Q0FDaEIscUJBQXFCO0NBQ3JCLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsV0FBVztDQUNYLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsTUFBTTtDQUNOLE9BQU87Q0FDUCxZQUFZO0NBQ1osUUFBUTtDQUtSLGdDQUFnQztDQUNoQyxzQkFBc0I7Q0FDdEIsV0FBVztBQUNaO0FBQ0E7Q0FDQyxzQkFBc0I7Q0FDdEIsNkJBQTZCO0NBQzdCLGNBQWM7QUFDZjtBQUNBO0NBQ0MsV0FBVztBQUNaIiwiZmlsZSI6InNyYy9hcHAvZGVtb3NlY3Rpb24vZGVtb3NlY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi5pbWFnZXNze1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvYmFubmVyL0RpZ2l0YWwtVHJhbnNmb3JtYXRpb24uanBnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDcwMHB4O1xyXG4gICAgcGFkZGluZzogMTQwcHg7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7IFxyXG4gICAgLmltYWdlc3N7XHJcbiAgICAgICAgcGFkZGluZzogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgfVxyXG4gfVxyXG5cclxuXHJcbi5idG4tc2h1dHRlci1tb3JlIHtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR6LWluZGV4OiAxO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cdC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcblx0LW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cdC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cdHBhZGRpbmc6IDEycHggNTBweDtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiAwO1xyXG5cdGJvcmRlci1yYWRpdXM6IDA7XHJcblx0bGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG5cdG1hcmdpbi10b3A6IDIwcHg7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmJ0bi1zaHV0dGVyLW1vcmU6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnJztcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHdpZHRoOiAwO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcblx0LW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuXHQtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcblx0LW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuXHR6LWluZGV4OiAtMTtcclxufVxyXG4uYnRuLXNodXR0ZXItbW9yZTpob3ZlciB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4uYnRuLXNodXR0ZXItbW9yZTpob3ZlcjpiZWZvcmUge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemosectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-demosection',
          templateUrl: './demosection.component.html',
          styleUrls: ['./demosection.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 101,
      vars: 0,
      consts: [["id", "footer"], [1, "footer-top"], [1, "container"], [1, "row"], [1, "col-lg-3", "col-md-6", "footer-info"], ["src", "../../assets/img/usa.png", "alt", "", 1, "img-bot"], ["src", "../../assets/img/india.png", 1, "img-bot", 2, "margin-bottom", "10px"], [1, "social-links", "mt-3"], ["href", "#", 1, "twitter"], [1, "bx", "bxl-twitter"], ["href", "#", 1, "facebook"], [1, "bx", "bxl-facebook"], ["href", "#", 1, "instagram"], [1, "bx", "bxl-instagram"], ["href", "#", 1, "google-plus"], [1, "bx", "bxl-skype"], ["href", "#", 1, "linkedin"], [1, "bx", "bxl-linkedin"], [1, "col-lg-2", "col-md-6", "footer-links"], [1, "bx", "bx-chevron-right"], ["href", "#"], [1, "col-lg-3", "col-md-6", "footer-links"], [1, "col-lg-4", "col-md-6"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Satwic Inc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "117 E Colorado Blvd, Suite 200 Pasadena, CA,USA 91105 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Phone:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " (818)230-2181");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " info@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Satwic Software solutions Pvt. Ltd.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "#34 Akash Avenue 1st main road, SBM colony, Anand nagar Main Road Bangalore,India 560024 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Phone:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " (808)2355-8400");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " info@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Useful Links");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "About us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Industries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Terms of service");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Privacy policy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Our Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Business Intelligence & Data Integration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Business Intelligence / Data Warehousing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Data Integration Implementation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Platform Migrations Implementation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Managed Support Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#footer[_ngcontent-%COMP%] {\r\n  background: #587187;\r\n  padding: 0 0 30px 0;\r\n  color: #fff;\r\n  font-size: 14px;\r\n}\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%] {\r\n  background: #5c768d;\r\n  border-top: 1px solid #768fa6;\r\n  border-bottom: 1px solid #67839c;\r\n  padding: 60px 0 30px 0;\r\n}\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-info[_ngcontent-%COMP%] {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n  margin: 0 0 20px 0;\r\n  padding: 2px 0 2px 0;\r\n  line-height: 1;\r\n  font-weight: 700;\r\n}\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  line-height: 24px;\r\n  margin-bottom: 0;\r\n  font-family: \"Raleway\", sans-serif;\r\n  color: #fff;\r\n}\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  display: inline-block;\r\n  background: #768fa6;\r\n  color: #fff;\r\n  line-height: 1;\r\n  padding: 8px 0;\r\n  margin-right: 4px;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  width: 36px;\r\n  height: 36px;\r\n  transition: 0.3s;\r\n}\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background: #428bca;\r\n  color: #fff;\r\n  text-decoration: none;\r\n}\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  color: #fff;\r\n  position: relative;\r\n  padding-bottom: 12px;\r\n}\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%] {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  padding-right: 2px;\r\n  color: #9eccf4;\r\n  font-size: 18px;\r\n  line-height: 1;\r\n}\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  padding: 10px 0;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\r\n  padding-top: 0;\r\n}\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  transition: 0.3s;\r\n  display: inline-block;\r\n  line-height: 1;\r\n}\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: #9eccf4;\r\n}\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-newsletter[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n  margin-top: 30px;\r\n  background: #fff;\r\n  padding: 6px 10px;\r\n  position: relative;\r\n  border-radius: 4;\r\n}\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-newsletter[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%] {\r\n  border: 0;\r\n  padding: 4px;\r\n  width: calc(100% - 110px);\r\n}\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-newsletter[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  border: 0;\r\n  background: none;\r\n  font-size: 16px;\r\n  padding: 0 20px;\r\n  background: #428bca;\r\n  color: #fff;\r\n  transition: 0.3s;\r\n  border-radius: 4;\r\n}\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-newsletter[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover {\r\n  background: #5295ce;\r\n}\r\n\r\n#footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding-top: 30px;\r\n}\r\n\r\n#footer[_ngcontent-%COMP%]   .credits[_ngcontent-%COMP%] {\r\n  padding-top: 10px;\r\n  text-align: center;\r\n  font-size: 13px;\r\n  color: #fff;\r\n}\r\n\r\n#footer[_ngcontent-%COMP%]   .credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #9eccf4;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBCQUEwQjs7QUFFMUI7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtDQUFrQztFQUNsQyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsY0FBYztFQUNkLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qID09PT09PT09IGZvb3RlciBjc3MgICAqL1xyXG5cclxuI2Zvb3RlciB7XHJcbiAgYmFja2dyb3VuZDogIzU4NzE4NztcclxuICBwYWRkaW5nOiAwIDAgMzBweCAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuI2Zvb3RlciAuZm9vdGVyLXRvcCB7XHJcbiAgYmFja2dyb3VuZDogIzVjNzY4ZDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgIzc2OGZhNjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzY3ODM5YztcclxuICBwYWRkaW5nOiA2MHB4IDAgMzBweCAwO1xyXG59XHJcblxyXG4jZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItaW5mbyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuI2Zvb3RlciAuZm9vdGVyLXRvcCAuZm9vdGVyLWluZm8gaDMge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBtYXJnaW46IDAgMCAyMHB4IDA7XHJcbiAgcGFkZGluZzogMnB4IDAgMnB4IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuI2Zvb3RlciAuZm9vdGVyLXRvcCAuZm9vdGVyLWluZm8gcCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4jZm9vdGVyIC5mb290ZXItdG9wIC5zb2NpYWwtbGlua3MgYSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kOiAjNzY4ZmE2O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIHBhZGRpbmc6IDhweCAwO1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDM2cHg7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbiNmb290ZXIgLmZvb3Rlci10b3AgLnNvY2lhbC1saW5rcyBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNDI4YmNhO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuI2Zvb3RlciAuZm9vdGVyLXRvcCBoNCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG59XHJcblxyXG4jZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItbGlua3Mge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbiNmb290ZXIgLmZvb3Rlci10b3AgLmZvb3Rlci1saW5rcyB1bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI2Zvb3RlciAuZm9vdGVyLXRvcCAuZm9vdGVyLWxpbmtzIHVsIGkge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDJweDtcclxuICBjb2xvcjogIzllY2NmNDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcbiNmb290ZXIgLmZvb3Rlci10b3AgLmZvb3Rlci1saW5rcyB1bCBsaSB7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI2Zvb3RlciAuZm9vdGVyLXRvcCAuZm9vdGVyLWxpbmtzIHVsIGxpOmZpcnN0LWNoaWxkIHtcclxuICBwYWRkaW5nLXRvcDogMDtcclxufVxyXG5cclxuI2Zvb3RlciAuZm9vdGVyLXRvcCAuZm9vdGVyLWxpbmtzIHVsIGEge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcblxyXG4jZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItbGlua3MgdWwgYTpob3ZlciB7XHJcbiAgY29sb3I6ICM5ZWNjZjQ7XHJcbn1cclxuXHJcbiNmb290ZXIgLmZvb3Rlci10b3AgLmZvb3Rlci1uZXdzbGV0dGVyIGZvcm0ge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwYWRkaW5nOiA2cHggMTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNDtcclxufVxyXG5cclxuI2Zvb3RlciAuZm9vdGVyLXRvcCAuZm9vdGVyLW5ld3NsZXR0ZXIgZm9ybSBpbnB1dFt0eXBlPVwiZW1haWxcIl0ge1xyXG4gIGJvcmRlcjogMDtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDExMHB4KTtcclxufVxyXG5cclxuI2Zvb3RlciAuZm9vdGVyLXRvcCAuZm9vdGVyLW5ld3NsZXR0ZXIgZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG4gIGJhY2tncm91bmQ6ICM0MjhiY2E7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuICBib3JkZXItcmFkaXVzOiA0O1xyXG59XHJcblxyXG4jZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItbmV3c2xldHRlciBmb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM1Mjk1Y2U7XHJcbn1cclxuXHJcbiNmb290ZXIgLmNvcHlyaWdodCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcblxyXG4jZm9vdGVyIC5jcmVkaXRzIHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4jZm9vdGVyIC5jcmVkaXRzIGEge1xyXG4gIGNvbG9yOiAjOWVjY2Y0O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _scroll_spy_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../scroll-spy.directive */
    "./src/app/scroll-spy.directive.ts");

    function HomeComponent_a_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Section 1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_a_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Section ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_a_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Section 2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_a_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Section 2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_a_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Section 3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_a_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Section 3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_a_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Section 4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_a_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Section 4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["DIV"];
    };

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.currentSection = 'section1';
      }

      _createClass(HomeComponent, [{
        key: "onSectionChange",
        value: function onSectionChange(sectionId) {
          this.currentSection = sectionId;
        }
      }, {
        key: "scrollTo",
        value: function scrollTo(section) {
          document.querySelector('#' + section).scrollIntoView();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 331,
      vars: 10,
      consts: [[1, "listviewgrpoup"], [1, "vnavbod", 3, "click"], ["class", "vnav", 4, "ngIf"], ["class", "vnavi", 4, "ngIf"], ["id", "parentDiv", "scrollSpy", "", 1, "mainSection", 3, "spiedTags", "sectionChange"], ["id", "section1"], [1, "d-flex", "align-items-center", "hero1"], ["id", "myNav", 1, "overlay"], ["href", "javascript:void(0)", "onclick", "closeNav()", 1, "closebtn"], [1, "overlay-content"], [1, "row"], [1, "col-3", 2, "background-color", "#001650", "padding", "0px"], ["href", "#"], ["src", "../../assets/img/banner/rpa.jpg", "alt", "", 1, "img-fluid"], [1, "col-3", 2, "background-color", "#c9c2b2", "padding", "0px"], ["src", "../../assets/img/banner/960x0.jpg", "alt", "", 1, "img-fluid"], [1, "col-3", 2, "background-color", "#fff", "padding", "0px"], ["src", "../../assets/img/banner/devops-engineer-full-time-freelance-project-romania.png", "alt", "", 1, "img-fluid"], [1, "col-3"], [1, "opentabbox"], ["onclick", "openNav()", 1, "openTab"], [1, "container"], ["data-aos", "fade-up", 1, "col-lg-6", "d-lg-flex", "flex-lg-column", "justify-content-center", "align-items-stretch", "pt-5", "pt-lg-0", "order-2", "order-lg-1"], [1, "text-white"], ["href", "#", 1, "download-btn"], [1, "bx", "bxs-like", "bx-spin"], ["data-aos", "fade-up", 1, "col-lg-6", "d-lg-flex", "flex-lg-column", "align-items-stretch", "order-1", "order-lg-2", "hero-img"], ["id", "section2"], ["id", "section2", 1, "d-flex", "align-items-center", "heros", "img-fluid", 2, "background-color", "#b7c0c7"], ["id", "section3"], [1, "d-flex", "align-items-center", "hero"], [2, "margin-bottom", "0px"], ["src", "../../assets/img/banner/DevOps.png", "alt", "", 1, "img-fluid"], ["id", "section4"], [1, "d-flex", "align-items-center", "heroper", 2, "background-color", "#001650"], [2, "margin-bottom", "0px", "color", "#fff"], ["id", "section5"], [1, "d-flex", "align-items-center", "hero", 2, "background-color", "aqua"], ["src", "../../assets/img/hero-img.png", "alt", "", 1, "img-fluid"], ["id", "section6"], [1, "details", "pt-5"], [1, "section-title"], [1, "row", "content"], ["data-aos", "fade-right", 1, "col-md-4"], ["src", "../../assets/img/details-1.png", "alt", "", 1, "img-fluid"], ["data-aos", "fade-up", 1, "col-md-8", "pt-4"], [1, "font-italic"], [1, "icofont-check"], ["data-aos", "fade-left", 1, "col-md-4", "order-1", "order-md-2"], ["src", "../../assets/img/details-2.png", "alt", "", 1, "img-fluid"], ["data-aos", "fade-up", 1, "col-md-8", "pt-5", "order-2", "order-md-1"], ["src", "../../assets/img/details-3.png", "alt", "", 1, "img-fluid"], ["data-aos", "fade-up", 1, "col-md-8", "pt-5"], ["src", "../../assets/img/details-4.png", "alt", "", 1, "img-fluid"], [1, "counts", "section-bg"], ["id", "demo", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#demo", "data-slide-to", "0", 1, "active"], ["data-target", "#demo", "data-slide-to", "1"], ["data-target", "#demo", "data-slide-to", "2"], [1, "carousel-inner"], [1, "carousel-item", "active"], [1, "col-lg-4", "col-md-4", "col-sm-12"], [1, "card"], [1, "card-headers"], [1, "customerName"], [1, "cardImage"], ["src", "../../assets/assets/img/team/team-3.jpg", "alt", "Card image cap", 1, "imgca"], [1, "card-body", "pt-5"], [1, "card-text", "text-center"], ["src", "../../assets/assets/img/team/team-1.jpg", "alt", "Card image cap", 1, "imgca"], ["src", "../../assets/assets/img/team/team-2.jpg", "alt", "Card image cap", 1, "imgca"], [1, "carousel-item"], ["href", "#demo", "data-slide", "prev", 1, "carousel-control-prev"], [1, "carousel-control-prev-icon"], ["href", "#demo", "data-slide", "next", 1, "carousel-control-next"], [1, "carousel-control-next-icon"], ["data-aos", "fade-up", 1, "col-lg-3", "col-md-6", "text-center"], [1, "count-box"], [1, "icofont-simple-smile", 2, "color", "#20b38e"], ["data-toggle", "counter-up"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "col-lg-3", "col-md-6", "text-center"], [1, "icofont-document-folder", 2, "color", "#c042ff"], ["data-aos", "fade-up", "data-aos-delay", "400", 1, "col-lg-3", "col-md-6", "text-center"], [1, "icofont-live-support", 2, "color", "#46d1ff"], ["data-aos", "fade-up", "data-aos-delay", "600", 1, "col-lg-3", "col-md-6", "text-center"], [1, "icofont-users-alt-5", 2, "color", "#ffb459"], [1, "vnav"], [1, "vnavi"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_1_listener() {
            return ctx.scrollTo("section1");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_a_2_Template, 2, 0, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_a_3_Template, 2, 0, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_4_listener() {
            return ctx.scrollTo("section2");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_a_5_Template, 2, 0, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_a_6_Template, 2, 0, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_7_listener() {
            return ctx.scrollTo("section3");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_a_8_Template, 2, 0, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_a_9_Template, 2, 0, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_10_listener() {
            return ctx.scrollTo("section4");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_a_11_Template, 2, 0, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_a_12_Template, 2, 0, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sectionChange", function HomeComponent_Template_div_sectionChange_14_listener($event) {
            return ctx.onSectionChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Robotic process automation is a form of business process automation technology technology");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Robotic process automation is a form of business process automation technology ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Robotic process automation is a form of business process automation technology ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "About Us ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Services ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Industries ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Partners");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u2630");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h1", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Making a Digital Enterprise ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Deploy technology for profit instead of just operational");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Read More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "section", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h1", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Digital Transformation Made Simple");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "For many industries digital is a daunting challenge. But as with any challenge there are great rewards for those who master the Digital Transformation. Technimove has identified 4 clear steps to Digital Transformation. With each step on this journey, you and your organisation can discover true value.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Read More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "section", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Agile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h2", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Vision");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "To be a respected technology company recognized for its integrity and innovation.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Devops");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h2", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Mission");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "To provide compelling value to our clients by blending technology, people and business acumen.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Read More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "section", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h1", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Operational Performance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h2", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Vision");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "To be a respected technology company recognized for its integrity and innovation. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h2", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Mission");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "To provide compelling value to our clients by blending technology, people and business acumen. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " Read More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "section", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h2", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Vision");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "To be a respected technology company recognized for its integrity and innovation. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h2", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Mission");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "To provide compelling value to our clients by blending technology, people and business acumen. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " Read More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "section", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "At Satwic, for over a decade, we have successfully formulated the best blend of technical, business and people expertise to offer tailor made solutions to suit our clients\u2019 business needs. We analyze and understand the nuances of client business, organization culture and the specific needs of a project and strive to accurately evaluate and provide specialized resources to help you reach your goals faster.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Advisory Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " It is crucial for today\u2019s companies to rely on timely availability of relevant and trustworthy data to stay ahead of competition. Under such scenarios, it becomes extremely important to ensure that you employ the right architecture practices that address both short and long term needs of your company. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " Business Intelligence & Data Integration Architecture and Planning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " Business Intelligence / Data Integration Health Check and Assessment.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " Business Intelligence / Data Warehousing Tool / Vendor Selection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, " Satwic has helped many customers turn around struggling business intelligence and/or data integration efforts. This service is typically conducted in about a two week period, during which we will engage key stakeholders to assess the current state of the effort. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Implementation Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " As Business Intelligence continues to expand its significance for today\u2019s enterprises, successful BI programs need a trusted implementation partner along with data, technology, analytics, and human decision making. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Data Integration Implementation:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " Platform Migrations Implementation:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " Business Intelligence / Data Warehousing ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " At Satwic, we have been helping customers switch over to newer platforms with minimal disruption. We understand your concerns for data safety and have developed specialized techniques to perform migrations quickly and efficiently. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Managed Support Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " In today\u2019s business environment, it is critical for companies to have access to ongoing and timely support for their Business Intelligence and Data Integration systems to ensure high performance and service levels. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, " At Satwic, we strive to provide clients with greatest flexibility and confidence in its BI/DI Maintenance and Support services. Our services are SLA based, customized to meet your requirements and our team operates as an extension of your own team. This can help your company increase the long term effectiveness of your BI/DI solutions while reducing the burden on managing IT. You can instead divert your resources towards strategic and innovative capabilities. Our support model helps companies reduce risk with improved reliability and reduced operational costs. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, " Our support team develops a clearly defined set of processes and procedures based on the ITIL v3 principles to ensure a consistent and efficient delivery of support services. We have a proven track record in delivering the \u201Cfollow the sun\u201D support model, where we have qualified support resources available 24/7. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "img", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, " In today\u2019s business environment, it is critical for companies to have access to ongoing and timely support for their Business Intelligence and Data Integration systems to ensure high performance and service levels. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, " At Satwic, we strive to provide clients with greatest flexibility and confidence in its BI/DI Maintenance and Support services. Our services are SLA based, customized to meet your requirements and our team operates as an extension of your own team. This can help your company increase the long term effectiveness of your BI/DI solutions while reducing the burden on managing IT. You can instead divert your resources towards strategic and innovative capabilities. Our support model helps companies reduce risk with improved reliability and reduced operational costs. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "section", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Loved by our customers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "ul", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "li", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "li", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "li", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "h3", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Mohit Tejwani");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "h5", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Software Enginner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "img", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "p", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "The business management dashboard developed by GrayMatter is a powerful performance management tool empowering the user with business critical");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "h3", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "Dr. U. V. Girish Kumar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "h5", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Founder,CEO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "img", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "p", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "The business management dashboard developed by GrayMatter is a powerful performance management tool empowering the user with business critical");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "h3", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Monika Sharma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "h5", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "CEO, Corporate Airport Sector");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "img", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "p", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "GrayMatter has been supporting BPCL\u2019s In &Out stores operations through efficient and effective management of its software changes in the business");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "h3", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "Dr. U. V. Girish Kumar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "h5", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Founder,CEO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "img", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "p", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "The business management dashboard developed by GrayMatter is a powerful performance management tool empowering the user with business critical");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "h3", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "Monika Sharma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "h5", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "CEO, Corporate Airport Sector");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "img", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "p", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "GrayMatter has been supporting BPCL\u2019s In &Out stores operations through efficient and effective management of its software changes in the business");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "h3", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "Mohit Tejwani");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "h5", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "Software Enginner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](293, "img", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "p", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "The business management dashboard developed by GrayMatter is a powerful performance management tool empowering the user with business critical");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "a", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](298, "span", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](300, "span", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](301, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](305, "i", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "span", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "232");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "Happy Clients");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](312, "i", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "span", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "521");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](319, "i", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "span", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "1,463");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "Hours Of Support");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](326, "i", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "span", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "15");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "Hard Workers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSection === "section1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSection !== "section1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSection === "section2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSection !== "section2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSection === "section3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSection !== "section3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSection === "section4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSection !== "section4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("spiedTags", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _scroll_spy_directive__WEBPACK_IMPORTED_MODULE_2__["ScrollSpyDirective"]],
      styles: [".overlay[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 999;\r\n    top: 0 !important;\r\n    right: 0;\r\n    background-color: rgb(0,0,0);\r\n    background-color: rgba(0,0,0, 0.9);\r\n    overflow-y: hidden;\r\n    transition: 1.0s;\r\n  }\r\n\r\n  .overlay-content[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top: 0%;\r\n    width: 100%;\r\n    text-align: center;\r\n    margin-top: 0px;\r\n  }\r\n\r\n  .overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 8px;\r\n    text-decoration: none;\r\n    font-size: 36px;\r\n    color: #818181;\r\n    display: block;\r\n    transition: 0.3s;\r\n   \r\n  }\r\n\r\n  .overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\r\n    color: #f1f1f1;\r\n  }\r\n\r\n  .overlay[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 20px;\r\n    right: 45px;\r\n    font-size: 60px;\r\n    z-index: 999;\r\n  }\r\n\r\n  @media screen and (max-height: 450px) {\r\n    .overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {font-size: 20px}\r\n    .overlay[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\r\n    font-size: 40px;\r\n    top: 15px;\r\n    right: 35px;\r\n    }\r\n  }\r\n\r\n  .openTab[_ngcontent-%COMP%]{\r\n    font-size: 28px;\r\n    cursor: pointer;\r\n    z-index: 999;\r\n  \r\n  }\r\n\r\n  .opentabbox[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    width: 50px;\r\n    top:0;\r\n\r\n    height: 50px;\r\n    position: absolute;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    margin: 30px;\r\n    z-index: 99;\r\n    right: 0px;\r\n    padding: 5px;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .verticalNav[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    top: 35%;\r\n    z-index: 999;\r\n  }\r\n\r\n  .overla[_ngcontent-%COMP%] {\r\n    position: absolute; \r\n    display: block; \r\n    width: 100%; \r\n    height: 600px; \r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0,0,0,0.5); \r\n    z-index: 2; \r\n    cursor: pointer; \r\n  }\r\n\r\n  .listviewgrpoup[_ngcontent-%COMP%]{\r\n    display: block;\r\n    position: fixed;\r\n    top: 35%;\r\n    z-index: 999;\r\n}\r\n\r\n  .mainSection[_ngcontent-%COMP%]{\r\n  height: 585px;\r\n}\r\n\r\n  .vnav[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    color: #e28714;\r\n    font-weight: 700;\r\n    border-top-style: outset;\r\n    border-top-right-radius: 5px;\r\n    border-width: initial;\r\n    width: auto;\r\n    padding-left: 15px;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n  }\r\n\r\n  .vnavi[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n    color: #e28714;\r\n    font-weight: 700;\r\n    border-top-style: outset;\r\n    border-top-right-radius: 5px;\r\n    border-width: initial;\r\n    width: 70px;\r\n    padding-left: 15px;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n  }\r\n\r\n  .text[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 43%;\r\n    font-size: 50px;\r\n    color: white;\r\n    z-index: 3;\r\n    transform: translate(-50%,-50%);\r\n    -ms-transform: translate(-50%,-50%);\r\n  }\r\n\r\n  .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n\r\n  }\r\n\r\n  .slide-image[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    min-height: 100%;\r\n    min-width: 100%;\r\n    position: absolute;\r\n    right: 0;\r\n    width: auto !important;\r\n    background-image: url('workplace-transformation-research-study-home.jpg');\r\n    background-size: cover;\r\n  }\r\n\r\n  .repeated-css[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100vh;\r\n}\r\n\r\n  industries-gradient[_ngcontent-%COMP%], .product-gradient[_ngcontent-%COMP%], .casestudies-gradient[_ngcontent-%COMP%] {\r\n  background-color: #713171;\r\n}\r\n\r\n  .jdrow[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n\r\n  .gdrow[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n  @media screen and (max-width: 767px)\r\n{\r\n  .repeated-css[_ngcontent-%COMP%] {\r\n    height: 480px;\r\n}\r\n.jdrow[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.gdrow[_ngcontent-%COMP%]{\r\n  display: block\r\n}\r\n.slide-image[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n    height: auto;\r\n  background-image: url('workplace-transformation-research-study-home-mob.jpg');\r\n}\r\n\r\n.overla[_ngcontent-%COMP%]{\r\n  height: 230px;\r\n}\r\n.text[_ngcontent-%COMP%]{\r\n  top:20%;\r\n  font-size:20px;\r\n}\r\n.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  font-size: 12px;\r\n}\r\n}\r\n\r\n  @media screen and (max-width: 1024px)\r\n{\r\n  .repeated-css[_ngcontent-%COMP%] {\r\n    height: 600px;\r\n}\r\n}\r\n\r\n  .hero[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n    position: relative;\r\n    overflow: hidden;\r\n    padding: 140px 0 100px 0;\r\n}\r\n\r\n  .heros[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    position: relative;\r\n    overflow: hidden;\r\n    background-image: url('Digital-Transformation.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover; \r\n    padding: 140px 0 100px 0;\r\n}\r\n\r\n  .hero1[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  position: relative;\r\n  overflow: hidden;\r\n  height: 600px;\r\n  background-image: url('output-onlinepngtools.png');\r\n  background-repeat: no-repeat;\r\n  background-size: cover; \r\n  padding: 140px 0 100px 0;\r\n}\r\n\r\n  .heroper[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  position: relative;\r\n  overflow: hidden;\r\n  height: 600px;\r\n  background-image: url('performance-management.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: cover; \r\n  padding: 140px 0 100px 0;\r\n}\r\n\r\n  .navbar-nav[_ngcontent-%COMP%]{\r\n  display: block\r\n}\r\n\r\n  .nav-link[_ngcontent-%COMP%]{\r\n  font-size: 13px;\r\n  color: #e28714 ; \r\n  font-weight: 700;\r\n  border-top-style: outset;\r\n  border-top-right-radius: 5px;\r\n  border-width: initial;\r\n  width: 70px;\r\n  padding-left: 15px ;\r\n  padding-top: 5px;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n  .nav-link[_ngcontent-%COMP%]:active{\r\n    font-size: 20px !important;\r\n    color: #e28714 !important; \r\n    font-weight: 700;\r\n    border-top-style: outset;\r\n    border-top-right-radius: 5px;\r\n    border-width: initial;\r\n    width: auto;\r\n    padding-left: 15px ;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n  \r\n}\r\n\r\n  .navdata[_ngcontent-%COMP%]{\r\n  display: block;\r\n\r\n}\r\n\r\n  .navdata[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  list-style: none;\r\n}\r\n\r\n  .nav-linkdata[_ngcontent-%COMP%]{\r\n  font-size: 0px ;\r\n  color: #e28714 ; \r\n  font-weight: 700;\r\n  border-top-style: outset;\r\n  border-top-right-radius: 5px;\r\n  border-width: initial;\r\n  width: 70px;\r\n  padding-left: 15px ;\r\n  padding-top: 5px;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n  .nav-linkdata[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active{\r\n  color: #fff;\r\n  font-size: 16px;\r\n  width: auto;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQWdFb0M7O0VBRWxDO0lBQ0UsWUFBWTtJQUNaLFFBQVE7SUFDUixlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixRQUFRO0lBQ1IsNEJBQTRCO0lBQzVCLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixjQUFjO0lBQ2QsY0FBYztJQUNkLGdCQUFnQjs7RUFFbEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZUFBZTtJQUNmLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVksZUFBZTtJQUMzQjtJQUNBLGVBQWU7SUFDZixTQUFTO0lBQ1QsV0FBVztJQUNYO0VBQ0Y7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZUFBZTtJQUNmLFlBQVk7O0VBRWQ7O0VBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLEtBQUs7O0lBRUwsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlO0VBQ2pCOztFQUNBO0lBQ0UsZUFBZTtJQUNmLFFBQVE7SUFDUixZQUFZO0VBQ2Q7O0VBQ0E7SUFDRSxrQkFBa0IsRUFBRSxtQ0FBbUM7SUFDdkQsY0FBYyxFQUFFLHNCQUFzQjtJQUN0QyxXQUFXLEVBQUUsc0NBQXNDO0lBQ25ELGFBQWEsRUFBRSx1Q0FBdUM7SUFDdEQsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULGlDQUFpQyxFQUFFLGtDQUFrQztJQUNyRSxVQUFVLEVBQUUsb0ZBQW9GO0lBQ2hHLGVBQWUsRUFBRSwyQkFBMkI7RUFDOUM7O0VBQ0E7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLFFBQVE7SUFDUixZQUFZO0FBQ2hCOztFQUNBO0VBQ0UsYUFBYTtBQUNmOztFQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCOztFQUNBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCOztFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZUFBZTtJQUNmLFlBQVk7SUFDWixVQUFVO0lBQ1YsK0JBQStCO0lBQy9CLG1DQUFtQztFQUNyQzs7RUFDQTtJQUNFLGVBQWU7O0VBRWpCOztFQUNBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixzQkFBc0I7SUFDdEIseUVBQTBGO0lBQzFGLHNCQUFzQjtFQUN4Qjs7RUFDQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztFQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztFQUNBO0VBQ0UsY0FBYztBQUNoQjs7RUFDQTtFQUNFLGFBQWE7QUFDZjs7RUFDQTs7RUFFRTtJQUNFLGFBQWE7QUFDakI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0U7QUFDRjtBQUNBO0VBQ0UsZUFBZTtJQUNiLFlBQVk7RUFDZCw2RUFBOEY7QUFDaEc7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLE9BQU87RUFDUCxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7O0VBQ0E7O0VBRUU7SUFDRSxhQUFhO0FBQ2pCO0FBQ0E7O0VBQ0E7RUFDRSxXQUFXO0lBQ1Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQix3QkFBd0I7QUFDNUI7O0VBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtREFBMkU7SUFDM0UsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0Qix3QkFBd0I7QUFDNUI7O0VBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0RBQTBFO0VBQzFFLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsd0JBQXdCO0FBQzFCOztFQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1EQUEyRTtFQUMzRSw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLHdCQUF3QjtBQUMxQjs7RUFDQTtFQUNFO0FBQ0Y7O0VBQ0E7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0VBQ0E7SUFDSSwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7O0FBRXZCOztFQUNBO0VBQ0UsY0FBYzs7QUFFaEI7O0VBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0VBQ0E7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0VBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLFdBQVc7O0FBRWIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKiBAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjQwMCwzMDAsNTAwKTtcclxuXHJcblxyXG5cclxubmF2IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGZvbnQ6IDEwMCUgUm9ib3RvO1xyXG4gIGNvbG9yOiByZ2JhKGJsYWNrLCAuODcpO1xyXG4gIC13ZWJraXQtY2xpcC1wYXRoOiBjaXJjbGUoMjRweCBhdCAzMHB4IDI0cHgpO1xyXG4gIGNsaXAtcGF0aDogY2lyY2xlKDI0cHggYXQgMzJweCAyNHB4KTtcclxuICB0cmFuc2l0aW9uOlxyXG5cclxuICAgIC13ZWJraXQtY2xpcC1wYXRoICAuNzVzICouNzUsXHJcbiAgICBjbGlwLXBhdGggIC43NXMgLzI7XHJcbiAgXHJcblxyXG59XHJcbm5hdjpob3ZlcntcclxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAgLjc1cztcclxuICAtd2Via2l0LWNsaXAtcGF0aDogY2lyY2xlKDM5MHB4IGF0IDIyNXB4IDI0cHgpO1xyXG4gIGNsaXAtcGF0aDogY2lyY2xlKDM5MHB4IGF0IDE1MHB4IDI0cHgpO1xyXG59XHJcblxyXG5hIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcbmE6aG92ZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlMDgyOyB9XHJcbmE6YWN0aXZlIHsgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2EyODsgfVxyXG4gbGluZSB7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxufVxyXG5cclxuLm5hdmljb24ge1xyXG4gIHBhZGRpbmc6IDIzcHggMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogMzJweCAyNHB4O1xyXG59XHJcbi5uYXZpY29uIGRpdntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7IFxyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbn1cclxuXHJcbi5uYXZpY29uIGRpdjpiZWZvcmUsIDphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrOyBcclxuICAgfVxyXG4gIFxyXG4gIC5uYXZpY29uIGRpdjpiZWZvcmUgeyB0b3A6IC03cHg7IH1cclxuICAubmF2aWNvbiBkaXY6YWZ0ZXIgeyB0b3A6IDdweDsgfSAqL1xyXG5cclxuICAub3ZlcmxheSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIHRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwgMC45KTtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IDEuMHM7XHJcbiAgfVxyXG4gIFxyXG4gIC5vdmVybGF5LWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIH1cclxuICBcclxuICAub3ZlcmxheSBhIHtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIGNvbG9yOiAjODE4MTgxO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICBcclxuICB9XHJcbiAgXHJcbiAgLm92ZXJsYXkgYTpob3ZlciwgLm92ZXJsYXkgYTpmb2N1cyB7XHJcbiAgICBjb2xvcjogI2YxZjFmMTtcclxuICB9XHJcbiAgXHJcbiAgLm92ZXJsYXkgLmNsb3NlYnRuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHJpZ2h0OiA0NXB4O1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcclxuICAgIC5vdmVybGF5IGEge2ZvbnQtc2l6ZTogMjBweH1cclxuICAgIC5vdmVybGF5IC5jbG9zZWJ0biB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICByaWdodDogMzVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5vcGVuVGFie1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gIFxyXG4gIH1cclxuICAub3BlbnRhYmJveHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICB0b3A6MDtcclxuXHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDMwcHg7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC52ZXJ0aWNhbE5hdntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMzUlO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gIH1cclxuICAub3ZlcmxhIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXHJcbiAgICBkaXNwbGF5OiBibG9jazsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cclxuICAgIGhlaWdodDogNjAwcHg7IC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTsgLyogQmxhY2sgYmFja2dyb3VuZCB3aXRoIG9wYWNpdHkgKi9cclxuICAgIHotaW5kZXg6IDI7IC8qIFNwZWNpZnkgYSBzdGFjayBvcmRlciBpbiBjYXNlIHlvdSdyZSB1c2luZyBhIGRpZmZlcmVudCBvcmRlciBmb3Igb3RoZXIgZWxlbWVudHMgKi9cclxuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogQWRkIGEgcG9pbnRlciBvbiBob3ZlciAqL1xyXG4gIH1cclxuICAubGlzdHZpZXdncnBvdXB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMzUlO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG59XHJcbi5tYWluU2VjdGlvbntcclxuICBoZWlnaHQ6IDU4NXB4O1xyXG59XHJcbi52bmF2e1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICNlMjg3MTQ7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogb3V0c2V0O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci13aWR0aDogaW5pdGlhbDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgfVxyXG4gIC52bmF2aXtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjZTI4NzE0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGJvcmRlci10b3Atc3R5bGU6IG91dHNldDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItd2lkdGg6IGluaXRpYWw7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICAudGV4dHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNDMlO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgei1pbmRleDogMztcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICB9XHJcbiAgLnRleHQgcHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuXHJcbiAgfVxyXG4gIC5zbGlkZS1pbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1nL3dvcmtwbGFjZS10cmFuc2Zvcm1hdGlvbi1yZXNlYXJjaC1zdHVkeS1ob21lLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbiAgLnJlcGVhdGVkLWNzcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuaW5kdXN0cmllcy1ncmFkaWVudCwgLnByb2R1Y3QtZ3JhZGllbnQsIC5jYXNlc3R1ZGllcy1ncmFkaWVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcxMzE3MTtcclxufVxyXG4uamRyb3d7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmdkcm93e1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpXHJcbntcclxuICAucmVwZWF0ZWQtY3NzIHtcclxuICAgIGhlaWdodDogNDgwcHg7XHJcbn1cclxuLmpkcm93e1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmdkcm93e1xyXG4gIGRpc3BsYXk6IGJsb2NrXHJcbn1cclxuLnNsaWRlLWltYWdlIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1nL3dvcmtwbGFjZS10cmFuc2Zvcm1hdGlvbi1yZXNlYXJjaC1zdHVkeS1ob21lLW1vYi5qcGcnKTtcclxufVxyXG5cclxuLm92ZXJsYXtcclxuICBoZWlnaHQ6IDIzMHB4O1xyXG59XHJcbi50ZXh0e1xyXG4gIHRvcDoyMCU7XHJcbiAgZm9udC1zaXplOjIwcHg7XHJcbn1cclxuLnRleHQgcHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpXHJcbntcclxuICAucmVwZWF0ZWQtY3NzIHtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbn1cclxufVxyXG4uaGVyb3tcclxuICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAxNDBweCAwIDEwMHB4IDA7XHJcbn1cclxuXHJcbi5oZXJvc3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9iYW5uZXIvRGlnaXRhbC1UcmFuc2Zvcm1hdGlvbi5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICAgIHBhZGRpbmc6IDE0MHB4IDAgMTAwcHggMDtcclxufVxyXG5cclxuLmhlcm8xe1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1nL2Jhbm5lci9vdXRwdXQtb25saW5lcG5ndG9vbHMucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICBwYWRkaW5nOiAxNDBweCAwIDEwMHB4IDA7XHJcbn1cclxuXHJcbi5oZXJvcGVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1nL2Jhbm5lci9wZXJmb3JtYW5jZS1tYW5hZ2VtZW50LmpwZycpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXHJcbiAgcGFkZGluZzogMTQwcHggMCAxMDBweCAwO1xyXG59XHJcbi5uYXZiYXItbmF2e1xyXG4gIGRpc3BsYXk6IGJsb2NrXHJcbn1cclxuLm5hdi1saW5re1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogI2UyODcxNCA7IFxyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgYm9yZGVyLXRvcC1zdHlsZTogb3V0c2V0O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLXdpZHRoOiBpbml0aWFsO1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweCA7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcbi5uYXYtbGluazphY3RpdmV7XHJcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZTI4NzE0ICFpbXBvcnRhbnQ7IFxyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGJvcmRlci10b3Atc3R5bGU6IG91dHNldDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItd2lkdGg6IGluaXRpYWw7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHBhZGRpbmctbGVmdDogMTVweCA7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICBcclxufVxyXG4ubmF2ZGF0YXtcclxuICBkaXNwbGF5OiBibG9jaztcclxuXHJcbn1cclxuLm5hdmRhdGEgbGl7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4ubmF2LWxpbmtkYXRhe1xyXG4gIGZvbnQtc2l6ZTogMHB4IDtcclxuICBjb2xvcjogI2UyODcxNCA7IFxyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgYm9yZGVyLXRvcC1zdHlsZTogb3V0c2V0O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLXdpZHRoOiBpbml0aWFsO1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweCA7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcbi5uYXYtbGlua2RhdGEgYTphY3RpdmV7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG5cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/industries/industries.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/industries/industries.component.ts ***!
    \****************************************************/

  /*! exports provided: IndustriesComponent */

  /***/
  function srcAppIndustriesIndustriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndustriesComponent", function () {
      return IndustriesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var IndustriesComponent =
    /*#__PURE__*/
    function () {
      function IndustriesComponent() {
        _classCallCheck(this, IndustriesComponent);
      }

      _createClass(IndustriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IndustriesComponent;
    }();

    IndustriesComponent.ɵfac = function IndustriesComponent_Factory(t) {
      return new (t || IndustriesComponent)();
    };

    IndustriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IndustriesComponent,
      selectors: [["app-industries"]],
      decls: 74,
      vars: 0,
      consts: [["id", "Industries", 1, "about-lists"], [1, "container"], [1, "row", "no-gutters"], [1, "col-12", "section-title"], [1, "col-lg-3", "col-md-6", "content-item"], ["src", "../../assets/img/industry/counsumer.png", "alt", "", "srcset", "", 1, "icon-indu"], ["href", "#"], ["data-aos-delay", "100", 1, "col-lg-3", "col-md-6", "content-item"], ["src", "../../assets/img/industry/retail.png", "alt", "", "srcset", "", 1, "icon-indu"], ["data-aos-delay", "200", 1, "col-lg-3", "col-md-6", "content-item"], ["src", "../../assets/img/industry/service.png", "alt", "", "srcset", "", 1, "icon-indu", 2, "width", "80px", "height", "80px"], ["data-aos-delay", "300", 1, "col-lg-3", "col-md-6", "content-item"], ["src", "../../assets/img/industry/media.png", "alt", "", "srcset", "", 1, "icon-indu"], ["src", "../../assets/img/industry/education.jpg", "alt", "", "srcset", "", 1, "icon-indu"], ["src", "../../assets/img/industry/insurance.png", "alt", "", "srcset", "", 1, "icon-indu"], ["src", "../../assets/img/industry/telecom.jpg", "alt", "", "srcset", "", 1, "icon-indu"], ["src", "../../assets/img/industry/publicsector.png", "alt", "", "srcset", "", 1, "icon-indu"]],
      template: function IndustriesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Industries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "At Satwic, we take pride in providing the best custom-made IT solutions to help your business perform better. Our expert teams are equipped with exhaustive technological and managerial expertise across many industry verticals to cater to a wide segment of clients. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " We constantly focus on satisfying specific client demands and provide customized solutions based on our vast experience in various industry segments.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Consumer Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Globalization and this fast paced world have changed the way consumer product companies function. In such highly competitive and dynamic environments,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "more...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Retail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Today\u2019s retail companies face real time challenges in gathering accurate customer and product information. Such critical information.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "more...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Financial Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Financial services organizations face many challenges in managing their data. With increasing volumes of business records ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "more...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Media Entertainment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "The media entertainment industry faces real time challenge in managing, sharing and distributing content.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "more...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Education gives us a knowledge of the world around us and changes it into something better. It develops in us a perspective of looking at life ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "more...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Insurance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Insurance is a means of protection from financial loss. It is a form of risk management, primarily used to hedge against the risk of a contingent or uncertain loss");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "more...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Telecom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Telecommunications, also known as telecom, is the exchange of information over significant distances by electronic means and refers to all types of voice, data and video transmission. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "more...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Public Sector");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "The public sector industry faces real time challenge in managing, sharing and distributing content.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "more...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".icon-indu[_ngcontent-%COMP%]{\r\n    height: 60px;\r\n    width: 60px;\r\n}\r\n\r\n.about[_ngcontent-%COMP%] {\r\n    padding-bottom: 30px;\r\n}\r\n\r\n.about-lists[_ngcontent-%COMP%] {\r\n    padding: 40px;\r\n}\r\n\r\n.about-lists[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n}\r\n\r\n.no-gutters[_ngcontent-%COMP%]{\r\n    margin-right: 0;\r\n    margin-left: 0;   \r\n}\r\n\r\n.content-item[_ngcontent-%COMP%]{\r\n    padding: 40px;\r\n    border-left: 1px solid #d9e8f4;\r\n    border-bottom: 1px solid #d9e8f4;\r\n    margin: -1px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kdXN0cmllcy9pbmR1c3RyaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQVdBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixnQ0FBZ0M7SUFDaEMsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2luZHVzdHJpZXMvaW5kdXN0cmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24taW5kdXtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG59XHJcblxyXG4uYWJvdXQge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5hYm91dC1saXN0cyB7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG59XHJcbi5hYm91dC1saXN0cyAucm93IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLm5vLWd1dHRlcnN7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMDsgICBcclxufVxyXG4gXHJcbiAgICBcclxuIFxyXG4gICAgXHJcbiAgICBcclxuXHJcblxyXG5cclxuXHJcblxyXG4uY29udGVudC1pdGVte1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2Q5ZThmNDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDllOGY0O1xyXG4gICAgbWFyZ2luOiAtMXB4O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndustriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-industries',
          templateUrl: './industries.component.html',
          styleUrls: ['./industries.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/lovecustomer/lovecustomer.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/lovecustomer/lovecustomer.component.ts ***!
    \********************************************************/

  /*! exports provided: LovecustomerComponent */

  /***/
  function srcAppLovecustomerLovecustomerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LovecustomerComponent", function () {
      return LovecustomerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LovecustomerComponent =
    /*#__PURE__*/
    function () {
      function LovecustomerComponent() {
        _classCallCheck(this, LovecustomerComponent);
      }

      _createClass(LovecustomerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LovecustomerComponent;
    }();

    LovecustomerComponent.ɵfac = function LovecustomerComponent_Factory(t) {
      return new (t || LovecustomerComponent)();
    };

    LovecustomerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LovecustomerComponent,
      selectors: [["app-lovecustomer"]],
      decls: 122,
      vars: 0,
      consts: [[1, "counts", "section-bg", 2, "padding", "40px"], [1, "container"], [1, "section-title"], [1, "row"], ["id", "demo", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#demo", "data-slide-to", "0", 1, "active"], ["data-target", "#demo", "data-slide-to", "1"], ["data-target", "#demo", "data-slide-to", "2"], [1, "carousel-inner"], [1, "carousel-item", "active"], [1, "col-lg-4", "col-md-4", "col-sm-12"], [1, "card"], [1, "card-headers"], [1, "customerName"], [1, "cardImage"], ["src", "../../assets/img/team/team-3.jpg", "alt", "Card image cap", 1, "imgca"], [1, "card-body", "pt-5"], [1, "card-text", "text-center"], ["src", "../../assets/img/team/team-1.jpg", "alt", "Card image cap", 1, "imgca"], ["src", "../../assets/img/team/team-2.jpg", "alt", "Card image cap", 1, "imgca"], [1, "carousel-item"], ["href", "#demo", "data-slide", "prev", 1, "carousel-control-prev"], [1, "carousel-control-prev-icon"], ["href", "#demo", "data-slide", "next", 1, "carousel-control-next"], [1, "carousel-control-next-icon"], [1, "col-lg-3", "col-md-6", "text-center"], [1, "count-box"], [1, "icofont-simple-smile", 2, "color", "#20b38e"], ["data-toggle", "counter-up"], [1, "icofont-document-folder", 2, "color", "#c042ff"], [1, "icofont-live-support", 2, "color", "#46d1ff"], [1, "icofont-users-alt-5", 2, "color", "#ffb459"]],
      template: function LovecustomerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Loved by our customers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Mohit Tejwani");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Software Enginner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "The business management dashboard developed by GrayMatter is a powerful performance management tool empowering the user with business critical");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Dr. U. V. Girish Kumar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Founder,CEO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "The business management dashboard developed by GrayMatter is a powerful performance management tool empowering the user with business critical");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Monika Sharma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h5", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "CEO, Corporate Airport Sector");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "GrayMatter has been supporting BPCL\u2019s In &Out stores operations through efficient and effective management of its software changes in the business");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h3", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Dr. U. V. Girish Kumar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h5", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Founder,CEO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "The business management dashboard developed by GrayMatter is a powerful performance management tool empowering the user with business critical");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h3", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Monika Sharma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h5", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "CEO, Corporate Airport Sector");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "GrayMatter has been supporting BPCL\u2019s In &Out stores operations through efficient and effective management of its software changes in the business");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h3", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Mohit Tejwani");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h5", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Software Enginner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "The business management dashboard developed by GrayMatter is a powerful performance management tool empowering the user with business critical");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "232");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Happy Clients");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "521");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "1,463");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Hours Of Support");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "15");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Hard Workers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".counts[_ngcontent-%COMP%] {\r\n    padding-bottom: 30px;\r\n  }\r\n  \r\n  .counts[_ngcontent-%COMP%]   .count-box[_ngcontent-%COMP%] {\r\n    box-shadow: 0px 0 16px rgba(0, 0, 0, 0.1);\r\n    padding: 30px;\r\n    background: #fff;\r\n    margin-bottom: 30px;\r\n  }\r\n  \r\n  .counts[_ngcontent-%COMP%]   .count-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-size: 64px;\r\n    margin-bottom: 15px;\r\n  }\r\n  \r\n  .counts[_ngcontent-%COMP%]   .count-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 42px;\r\n    display: block;\r\n    font-weight: 700;\r\n    color: #1c5c93;\r\n  }\r\n  \r\n  .counts[_ngcontent-%COMP%]   .count-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: \"Raleway\", sans-serif;\r\n    font-size: 14px;\r\n  }\r\n  \r\n  .card-headers[_ngcontent-%COMP%]{\r\n    border-top-left-radius: .25rem;\r\n    border-top-right-radius: .25rem;\r\n    height: 135px;\r\n    padding: 1rem;\r\n    background-color: #17a2b8!important;\r\n    text-align: center;\r\n  }\r\n  \r\n  .cardImage[_ngcontent-%COMP%]{\r\n    left: 50%;\r\n    margin-left: -45px;\r\n    position: absolute;\r\n    top: 80px;\r\n  }\r\n  \r\n  .imgca[_ngcontent-%COMP%]{\r\n    border: 3px solid #fff;\r\n    height: 90px;\r\n    width: 90px;\r\n    box-shadow: 0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)!important;\r\n    border-radius: 50%;\r\n  }\r\n  \r\n  .customerName[_ngcontent-%COMP%]{\r\n      font-weight: 700;\r\n      color: #fff;\r\n      font-size: 18px !important\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG92ZWN1c3RvbWVyL2xvdmVjdXN0b21lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztDQUdDO0lBQ0csb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UseUNBQXlDO0lBQ3pDLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFNBQVM7SUFDVCxrQ0FBa0M7SUFDbEMsZUFBZTtFQUNqQjs7RUFHQTtJQUNFLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsa0JBQWtCO0VBQ3BCOztFQUNBO0lBQ0UsU0FBUztJQUNULGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsU0FBUztFQUNYOztFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixXQUFXO0lBQ1gseUVBQXlFO0lBQ3pFLGtCQUFrQjtFQUNwQjs7RUFDQTtNQUNJLGdCQUFnQjtNQUNoQixXQUFXO01BQ1g7RUFDSiIsImZpbGUiOiJzcmMvYXBwL2xvdmVjdXN0b21lci9sb3ZlY3VzdG9tZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbiAuY291bnRzIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuICBcclxuICAuY291bnRzIC5jb3VudC1ib3gge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDAgMTZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb3VudHMgLmNvdW50LWJveCBpIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiA2NHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvdW50cyAuY291bnQtYm94IHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMxYzVjOTM7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb3VudHMgLmNvdW50LWJveCBwIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5jYXJkLWhlYWRlcnN7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAuMjVyZW07XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogLjI1cmVtO1xyXG4gICAgaGVpZ2h0OiAxMzVweDtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4IWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmNhcmRJbWFnZXtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNDVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogODBweDtcclxuICB9XHJcbiAgLmltZ2Nhe1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwwLDAsLjE2KSwwIDNweCA2cHggcmdiYSgwLDAsMCwuMjMpIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbiAgLmN1c3RvbWVyTmFtZXtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50XHJcbiAgfVxyXG4gICJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LovecustomerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-lovecustomer',
          templateUrl: './lovecustomer.component.html',
          styleUrls: ['./lovecustomer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/operationalsection/operationalsection.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/operationalsection/operationalsection.component.ts ***!
    \********************************************************************/

  /*! exports provided: OperationalsectionComponent */

  /***/
  function srcAppOperationalsectionOperationalsectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OperationalsectionComponent", function () {
      return OperationalsectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var OperationalsectionComponent =
    /*#__PURE__*/
    function () {
      function OperationalsectionComponent() {
        _classCallCheck(this, OperationalsectionComponent);
      }

      _createClass(OperationalsectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OperationalsectionComponent;
    }();

    OperationalsectionComponent.ɵfac = function OperationalsectionComponent_Factory(t) {
      return new (t || OperationalsectionComponent)();
    };

    OperationalsectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OperationalsectionComponent,
      selectors: [["app-operationalsection"]],
      decls: 11,
      vars: 0,
      consts: [[1, "container-fluid", "img-fluid", "imagess"], [1, "row"], [1, "col-lg-6"], ["color", "#5a5858"], ["href", "#", 1, "btn", "btn-shutter-more"], [1, "bx", "bxl-apple"]],
      template: function OperationalsectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Operational Performance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "For many industries digital is a daunting challenge. But as with any challenge there are great rewards for those who master the Digital Transformation. Technimove has identified 4 clear steps to Digital Transformation. With each step on this journey, you and your organisation can discover true value.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " App Store");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".imagess[_ngcontent-%COMP%]{\r\n    background-image: url('performance-management.jpg');\r\n    background-size: cover;\r\n    height: 700px;\r\n    padding: 140px;\r\n}\r\n@media (max-width: 768px) { \r\n    .imagess[_ngcontent-%COMP%]{\r\n        padding: 40px;\r\n        height: 500px;\r\n    }\r\n }\r\n.btn-shutter-more[_ngcontent-%COMP%] {\r\n\tcolor: #fff;\r\n\tborder: 1px solid #fff;\r\n\tposition: relative;\r\n\tz-index: 1;\r\n\tdisplay: inline-block;\r\n\tbackground-color: transparent;\r\n\ttransition: all 0.3s ease-in-out;\r\n\tpadding: 12px 50px;\r\n\tborder-radius: 0;\r\n\tletter-spacing: 1.5px;\r\n\tmargin-top: 20px;\r\n\tfont-weight: 700;\r\n\tfont-size: 14px;\r\n}\r\n.btn-shutter-more[_ngcontent-%COMP%]:before {\r\n\tcontent: '';\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\theight: 100%;\r\n\twidth: 0;\r\n\ttransition: all 0.3s ease-in-out;\r\n\tbackground-color: #000;\r\n\tz-index: -1;\r\n}\r\n.btn-shutter-more[_ngcontent-%COMP%]:hover {\r\n\tborder: 1px solid #000;\r\n\tbackground-color: transparent;\r\n\tcolor: #ffffff;\r\n}\r\n.btn-shutter-more[_ngcontent-%COMP%]:hover:before {\r\n\twidth: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3BlcmF0aW9uYWxzZWN0aW9uL29wZXJhdGlvbmFsc2VjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBO0lBQ0ksbURBQXlFO0lBQ3pFLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsY0FBYztBQUNsQjtBQUNBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsYUFBYTtJQUNqQjtDQUNIO0FBR0Q7Q0FDQyxXQUFXO0NBQ1gsc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YscUJBQXFCO0NBQ3JCLDZCQUE2QjtDQUs3QixnQ0FBZ0M7Q0FDaEMsa0JBQWtCO0NBR2xCLGdCQUFnQjtDQUNoQixxQkFBcUI7Q0FDckIsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQixlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixNQUFNO0NBQ04sT0FBTztDQUNQLFlBQVk7Q0FDWixRQUFRO0NBS1IsZ0NBQWdDO0NBQ2hDLHNCQUFzQjtDQUN0QixXQUFXO0FBQ1o7QUFDQTtDQUNDLHNCQUFzQjtDQUN0Qiw2QkFBNkI7Q0FDN0IsY0FBYztBQUNmO0FBQ0E7Q0FDQyxXQUFXO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9vcGVyYXRpb25hbHNlY3Rpb24vb3BlcmF0aW9uYWxzZWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG4uaW1hZ2Vzc3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1nL2Jhbm5lci9wZXJmb3JtYW5jZS1tYW5hZ2VtZW50LmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiA3MDBweDtcclxuICAgIHBhZGRpbmc6IDE0MHB4O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkgeyBcclxuICAgIC5pbWFnZXNze1xyXG4gICAgICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIH1cclxuIH1cclxuXHJcblxyXG4uYnRuLXNodXR0ZXItbW9yZSB7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ei1pbmRleDogMTtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuXHQtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cdC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuXHRwYWRkaW5nOiAxMnB4IDUwcHg7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwO1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogMDtcclxuXHRib3JkZXItcmFkaXVzOiAwO1xyXG5cdGxldHRlci1zcGFjaW5nOiAxLjVweDtcclxuXHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5idG4tc2h1dHRlci1tb3JlOmJlZm9yZSB7XHJcblx0Y29udGVudDogJyc7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHR3aWR0aDogMDtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cdC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcblx0LW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cdC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcblx0ei1pbmRleDogLTE7XHJcbn1cclxuLmJ0bi1zaHV0dGVyLW1vcmU6aG92ZXIge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0Y29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLmJ0bi1zaHV0dGVyLW1vcmU6aG92ZXI6YmVmb3JlIHtcclxuXHR3aWR0aDogMTAwJTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OperationalsectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-operationalsection',
          templateUrl: './operationalsection.component.html',
          styleUrls: ['./operationalsection.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ourteam/ourteam.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/ourteam/ourteam.component.ts ***!
    \**********************************************/

  /*! exports provided: OurteamComponent */

  /***/
  function srcAppOurteamOurteamComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OurteamComponent", function () {
      return OurteamComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var OurteamComponent =
    /*#__PURE__*/
    function () {
      function OurteamComponent() {
        _classCallCheck(this, OurteamComponent);
      }

      _createClass(OurteamComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OurteamComponent;
    }();

    OurteamComponent.ɵfac = function OurteamComponent_Factory(t) {
      return new (t || OurteamComponent)();
    };

    OurteamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OurteamComponent,
      selectors: [["app-ourteam"]],
      decls: 60,
      vars: 0,
      consts: [["id", "team", 1, "team"], [1, "container"], [1, "section-title"], [1, "row"], [1, "col-xl-4", "col-lg-4", "col-md-4", "col-sm-12"], [1, "member"], [1, "pic"], ["src", "../../assets/img/team/natesh.jpg", "alt", "", 1, "img-fluid"], [1, "member-info"], [1, "social"], ["href", ""], [1, "icofont-twitter"], [1, "icofont-facebook"], [1, "icofont-instagram"], [1, "icofont-linkedin"], ["data-aos-delay", "100", 1, "col-xl-4", "col-lg-4", "col-md-4", "col-sm-12"], ["src", "../../assets/img/team/team-4.jpg", "alt", "", 1, "img-fluid"], ["src", "../../assets/img/team/team-1.jpg", "alt", "", "height", "300px", "width", "300px"]],
      template: function OurteamComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Our Executive Team");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Natesh Kodancha");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Founder, CEO ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Subbaiah Cherumandanda");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Founder, President ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "John cena");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "SVP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["[out-back][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%] {\r\n    transition-timing-function: cubic-bezier(.68,-.55,.265,1.55);\r\n  }\r\n  [data-aos][data-aos][data-aos-duration=\"1000\"][_ngcontent-%COMP%], body[data-aos-duration=\"1000\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%] {\r\n    transition-duration: 1s;\r\n  }\r\n  [data-aos^=fade][data-aos^=fade][_ngcontent-%COMP%] {\r\n    opacity: 0;\r\n    transition-property: opacity,transform;\r\n  }\r\n  [data-aos=fade-up][_ngcontent-%COMP%] {\r\n    transform: translate3d(0,100px,0);\r\n  }\r\n  .team[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 60px 0 30px 0;\r\n  }\r\n  .team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-bottom: 80px;\r\n    position: relative;\r\n  }\r\n  *[_ngcontent-%COMP%], [_ngcontent-%COMP%]::after, [_ngcontent-%COMP%]::before {\r\n    box-sizing: border-box;\r\n  }\r\n  .team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%] {\r\n    border-radius: 4px;\r\n    overflow: hidden;\r\n  }\r\n  .team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    transition: all ease-in-out 0.4s;\r\n  }\r\n  .team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\r\n    transform: scale(1.1);\r\n  }\r\n  .team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: -48px;\r\n    left: 20px;\r\n    right: 20px;\r\n    background: linear-gradient(360deg, #5c768d 0%, rgba(92, 118, 141, 0.9) 35%, rgba(140, 167, 191, 0.8) 100%);\r\n    padding: 15px 0;\r\n    border-radius: 4px;\r\n  }\r\n  .team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    font-weight: 700;\r\n    margin-bottom: 10px;\r\n    font-size: 16px;\r\n    color: #fff;\r\n    position: relative;\r\n    padding-bottom: 10px;\r\n  }\r\n  .team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-style: italic;\r\n    display: block;\r\n    font-size: 13px;\r\n    color: #fff;\r\n  }\r\n  .team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\r\n    margin-top: 15px;\r\n  }\r\n  .team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    transition: color 0.3s;\r\n    color: #fff;\r\n  }\r\n  .team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    margin: 0 2px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3VydGVhbS9vdXJ0ZWFtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLDREQUE0RDtFQUM5RDtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxVQUFVO0lBQ1Ysc0NBQXNDO0VBQ3hDO0VBQ0E7SUFDRSxpQ0FBaUM7RUFDbkM7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixzQkFBc0I7RUFDeEI7RUFHQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFVBQVU7SUFDVixXQUFXO0lBQ1gsMkdBQTJHO0lBQzNHLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7SUFDZixXQUFXO0VBQ2I7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLFdBQVc7RUFDYjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGFBQWE7RUFDZiIsImZpbGUiOiJzcmMvYXBwL291cnRlYW0vb3VydGVhbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5bb3V0LWJhY2tdIFtkYXRhLWFvc10ge1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllciguNjgsLS41NSwuMjY1LDEuNTUpO1xyXG4gIH1cclxuICBbZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIl0sIGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJdIFtkYXRhLWFvc10ge1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgfVxyXG4gIFtkYXRhLWFvc149ZmFkZV1bZGF0YS1hb3NePWZhZGVdIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5LHRyYW5zZm9ybTtcclxuICB9XHJcbiAgW2RhdGEtYW9zPWZhZGUtdXBdIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwxMDBweCwwKTtcclxuICB9XHJcbiAgXHJcbiAgLnRlYW0ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDYwcHggMCAzMHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC50ZWFtIC5tZW1iZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgKiwgOjphZnRlciwgOjpiZWZvcmUge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgLnRlYW0gLm1lbWJlciAucGljIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIC50ZWFtIC5tZW1iZXIgaW1nIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjRzO1xyXG4gIH1cclxuICAudGVhbSAubWVtYmVyOmhvdmVyIGltZyB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZWFtIC5tZW1iZXIgLm1lbWJlci1pbmZvIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTQ4cHg7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjNWM3NjhkIDAlLCByZ2JhKDkyLCAxMTgsIDE0MSwgMC45KSAzNSUsIHJnYmEoMTQwLCAxNjcsIDE5MSwgMC44KSAxMDAlKTtcclxuICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcbiAgLnRlYW0gLm1lbWJlciBoNCB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIC50ZWFtIC5tZW1iZXIgc3BhbiB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAudGVhbSAubWVtYmVyIC5zb2NpYWwge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICB9XHJcbiAgLnRlYW0gLm1lbWJlciAuc29jaWFsIGEge1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAudGVhbSAubWVtYmVyIC5zb2NpYWwgaSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW46IDAgMnB4O1xyXG4gIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OurteamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ourteam',
          templateUrl: './ourteam.component.html',
          styleUrls: ['./ourteam.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/practicesection/practicesection.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/practicesection/practicesection.component.ts ***!
    \**************************************************************/

  /*! exports provided: PracticesectionComponent */

  /***/
  function srcAppPracticesectionPracticesectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PracticesectionComponent", function () {
      return PracticesectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PracticesectionComponent =
    /*#__PURE__*/
    function () {
      function PracticesectionComponent() {
        _classCallCheck(this, PracticesectionComponent);
      }

      _createClass(PracticesectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PracticesectionComponent;
    }();

    PracticesectionComponent.ɵfac = function PracticesectionComponent_Factory(t) {
      return new (t || PracticesectionComponent)();
    };

    PracticesectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PracticesectionComponent,
      selectors: [["app-practicesection"]],
      decls: 15,
      vars: 0,
      consts: [[1, "container-fluid", "img-fluid", "imagess"], [1, "row"], [1, "col-lg-6"], ["color", "#5a5858"], ["href", "#", 1, "btn", "btn-shutter-more"], [1, "bx", "bxl-apple"]],
      template: function PracticesectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Our Practices");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Adopt practices to evolve your way of working and delivering solutions.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Great teamwork requires more than just great tools. Check out our proven methods, guides, and exercises that help make work better, and people happier.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Read More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".imagess[_ngcontent-%COMP%]{\r\n    background-size: cover;\r\n\r\n    height: 650px;\r\n    background: #0f9ffa url('digital-operating-models-lead.png') no-repeat;\r\n    padding: 140px;\r\n}\r\n@media (max-width: 768px) { \r\n    .imagess[_ngcontent-%COMP%]{\r\n        padding: 40px;\r\n        height: 500px;\r\n    }\r\n }\r\n.btn-shutter-more[_ngcontent-%COMP%] {\r\n\tcolor: #fff;\r\n\tborder: 1px solid #fff;\r\n\tposition: relative;\r\n\tz-index: 1;\r\n\tdisplay: inline-block;\r\n\tbackground-color: transparent;\r\n\ttransition: all 0.3s ease-in-out;\r\n\tpadding: 12px 50px;\r\n\tborder-radius: 0;\r\n\tletter-spacing: 1.5px;\r\n\tmargin-top: 20px;\r\n\tfont-weight: 700;\r\n\tfont-size: 14px;\r\n}\r\n.btn-shutter-more[_ngcontent-%COMP%]:before {\r\n\tcontent: '';\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\theight: 100%;\r\n\twidth: 0;\r\n\ttransition: all 0.3s ease-in-out;\r\n\tbackground-color: #000;\r\n\tz-index: -1;\r\n}\r\n.btn-shutter-more[_ngcontent-%COMP%]:hover {\r\n\tborder: 1px solid #000;\r\n\tbackground-color: transparent;\r\n\tcolor: #ffffff;\r\n}\r\n.btn-shutter-more[_ngcontent-%COMP%]:hover:before {\r\n\twidth: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJhY3RpY2VzZWN0aW9uL3ByYWN0aWNlc2VjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBO0lBQ0ksc0JBQXNCOztJQUV0QixhQUFhO0lBQ2Isc0VBQStGO0lBQy9GLGNBQWM7QUFDbEI7QUFDQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLGFBQWE7SUFDakI7Q0FDSDtBQUdEO0NBQ0MsV0FBVztDQUNYLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLHFCQUFxQjtDQUNyQiw2QkFBNkI7Q0FLN0IsZ0NBQWdDO0NBQ2hDLGtCQUFrQjtDQUdsQixnQkFBZ0I7Q0FDaEIscUJBQXFCO0NBQ3JCLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsV0FBVztDQUNYLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsTUFBTTtDQUNOLE9BQU87Q0FDUCxZQUFZO0NBQ1osUUFBUTtDQUtSLGdDQUFnQztDQUNoQyxzQkFBc0I7Q0FDdEIsV0FBVztBQUNaO0FBQ0E7Q0FDQyxzQkFBc0I7Q0FDdEIsNkJBQTZCO0NBQzdCLGNBQWM7QUFDZjtBQUNBO0NBQ0MsV0FBVztBQUNaIiwiZmlsZSI6InNyYy9hcHAvcHJhY3RpY2VzZWN0aW9uL3ByYWN0aWNlc2VjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuLmltYWdlc3N7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cclxuICAgIGhlaWdodDogNjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMGY5ZmZhIHVybCgnLi4vLi4vYXNzZXRzL2ltZy9iYW5uZXIvZGlnaXRhbC1vcGVyYXRpbmctbW9kZWxzLWxlYWQucG5nJykgbm8tcmVwZWF0IDtcclxuICAgIHBhZGRpbmc6IDE0MHB4O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkgeyBcclxuICAgIC5pbWFnZXNze1xyXG4gICAgICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIH1cclxuIH1cclxuXHJcblxyXG4uYnRuLXNodXR0ZXItbW9yZSB7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ei1pbmRleDogMTtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuXHQtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cdC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuXHRwYWRkaW5nOiAxMnB4IDUwcHg7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwO1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogMDtcclxuXHRib3JkZXItcmFkaXVzOiAwO1xyXG5cdGxldHRlci1zcGFjaW5nOiAxLjVweDtcclxuXHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5idG4tc2h1dHRlci1tb3JlOmJlZm9yZSB7XHJcblx0Y29udGVudDogJyc7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHR3aWR0aDogMDtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cdC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcblx0LW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cdC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcblx0ei1pbmRleDogLTE7XHJcbn1cclxuLmJ0bi1zaHV0dGVyLW1vcmU6aG92ZXIge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0Y29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLmJ0bi1zaHV0dGVyLW1vcmU6aG92ZXI6YmVmb3JlIHtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PracticesectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-practicesection',
          templateUrl: './practicesection.component.html',
          styleUrls: ['./practicesection.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/scroll-spy.directive.ts":
  /*!*****************************************!*\
    !*** ./src/app/scroll-spy.directive.ts ***!
    \*****************************************/

  /*! exports provided: ScrollSpyDirective */

  /***/
  function srcAppScrollSpyDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollSpyDirective", function () {
      return ScrollSpyDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ScrollSpyDirective =
    /*#__PURE__*/
    function () {
      function ScrollSpyDirective(_el) {
        _classCallCheck(this, ScrollSpyDirective);

        this._el = _el;
        this.spiedTags = [];
        this.sectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ScrollSpyDirective, [{
        key: "onScroll",
        value: function onScroll(event) {
          var _this = this;

          var currentSection;
          var children = this._el.nativeElement.children;
          var scrollTop = event.target.scrollTop;
          var parentOffset = event.target.offsetTop;

          var _loop = function _loop(i) {
            var element = children[i];
            console.log(element);

            if (_this.spiedTags.some(function (spiedTag) {
              return spiedTag === element.tagName;
            })) {
              if (element.offsetTop - parentOffset <= scrollTop) {
                currentSection = element.id;
              }
            }
          };

          for (var i = 0; i < children.length; i++) {
            _loop(i);
          }

          if (currentSection !== this.currentSection) {
            this.currentSection = currentSection;
            this.sectionChange.emit(this.currentSection);
          }
        }
      }]);

      return ScrollSpyDirective;
    }();

    ScrollSpyDirective.ɵfac = function ScrollSpyDirective_Factory(t) {
      return new (t || ScrollSpyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    ScrollSpyDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ScrollSpyDirective,
      selectors: [["", "scrollSpy", ""]],
      hostBindings: function ScrollSpyDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScrollSpyDirective_scroll_HostBindingHandler($event) {
            return ctx.onScroll($event);
          });
        }
      },
      inputs: {
        spiedTags: "spiedTags"
      },
      outputs: {
        sectionChange: "sectionChange"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollSpyDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[scrollSpy]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        spiedTags: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        sectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['scroll', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/scrollspy/scrollspy.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/scrollspy/scrollspy.component.ts ***!
    \**************************************************/

  /*! exports provided: ScrollspyComponent */

  /***/
  function srcAppScrollspyScrollspyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollspyComponent", function () {
      return ScrollspyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _scroll_spy_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../scroll-spy.directive */
    "./src/app/scroll-spy.directive.ts");
    /* harmony import */


    var _demosection_demosection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../demosection/demosection.component */
    "./src/app/demosection/demosection.component.ts");
    /* harmony import */


    var _practicesection_practicesection_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../practicesection/practicesection.component */
    "./src/app/practicesection/practicesection.component.ts");
    /* harmony import */


    var _operationalsection_operationalsection_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../operationalsection/operationalsection.component */
    "./src/app/operationalsection/operationalsection.component.ts");
    /* harmony import */


    var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../aboutus/aboutus.component */
    "./src/app/aboutus/aboutus.component.ts");
    /* harmony import */


    var _industries_industries_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../industries/industries.component */
    "./src/app/industries/industries.component.ts");
    /* harmony import */


    var _servicesectiion_servicesectiion_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../servicesectiion/servicesectiion.component */
    "./src/app/servicesectiion/servicesectiion.component.ts");
    /* harmony import */


    var _lovecustomer_lovecustomer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../lovecustomer/lovecustomer.component */
    "./src/app/lovecustomer/lovecustomer.component.ts");
    /* harmony import */


    var _client_client_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../client/client.component */
    "./src/app/client/client.component.ts");
    /* harmony import */


    var _ourteam_ourteam_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../ourteam/ourteam.component */
    "./src/app/ourteam/ourteam.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/footer/footer.component.ts");

    function ScrollspyComponent_a_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Navigate to Next ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ScrollspyComponent_a_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Navigate to Next ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ScrollspyComponent_a_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Digital Transformation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ScrollspyComponent_a_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Digital Transformation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ScrollspyComponent_a_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Practices ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ScrollspyComponent_a_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Practices");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ScrollspyComponent_a_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Operational Performance");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ScrollspyComponent_a_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Operational Performance");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ScrollspyComponent_a_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " About Us");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ScrollspyComponent_a_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " About Us");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ScrollspyComponent_a_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Industries");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ScrollspyComponent_a_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Industries");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ScrollspyComponent_a_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Services");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ScrollspyComponent_a_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Services");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ScrollspyComponent_a_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Customer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ScrollspyComponent_a_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Customer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ScrollspyComponent_a_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Clients ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ScrollspyComponent_a_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Partners");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ScrollspyComponent_a_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Leadership Team ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ScrollspyComponent_a_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Leadership Team ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ScrollspyComponent_a_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Contact Us ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ScrollspyComponent_a_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Contact Us ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["DIV"];
    };

    var ScrollspyComponent =
    /*#__PURE__*/
    function () {
      function ScrollspyComponent() {
        _classCallCheck(this, ScrollspyComponent);

        this.currentSection = 'section1';
      }

      _createClass(ScrollspyComponent, [{
        key: "onSectionChange",
        value: function onSectionChange(sectionId) {
          this.currentSection = sectionId;
        }
      }, {
        key: "scrollTo",
        value: function scrollTo(section) {
          document.querySelector('#' + section).scrollIntoView();
          setTimeout(function () {}, 2000);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ScrollspyComponent;
    }();

    ScrollspyComponent.ɵfac = function ScrollspyComponent_Factory(t) {
      return new (t || ScrollspyComponent)();
    };

    ScrollspyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ScrollspyComponent,
      selectors: [["app-scrollspy"]],
      decls: 167,
      vars: 24,
      consts: [[1, "listviewgrpoup"], [1, "vnavbod", 3, "click"], ["class", "vnav", 4, "ngIf"], ["class", "vnavi", 4, "ngIf"], ["id", "parentDiv", "scrollSpy", "", 1, "mainSection", 3, "spiedTags", "sectionChange"], ["id", "section1"], [1, "d-flex", "align-items-center", "hero1"], ["id", "myNav", 1, "overlay"], ["href", "javascript:void(0)", "onclick", "closeNav()", 1, "closebtn"], [1, "overlay-content"], [1, "row", "bg-white"], [1, "col-lg-3", "col-md-3", "headerOption1", "bgopa"], ["href", "#digital-transformation", "onclick", "closeNav()", 1, "bgopaa"], [1, "col-lg-3", "col-md-3", "headerOption1", "bgopb"], ["href", "#data-operational", "onclick", "closeNav()", 1, "bgopaa"], [1, "col-lg-3", "col-md-3", "headerOption1", "bgopc"], ["href", "#digital-operating", "onclick", "closeNav()", 1, "bgopaa"], [1, "col-lg-3", "col-md-3", "col-sm-12", "bgopd"], ["href", "#about-us", "onclick", "closeNav()"], ["href", "#industries", "onclick", "closeNav()"], ["href", "#services", "onclick", "closeNav()"], ["href", "#customer", "onclick", "closeNav()"], ["href", "#client-partner", "onclick", "closeNav()"], ["href", "#ourteam", "onclick", "closeNav()"], ["href", "#contact-us", "onclick", "closeNav()"], [1, "opentabbox"], ["onclick", "openNav()", 1, "openTab"], [1, "container"], [1, "row"], [1, "col-lg-6"], [1, "text-white"], ["href", "#", 1, "btn", "btn-shutter-more"], [1, "bx", "bxs-like", "bx-spin"], ["id", "digital-transformation"], ["id", "digital-operating"], ["id", "data-operational"], ["id", "about-us"], ["id", "industries"], ["id", "services"], ["id", "customer"], ["id", "client-partner"], ["id", "ourteam"], ["id", "contact-us"], ["id", "contact", 1, "contact"], [1, "section-title"], [1, "col-lg-6", "d-flex", "align-items-stretch"], [1, "info-box"], [1, "col-12"], [1, "col-6", "text-center"], [1, "bx", "bx-map"], [1, "col-6", "text-center", 2, "border-left-style", "outset"], ["data-aos-delay", "100", 1, "col-lg-3", "d-flex", "align-items-stretch"], [1, "bx", "bx-envelope"], ["data-aos-delay", "200", 1, "col-lg-3", "d-flex", "align-items-stretch"], [1, "bx", "bx-phone-call"], ["data-aos-delay", "300", 1, "col-lg-12"], ["action", "forms/contact.php", "method", "post", "role", "form", 1, "php-email-form"], [1, "form-row"], [1, "col-lg-6", "form-group"], ["type", "text", "name", "name", "id", "name", "placeholder", "Your Name", "data-rule", "minlen:4", "data-msg", "Please enter at least 4 chars", 1, "form-control"], [1, "validate"], ["type", "email", "name", "email", "id", "email", "placeholder", "Your Email", "data-rule", "email", "data-msg", "Please enter a valid email", 1, "form-control"], [1, "form-group"], ["type", "text", "name", "subject", "id", "subject", "placeholder", "Subject", "data-rule", "minlen:4", "data-msg", "Please enter at least 8 chars of subject", 1, "form-control"], ["name", "message", "rows", "5", "data-rule", "required", "data-msg", "Please write something for us", "placeholder", "Message", 1, "form-control"], [1, "mb-3"], [1, "loading"], [1, "error-message"], [1, "sent-message"], [1, "text-center"], ["type", "submit"], ["href", "#", 1, "back-to-top"], [1, "icofont-simple-up"], [1, "vnav"], [1, "vnavi"]],
      template: function ScrollspyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollspyComponent_Template_div_click_1_listener() {
            return ctx.scrollTo("section1");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ScrollspyComponent_a_2_Template, 2, 0, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ScrollspyComponent_a_3_Template, 2, 0, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollspyComponent_Template_div_click_4_listener() {
            return ctx.scrollTo("digital-transformation");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ScrollspyComponent_a_5_Template, 2, 0, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ScrollspyComponent_a_6_Template, 2, 0, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollspyComponent_Template_div_click_7_listener() {
            return ctx.scrollTo("digital-operating");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ScrollspyComponent_a_8_Template, 2, 0, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ScrollspyComponent_a_9_Template, 2, 0, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollspyComponent_Template_div_click_10_listener() {
            return ctx.scrollTo("data-operational");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ScrollspyComponent_a_11_Template, 2, 0, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ScrollspyComponent_a_12_Template, 2, 0, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollspyComponent_Template_div_click_13_listener() {
            return ctx.scrollTo("about-us");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ScrollspyComponent_a_14_Template, 2, 0, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ScrollspyComponent_a_15_Template, 2, 0, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollspyComponent_Template_div_click_16_listener() {
            return ctx.scrollTo("industries");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ScrollspyComponent_a_17_Template, 2, 0, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ScrollspyComponent_a_18_Template, 2, 0, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollspyComponent_Template_div_click_19_listener() {
            return ctx.scrollTo("services");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ScrollspyComponent_a_20_Template, 2, 0, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ScrollspyComponent_a_21_Template, 2, 0, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollspyComponent_Template_div_click_22_listener() {
            return ctx.scrollTo("customer");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ScrollspyComponent_a_23_Template, 2, 0, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ScrollspyComponent_a_24_Template, 2, 0, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollspyComponent_Template_div_click_25_listener() {
            return ctx.scrollTo("client-partner");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ScrollspyComponent_a_26_Template, 2, 0, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ScrollspyComponent_a_27_Template, 2, 0, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollspyComponent_Template_div_click_28_listener() {
            return ctx.scrollTo("ourteam");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ScrollspyComponent_a_29_Template, 2, 0, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ScrollspyComponent_a_30_Template, 2, 0, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollspyComponent_Template_div_click_31_listener() {
            return ctx.scrollTo("contact-us");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ScrollspyComponent_a_32_Template, 2, 0, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ScrollspyComponent_a_33_Template, 2, 0, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sectionChange", function ScrollspyComponent_Template_div_sectionChange_35_listener($event) {
            return ctx.onSectionChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "section", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Digital Transformation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Practices");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Operational Performance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "About Us ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Industries ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Services ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Customer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Clients");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Partners");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Leadership Team ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Contact Us ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\u2630");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h1", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Making a Digital Enterprise ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Deploy technology for profit instead of just operational");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Read More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "app-demosection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "app-practicesection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "app-operationalsection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "app-aboutus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "app-industries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "app-servicesectiion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "app-lovecustomer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "app-client");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "app-ourteam");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "section", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Our Locations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "i", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "117 E Colorado Blvd, Suite 200 Pasadena, CA,USA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "i", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "#34 Akash Avenue 1st main road, SBM colony, Anand nagar Main Road Bangalore,India");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "i", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Email Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "info@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "contact@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "i", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Call Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "(818)230-2181");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "(080)2355-8400");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "form", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "input", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "input", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "input", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "textarea", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Loading");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Your message has been sent. Thank you!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "button", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Send Message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "a", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "i", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSection === "section1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSection !== "section1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSection === "digital-transformation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSection !== "digital-transformation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSection === "digital-operating");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSection !== "digital-operating");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSection === "data-operational");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSection !== "data-operational");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSection === "about-us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSection !== "about-us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSection === "industries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSection !== "industries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSection === "services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSection !== "services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSection === "customer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSection !== "customer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSection === "client-partner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSection !== "client-partner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSection === "ourteam");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSection !== "ourteam");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSection === "contact-us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSection !== "contact-us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("spiedTags", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c0));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _scroll_spy_directive__WEBPACK_IMPORTED_MODULE_2__["ScrollSpyDirective"], _demosection_demosection_component__WEBPACK_IMPORTED_MODULE_3__["DemosectionComponent"], _practicesection_practicesection_component__WEBPACK_IMPORTED_MODULE_4__["PracticesectionComponent"], _operationalsection_operationalsection_component__WEBPACK_IMPORTED_MODULE_5__["OperationalsectionComponent"], _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_6__["AboutusComponent"], _industries_industries_component__WEBPACK_IMPORTED_MODULE_7__["IndustriesComponent"], _servicesectiion_servicesectiion_component__WEBPACK_IMPORTED_MODULE_8__["ServicesectiionComponent"], _lovecustomer_lovecustomer_component__WEBPACK_IMPORTED_MODULE_9__["LovecustomerComponent"], _client_client_component__WEBPACK_IMPORTED_MODULE_10__["ClientComponent"], _ourteam_ourteam_component__WEBPACK_IMPORTED_MODULE_11__["OurteamComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]],
      styles: [".vnavbod[_ngcontent-%COMP%]{\r\n  margin-left: 15px;\r\n  \r\n}\r\n\r\n.listviewgrpoup[_ngcontent-%COMP%]{\r\n    display: block;\r\n    position: fixed;\r\n    top: 20%;\r\n    z-index: 999;\r\n}\r\n\r\n.vnav[_ngcontent-%COMP%]{\r\n    font-size: 16px ;\r\n    color: #e28714;\r\n    font-weight: 700;\r\n    border-top-style: outset;\r\n    border-top-right-radius: 5px;\r\n    border-width: initial;\r\n    width: auto;\r\n    padding: 0;\r\n    margin-bottom: 10px;\r\n    max-width: 80px;\r\n    display: block;\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\n\r\n.vnavi[_ngcontent-%COMP%]{\r\n    font-size: 10px ;\r\n    color: #e28714;\r\n    font-weight: 700;\r\n    border-top-style: outset;\r\n    border-top-right-radius: 5px;\r\n    border-width: initial;\r\n    width: auto;\r\n    padding: 0;\r\n    margin-bottom: 10px;\r\n    max-width: 80px;\r\n    display: block;\r\n    transition: all 0.5s ease-in-out;\r\n  }\r\n\r\n.vnav[_ngcontent-%COMP%]:hover{\r\n    color: #e28714;\r\n    font-size: 16px;\r\n    width: auto;\r\n  }\r\n\r\n.vnavi[_ngcontent-%COMP%]:hover{\r\n    font-size: 16px;\r\n    color: #e28714;\r\n    width: auto;\r\n  }\r\n\r\n.overlay[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 999;\r\n    top: 0 !important;\r\n    right: 0;\r\n    background-color: rgb(0,0,0);\r\n    background-color: rgba(0,0,0, 0.9);\r\n    overflow-y: hidden;\r\n    transition: 1.0s;\r\n  }\r\n\r\n.overlay-content[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top: 0%;\r\n    width: 100%;\r\n    text-align: center;\r\n    margin-top: 0px;\r\n  }\r\n\r\n.overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 8px;\r\n    text-decoration: none;\r\n    display: block;\r\n    transition: 0.3s;\r\n    font-size: 35px;\r\n    margin-bottom: 15px;\r\n    font-weight: 900;\r\n    line-height: 1.1;\r\n    color: #fff;\r\n    margin-top: 20px;\r\n    text-align: left;\r\n    transition-timing-function: linear;\r\n    transition-delay: 0.5s;\r\n  \r\n   \r\n  }\r\n\r\n.overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\r\n    color: #e28714;\r\n    font-size: 32px;\r\n  \r\n  }\r\n\r\n.overlay[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 45px;\r\n    font-size: 60px;\r\n    color: #030b22;\r\n    z-index: 999;\r\n  }\r\n\r\n@media screen and (max-height: 450px) {\r\n    .overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {font-size: 20px}\r\n    .overlay[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\r\n    font-size: 40px;\r\n    top: 15px;\r\n    right: 35px;\r\n    }\r\n  }\r\n\r\n.openTab[_ngcontent-%COMP%]{\r\n    font-size: 28px;\r\n    cursor: pointer;\r\n    z-index: 999;\r\n  \r\n  }\r\n\r\n.opentabbox[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    width: 50px;\r\n    position: fixed;\r\n    right: 20px;\r\n    top: 10px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    margin: 30px;\r\n    z-index: 99;\r\n    padding: 5px;\r\n    cursor: pointer;\r\n  }\r\n\r\n.verticalNav[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    top: 35%;\r\n    z-index: 999;\r\n  }\r\n\r\n.hero1[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  position: relative;\r\n  overflow: hidden;\r\n  height: 650px;\r\n  background-image: url('output-onlinepngtools.png');\r\n  background-repeat: no-repeat;\r\n  background-size: cover; \r\n  padding: 140px 0 100px 0;\r\n}\r\n\r\n.mainSection[_ngcontent-%COMP%]{\r\n    height:650px;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.bgopa[_ngcontent-%COMP%]{\r\n  background: #030b22 url('Digital-Transformation.jpg')  no-repeat scroll -20px 65px;\r\n  height: 100vh;\r\n\tbackground-repeat: no-repeat !important;\r\n\tbackground-size: cover !important;\r\n\tcolor: #fff;\r\n  padding-top: 25px;\r\n  background-position: -750px 0px;;\r\n}\r\n\r\n.bgopb[_ngcontent-%COMP%]{\r\n  background: #0f9ffa url('digital-operating-models-lead.png')  no-repeat scroll -20px 65px;\r\n  height: 100vh;\r\n\tbackground-repeat: no-repeat !important;\r\n\tbackground-size: cover !important;\r\n\tcolor: #fff;\r\n  padding-top: 25px;\r\n  background-position: -750px 0px;\r\n}\r\n\r\n.bgopc[_ngcontent-%COMP%]{\r\n  background: #0e1822 url('performance-management.jpg')  no-repeat scroll -20px 65px;\r\n  height: 100vh;\r\n\tbackground-repeat: no-repeat !important;\r\n\tbackground-size: cover !important;\r\n\tcolor: #fff;\r\n  padding-top: 25px;\r\n  background-position: -750px 0px;\r\n}\r\n\r\n.bgopd[_ngcontent-%COMP%]{\r\n  background: #fff url('pattern-bg.png')  no-repeat scroll -20px 65px;\r\n  height: 100vh;\r\n\tbackground-repeat: no-repeat !important;\r\n\tbackground-size: cover !important;\r\n\tcolor: #fff;\r\n  background-position: center center;\r\n  padding: 35px;\r\n  padding-top: 50px;\r\n  text-align: left;\r\n}\r\n\r\n.bgopd[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  color: #3F3F3F;\r\n  font-weight: 900;\r\n  font-size: 23px;\r\n  text-decoration: none;\r\n  font-family: myriad-pro, Arial;\r\n\r\n}\r\n\r\n.headerOption1[_ngcontent-%COMP%]{\r\n  visibility: visible;\r\n  display: block;\r\n\r\n}\r\n\r\n@media only screen and (max-width: 768px)  { \r\n  \r\n  .headerOption1[_ngcontent-%COMP%]{\r\n    visibility: hidden;\r\n    display: none ;\r\n\r\n  }\r\n}\r\n\r\n.img-bot[_ngcontent-%COMP%]{\r\n  height: 40px;\r\n  width: 60px;\r\n  float: left;\r\n  margin-right: 10px;\r\n}\r\n\r\n.btn-shutter-more[_ngcontent-%COMP%] {\r\n\tcolor: #fff;\r\n\tborder: 1px solid #fff;\r\n\tposition: relative;\r\n\tz-index: 1;\r\n\tdisplay: inline-block;\r\n\tbackground-color: transparent;\r\n\ttransition: all 0.3s ease-in-out;\r\n\tpadding: 12px 50px;\r\n\tborder-radius: 0;\r\n\tletter-spacing: 1.5px;\r\n\tmargin-top: 20px;\r\n\tfont-weight: 700;\r\n\tfont-size: 14px;\r\n}\r\n\r\n.btn-shutter-more[_ngcontent-%COMP%]:before {\r\n\tcontent: '';\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\theight: 100%;\r\n\twidth: 0;\r\n\ttransition: all 0.3s ease-in-out;\r\n\tbackground-color: #000;\r\n\tz-index: -1;\r\n}\r\n\r\n.btn-shutter-more[_ngcontent-%COMP%]:hover {\r\n\tborder: 1px solid #000;\r\n\tbackground-color: transparent;\r\n\tcolor: #ffffff;\r\n}\r\n\r\n.btn-shutter-more[_ngcontent-%COMP%]:hover:before {\r\n\twidth: 100%;\r\n}\r\n\r\n.contact[_ngcontent-%COMP%]{\r\n  padding: 30px;\r\n}\r\n\r\n.contact[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%] {\r\n  color: #444;\r\n  text-align: center;\r\n  box-shadow: 0 0 30px rgba(214, 215, 216, 0.6);\r\n  padding: 20px 0 30px 0;\r\n  margin-bottom: 30px;\r\n  width: 100%;\r\n}\r\n\r\n.contact[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 32px;\r\n  color: #428bca;\r\n  border-radius: 50%;\r\n  padding: 8px;\r\n  border: 2px dotted #9eccf4;\r\n}\r\n\r\n.contact[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  color: #666;\r\n  font-weight: 700;\r\n  margin: 10px 0;\r\n}\r\n\r\n.contact[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  line-height: 24px;\r\n  font-size: 14px;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   button[type=\"submit\"][_ngcontent-%COMP%]:hover {\r\n  background: #6aa3d5;\r\n}\r\n\r\n@-webkit-keyframes animate-loading {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes animate-loading {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Nyb2xsc3B5L3Njcm9sbHNweS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGlCQUFpQjs7QUFFbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLFFBQVE7SUFDUixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGNBQWM7SUFLZCxnQ0FBZ0M7RUFDbEM7O0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsY0FBYztJQU1kLGdDQUFnQztFQUNsQzs7QUFDQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0lBQ2YsV0FBVztFQUNiOztBQUNBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7SUFDZCxXQUFXO0VBQ2I7O0FBS0E7SUFDRSxZQUFZO0lBQ1osUUFBUTtJQUNSLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUiw0QkFBNEI7SUFDNUIsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLHNCQUFzQjs7O0VBR3hCOztBQUVBO0lBQ0UsY0FBYztJQUNkLGVBQWU7O0VBRWpCOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsZUFBZTtJQUNmLGNBQWM7SUFDZCxZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxZQUFZLGVBQWU7SUFDM0I7SUFDQSxlQUFlO0lBQ2YsU0FBUztJQUNULFdBQVc7SUFDWDtFQUNGOztBQUVBO0lBQ0UsZUFBZTtJQUNmLGVBQWU7SUFDZixZQUFZOztFQUVkOztBQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsV0FBVztJQUNYLFNBQVM7SUFDVCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0VBQ2pCOztBQUNBO0lBQ0UsZUFBZTtJQUNmLFFBQVE7SUFDUixZQUFZO0VBQ2Q7O0FBQ0Y7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0RBQTBFO0VBQzFFLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsd0JBQXdCO0FBQzFCOztBQUdBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtFQUNFLGtGQUF3RztFQUN4RyxhQUFhO0NBQ2QsdUNBQXVDO0NBRXZDLGlDQUFpQztDQUNqQyxXQUFXO0VBQ1YsaUJBQWlCO0VBQ2pCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLHlGQUErRztFQUMvRyxhQUFhO0NBQ2QsdUNBQXVDO0NBRXZDLGlDQUFpQztDQUNqQyxXQUFXO0VBQ1YsaUJBQWlCO0VBQ2pCLCtCQUErQjtBQUNqQzs7QUFDQTtFQUNFLGtGQUF3RztFQUN4RyxhQUFhO0NBQ2QsdUNBQXVDO0NBRXZDLGlDQUFpQztDQUNqQyxXQUFXO0VBQ1YsaUJBQWlCO0VBQ2pCLCtCQUErQjtBQUNqQzs7QUFDQTtFQUNFLG1FQUF5RjtFQUN6RixhQUFhO0NBQ2QsdUNBQXVDO0NBRXZDLGlDQUFpQztDQUNqQyxXQUFXO0VBQ1Ysa0NBQWtDO0VBQ2xDLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLDhCQUE4Qjs7QUFFaEM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYzs7QUFFaEI7O0FBSUE7O0VBRUU7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYzs7RUFFaEI7QUFDRjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFDQTtDQUNDLFdBQVc7Q0FDWCxzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDVixxQkFBcUI7Q0FDckIsNkJBQTZCO0NBSzdCLGdDQUFnQztDQUNoQyxrQkFBa0I7Q0FHbEIsZ0JBQWdCO0NBQ2hCLHFCQUFxQjtDQUNyQixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLGVBQWU7QUFDaEI7O0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixNQUFNO0NBQ04sT0FBTztDQUNQLFlBQVk7Q0FDWixRQUFRO0NBS1IsZ0NBQWdDO0NBQ2hDLHNCQUFzQjtDQUN0QixXQUFXO0FBQ1o7O0FBQ0E7Q0FDQyxzQkFBc0I7Q0FDdEIsNkJBQTZCO0NBQzdCLGNBQWM7QUFDZjs7QUFDQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsNkNBQTZDO0VBQzdDLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBR0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zY3JvbGxzcHkvc2Nyb2xsc3B5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnZuYXZib2R7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgXHJcbn1cclxuXHJcbi5saXN0dmlld2dycG91cHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbn1cclxuLnZuYXZ7XHJcbiAgICBmb250LXNpemU6IDE2cHggO1xyXG4gICAgY29sb3I6ICNlMjg3MTQ7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogb3V0c2V0O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci13aWR0aDogaW5pdGlhbDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDgwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgLnZuYXZpe1xyXG4gICAgZm9udC1zaXplOiAxMHB4IDtcclxuICAgIGNvbG9yOiAjZTI4NzE0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGJvcmRlci10b3Atc3R5bGU6IG91dHNldDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItd2lkdGg6IGluaXRpYWw7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA4MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgXHJcbiAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICAudm5hdjpob3ZlcntcclxuICAgIGNvbG9yOiAjZTI4NzE0O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG4gIC52bmF2aTpob3ZlcntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZTI4NzE0O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG5cclxuIFxyXG5cclxuXHJcbiAgLm92ZXJsYXkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICB0b3A6IDAgIWltcG9ydGFudDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsIDAuOSk7XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiAxLjBzO1xyXG4gIH1cclxuICBcclxuICAub3ZlcmxheS1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLm92ZXJsYXkgYSB7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNXM7XHJcbiAgXHJcbiAgIFxyXG4gIH1cclxuICBcclxuICAub3ZlcmxheSBhOmhvdmVyLCAub3ZlcmxheSBhOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjZTI4NzE0O1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAub3ZlcmxheSAuY2xvc2VidG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICByaWdodDogNDVweDtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIGNvbG9yOiAjMDMwYjIyO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcclxuICAgIC5vdmVybGF5IGEge2ZvbnQtc2l6ZTogMjBweH1cclxuICAgIC5vdmVybGF5IC5jbG9zZWJ0biB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICByaWdodDogMzVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5vcGVuVGFie1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gIFxyXG4gIH1cclxuICAub3BlbnRhYmJveHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIHRvcDogMTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMzBweDtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAudmVydGljYWxOYXZ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDM1JTtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICB9XHJcbi5oZXJvMXtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBoZWlnaHQ6IDY1MHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9iYW5uZXIvb3V0cHV0LW9ubGluZXBuZ3Rvb2xzLnBuZycpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXHJcbiAgcGFkZGluZzogMTQwcHggMCAxMDBweCAwO1xyXG59XHJcblxyXG5cclxuLm1haW5TZWN0aW9ue1xyXG4gICAgaGVpZ2h0OjY1MHB4O1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4uYmdvcGF7XHJcbiAgYmFja2dyb3VuZDogIzAzMGIyMiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9iYW5uZXIvRGlnaXRhbC1UcmFuc2Zvcm1hdGlvbi5qcGcpICBuby1yZXBlYXQgc2Nyb2xsIC0yMHB4IDY1cHg7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XHJcblx0LXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC03NTBweCAwcHg7O1xyXG59XHJcblxyXG4uYmdvcGJ7XHJcbiAgYmFja2dyb3VuZDogIzBmOWZmYSB1cmwoLi4vLi4vYXNzZXRzL2ltZy9iYW5uZXIvZGlnaXRhbC1vcGVyYXRpbmctbW9kZWxzLWxlYWQucG5nKSAgbm8tcmVwZWF0IHNjcm9sbCAtMjBweCA2NXB4O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xyXG5cdC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuXHRjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nLXRvcDogMjVweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNzUwcHggMHB4O1xyXG59XHJcbi5iZ29wY3tcclxuICBiYWNrZ3JvdW5kOiAjMGUxODIyIHVybCguLi8uLi9hc3NldHMvaW1nL2Jhbm5lci9wZXJmb3JtYW5jZS1tYW5hZ2VtZW50LmpwZykgIG5vLXJlcGVhdCBzY3JvbGwgLTIwcHggNjVweDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuXHQtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcblx0Y29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTc1MHB4IDBweDtcclxufVxyXG4uYmdvcGR7XHJcbiAgYmFja2dyb3VuZDogI2ZmZiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9iYW5uZXIvcGF0dGVybi1iZy5wbmcpICBuby1yZXBlYXQgc2Nyb2xsIC0yMHB4IDY1cHg7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XHJcblx0LXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgcGFkZGluZzogMzVweDtcclxuICBwYWRkaW5nLXRvcDogNTBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5iZ29wZCBhe1xyXG4gIGNvbG9yOiAjM0YzRjNGO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LWZhbWlseTogbXlyaWFkLXBybywgQXJpYWw7XHJcblxyXG59XHJcblxyXG4uaGVhZGVyT3B0aW9uMXtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSAgeyBcclxuICBcclxuICAuaGVhZGVyT3B0aW9uMXtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IG5vbmUgO1xyXG5cclxuICB9XHJcbn1cclxuXHJcbi5pbWctYm90e1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogNjBweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmJ0bi1zaHV0dGVyLW1vcmUge1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHotaW5kZXg6IDE7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcblx0LW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuXHQtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcblx0LW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcblx0cGFkZGluZzogMTJweCA1MHB4O1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogMDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDA7XHJcblx0Ym9yZGVyLXJhZGl1czogMDtcclxuXHRsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcblx0bWFyZ2luLXRvcDogMjBweDtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uYnRuLXNodXR0ZXItbW9yZTpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICcnO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0d2lkdGg6IDA7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuXHQtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cdC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG5cdHotaW5kZXg6IC0xO1xyXG59XHJcbi5idG4tc2h1dHRlci1tb3JlOmhvdmVyIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5idG4tc2h1dHRlci1tb3JlOmhvdmVyOmJlZm9yZSB7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250YWN0e1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuLmNvbnRhY3QgLmluZm8tYm94IHtcclxuICBjb2xvcjogIzQ0NDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyMTQsIDIxNSwgMjE2LCAwLjYpO1xyXG4gIHBhZGRpbmc6IDIwcHggMCAzMHB4IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRhY3QgLmluZm8tYm94IGkge1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBjb2xvcjogIzQyOGJjYTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGJvcmRlcjogMnB4IGRvdHRlZCAjOWVjY2Y0O1xyXG59XHJcblxyXG4uY29udGFjdCAuaW5mby1ib3ggaDMge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogIzY2NjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG59XHJcblxyXG4uY29udGFjdCAuaW5mby1ib3ggcCB7XHJcbiAgcGFkZGluZzogMDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuXHJcbi5jb250YWN0IC5waHAtZW1haWwtZm9ybSBidXR0b25bdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzZhYTNkNTtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGUtbG9hZGluZyB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYW5pbWF0ZS1sb2FkaW5nIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollspyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-scrollspy',
          templateUrl: './scrollspy.component.html',
          styleUrls: ['./scrollspy.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/servicesectiion/servicesectiion.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/servicesectiion/servicesectiion.component.ts ***!
    \**************************************************************/

  /*! exports provided: ServicesectiionComponent */

  /***/
  function srcAppServicesectiionServicesectiionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesectiionComponent", function () {
      return ServicesectiionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ServicesectiionComponent =
    /*#__PURE__*/
    function () {
      function ServicesectiionComponent() {
        _classCallCheck(this, ServicesectiionComponent);
      }

      _createClass(ServicesectiionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ServicesectiionComponent;
    }();

    ServicesectiionComponent.ɵfac = function ServicesectiionComponent_Factory(t) {
      return new (t || ServicesectiionComponent)();
    };

    ServicesectiionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ServicesectiionComponent,
      selectors: [["app-servicesectiion"]],
      decls: 59,
      vars: 0,
      consts: [[1, "container-fluid", "mt-5"], [1, "container"], [1, "section-title"], [1, "row", "content"], [1, "col-md-4"], ["src", "../../assets/img/details-1.png", "alt", "", 1, "img-fluid"], [1, "col-md-8", "pt-4"], [1, "font-italic"], [1, "icofont-check"], [1, "col-md-4", "order-1", "order-md-2"], ["src", "../../assets/img/details-2.png", "alt", "", 1, "img-fluid"], [1, "col-md-8", "pt-5", "order-2", "order-md-1"], ["src", "../../assets/img/details-3.png", "alt", "", 1, "img-fluid"], [1, "col-md-8", "pt-5"]],
      template: function ServicesectiionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "At Satwic, for over a decade, we have successfully formulated the best blend of technical, business and people expertise to offer tailor made solutions to suit our clients\u2019 business needs. We analyze and understand the nuances of client business, organization culture and the specific needs of a project and strive to accurately evaluate and provide specialized resources to help you reach your goals faster.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Advisory Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " It is crucial for today\u2019s companies to rely on timely availability of relevant and trustworthy data to stay ahead of competition. Under such scenarios, it becomes extremely important to ensure that you employ the right architecture practices that address both short and long term needs of your company. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Business Intelligence & Data Integration Architecture and Planning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Business Intelligence / Data Integration Health Check and Assessment.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Business Intelligence / Data Warehousing Tool / Vendor Selection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Satwic has helped many customers turn around struggling business intelligence and/or data integration efforts. This service is typically conducted in about a two week period, during which we will engage key stakeholders to assess the current state of the effort. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Implementation Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " As Business Intelligence continues to expand its significance for today\u2019s enterprises, successful BI programs need a trusted implementation partner along with data, technology, analytics, and human decision making. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Data Integration Implementation:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Platform Migrations Implementation:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Business Intelligence / Data Warehousing ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " At Satwic, we have been helping customers switch over to newer platforms with minimal disruption. We understand your concerns for data safety and have developed specialized techniques to perform migrations quickly and efficiently. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Managed Support Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " In today\u2019s business environment, it is critical for companies to have access to ongoing and timely support for their Business Intelligence and Data Integration systems to ensure high performance and service levels. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " At Satwic, we strive to provide clients with greatest flexibility and confidence in its BI/DI Maintenance and Support services. Our services are SLA based, customized to meet your requirements and our team operates as an extension of your own team. This can help your company increase the long term effectiveness of your BI/DI solutions while reducing the burden on managing IT. You can instead divert your resources towards strategic and innovative capabilities. Our support model helps companies reduce risk with improved reliability and reduced operational costs. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Our support team develops a clearly defined set of processes and procedures based on the ITIL v3 principles to ensure a consistent and efficient delivery of support services. We have a proven track record in delivering the \u201Cfollow the sun\u201D support model, where we have qualified support resources available 24/7. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".imagess[_ngcontent-%COMP%]{\r\n    background-size: cover;\r\n    height: 700px;\r\n    padding: 140px;\r\n}\r\n@media (max-width: 768px) { \r\n    .imagess[_ngcontent-%COMP%]{\r\n        padding: 40px;\r\n        height: 500px;\r\n    }\r\n }\r\n.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n     font-weight: 700;\r\n     color: #000;\r\n     line-height: 50px\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXNlY3RpaW9uL3NlcnZpY2VzZWN0aWlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixjQUFjO0FBQ2xCO0FBQ0E7SUFDSTtRQUNJLGFBQWE7UUFDYixhQUFhO0lBQ2pCO0NBQ0g7QUFFQTtLQUNJLGdCQUFnQjtLQUNoQixXQUFXO0tBQ1g7Q0FDSiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzZWN0aWlvbi9zZXJ2aWNlc2VjdGlpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi5pbWFnZXNze1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGhlaWdodDogNzAwcHg7XHJcbiAgICBwYWRkaW5nOiAxNDBweDtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHsgXHJcbiAgICAuaW1hZ2Vzc3tcclxuICAgICAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICB9XHJcbiB9XHJcblxyXG4gLnNlY3Rpb24tdGl0bGUgaDJ7XHJcbiAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICBjb2xvcjogIzAwMDtcclxuICAgICBsaW5lLWhlaWdodDogNTBweFxyXG4gfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesectiionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-servicesectiion',
          templateUrl: './servicesectiion.component.html',
          styleUrls: ['./servicesectiion.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! F:\mohit\NewSatwic\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map