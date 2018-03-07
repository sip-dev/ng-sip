webpackJsonp(["passport-routing.module"],{

/***/ "./src/app/routes/ng-alain/passport/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form nz-form [formGroup]=\"form\" (ngSubmit)=\"submit()\" role=\"form\">\r\n    <nz-tabset [nzAnimated]=\"false\" class=\"tabs\" (nzSelectChange)=\"switch($event)\">\r\n        <nz-tab>\r\n            <ng-template #nzTabHeading>账户密码登录</ng-template>\r\n            <nz-alert *ngIf=\"error\" [nzType]=\"'error'\" [nzMessage]=\"error\" [nzShowIcon]=\"true\" class=\"mb-lg\"></nz-alert>\r\n            <div nz-form-item>\r\n                <div nz-form-control [nzValidateStatus]=\"userName\">\r\n                    <nz-input formControlName=\"userName\" [nzPlaceHolder]=\"'admin'\" [nzSize]=\"'large'\">\r\n                        <ng-template #prefix>\r\n                            <i class=\"anticon anticon-user\"></i>\r\n                        </ng-template>\r\n                    </nz-input>\r\n                    <ng-container *ngIf=\"userName.dirty || userName.touched\">\r\n                        <p nz-form-explain *ngIf=\"userName.errors?.required\">请输入账户名！</p>\r\n                        <p nz-form-explain *ngIf=\"userName.errors?.minlength\">至少五个字符</p>\r\n                    </ng-container>\r\n                </div>\r\n            </div>\r\n            <div nz-form-item>\r\n                <div nz-form-control [nzValidateStatus]=\"password\">\r\n                    <nz-input formControlName=\"password\" [nzPlaceHolder]=\"'888888'\" [nzType]=\"'password'\" [nzSize]=\"'large'\">\r\n                        <ng-template #prefix>\r\n                            <i class=\"anticon anticon-lock\"></i>\r\n                        </ng-template>\r\n                    </nz-input>\r\n                    <div nz-form-explain *ngIf=\"(password.dirty || password.touched) && password.errors?.required\">请输入密码！</div>\r\n                </div>\r\n            </div>\r\n        </nz-tab>\r\n        <nz-tab>\r\n            <ng-template #nzTabHeading>手机号登录</ng-template>\r\n            <div nz-form-item>\r\n                <div nz-form-control [nzValidateStatus]=\"mobile\">\r\n                    <nz-input formControlName=\"mobile\" [nzPlaceHolder]=\"'手机号'\" [nzSize]=\"'large'\">\r\n                        <ng-template #prefix>\r\n                            <i class=\"anticon anticon-user\"></i>\r\n                        </ng-template>\r\n                    </nz-input>\r\n                    <ng-container *ngIf=\"mobile.dirty || mobile.touched\">\r\n                        <p nz-form-explain *ngIf=\"mobile.errors?.required\">请输入手机号！</p>\r\n                        <p nz-form-explain *ngIf=\"mobile.errors?.pattern\">手机号格式错误！</p>\r\n                    </ng-container>\r\n                </div>\r\n            </div>\r\n            <div nz-form-item>\r\n                <div nz-form-control [nzValidateStatus]=\"captcha\">\r\n                    <div nz-row [nzGutter]=\"8\">\r\n                        <div nz-col [nzSpan]=\"16\">\r\n                            <nz-input formControlName=\"captcha\" [nzPlaceHolder]=\"'验证码'\" [nzSize]=\"'large'\">\r\n                                <ng-template #prefix>\r\n                                    <i class=\"anticon anticon-mail\"></i>\r\n                                </ng-template>\r\n                            </nz-input>\r\n                        </div>\r\n                        <div nz-col [nzSpan]=\"8\">\r\n                            <button nz-button (click)=\"getCaptcha()\" [disabled]=\"count\" [nzSize]=\"'large'\" class=\"ant-btn__block\">{{ count ? count + 's' : '获取验证码' }}</button>\r\n                        </div>\r\n                    </div>\r\n                    <div nz-form-explain *ngIf=\"(mobile.dirty || mobile.touched) && mobile.errors?.required\">请输入验证码！</div>\r\n                </div>\r\n            </div>\r\n        </nz-tab>\r\n    </nz-tabset>\r\n    <div nz-form-item nz-row>\r\n        <div nz-col [nzSpan]=\"12\">\r\n            <label nz-checkbox formControlName=\"remember\">\r\n                <span>自动登录</span>\r\n            </label>\r\n        </div>\r\n        <div nz-col [nzSpan]=\"12\" class=\"text-right\">\r\n            <a class=\"forgot\" (click)=\"msg.error('请找欧阳锋')\">忘记密码？</a>\r\n        </div>\r\n    </div>\r\n    <div nz-form-item>\r\n        <button nz-button [nzType]=\"'primary'\" [nzLoading]=\"loading\" [nzSize]=\"'large'\" class=\"ant-btn__block\">\r\n            <span>登录</span>\r\n        </button>\r\n    </div>\r\n</form>\r\n<div class=\"other\">\r\n    其他登录方式\r\n    <nz-tooltip [nzTitle]=\"'in fact Auth0 via window'\">\r\n        <span nz-tooltip class=\"icon-alipay\" (click)=\"open('auth0', 'window')\"></span>\r\n    </nz-tooltip>\r\n    <nz-tooltip [nzTitle]=\"'in fact Github via redirect'\">\r\n        <span nz-tooltip class=\"icon-taobao\" (click)=\"open('github')\"></span>\r\n    </nz-tooltip>\r\n    <nz-tooltip [nzTitle]=\"'真的是微博'\">\r\n        <span nz-tooltip class=\"icon-weibo\" (click)=\"open('weibo', 'window')\"></span>\r\n    </nz-tooltip>\r\n    <a class=\"register\" routerLink=\"/passport/register\">注册账户</a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/ng-alain/passport/login/login.component.less":
/***/ (function(module, exports) {

module.exports = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable declaration-bang-space-before */\n/* stylelint-disable declaration-bang-space-before */\n:host {\n  display: block;\n  width: 368px;\n  margin: 0 auto;\n}\n:host ::ng-deep .tabs {\n  padding: 0 2px;\n  margin: 0 -2px;\n}\n:host ::ng-deep .tabs .ant-tabs-tab {\n  font-size: 16px;\n  line-height: 24px;\n}\n:host ::ng-deep .tabs .ant-input-affix-wrapper .ant-input:not(:first-child) {\n  padding-left: 34px;\n}\n:host ::ng-deep .ant-tabs .ant-tabs-bar {\n  border-bottom: 0;\n  margin-bottom: 24px;\n  text-align: center;\n}\n:host ::ng-deep .ant-form-item {\n  margin-bottom: 24px;\n}\n:host ::ng-deep .icon-alipay,\n:host ::ng-deep .icon-taobao,\n:host ::ng-deep .icon-weibo {\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n  background: url('https://gw.alipayobjects.com/zos/rmsportal/itDzjUnkelhQNsycranf.svg');\n  margin-left: 16px;\n  vertical-align: middle;\n  cursor: pointer;\n}\n:host ::ng-deep .icon-alipay {\n  background-position: -24px 0;\n}\n:host ::ng-deep .icon-alipay:hover {\n  background-position: 0 0;\n}\n:host ::ng-deep .icon-taobao {\n  background-position: -24px -24px;\n}\n:host ::ng-deep .icon-taobao:hover {\n  background-position: 0 -24px;\n}\n:host ::ng-deep .icon-weibo {\n  background-position: -24px -48px;\n}\n:host ::ng-deep .icon-weibo:hover {\n  background-position: 0 -48px;\n}\n:host ::ng-deep .other {\n  text-align: left;\n  margin-top: 24px;\n  line-height: 22px;\n}\n:host ::ng-deep .other .register {\n  float: right;\n}\n"

/***/ }),

/***/ "./src/app/routes/ng-alain/passport/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__delon_theme__ = __webpack_require__("./node_modules/@delon/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_zorro_antd__ = __webpack_require__("./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__delon_auth__ = __webpack_require__("./node_modules/@delon/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__env_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var UserLoginComponent = /** @class */ (function () {
    function UserLoginComponent(fb, router, msg, settingsService, socialService, tokenService) {
        this.router = router;
        this.msg = msg;
        this.settingsService = settingsService;
        this.socialService = socialService;
        this.tokenService = tokenService;
        this.error = '';
        this.type = 0;
        this.loading = false;
        // region: get captcha
        this.count = 0;
        this.form = fb.group({
            userName: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(5)]],
            password: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            mobile: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].pattern(/^1\d{10}$/)]],
            captcha: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
            remember: [true]
        });
    }
    Object.defineProperty(UserLoginComponent.prototype, "userName", {
        // region: fields
        get: function () { return this.form.controls.userName; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserLoginComponent.prototype, "password", {
        get: function () { return this.form.controls.password; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserLoginComponent.prototype, "mobile", {
        get: function () { return this.form.controls.mobile; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserLoginComponent.prototype, "captcha", {
        get: function () { return this.form.controls.captcha; },
        enumerable: true,
        configurable: true
    });
    // endregion
    UserLoginComponent.prototype.switch = function (ret) {
        this.type = ret.index;
    };
    UserLoginComponent.prototype.getCaptcha = function () {
        var _this = this;
        this.count = 59;
        this.interval$ = setInterval(function () {
            _this.count -= 1;
            if (_this.count <= 0)
                clearInterval(_this.interval$);
        }, 1000);
    };
    // endregion
    UserLoginComponent.prototype.submit = function () {
        var _this = this;
        this.error = '';
        if (this.type === 0) {
            this.userName.markAsDirty();
            this.password.markAsDirty();
            if (this.userName.invalid || this.password.invalid)
                return;
        }
        else {
            this.mobile.markAsDirty();
            this.captcha.markAsDirty();
            if (this.mobile.invalid || this.captcha.invalid)
                return;
        }
        // mock http
        this.loading = true;
        setTimeout(function () {
            _this.loading = false;
            if (_this.type === 0) {
                if (_this.userName.value !== 'admin' || _this.password.value !== '888888') {
                    _this.error = "\u8D26\u6237\u6216\u5BC6\u7801\u9519\u8BEF";
                    return;
                }
            }
            _this.tokenService.set({
                token: '123456789',
                name: _this.userName.value,
                email: "cipchk@qq.com",
                id: 10000,
                time: +new Date
            });
            _this.router.navigate(['/']);
        }, 1000);
    };
    // region: social
    UserLoginComponent.prototype.open = function (type, openType) {
        var _this = this;
        if (openType === void 0) { openType = 'href'; }
        var url = "";
        var callback = "";
        if (__WEBPACK_IMPORTED_MODULE_6__env_environment__["a" /* environment */].production)
            callback = 'https://cipchk.github.io/ng-alain/callback/' + type;
        else
            callback = 'http://localhost:4200/callback/' + type;
        switch (type) {
            case 'auth0':
                url = "//cipchk.auth0.com/login?client=8gcNydIDzGBYxzqV0Vm1CX_RXH-wsWo5&redirect_uri=" + decodeURIComponent(callback);
                break;
            case 'github':
                url = "//github.com/login/oauth/authorize?client_id=9d6baae4b04a23fcafa2&response_type=code&redirect_uri=" + decodeURIComponent(callback);
                break;
            case 'weibo':
                url = "https://api.weibo.com/oauth2/authorize?client_id=1239507802&response_type=code&redirect_uri=" + decodeURIComponent(callback);
                break;
        }
        if (openType === 'window') {
            this.socialService.login(url, '/', {
                type: 'window'
            }).subscribe(function (res) {
                if (res) {
                    _this.settingsService.setUser(res);
                    _this.router.navigateByUrl('/');
                }
            });
        }
        else {
            this.socialService.login(url, '/', {
                type: 'href'
            });
        }
    };
    // endregion
    UserLoginComponent.prototype.ngOnDestroy = function () {
        if (this.interval$)
            clearInterval(this.interval$);
    };
    UserLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'passport-login',
            template: __webpack_require__("./src/app/routes/ng-alain/passport/login/login.component.html"),
            styles: [__webpack_require__("./src/app/routes/ng-alain/passport/login/login.component.less")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__delon_auth__["d" /* SocialService */]]
        }),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__delon_auth__["b" /* DA_SERVICE_TOKEN */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_4_ng_zorro_antd__["NzMessageService"],
            __WEBPACK_IMPORTED_MODULE_0__delon_theme__["h" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_5__delon_auth__["d" /* SocialService */], Object])
    ], UserLoginComponent);
    return UserLoginComponent;
}());



