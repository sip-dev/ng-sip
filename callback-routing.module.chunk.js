webpackJsonp(["callback-routing.module"],{

/***/ "./src/app/routes/ng-alain/callback/callback-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbackRoutingModule", function() { return CallbackRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__callback_component__ = __webpack_require__("./src/app/routes/ng-alain/callback/callback.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'callback',
        component: __WEBPACK_IMPORTED_MODULE_4__callback_component__["a" /* CallbackComponent */]
    }
];
var CallbackRoutingModule = /** @class */ (function () {
    function CallbackRoutingModule() {
    }
    CallbackRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes)
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__callback_component__["a" /* CallbackComponent */]]
        })
    ], CallbackRoutingModule);
    return CallbackRoutingModule;
}());



/***/ }),

/***/ "./src/app/routes/ng-alain/callback/callback.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/ng-alain/callback/callback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallbackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__delon_auth__ = __webpack_require__("./node_modules/@delon/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CallbackComponent = /** @class */ (function () {
    function CallbackComponent(socialService, route, router) {
        this.socialService = socialService;
        this.route = route;
        this.router = router;
    }
    CallbackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.type = params['type'];
            _this.mockModel();
        });
    };
    CallbackComponent.prototype.mockModel = function () {
        this.socialService.callback({
            token: '123456789',
            name: 'cipchk',
            email: this.type + "@" + this.type + ".com",
            id: 10000,
            time: +new Date
        });
    };
    CallbackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-callback',
            template: __webpack_require__("./src/app/routes/ng-alain/callback/callback.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__delon_auth__["d" /* SocialService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__delon_auth__["d" /* SocialService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], CallbackComponent);
    return CallbackComponent;
}());



/***/ })

});
//# sourceMappingURL=callback-routing.module.chunk.js.map