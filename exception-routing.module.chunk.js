webpackJsonp(["exception-routing.module"],{

/***/ "./src/app/routes/ng-alain/exception/403.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Exception403Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Exception403Component = /** @class */ (function () {
    function Exception403Component() {
    }
    Exception403Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'exception-403',
            template: "<exception type=\"403\" style=\"min-height: 500px; height: 80%;\"></exception>"
        })
    ], Exception403Component);
    return Exception403Component;
}());



/***/ }),

/***/ "./src/app/routes/ng-alain/exception/404.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Exception404Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Exception404Component = /** @class */ (function () {
    function Exception404Component() {
    }
    Exception404Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'exception-404',
            template: "<exception type=\"404\" style=\"min-height: 500px; height: 80%;\"></exception>"
        })
    ], Exception404Component);
    return Exception404Component;
}());



/***/ }),

/***/ "./src/app/routes/ng-alain/exception/500.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Exception500Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Exception500Component = /** @class */ (function () {
    function Exception500Component() {
    }
    Exception500Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'exception-500',
            template: "<exception type=\"500\" style=\"min-height: 500px; height: 80%;\"></exception>"
        })
    ], Exception500Component);
    return Exception500Component;
}());



/***/ }),

/***/ "./src/app/routes/ng-alain/exception/exception-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExceptionRoutingModule", function() { return ExceptionRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__403_component__ = __webpack_require__("./src/app/routes/ng-alain/exception/403.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__404_component__ = __webpack_require__("./src/app/routes/ng-alain/exception/404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__500_component__ = __webpack_require__("./src/app/routes/ng-alain/exception/500.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '403',
        component: __WEBPACK_IMPORTED_MODULE_4__403_component__["a" /* Exception403Component */]
    },
    {
        path: '404',
        component: __WEBPACK_IMPORTED_MODULE_5__404_component__["a" /* Exception404Component */]
    },
    {
        path: '500',
        component: __WEBPACK_IMPORTED_MODULE_6__500_component__["a" /* Exception500Component */]
    }
];
var ExceptionRoutingModule = /** @class */ (function () {
    function ExceptionRoutingModule() {
    }
    ExceptionRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes)
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__403_component__["a" /* Exception403Component */], __WEBPACK_IMPORTED_MODULE_5__404_component__["a" /* Exception404Component */], __WEBPACK_IMPORTED_MODULE_6__500_component__["a" /* Exception500Component */]]
        })
    ], ExceptionRoutingModule);
    return ExceptionRoutingModule;
}());



/***/ })

});
//# sourceMappingURL=exception-routing.module.chunk.js.map