/***/ }),

/***/ "./src/app/routes/ng-alain/passport/passport-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassportRoutingModule", function() { return PassportRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("./src/app/routes/ng-alain/passport/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register_component__ = __webpack_require__("./src/app/routes/ng-alain/passport/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_result_register_result_component__ = __webpack_require__("./src/app/routes/ng-alain/passport/register-result/register-result.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* UserLoginComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_5__register_register_component__["a" /* UserRegisterComponent */]
    },
    {
        path: 'register-result',
        component: __WEBPACK_IMPORTED_MODULE_6__register_result_register_result_component__["a" /* UserRegisterResultComponent */]
    }
];
var PassportRoutingModule = /** @class */ (function () {
    function PassportRoutingModule() {
    }
    PassportRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes)
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* UserLoginComponent */], __WEBPACK_IMPORTED_MODULE_5__register_register_component__["a" /* UserRegisterComponent */], __WEBPACK_IMPORTED_MODULE_6__register_result_register_result_component__["a" /* UserRegisterResultComponent */]]
        })
    ], PassportRoutingModule);
    return PassportRoutingModule;
}());



/***/ }),

/***/ "./src/app/routes/ng-alain/passport/register-result/register-result.component.html":
/***/ (function(module, exports) {

module.exports = "<result\r\n    type=\"success\"\r\n    [title]=\"title\"\r\n    description=\"激活邮件已发送到你的邮箱中，邮件有效期为24小时。请及时登录邮箱，点击邮件中的链接激活帐户。\">\r\n    <ng-template #title>\r\n        <div class=\"title\">你的账户：ng-alain@example.com 注册成功</div>\r\n    </ng-template>\r\n    <button (click)=\"msg.success('email')\" nz-button [nzType]=\"'primary'\" [nzSize]=\"'large'\">查看邮箱</button>\r\n    <button routerLink=\"/\" nz-button [nzSize]=\"'large'\">返回首页</button>\r\n</result>\r\n"

/***/ }),

/***/ "./src/app/routes/ng-alain/passport/register-result/register-result.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/ng-alain/passport/register-result/register-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegisterResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__ = __webpack_require__("./node_modules/ng-zorro-antd/esm5/antd.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserRegisterResultComponent = /** @class */ (function () {
    function UserRegisterResultComponent(msg) {
        this.msg = msg;
    }
    UserRegisterResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'passport-register-result',
            template: __webpack_require__("./src/app/routes/ng-alain/passport/register-result/register-result.component.html"),
            styles: [__webpack_require__("./src/app/routes/ng-alain/passport/register-result/register-result.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__["NzMessageService"]])
    ], UserRegisterResultComponent);
    return UserRegisterResultComponent;
}());



/***/ }),

/***/ "./src/app/routes/ng-alain/passport/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>注册</h3>\r\n<form nz-form [formGroup]=\"form\" (ngSubmit)=\"submit()\" role=\"form\">\r\n    <nz-alert *ngIf=\"error\" [nzType]=\"'error'\" [nzMessage]=\"error\" [nzShowIcon]=\"true\" class=\"mb-lg\"></nz-alert>\r\n    <div nz-form-item>\r\n        <div nz-form-control [nzValidateStatus]=\"mail\">\r\n            <nz-input formControlName=\"mail\" [nzPlaceHolder]=\"'邮箱'\" [nzSize]=\"'large'\">\r\n                <ng-template #prefix>\r\n                    <i class=\"anticon anticon-user\"></i>\r\n                </ng-template>\r\n            </nz-input>\r\n            <ng-container *ngIf=\"mail.dirty || mail.touched\">\r\n                <p nz-form-explain *ngIf=\"mail.errors?.required\">请输入邮箱地址！</p>\r\n                <p nz-form-explain *ngIf=\"mail.errors?.email\">邮箱地址格式错误！</p>\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n    <div nz-form-item>\r\n        <div nz-form-control [nzValidateStatus]=\"password\">\r\n            <nz-popover [nzPlacement]=\"'right'\" [nzTrigger]=\"'focus'\" [(nzVisible)]=\"visible\" nzOverlayClassName=\"register-password-cdk\" [nzOverlayStyle]=\"{'width.px': 240}\">\r\n                <nz-input nz-popover formControlName=\"password\" [nzPlaceHolder]=\"'至少6位密码，区分大小写'\" [nzType]=\"'password'\" [nzSize]=\"'large'\">\r\n                    <ng-template #prefix>\r\n                        <i class=\"anticon anticon-lock\"></i>\r\n                    </ng-template>\r\n                </nz-input>\r\n                <div nz-form-explain *ngIf=\"(password.dirty || password.touched) && password.errors?.required\">请输入密码！</div>\r\n                <ng-template #nzTemplate>\r\n                    <div style=\"padding: 4px 0\">\r\n                        <ng-container [ngSwitch]=\"status\">\r\n                            <div *ngSwitchCase=\"'ok'\" class=\"success\">强度：强</div>\r\n                            <div *ngSwitchCase=\"'pass'\" class=\"warning\">强度：中</div>\r\n                            <div *ngSwitchDefault class=\"error\">强度：太短</div>\r\n                        </ng-container>\r\n                        <div class=\"progress-{{status}}\">\r\n                            <nz-progress\r\n                                [(ngModel)]=\"progress\" [ngModelOptions]=\"{standalone: true}\"\r\n                                [nzStatus]=\"passwordProgressMap[status]\"\r\n                                [nzStrokeWidth]=\"6\"\r\n                                [nzShowInfo]=\"false\"></nz-progress>\r\n                        </div>\r\n                        <p class=\"mt-sm\">请至少输入 6 个字符。请不要使用容易被猜到的密码。</p>\r\n                    </div>\r\n                </ng-template>\r\n            </nz-popover>\r\n        </div>\r\n    </div>\r\n    <div nz-form-item>\r\n        <div nz-form-control [nzValidateStatus]=\"confirm\">\r\n            <nz-input formControlName=\"confirm\" [nzPlaceHolder]=\"'确认密码'\" [nzType]=\"'password'\" [nzSize]=\"'large'\">\r\n                <ng-template #prefix>\r\n                    <i class=\"anticon anticon-lock\"></i>\r\n                </ng-template>\r\n            </nz-input>\r\n            <ng-container *ngIf=\"confirm.dirty || confirm.touched\">\r\n                <p nz-form-explain *ngIf=\"confirm.errors?.required\">请确认密码！</p>\r\n                <p nz-form-explain *ngIf=\"confirm.errors?.equar\">两次输入的密码不匹配！</p>\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n    <div nz-form-item>\r\n        <div nz-form-control [nzValidateStatus]=\"mobile\">\r\n            <nz-input-group [nzSize]=\"'large'\" [nzCompact]=\"true\">\r\n                <nz-select formControlName=\"mobilePrefix\" style=\"width: 25%;\">\r\n                    <nz-option [nzLabel]=\"'+86'\" [nzValue]=\"'+86'\"></nz-option>\r\n                    <nz-option [nzLabel]=\"'+87'\" [nzValue]=\"'+87'\"></nz-option>\r\n                </nz-select>\r\n                <input formControlName=\"mobile\" id=\"'11位手机号码'\" nz-input style=\"width: 75%;\">\r\n            </nz-input-group>\r\n            <div nz-form-explain *ngIf=\"(mobile.dirty || mobile.touched) && mobile.errors?.required\">请输入手机号！</div>\r\n        </div>\r\n    </div>\r\n    <div nz-form-item>\r\n        <div nz-form-control [nzValidateStatus]=\"captcha\">\r\n            <div nz-row [nzGutter]=\"8\">\r\n                <div nz-col [nzSpan]=\"16\">\r\n                    <nz-input formControlName=\"captcha\" [nzPlaceHolder]=\"'验证码'\" [nzSize]=\"'large'\">\r\n                        <ng-template #prefix>\r\n                            <i class=\"anticon anticon-mail\"></i>\r\n                        </ng-template>\r\n                    </nz-input>\r\n                </div>\r\n                <div nz-col [nzSpan]=\"8\">\r\n                    <button nz-button (click)=\"getCaptcha()\" [disabled]=\"count\" [nzSize]=\"'large'\" class=\"ant-btn__block\">{{ count ? count + 's' : '获取验证码' }}</button>\r\n                </div>\r\n            </div>\r\n            <div nz-form-explain *ngIf=\"(captcha.dirty || captcha.touched) && captcha.errors?.required\">请输入验证码！</div>\r\n        </div>\r\n    </div>\r\n    <div nz-form-item>\r\n        <button nz-button [nzType]=\"'primary'\" [nzLoading]=\"loading\" [nzSize]=\"'large'\" class=\"submit\">\r\n            <span>注册</span>\r\n        </button>\r\n        <a class=\"login\" routerLink=\"/passport/login\">使用已有账户登录</a>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/routes/ng-alain/passport/register/register.component.less":
/***/ (function(module, exports) {

module.exports = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable declaration-bang-space-before */\n/* stylelint-disable declaration-bang-space-before */\n:host {\n  display: block;\n  width: 368px;\n  margin: 0 auto;\n}\n:host ::ng-deep .ant-form-item {\n  margin-bottom: 24px;\n}\n:host ::ng-deep h3 {\n  font-size: 16px;\n  margin-bottom: 20px;\n}\n:host ::ng-deep .submit {\n  width: 50%;\n}\n:host ::ng-deep .login {\n  float: right;\n  line-height: 32px;\n}\n::ng-deep .register-password-cdk .success,\n::ng-deep .register-password-cdk .warning,\n::ng-deep .register-password-cdk .error {\n  -webkit-transition: color .3s;\n  transition: color .3s;\n}\n::ng-deep .register-password-cdk .success {\n  color: #00a854;\n}\n::ng-deep .register-password-cdk .warning {\n  color: #ffbf00;\n}\n::ng-deep .register-password-cdk .error {\n  color: #f04134;\n}\n::ng-deep .register-password-cdk .progress-pass > .progress .ant-progress-bg {\n  background-color: #ffbf00;\n}\n"

/***/ }),

/***/ "./src/app/routes/ng-alain/passport/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_zorro_antd__ = __webpack_require__("./node_modules/ng-zorro-antd/esm5/antd.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserRegisterComponent = /** @class */ (function () {
    function UserRegisterComponent(fb, router, msg) {
        this.router = router;
        this.msg = msg;
        this.error = '';
        this.type = 0;
        this.loading = false;
        this.visible = false;
        this.status = 'pool';
        this.progress = 0;
        this.passwordProgressMap = {
            ok: 'success',
            pass: 'normal',
            pool: 'exception'
        };
        // endregion
        // region: get captcha
        this.count = 0;
        this.form = fb.group({
            mail: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].email]],
            password: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(6), UserRegisterComponent_1.checkPassword.bind(this)]],
            confirm: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(6), UserRegisterComponent_1.passwordEquar]],
            mobilePrefix: ['+86'],
            mobile: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern(/^1\d{10}$/)]],
            captcha: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]]
        });
    }
    UserRegisterComponent_1 = UserRegisterComponent;
    UserRegisterComponent.checkPassword = function (control) {
        if (!control)
            return null;
        var self = this;
        self.visible = !!control.value;
        if (control.value && control.value.length > 9)
            self.status = 'ok';
        else if (control.value && control.value.length > 5)
            self.status = 'pass';
        else
            self.status = 'pool';
        if (self.visible)
            self.progress = control.value.length * 10 > 100 ? 100 : control.value.length * 10;
    };
    UserRegisterComponent.passwordEquar = function (control) {
        if (!control || !control.parent)
            return null;
        if (control.value !== control.parent.get('password').value) {
            return { equar: true };
        }
        return null;
    };
    Object.defineProperty(UserRegisterComponent.prototype, "mail", {
        // region: fields
        get: function () { return this.form.controls.mail; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserRegisterComponent.prototype, "password", {
        get: function () { return this.form.controls.password; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserRegisterComponent.prototype, "confirm", {
        get: function () { return this.form.controls.confirm; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserRegisterComponent.prototype, "mobile", {
        get: function () { return this.form.controls.mobile; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserRegisterComponent.prototype, "captcha", {
        get: function () { return this.form.controls.captcha; },
        enumerable: true,
        configurable: true
    });
    UserRegisterComponent.prototype.getCaptcha = function () {
        var _this = this;
        this.count = 59;
        this.interval$ = setInterval(function () {
            _this.count -= 1;
            if (_this.count <= 0)
                clearInterval(_this.interval$);
        }, 1000);
    };
    // endregion
    UserRegisterComponent.prototype.submit = function () {
        var _this = this;
        this.error = '';
        for (var i in this.form.controls) {
            this.form.controls[i].markAsDirty();
        }
        if (this.form.invalid)
            return;
        // mock http
        this.loading = true;
        setTimeout(function () {
            _this.loading = false;
            _this.router.navigate(['/passport/register-result']);
        }, 1000);
    };
    UserRegisterComponent.prototype.ngOnDestroy = function () {
        if (this.interval$)
            clearInterval(this.interval$);
    };
    UserRegisterComponent = UserRegisterComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'passport-register',
            template: __webpack_require__("./src/app/routes/ng-alain/passport/register/register.component.html"),
            styles: [__webpack_require__("./src/app/routes/ng-alain/passport/register/register.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3_ng_zorro_antd__["NzMessageService"]])
    ], UserRegisterComponent);
    return UserRegisterComponent;
    var UserRegisterComponent_1;
}());



/***/ })

});
//# sourceMappingURL=passport-routing.module.chunk.js.map