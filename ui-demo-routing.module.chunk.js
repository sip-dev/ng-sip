webpackJsonp(["ui-demo-routing.module"],{

/***/ "./src/app/core/sip/sip-validators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SipValidators; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sip_lib__ = __webpack_require__("./node_modules/sip-lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sip_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_sip_lib__);


var SipValidators = /** @class */ (function () {
    function SipValidators() {
    }
    SipValidators.required = function (control) {
        var ret = __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required(control);
        if (ret)
            ret.requiredText = '请输入或选择值';
        return ret;
    };
    ;
    SipValidators.min = function (min) {
        var vFn = __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].min(min);
        return function (control) {
            var ret = vFn(control);
            if (ret)
                ret.minText = '不能小于：' + min;
            return ret;
        };
    };
    ;
    SipValidators.max = function (max) {
        var vFn = __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].max(max);
        return function (control) {
            var ret = vFn(control);
            if (ret)
                ret.maxText = '不能大于：' + max;
            return ret;
        };
    };
    ;
    SipValidators.minLength = function (min) {
        var vFn = __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].minLength(min);
        return function (control) {
            var ret = vFn(control);
            if (ret)
                ret.minLengthText = '长度不能小于：' + min;
            return ret;
        };
    };
    ;
    SipValidators.maxLength = function (max) {
        var vFn = __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].maxLength(max);
        return function (control) {
            var ret = vFn(control);
            if (ret)
                ret.maxLengthText = '长度不能大于：' + max;
            return ret;
        };
    };
    ;
    SipValidators.email = function (control) {
        var ret = __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].email(control);
        if (ret)
            ret.emailText = '非法email';
        return ret;
    };
    ;
    SipValidators.pattern = function (pattern) {
        var vFn = __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].pattern(pattern);
        return function (control) {
            var ret = vFn(control);
            if (ret)
                ret.patternText = '不匹配正则：' + pattern.toString();
            return ret;
        };
    };
    ;
    SipValidators.range = function (min, max) {
        return function (control) {
            var value = ~~control.value;
            if (value < min || value > max)
                return {
                    range: { min: min, max: max },
                    rangeText: __WEBPACK_IMPORTED_MODULE_1_sip_lib__["Lib"].format('范围：{0} - {1}', min, max)
                };
        };
    };
    ;
    SipValidators.rangeLength = function (minLength, maxLength) {
        return function (control) {
            var value = control.value;
            var len = value ? (value + '').length : 0;
            if (len < minLength || len > maxLength)
                return {
                    rangeLength: {
                        minLength: minLength, maxLength: maxLength
                    },
                    rangeLengthText: __WEBPACK_IMPORTED_MODULE_1_sip_lib__["Lib"].format('长度范围：{0} - {1}', minLength, maxLength)
                };
        };
    };
    ;
    SipValidators.confirm = function (confirmControl) {
        return function (control) {
            if (control.value !== confirmControl.value) {
                return { confirm: true, error: true };
            }
        };
    };
    ;
    return SipValidators;
}());



/***/ }),

/***/ "./src/app/routes/ui-demo/list-create/list-create.component.html":
/***/ (function(module, exports) {

module.exports = "<sip-page>\t\t\n\n\t<sip-page-header navigator=\"申请Spark服务\">\n\t\t<ng-template #title>申请Spark服务</ng-template>\n\t\t<ng-template #desc>\n\t\t\tSpark是一个高效通用的分布式计算框架、也是统一的数据处理架构。其优秀的DAG执行引擎支持循环数据流的高效重用及内存计算。 官网：<a href=\"http://spark.apache.org/\" target=\"_blank\">http://spark.apache.org/</a>\n\t\t</ng-template>\n\t</sip-page-header>\n\n\t<sip-page-body>\n\t\t<div nz-row [nzGutter]=\"24\">\n\t\t\t<div nz-col [nzXl]=\"18\" [nzMd]=\"16\" >\n\t\t\t\t<sip-card [bordered]=\"false\">\n\t\t\t\t\t<ng-template #body>\n                        <form nz-form [formGroup]=\"form\">\n\t\t\t\t\t\t\t<div nz-form-item nz-row>\n                                <div nz-form-label nz-col [nzSm]=\"4\" [nzXs]=\"24\">\n                                    <label nz-form-item-required>版本</label>\n                                </div>\n                                <div nz-form-control nz-col [nzSm]=\"18\" [nzXs]=\"24\">\n                                    <nz-select formControlName=\"edition\" [nzAllowClear]=\"false\" nzShowSearch>\n                                        <nz-option *ngFor=\"let item of editionoptions\"\n                                            [nzLabel]=\"item.label\" [nzValue]=\"item.value\"\n                                            [nzDisabled]=\"item.disabled\">\n                                        </nz-option>\n                                    </nz-select>\n                                </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div nz-form-item nz-row>\n                                <div nz-form-label nz-col [nzSm]=\"4\" [nzXs]=\"24\">\n                                    <label nz-form-item-required>架构</label>\n                                </div>\n                                <div nz-form-control nz-col [nzSm]=\"18\" [nzXs]=\"24\">\n                                   <nz-radio-group formControlName=\"architecture\">\n                                        <label nz-radio-button [nzValue]=\"'A'\">\n                                            <span>Spark2集群</span>\n                                        </label>\n                                        <label nz-radio-button [nzValue]=\"'B'\" [nzDisabled]=\"true\">\n                                            <span>Spark3集群</span>\n                                        </label>\n                                        <label nz-radio-button [nzValue]=\"'C'\">\n                                            <span>Spark4集群</span>\n                                        </label>\n                                        <label nz-radio-button [nzValue]=\"'D'\">\n                                            <span>Spark5集群</span>\n                                        </label>\n                                   </nz-radio-group>\n                                </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div nz-form-item nz-row>\n                                <div nz-form-label nz-col [nzSm]=\"4\" [nzXs]=\"24\">\n                                    <label nz-form-item-required>用户</label>\n                                </div>\n                                <div nz-form-control nz-col [nzSm]=\"18\" [nzXs]=\"24\">\n                                    <nz-input formControlName=\"installuser\" nzPlaceHolder=\"hadoop\"></nz-input>\n                                </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div nz-form-item nz-row>\n                                <div nz-form-label nz-col [nzSm]=\"4\" [nzXs]=\"24\">\n                                    <label nz-form-item-required>密码</label>\n                                </div>\n                                <div nz-form-control nz-col [nzSm]=\"18\" [nzXs]=\"24\">\n                                    <nz-input formControlName=\"password\" nzType=\"password\"></nz-input>\n                                </div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<nz-divider nzTitle=\"\" nzDashed></nz-divider>\n\n\t\t\t\t\t\t\t<div nz-form-item nz-row>\n                                <div nz-form-label nz-col [nzSm]=\"4\" [nzXs]=\"24\">\n                                    <label nz-form-item-required>名称</label>\n                                </div>\n                                <div nz-form-control nz-col [nzSm]=\"18\" [nzXs]=\"24\">\n                                    <nz-input formControlName=\"name\" nzPlaceHolder=\"请输入名称\"></nz-input>\n                                </div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div nz-form-item nz-row>\n                                <div nz-form-label nz-col [nzSm]=\"4\" [nzXs]=\"24\">\n                                    <label nz-form-item-required>项目</label>\n                                </div>\n                                <div nz-form-control nz-col [nzSm]=\"18\" [nzXs]=\"24\">\n                                    <nz-select formControlName=\"projects\" [nzAllowClear]=\"true\" nzShowSearch>\n                                        <nz-option *ngFor=\"let item of projectsoptions\"\n                                            [nzLabel]=\"item.label\" [nzValue]=\"item.value\"\n                                            [nzDisabled]=\"item.disabled\">\n                                        </nz-option>\n                                    </nz-select>\n                                </div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div nz-form-item nz-row>\n                                <div nz-form-label nz-col [nzSm]=\"4\" [nzXs]=\"24\">\n                                    <label nz-form-item-required>区域</label>\n                                </div>\n                                <div nz-form-control nz-col [nzSm]=\"18\" [nzXs]=\"24\">\n                                    <nz-select formControlName=\"region\" [nzAllowClear]=\"true\" nzShowSearch>\n                                        <nz-option *ngFor=\"let item of areaoptions\"\n                                            [nzLabel]=\"item.label\" [nzValue]=\"item.value\"\n                                            [nzDisabled]=\"item.disabled\">\n                                        </nz-option>\n                                    </nz-select>\n                                </div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div nz-form-item nz-row>\n                                <div nz-form-label nz-col [nzSm]=\"4\" [nzXs]=\"24\">\n                                    <label nz-form-item-required>网络</label>\n                                </div>\n                                <div nz-form-control nz-col [nzSm]=\"18\" [nzXs]=\"24\">\n                                    <nz-select formControlName=\"networks\" [nzAllowClear]=\"true\" nzShowSearch>\n                                        <nz-option *ngFor=\"let item of networksoptions\"\n                                            [nzLabel]=\"item.label\" [nzValue]=\"item.value\"\n                                            [nzDisabled]=\"item.disabled\">\n                                        </nz-option>\n                                    </nz-select>\n                                </div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div nz-form-item nz-row>\n\t\t\t\t\t\t\t\t<div nz-form-label nz-col [nzSm]=\"4\" [nzXs]=\"24\">\n\t\t\t\t\t\t\t\t\t<label for=\"specification\" nz-form-item-required>规格</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div nz-form-control nz-col [nzSm]=\"18\" [nzXs]=\"24\">\n\t\t\t\t\t\t\t\t\t<nz-radio-group formControlName=\"specification\">\n\t\t\t\t\t\t\t\t\t\t<nz-popover [nzTitle]=\"'小规格-配置'\" class=\"mr-sm\">\n\t\t\t\t\t\t\t\t\t\t\t<label nz-radio-button nz-popover [nzValue]=\"'sm'\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>小规格</span>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-template #nzTemplate>\n\t\t\t\t\t\t\t\t\t\t\t\t<nz-table #nzTable [nzIsPagination]=\"false\" [nzBordered]=\"false\"  [nzSize]=\"small\" [nzDataSource]=\"smspecification\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody nz-tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr nz-tbody-tr *ngFor=\"let i of nzTable.data\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td widh=\"100\" nz-td>{{i.name}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td widh=\"60\" nz-td>{{i.id}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td widh=\"300\" nz-td>{{i.spec}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t</nz-table>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t</nz-popover>\n\t\t\t\t\t\t\t\t\t\t<nz-popover [nzTitle]=\"'中规格'\" class=\"mr-sm\">\n\t\t\t\t\t\t\t\t\t\t\t<label nz-radio-button nz-popover [nzValue]=\"'md'\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>中规格</span>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-template #nzTemplate>\n\t\t\t\t\t\t\t\t\t\t\t\t<div><p>内容</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p>内容</p></div>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t</nz-popover>\n\t\t\t\t\t\t\t\t\t\t<nz-popover [nzTitle]=\"'大规格'\" class=\"mr-sm\">\n\t\t\t\t\t\t\t\t\t\t\t<label nz-radio-button nz-popover [nzValue]=\"'lg'\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>大规格</span>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-template #nzTemplate>\n\t\t\t\t\t\t\t\t\t\t\t\t<div><p>内容</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p>内容</p></div>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t</nz-popover>\n\t\t\t\t\t\t\t\t\t</nz-radio-group>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div nz-form-item nz-row>\n\t\t\t\t\t\t\t\t<div nz-form-label nz-col [nzSm]=\"4\" [nzXs]=\"24\">\n\t\t\t\t\t\t\t\t\t<label for=\"security\" nz-form-item-required>安全组</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div nz-form-control nz-col [nzSm]=\"18\" [nzXs]=\"24\">\n\t\t\t\t\t\t\t\t\t<nz-select formControlName=\"security\" [nzAllowClear]=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<nz-option \n\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let item of securityoptions\" \n\t\t\t\t\t\t\t\t\t\t\t[nzLabel]=\"item.label\"\n\t\t\t\t\t\t\t\t\t\t\t[nzValue]=\"item.value\"\n\t\t\t\t\t\t\t\t\t\t\t[nzDisabled]=\"item.disabled\">\n\t\t\t\t\t\t\t\t\t\t</nz-option>\n\t\t\t\t\t\t\t\t\t</nz-select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<nz-divider nzTitle=\"\" nzDashed></nz-divider>\n\n\t\t\t\t\t\t\t<div nz-form-item nz-row>\n\t\t\t\t\t\t\t\t<div nz-form-control nz-col [nzSpan]=\"18\" [nzXs]=\"24\" [nzOffset]=\"6\">\n\t\t\t\t\t\t\t\t\t<label nz-checkbox>\n\t\t\t\t\t\t\t\t\t\t<span>记住我的选择</span>\n\t\t\t\t\t\t\t\t\t</label>\n\n\t\t\t\t\t\t\t\t\t<div class=\"mt-sm\">\n\t\t\t\t\t\t\t\t\t\t<button nz-button [nzType]=\"'primary'\" class=\"mr-sm\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"save()\">申请</button>\n\t\t\t\t\t\t\t\t\t\t<button nz-button (click)=\"$close()\" >取消</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</sip-card>\n\t\t\t</div>\n\t\t\t\n\t\t\t\n\t\t\t<div nz-col [nzXl]=\"6\" [nzMd]=\"8\">\n\t\t\t\t<sip-card [bordered]=\"false\">\n\t\t\t\t\t<ng-template #title>当前配置</ng-template>\n\t\t\t\t\t<ng-template #body>\n\t\t\t\t\t\t\t<sip-contextmenu>\n\t\t\t\t\t\t\t\t<ul nz-menu [nzMode]=\"'vertical'\" [nzTheme]=\"'light'\">\n\t\t\t\t\t\t\t\t\t<li nz-menu-item >sdfsdfsdf</li>\n\t\t\t\t\t\t\t\t\t<li nz-menu-item>sdfsdfsdf</li>\n\t\t\t\t\t\t\t\t\t<li nz-menu-item>sdfsdfsdf</li>\n\t\t\t\t\t\t\t\t\t<li nz-menu-item>sdfsdfsdf</li>\n\t\t\t\t\t\t\t\t\t<li nz-menu-item>sdfsdfsdf</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</sip-contextmenu>\n\t\t\t\t\t\t<desc-list col=\"1\" size=\"large\" class=\"mb-md\">\n\t\t\t\t\t\t\t<desc-list-item term=\"版本\">2.0.0</desc-list-item>\n\t\t\t\t\t\t\t<desc-list-item term=\"用户\">Hadoop</desc-list-item>\n\t\t\t\t\t\t\t<desc-list-item term=\"密码\">hadooppass</desc-list-item>\n\t\t\t\t\t\t\t<desc-list-item term=\"规格\">小</desc-list-item>\n\t\t\t\t\t\t</desc-list>\n\t\t\t\t\t\t<nz-divider nzTitle=\"\" nzDashed></nz-divider>\n\t\t\t\t\t\t<desc-list col=\"1\" size=\"large\" class=\"mb-md\">\n\t\t\t\t\t\t\t<desc-list-item term=\"名称\">Spark</desc-list-item>\n\t\t\t\t\t\t\t<desc-list-item term=\"项目\">wotest003</desc-list-item>\n\t\t\t\t\t\t\t<desc-list-item term=\"区域\">上海</desc-list-item>\n\t\t\t\t\t\t\t<desc-list-item term=\"网络\">无</desc-list-item>\n\t\t\t\t\t\t</desc-list>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</sip-card>\n\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t</sip-page-body>\n</sip-page>"

/***/ }),

/***/ "./src/app/routes/ui-demo/list-create/list-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sip_alain__ = __webpack_require__("./node_modules/sip-alain/esm5/sip-alain.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_sip_sip_validators__ = __webpack_require__("./src/app/core/sip/sip-validators.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListCreateComponent = /** @class */ (function (_super) {
    __extends(ListCreateComponent, _super);
    function ListCreateComponent(vcf) {
        var _this = _super.call(this, vcf) || this;
        _this.params = { id: '', datas: null };
        _this.loading = false;
        // 版本
        _this.editionoptions = [
            { value: '2.0.0', label: '2.0.0' },
            { value: '1.3.3', label: '1.3.0' },
            { value: '1.0.2', label: '1.0.2', disabled: true }
        ];
        // 项目
        _this.projectsoptions = [
            { value: 'region01', label: '广州市品高软件股份有限公司' },
            { value: 'region02', label: '生产环境' },
            { value: 'region03', label: '测试环境' }
        ];
        // 区域
        _this.areaoptions = [
            { value: 'project01', label: '广州' },
            { value: 'project02', label: '上海' },
            { value: 'project03', label: '北京' }
        ];
        // 网络
        _this.networksoptions = [
            { value: 'none', label: '无可用网络' }
        ];
        // 小规格
        _this.smspecification = [
            { name: "master01", id: "SPI", spec: "2核、2G、100G" },
            { name: "master02", id: "SPI", spec: "2核、2G、100G" },
            { name: "master03", id: "SPI", spec: "2核、2G、100G" }
        ];
        return _this;
    }
    ListCreateComponent_1 = ListCreateComponent;
    //等效于ngOnInit, 但可以多次使用
    ListCreateComponent.prototype._init = function () {
        this.params = this.$params(this.params);
        if (this.params.datas)
            this.form.$model = JSON.parse(this.params.datas);
    };
    ListCreateComponent.prototype._show = function () {
        console.log('_show');
    };
    ListCreateComponent.prototype.save = function () {
        var _this = this;
        var datas = this.form.$toJSONObject();
        this.loading = true;
        console.log('datas', datas);
        setTimeout(function () {
            _this.loading = false;
            _this.$close(true);
        }, 400);
        return;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_sip_alain__["p" /* SipNgInit */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ListCreateComponent.prototype, "_init", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_sip_alain__["q" /* SipOnShow */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ListCreateComponent.prototype, "_show", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_sip_alain__["l" /* SipFormGroup */])({
            "edition": "2.0.0",
            "architecture": "A",
            "installuser": "success",
            "password": "测试云",
            "name": "",
            "projects": "region01",
            "region": "region01",
            "networks": "test",
            "specification": "master01",
            "security": "",
            "date": "2017-11-15"
        }, {
            num: [__WEBPACK_IMPORTED_MODULE_2__core_sip_sip_validators__["a" /* SipValidators */].rangeLength(1, 20)],
            name: [__WEBPACK_IMPORTED_MODULE_2__core_sip_sip_validators__["a" /* SipValidators */].required]
        }),
        __metadata("design:type", Object)
    ], ListCreateComponent.prototype, "form", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_sip_alain__["m" /* SipFormSubmit */])('this.form'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ListCreateComponent.prototype, "save", null);
    ListCreateComponent = ListCreateComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sip-list-create',
            template: __webpack_require__("./src/app/routes/ui-demo/list-create/list-create.component.html"),
            styles: [],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1_sip_alain__["j" /* SipBusinessComponent */], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return ListCreateComponent_1; }) }]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], ListCreateComponent);
    return ListCreateComponent;
    var ListCreateComponent_1;
}(__WEBPACK_IMPORTED_MODULE_1_sip_alain__["r" /* SipPage */]));



/***/ }),

/***/ "./src/app/routes/ui-demo/list-detail/list-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<sip-page class=\"page-detail\">\n    <sip-page-header navigator=\"详情\">\n        <ng-template #title>实例【{{params.id}}】- 详情</ng-template>\n        <ng-template #desc>\n            一个虚拟机镜像启动之后生成的一个正在运行的系统，它有您期望的硬件配置、操作系统和网络配置。实例也称云服务器、云主机。\n        </ng-template>\n    </sip-page-header>\n\n    <sip-page-body>\n        <!-- tab -->\n        <nz-tabset>\n            <nz-tab>\n                <ng-template #nzTabHeading>概况</ng-template>\n                <div nz-row>\n                    <div nz-row [nzGutter]=\"16\">\n                        <div nz-col [nzMd]=\"16\">\n                            <sip-card>\n                                <ng-template #title>\n                                    <i class=\"anticon anticon-area-chart mr-sm\"></i>监控指标\n                                </ng-template>\n                                <ng-template #extra>\n                                    <button nz-button class=\"mr-sm\"><i class=\"anticon anticon-reload\"></i></button>\n                                    <nz-button-group>\n                                        <button nz-button>1小时</button>\n                                        <button nz-button>2小时</button>\n                                        <button nz-button>6小时</button>\n                                        <button nz-button>1天</button>\n                                        <button nz-button>一周</button>\n                                    </nz-button-group>\n                                    <nz-dropdown class=\"ml-sm\">\n                                        <button nz-button nz-dropdown><i class=\"anticon anticon-filter\"></i> 筛选</button>\n                                        <ul nz-menu>\n                                            <li nz-menu-item>CPU</li>\n                                            <li nz-menu-item>内存</li>\n                                            <li nz-menu-item>磁盘</li>\n                                            <li nz-menu-item>网络</li>\n                                        </ul>\n                                    </nz-dropdown>\n                                </ng-template>\n                                <ng-template #body>\n                                    <div class=\"mb-lg\">\n                                        <bar height=\"300\" title=\"销售额趋势\" [data]=\"salesData\"></bar>\n                                    </div>\n                                    \n                                    <bar height=\"300\" title=\"销售额趋势01\" [data]=\"salesData\"></bar>\n                                </ng-template>\n                            </sip-card>\n                        </div>\n                        <div nz-col [nzMd]=\"8\" >\n                            <sip-card>\n                                <ng-template #title><i class=\"anticon anticon-credit-card mr-sm\"></i>基本信息</ng-template>\n                                <ng-template #body>\t\t\t\t\t\t\t\t\n                                    <form nz-form>\n                                        <div nz-form-item nz-row>\n                                            <div nz-form-label nz-col [nzSpan]=\"5\">\n                                                <label>专业</label>\n                                            </div>\n                                            <div nz-form-control nz-col [nzSpan]=\"19\">\n                                                <nz-badge [nzStatus]=\"'processing'\" class=\"mr-sm\"></nz-badge>运行中\n                                            </div>\n                                        </div>\n                                        <div nz-form-item nz-row>\n                                            <div nz-form-label nz-col [nzSpan]=\"5\">\n                                                <label>区域</label>\n                                            </div>\n                                            <div nz-form-control nz-col [nzSpan]=\"19\">\n                                                开发云\n                                            </div>\n                                        </div>\n                                        <div nz-form-item nz-row>\n                                            <div nz-form-label nz-col [nzSpan]=\"5\">\n                                                <label>所属区域</label>\n                                            </div>\n                                            <div nz-form-control nz-col [nzSpan]=\"19\">\n                                                测试集群一\n                                            </div>\n                                        </div>\n                                        <div nz-form-item nz-row>\n                                            <div nz-form-label nz-col [nzSpan]=\"5\">\n                                                <label>镜像</label>\n                                            </div>\n                                            <div nz-form-control nz-col [nzSpan]=\"19\">\n                                                SIP\n                                            </div>\n                                        </div>\n                                        <nz-divider class=\"mb-lg\"></nz-divider>\n                                        <div nz-form-item nz-row>\n                                            <div nz-form-label nz-col [nzSpan]=\"5\">\n                                                <label>内存/CPU</label>\n                                            </div>\n                                            <div nz-form-control nz-col [nzSpan]=\"19\">\n                                                2核2G\n                                            </div>\n                                        </div>\n                                        <div nz-form-item nz-row>\n                                            <div nz-form-label nz-col [nzSpan]=\"5\">\n                                                <label>内网IP</label>\n                                            </div>\n                                            <div nz-form-control nz-col [nzSpan]=\"19\">\n                                                10.202.131.39\n                                            </div>\n                                        </div>\n                                        <div nz-form-item nz-row>\n                                            <div nz-form-label nz-col [nzSpan]=\"5\">\n                                                <label>外网IP</label>\n                                            </div>\n                                            <div nz-form-control nz-col [nzSpan]=\"19\">\n                                                无 <a class=\"ml-sm\">绑定IP</a>\n                                            </div>\n                                        </div>\n                                        <div nz-form-item nz-row>\n                                            <div nz-form-label nz-col [nzSpan]=\"5\">\n                                                <label>安全组</label>\n                                            </div>\n                                            <div nz-form-control nz-col [nzSpan]=\"19\">\n                                                123 <a class=\"ml-sm\" [sipRouterLink]=\"['/sip/ui-demo/create']\">编辑</a>\n                                            </div>\n                                        </div>\n                                    </form>\n                                </ng-template>\n                            </sip-card>\n                        </div>\n                    </div>\n                </div>\n            </nz-tab>\n            <nz-tab>\n                <ng-template #nzTabHeading>设备</ng-template>\n                <div nz-row>\n                    <div nz-row [nzGutter]=\"16\">\n                        <div nz-col [nzSpan]=\"16\">\n                            <sip-card>\n                                <ng-template #title><i class=\"anticon anticon-wifi mr-sm\"></i>网卡</ng-template>\n                                <ng-template #extra>\n                                    <button nz-button><i class=\"anticon anticon-plus mr-sm\"></i>添加网卡</button>\n                                </ng-template>\n                                <ng-template #body>\n                                    <nz-table #nzTable class=\"simple-table\" [nzDataSource]=\"nzdata\" [nzIsPagination]=\"false\"   [nzBordered]=\"true\" [nzSize]=\"'middle'\">\n                                        <thead nz-thead>\n                                            <tr>\n                                                <th nz-th class=\"text-center\">网络名称</th>\n                                                <th nz-th class=\"text-center\">MAC地址</th>\n                                                <th nz-th class=\"text-center\">私有IP</th>\n                                                <th nz-th class=\"text-center\">弹性IP</th>\n                                                <th nz-th class=\"text-center\">操作</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody nz-tbody>\n                                            <tr nz-tbody-tr *ngFor=\"let i of nzTable.data\">\n                                                <td>{{i.name}}</td>\n                                                <td>{{i.mac}}</td>\n                                                <td>{{i.ip}}</td>\n                                                <td>{{i.sip}}</td>\n                                                <td class=\"text-center\">\n                                                    <a (click)=\"customCompModel(i)\">编辑</a>\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                    </nz-table>\n                                </ng-template>\n                            </sip-card>\n                            <sip-card>\n                                    <ng-template #title><i class=\"fa fa-inbox mr-sm\"></i>存储卷</ng-template>\n                                    <ng-template #extra>\n                                        <nz-button-group >\n                                            <button nz-button (click)=\"customCompModel()\" ><i class=\"anticon anticon-reload\"></i></button>\n                                            <button nz-button (click)=\"customCompModel()\" ><i class=\"anticon anticon-plus mr-sm\"></i>挂接</button>\n                                        </nz-button-group>\n                                    </ng-template>\n                                    <ng-template #body>\n                                        <nz-table #nzTable class=\"simple-table\" [nzDataSource]=\"inboxdata\" [nzIsPagination]=\"false\"   [nzBordered]=\"true\" [nzSize]=\"'middle'\">\n                                            <thead nz-thead>\n                                                <tr>\n                                                    <th nz-th class=\"text-center\">名称</th>\n                                                    <th nz-th class=\"text-center\">类型</th>\n                                                    <th nz-th class=\"text-center\">存储设备</th>\n                                                    <th nz-th class=\"text-center\">状态</th>\n                                                    <th nz-th class=\"text-center\">大小</th>\n                                                    <th nz-th class=\"text-center\">操作</th>\n                                                </tr>\n                                            </thead>\n                                            <tbody nz-tbody>\n                                                <tr nz-tbody-tr *ngFor=\"let i of nzTable.data\">\n                                                    <td>{{i.name}}</td>\n                                                    <td class=\"text-center\">{{i.type}}</td>\n                                                    <td class=\"text-center\">{{i.inbox}}</td>\n                                                    <td class=\"text-center\">\n                                                        <nz-badge class=\"mr-sm\" [nzStatus]=\"'success'\"></nz-badge>{{i.statusname}}\n                                                    </td>\n                                                    <td class=\"text-center\">{{i.size}}</td>\n                                                    <td class=\"text-center\">\n                                                        <nz-popconfirm [nzTitle]=\"'确定要取消挂接吗？'\" (nzOnConfirm)=\"confirm()\" (nzOnCancel)=\"cancel()\">\n                                                            <a nz-popconfirm>取消挂接</a>\n                                                        </nz-popconfirm>\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </nz-table>\n                                    </ng-template>\n                                </sip-card>\n                            \n                        </div>\n                        <div nz-col [nzSpan]=\"8\">\n                            <sip-card>\n                                <ng-template #title><i class=\"anticon anticon-credit-card mr-sm\"></i>设备信息</ng-template>\n                                <ng-template #body>\n                                    <form nz-form>\n                                        <div nz-form-item nz-row>\n                                            <div nz-form-label nz-col [nzSpan]=\"5\">\n                                                <label>CPU/内存</label>\n                                            </div>\n                                            <div nz-form-control nz-col [nzSpan]=\"19\">\n                                                1核 / 256M  <a class=\"ml-sm\" href=\"\">变更</a>\n                                            </div>\n                                        </div>\n                                        <div nz-form-item nz-row>\n                                            <div nz-form-label nz-col [nzSpan]=\"5\">\n                                                <label>系统盘</label>\n                                            </div>\n                                            <div nz-form-control nz-col [nzSpan]=\"19\">\n                                                40G\n                                            </div>\n                                        </div>\n                                        <div nz-form-item nz-row>\n                                            <div nz-form-label nz-col [nzSpan]=\"5\">\n                                                <label>物理节点</label>\n                                            </div>\n                                            <div nz-form-control nz-col [nzSpan]=\"19\">\n                                                10.202.131.101\n                                            </div>\n                                        </div>\n                                    </form>\n                                </ng-template>\n                            </sip-card>\t\n                        </div>\n                    </div>\n                </div>\n            </nz-tab>\n            <nz-tab>\n                <ng-template #nzTabHeading>消费情况</ng-template>\n                <div nz-row>\n                    <sip-card [bordered]=\"false\" [noHovering]=\"true\" >\n                        <ng-template #body>\n                            <div nz-row [nzGutter]=\"16\">\n                                <div nz-col [nzSpan]=\"12\">\n                                    <div class=\"page-header\">\n                                        <div class=\"avatar\"><nz-avatar  nzSrc=\"https://gw.alipayobjects.com/zos/rmsportal/lctvVCLfRpYCkYxAsiVQ.png\"></nz-avatar></div>\n                                        <div class=\"desc\">\n                                            <div class=\"desc-title\">早安，山治，我要吃肉！</div>\n                                            <p>假砖家 | 地球－伟大航道－黄金梅丽号－厨房－小强部门</p>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div nz-col [nzSpan]=\"12\" >\n                                    <div class=\"page-extra\">\n                                        <div>\n                                            <p>项目数</p>\n                                            <p>56</p>\n                                        </div>\n                                        <div>\n                                            <p>团队内排名</p>\n                                            <p>8<span> / 24</span></p>\n                                        </div>\n                                        <div>\n                                            <p>项目访问</p>\n                                            <p>2,223</p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </ng-template>\n                    </sip-card>\n                </div>\n            </nz-tab>\n            <nz-tab>\n                <ng-template #nzTabHeading>操作情况</ng-template>\n                <div nz-row>\n                    sdfsdf\n                </div>\n            </nz-tab>\n        </nz-tabset>\n    </sip-page-body>\n</sip-page>"

/***/ }),

/***/ "./src/app/routes/ui-demo/list-detail/list-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sip_alain__ = __webpack_require__("./node_modules/sip-alain/esm5/sip-alain.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListDetailComponent = /** @class */ (function (_super) {
    __extends(ListDetailComponent, _super);
    function ListDetailComponent(vcf) {
        var _this = _super.call(this, vcf) || this;
        _this.params = { id: '' };
        _this.nzdata = [
            {
                name: "管理员网络",
                mac: "D0:0D:81:52:0D:9D",
                ip: "10.202.131.39",
                sip: "10.202.131.28"
            },
            {
                name: "管理员网络01",
                mac: "D0:0D:81:52:0D:8D",
                ip: "10.202.131.45",
                sip: "10.202.131.131"
            }
        ];
        _this.inboxdata = [
            {
                name: "ceshivolume(vol-CF7C7F54)",
                type: "数据盘",
                inbox: "云存储",
                status: "success",
                statusname: "使用中",
                size: "1G"
            },
            {
                name: "ceshivolume(vol-CF7C7F54)",
                type: "数据盘",
                inbox: "云存储",
                status: "success",
                statusname: "使用中",
                size: "1G"
            },
            {
                name: "ceshivolume(vol-CF7C7F54)",
                type: "数据盘",
                inbox: "云存储",
                status: "success",
                statusname: "使用中",
                size: "1G"
            }
        ];
        // 图表数据
        _this.salesData = [];
        return _this;
    }
    ListDetailComponent_1 = ListDetailComponent;
    ListDetailComponent.prototype._init = function () {
        this.params = this.$params(this.params);
    };
    ListDetailComponent.prototype._initChart = function () {
        for (var i = 0; i < 12; i += 1) {
            this.salesData.push({
                x: i + 1 + "\u6708",
                y: Math.floor(Math.random() * 1000) + 200
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_sip_alain__["p" /* SipNgInit */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ListDetailComponent.prototype, "_init", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_sip_alain__["p" /* SipNgInit */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ListDetailComponent.prototype, "_initChart", null);
    ListDetailComponent = ListDetailComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sip-list-detail',
            template: __webpack_require__("./src/app/routes/ui-demo/list-detail/list-detail.component.html"),
            styles: [],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1_sip_alain__["j" /* SipBusinessComponent */], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return ListDetailComponent_1; }) }]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], ListDetailComponent);
    return ListDetailComponent;
    var ListDetailComponent_1;
}(__WEBPACK_IMPORTED_MODULE_1_sip_alain__["r" /* SipPage */]));



/***/ }),

/***/ "./src/app/routes/ui-demo/list-form/list-form.component.html":
/***/ (function(module, exports) {

module.exports = "<sip-modal width=\"720px\" height=\"380px\">\n    <sip-modal-header>\n        <span>{{form?.$name.value || '新建'}}</span>\n    </sip-modal-header>\n    <sip-modal-body>\n        <form nz-form [formGroup]=\"form\">\n            <div nz-form-item nz-row>\n                <div nz-form-label nz-col [nzSm]=\"4\" [nzXs]=\"24\">\n                    <label nz-form-item-required>num</label>\n                </div>\n                <div nz-form-control nz-col [nzSm]=\"18\" [nzXs]=\"24\">\n                    <nz-input formControlName=\"num\"></nz-input>\n                    <ng-container *ngIf=\"form?.$num.dirty || form?.$num.touched\">\n                        <span nz-form-explain *ngIf=\"form.$num.errors?.rangeLength\">{{form.$num.errors.rangeLengthText}}</span>\n                    </ng-container>\n                </div>\n            </div>\n            <div nz-form-item nz-row>\n                <div nz-form-label nz-col [nzSm]=\"4\" [nzXs]=\"24\">\n                    <label nz-form-item-required>name</label>\n                </div>\n                <div nz-form-control nz-col [nzSm]=\"18\" [nzXs]=\"24\">\n                    <nz-input formControlName=\"name\"></nz-input>\n                    <span nz-form-explain *ngIf=\"(form?.$name.dirty || form?.$name.touched) && form?.$name.errors?.required\">\n                        {{form.$name.errors.requiredText}}\n                    </span>\n                </div>\n            </div>\n            <div nz-form-item nz-row>\n                <div nz-form-label nz-col [nzSm]=\"4\" [nzXs]=\"24\">\n                    <label>status</label>\n                </div>\n                <div nz-form-control nz-col [nzSm]=\"18\" [nzXs]=\"24\">\n                    <nz-select formControlName=\"status\" [nzAllowClear]=\"false\" nzShowSearch>\n                        <nz-option *ngFor=\"let item of statuList\" [nzLabel]=\"item.text\" [nzValue]=\"item.value\">\n                        </nz-option>\n                    </nz-select>\n                </div>\n\t\t\t</div>\n\n            <div nz-form-item nz-row>\n                <div nz-form-label nz-col [nzSm]=\"4\" [nzXs]=\"24\">\n                    <label>region</label>\n                </div>\n                <div nz-form-control nz-col [nzSm]=\"18\" [nzXs]=\"24\">\n                    <nz-radio-group formControlName=\"region\">\n                        <label nz-radio-button [nzValue]=\"'开发云'\">\n                            <span>开发云</span>\n                        </label>\n                        <label nz-radio-button [nzValue]=\"'测试云'\">\n                            <span>测试云</span>\n                        </label>\n                    </nz-radio-group>\n                </div>\n            </div>\n            <nz-divider nzTitle=\"\" nzDashed></nz-divider>\n            <div nz-form-item nz-row>\n                <div nz-form-label nz-col [nzSm]=\"4\" [nzXs]=\"24\">\n                    <label>ip</label>\n                </div>\n                <div nz-form-control nz-col [nzSm]=\"18\" [nzXs]=\"24\">\n                    <nz-input formControlName=\"ip\" nzType=\"text\"></nz-input>\n                </div>\n            </div>\n            <div nz-form-item nz-row>\n                <div nz-form-label nz-col [nzSm]=\"4\" [nzXs]=\"24\">\n                    <label>spec</label>\n                </div>\n                <div nz-form-control nz-col [nzSm]=\"18\" [nzXs]=\"24\">\n                    <nz-radio-group formControlName=\"spec\">\n                        <label nz-radio [nzValue]=\"'2核2G'\">\n                            <span>2核2G</span>\n                        </label>\n                        <label nz-radio [nzValue]=\"'2核4G'\">\n                            <span>2核4G</span>\n                        </label>\n                        <label nz-radio [nzValue]=\"'4核4G'\">\n                            <span>4核4G</span>\n                        </label>\n                    </nz-radio-group>\n                </div>\n            </div>\n            <div nz-form-item nz-row>\n                <div nz-form-label nz-col [nzSm]=\"4\" [nzXs]=\"24\">\n                    <label>date</label>\n                </div>\n                <div nz-form-control nz-col [nzSm]=\"18\" [nzXs]=\"24\">\n                    <nz-datepicker formControlName=\"date\"></nz-datepicker>\n                </div>\n            </div>\n        </form>\n    </sip-modal-body>\n    <sip-modal-footer>\n        <button nz-button (click)=\"save()\" [nzType]=\"'primary'\" [nzSize]=\"'large'\"\n            [disabled]=\"loading\" [nzLoading]=\"loading\">\n            提 交\n        </button>\n        <button nz-button (click)=\"$close()\">取消</button>\n    </sip-modal-footer>\n</sip-modal>"

/***/ }),

/***/ "./src/app/routes/ui-demo/list-form/list-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sip_alain__ = __webpack_require__("./node_modules/sip-alain/esm5/sip-alain.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_sip_sip_validators__ = __webpack_require__("./src/app/core/sip/sip-validators.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListFormComponent = /** @class */ (function (_super) {
    __extends(ListFormComponent, _super);
    function ListFormComponent(vcf) {
        var _this = _super.call(this, vcf) || this;
        _this.params = { id: '', datas: null };
        _this.loading = false;
        _this.statuList = [
            { text: '成功', value: 'success' },
            { text: '处理中', value: 'processing' },
            { text: '失败', value: 'error' }
        ];
        _this.versionList = [
            { version: '1.0' },
            { version: '2.0' }
        ];
        return _this;
    }
    ListFormComponent_1 = ListFormComponent;
    //等效于ngOnInit, 但可以多次使用
    ListFormComponent.prototype._init = function () {
        this.params = this.$params(this.params);
        if (this.params.datas)
            this.form.$model = this.params.datas;
    };
    ListFormComponent.prototype._show = function () {
        console.log('_show');
    };
    ListFormComponent.prototype.save = function () {
        var _this = this;
        var datas = this.form.$toJSONObject();
        this.loading = true;
        console.log('datas', datas);
        setTimeout(function () {
            _this.loading = false;
            _this.$close(true);
        }, 400);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_sip_alain__["p" /* SipNgInit */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ListFormComponent.prototype, "_init", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_sip_alain__["q" /* SipOnShow */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ListFormComponent.prototype, "_show", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_sip_alain__["l" /* SipFormGroup */])({
            "num": "",
            "name": "",
            "status": "success",
            "region": "测试云",
            "ip": "",
            "spec": "2核2G",
            "user": "test",
            "date": "2017-11-15"
        }, {
            num: [__WEBPACK_IMPORTED_MODULE_2__core_sip_sip_validators__["a" /* SipValidators */].rangeLength(1, 20)],
            name: [__WEBPACK_IMPORTED_MODULE_2__core_sip_sip_validators__["a" /* SipValidators */].required]
        }),
        __metadata("design:type", Object)
    ], ListFormComponent.prototype, "form", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_sip_alain__["m" /* SipFormSubmit */])('this.form'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ListFormComponent.prototype, "save", null);
    ListFormComponent = ListFormComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sip-list-form',
            template: __webpack_require__("./src/app/routes/ui-demo/list-form/list-form.component.html"),
            styles: [],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1_sip_alain__["j" /* SipBusinessComponent */], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return ListFormComponent_1; }) }]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], ListFormComponent);
    return ListFormComponent;
    var ListFormComponent_1;
}(__WEBPACK_IMPORTED_MODULE_1_sip_alain__["o" /* SipModal */]));



/***/ }),

/***/ "./src/app/routes/ui-demo/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<sip-page>\n    <sip-page-header navigator=\"列表\">\n        <ng-template #title>列表</ng-template>\n        <ng-template #desc>\n            列表\n            <nz-tooltip [nzTitle]=\"'了解更多实例介绍'\">\n                <a nz-tooltip [sipRouterLink]>更多…</a>\n            </nz-tooltip>\n        </ng-template>\n    </sip-page-header>\n\n    <sip-page-body>\n        <!-- 卡片 -->\n        <sip-card [bordered]=\"false\">\n            <ng-template #body>\n                <!-- 操作栏 -->\n                <sip-page-toolbar>\n                    <button nz-button [nzType]=\"'default'\" class=\"mr-sm\">\n                        <i class=\"anticon anticon-reload\"></i>\n                    </button>\n                    <button nz-button (click)=\"create()\" sipAccess=\"create\"  [nzType]=\"'primary'\" class=\"mr-sm\">\n                        <i class=\"anticon anticon-plus\"></i>\n                        <span>新建</span>\n                    </button>\n                    <button nz-button (click)=\"test()\" sipAccess=\"test\" [nzType]=\"'default'\" [nzSize]=\"'large'\" class=\"mr-sm\">\n                        <i class=\"anticon anticon-caret-right\"></i>\n                        <span>测试</span>\n                    </button>\n                    <nz-dropdown [nzTrigger]=\"'hover'\" [nzPlacement]=\"'bottomLeft'\" class=\"mr-sm\">\n                        <button nz-button nz-dropdown>\n                            <i class=\"fa fa-ellipsis-v mr-sm\"></i>\n                            <span>更多</span>\n                            <i class=\"anticon anticon-down\"></i>\n                        </button>\n                        <ul nz-menu>\n                            <li nz-menu-item>\n                                <a (click)=\"edit()\" sipAccess=\"edit\">{{editText}}</a>\n                            </li>\n                            <li nz-menu-item>\n                                <a (click)=\"test()\" sipAccess=\"test\">测试</a>\n                            </li>\n                            <li nz-menu-item>\n                                <a [sipRouterLink]>测试</a>\n                            </li>\n                            <li nz-menu-divider></li>\n                            <li nz-submenu>\n                                <span title>更多</span>\n                                <ul>\n                                    <li nz-menu-item>\n                                        <a (click)=\"edit()\" sipAccess=\"edit\">{{editText}}</a>\n                                    </li>\n                                    <li nz-menu-item>\n                                        <a (click)=\"test()\" sipAccess=\"test\">测试</a>\n                                    </li>\n                                    <li nz-menu-item>\n                                        <a [sipRouterLink]>测试</a>\n                                    </li>\n                                </ul>\n                            </li>\n\n                        </ul>\n                    </nz-dropdown>\n\n                    <sip-searchConent [params]=\"searchContent\"></sip-searchConent>\n                </sip-page-toolbar>\n\n                <div class=\"mb-md\">\n                    <nz-alert [nzType]=\"'info'\">\n                        <span alert-body>\n                            <nz-tag [nzColor]=\"'purple'\" [nzClosable]=\"true\">purple</nz-tag>\n                        </span>\n                    </nz-alert>\n                </div>\n                <sip-minitable [manager]=\"tableManager\">\n                    <sip-minicolumn name=\"num\" title=\"编号\">\n                        <ng-template #formatter let-row=\"row\" let-column=\"column\" let-data=\"data\">\n                            <a [sipRouterLink]=\"['/ui-demo/list-detail', {id:data.num}]\">{{data.num}}</a>\n                            <i class=\"fa fa-desktop ml-sm\"></i>\n                        </ng-template>\n                    </sip-minicolumn>\n                    <sip-minicolumn name=\"name\" title=\"名称\" [sortable]=\"true\" sortOrder=\"desc\"></sip-minicolumn>\n                    <sip-minicolumn name=\"status\" title=\"状态\">\n                        <ng-template #formatter let-row=\"row\" let-column=\"column\" let-data=\"data\">\n                            <nz-badge [nzStatus]=\"data.status\" class=\"mr-sm\"></nz-badge>\n                            {{column.getFilterText(data.status)}}\n                        </ng-template>\n                        <ng-template #editor let-row=\"row\" let-column=\"column\" let-data=\"data\">\n                            <nz-select [(ngModel)]=\"data.status\">\n                                <nz-option *ngFor=\"let item of column.filterItems\" [nzLabel]=\"item.text\" [nzValue]=\"item.value\">\n                                </nz-option>\n                            </nz-select>\n                        </ng-template>\n                    </sip-minicolumn>\n                    <sip-minicolumn name=\"region\" title=\"区域\" [sortable]=\"true\"></sip-minicolumn>\n                    <sip-minicolumn name=\"ip\" title=\"IP\" [sortable]=\"true\"></sip-minicolumn>\n                    <sip-minicolumn name=\"spec\" title=\"系统/规格\" [sortable]=\"true\"></sip-minicolumn>\n                    <sip-minicolumn name=\"user\" title=\"创建人\" [sortable]=\"true\"></sip-minicolumn>\n                    <sip-minicolumn name=\"date\" title=\"创建时间\" [sortable]=\"true\" width=\"100px\"></sip-minicolumn>\n                </sip-minitable>\n            </ng-template>\n        </sip-card>\n    </sip-page-body>\n</sip-page>"

/***/ }),

/***/ "./src/app/routes/ui-demo/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sip_alain__ = __webpack_require__("./node_modules/sip-alain/esm5/sip-alain.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_form_list_form_component__ = __webpack_require__("./src/app/routes/ui-demo/list-form/list-form.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListComponent = /** @class */ (function (_super) {
    __extends(ListComponent, _super);
    function ListComponent(vcf) {
        var _this = _super.call(this, vcf) || this;
        _this.params = { id: '' };
        _this.nzdata = [
            {
                num: "i-mysql",
                name: "mysql",
                status: "success",
                region: "开发云",
                ip: "10.202.0.8",
                spec: "2核2G",
                user: "开发账号",
                date: "2017-11-15"
            },
            {
                num: "i-instance",
                name: "实例",
                status: "error",
                region: "开发云",
                ip: "10.202.131.39",
                spec: "2核4G",
                user: "开发账号",
                date: "2017-11-15"
            },
            {
                num: "i-hbase",
                name: "hbase",
                status: "processing",
                region: "开发云",
                ip: "10.202.10.1",
                spec: "4核4G",
                user: "开发账号",
                date: "2017-11-15"
            }
        ];
        _this.searchContent = {
            content: '',
            search: function () {
                _this.tableManager.search({ content: _this.searchContent.content });
            }
        };
        /**table管理器 */
        _this.tableManager = new __WEBPACK_IMPORTED_MODULE_1_sip_alain__["c" /* MinitableManager */]({
            // connstr: 'iaas',
            // sqlId: 'iaas_Instance.List.GetByOwnerID',
            multiSelect: true,
            datas: _this.nzdata,
            onSearch: function (searchParams) {
                __WEBPACK_IMPORTED_MODULE_1_sip_alain__["b" /* Lib */].extend(searchParams, {
                    content: '', status: ''
                });
            },
            /** 过滤器设置 */
            filters: {
                /**列名 */
                status: {
                    items: [
                        { text: '成功', value: 'success' },
                        { text: '处理中', value: 'processing' },
                        { text: '失败', value: 'error' }
                    ],
                    onFilter: function (p) {
                        var values = p.values;
                        _this.tableManager.search({ status: status });
                    }
                }
            },
            /**初始化时触发，表示table已经可以使用 */
            onInit: function () {
                console.log('onInit tableManager1');
            },
            /**选择改变时触发 */
            onSelectChanged: function (rows) {
                _this.accessManager.check(_this.tableManager.selectDatas);
            },
            /**每次数据加载完成后并处理table业务时触发 */
            onCompleted: function () {
                console.log('onCompleted');
            },
            contextmenu: function (menu, rows) {
                if (!rows.length) {
                    menu.items = [];
                    return;
                }
                ;
                var row = rows[0], data = row.data;
                menu.items = [
                    {
                        title: row.isEdit ? '保存' : '编辑',
                        disabled: false,
                        onClick: function (p) {
                            _this.edit();
                        }
                    }, {
                        title: '测试',
                        disabled: false,
                        onClick: function (p) {
                            _this.test();
                        }
                    }
                ];
            }
        });
        _this.editText = '编辑';
        return _this;
    }
    ListComponent_1 = ListComponent;
    //等效于ngOnInit, 但可以多次使用
    ListComponent.prototype._init = function () {
        this.params = this.$params(this.params);
    };
    ListComponent.prototype.create = function () {
        var url = 'ui-demo/list-create';
        this.$navigate(url, { id: '' }).subscribe(function (r) {
            if (!r)
                return;
            console.log(url, r);
        });
    };
    ListComponent.prototype.test = function () {
        this.$modal(__WEBPACK_IMPORTED_MODULE_2__list_form_list_form_component__["a" /* ListFormComponent */], { id: '' }).subscribe(function (r) {
            if (!r)
                return;
            console.log('ListFormComponent', r);
        });
    };
    ListComponent.prototype._checkEditText = function () {
        var index = this.tableManager.selectRows.findIndex(function (item) { return item.isEdit; });
        this.editText = index > -1 ? '保存' : '编辑';
    };
    ListComponent.prototype.edit = function () {
        var _this = this;
        var rows = this.tableManager.selectRows;
        if (rows.length == 0)
            return;
        var isEdit = this.editText == '保存';
        rows.forEach(function (row) {
            _this.tableManager.editRow([row.index], !isEdit);
        });
        this._checkEditText();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_sip_alain__["p" /* SipNgInit */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ListComponent.prototype, "_init", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_sip_alain__["d" /* SipAccess */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_sip_alain__["f" /* SipAccessManager */])
    ], ListComponent.prototype, "accessManager", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_sip_alain__["e" /* SipAccessItem */])('create', {
            multi: false, hasData: false,
            check: function () {
                return true;
            }
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ListComponent.prototype, "create", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_sip_alain__["e" /* SipAccessItem */])('test', {
            multi: false, hasData: true,
            check: function () {
                return true;
            }
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ListComponent.prototype, "test", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_sip_alain__["e" /* SipAccessItem */])('edit', {
            multi: true, hasData: true,
            check: function () {
                this._checkEditText();
                return true;
            }
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ListComponent.prototype, "edit", null);
    ListComponent = ListComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sip-list',
            template: __webpack_require__("./src/app/routes/ui-demo/list/list.component.html"),
            styles: [],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1_sip_alain__["j" /* SipBusinessComponent */], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return ListComponent_1; }) }]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], ListComponent);
    return ListComponent;
    var ListComponent_1;
}(__WEBPACK_IMPORTED_MODULE_1_sip_alain__["r" /* SipPage */]));



/***/ }),

/***/ "./src/app/routes/ui-demo/server-list/server-list.component.html":
/***/ (function(module, exports) {

module.exports = "<sip-page>\t\t\n\t<sip-page-header navigator=\"服务目录\" class=\"hide\">\n\t\t<ng-template #title>服务目录</ng-template>\n\t\t<ng-template #desc>\n\t\t\t展示提供的各项云服务，如弹性计算服务、存储服务、数据库服务，大数据服务等，通过服务目录可便捷地进行各项服务的申请。\n\t\t</ng-template>\n\t</sip-page-header>\n\n\t<sip-page-body>\n\t\t<nz-card *ngFor=\"let list of serverList\" nzNoPadding [nzBordered]=false class=\"server-directory mb-sm\">\n\t\t\t<ng-template #title>\n\t\t\t\t{{list.name}}\n\t\t\t</ng-template>\n\t\t\t<ng-template #body>\n\t\t\t\t<div nz-row [nzGutter]=\"24\">\n\t\t\t\t\t<div *ngFor=\"let item of list.child\" nz-col [nzXs]='24' [nzSm]='12' [nzMd]=\"6\">\n\t\t\t\t\t\t<nz-card nzNoHovering>\n\t\t\t\t\t\t\t<ng-template #body>\n\t\t\t\t\t\t\t\t<div class=\"serveinfo\">\n\t\t\t\t\t\t\t\t\t<div class=\"img\">\n\t\t\t\t\t\t\t\t\t\t<img nf-if=\"item.isimg\" src=\"{{item.icon}}\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"{{item.icon}} {{item.color}}\"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"{{item.color}}\">{{item.title}}</h4>\n\t\t\t\t\t\t\t\t\t\t<p>{{item.des}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</nz-card>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ng-template>\n\t\t</nz-card>\n\t\t\n\t\t\n\t</sip-page-body>\n</sip-page>"

/***/ }),

/***/ "./src/app/routes/ui-demo/server-list/server-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sip_alain__ = __webpack_require__("./node_modules/sip-alain/esm5/sip-alain.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServerListComponent = /** @class */ (function (_super) {
    __extends(ServerListComponent, _super);
    function ServerListComponent(vcf) {
        var _this = _super.call(this, vcf) || this;
        _this.params = { id: '' };
        /**
         * 基础demo数据可删除
         */
        _this.serverList = [
            {
                name: '基础资源',
                child: [
                    {
                        color: 'text-red',
                        icon: 'fa fa-envelope',
                        title: '实例',
                        des: '自助选择服务器配置、操作系统和网络配置快速创建虚拟机，实例也称云服务器、云主机'
                    }, {
                        color: 'text-green',
                        icon: 'fa fa-cubes',
                        title: '自定义镜像',
                        des: '带有操作系统的云主机模板，提供主流的 Linux、Windows 模板，并根据上游厂商更新版本时及时制作新模板。用户也可以在将自己名下的云主机制作成模板，以备后用'
                    }, {
                        color: 'text-cyan',
                        icon: 'fa fa-life-saver',
                        title: '实例备份',
                        des: '实例备份可对实例中的所有本地硬盘中的数据进行备份与恢复，挂接的存储卷数据不会备份'
                    }, {
                        color: 'text-orange',
                        icon: 'fa fa-suitcase',
                        title: '存储快照',
                        des: '快照是存储卷的一个完全可用拷贝。快照的主要作用是能够进行在线数据备份与恢复'
                    }
                ]
            }, {
                name: '数据库',
                child: [
                    {
                        color: 'text-red',
                        isimg: true,
                        icon: './assets/img/server.png',
                        title: '实例',
                        des: '自助选择服务器配置、操作系统和网络配置快速创建虚拟机，实例也称云服务器、云主机'
                    }, {
                        color: 'text-green',
                        icon: 'fa fa-cubes',
                        title: '自定义镜像',
                        des: '带有操作系统的云主机模板，提供主流的 Linux、Windows 模板，并根据上游厂商更新版本时及时制作新模板。用户也可以在将自己名下的云主机制作成模板，以备后用'
                    }, {
                        color: 'text-cyan',
                        icon: 'fa fa-life-saver',
                        title: '实例备份',
                        des: '实例备份可对实例中的所有本地硬盘中的数据进行备份与恢复，挂接的存储卷数据不会备份'
                    }
                ]
            }
        ];
        return _this;
    }
    ServerListComponent_1 = ServerListComponent;
    //等效于ngOnInit, 但可以多次使用
    ServerListComponent.prototype._init = function () {
        this.params = this.$params(this.params);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_sip_alain__["p" /* SipNgInit */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ServerListComponent.prototype, "_init", null);
    ServerListComponent = ServerListComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sip-server-list',
            template: __webpack_require__("./src/app/routes/ui-demo/server-list/server-list.component.html"),
            styles: [],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1_sip_alain__["j" /* SipBusinessComponent */], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return ServerListComponent_1; }) }]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], ServerListComponent);
    return ServerListComponent;
    var ServerListComponent_1;
}(__WEBPACK_IMPORTED_MODULE_1_sip_alain__["r" /* SipPage */]));



/***/ }),

/***/ "./src/app/routes/ui-demo/ui-demo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiDemoRoutingModule", function() { return UiDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ui_demo_module__ = __webpack_require__("./src/app/routes/ui-demo/ui-demo.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list_list_component__ = __webpack_require__("./src/app/routes/ui-demo/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__list_create_list_create_component__ = __webpack_require__("./src/app/routes/ui-demo/list-create/list-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__list_detail_list_detail_component__ = __webpack_require__("./src/app/routes/ui-demo/list-detail/list-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__server_list_server_list_component__ = __webpack_require__("./src/app/routes/ui-demo/server-list/server-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: 'list',
        component: __WEBPACK_IMPORTED_MODULE_5__list_list_component__["a" /* ListComponent */]
    },
    {
        path: 'list-create',
        component: __WEBPACK_IMPORTED_MODULE_6__list_create_list_create_component__["a" /* ListCreateComponent */]
    },
    {
        path: 'list-detail',
        component: __WEBPACK_IMPORTED_MODULE_7__list_detail_list_detail_component__["a" /* ListDetailComponent */]
    },
    {
        path: 'server-list',
        component: __WEBPACK_IMPORTED_MODULE_8__server_list_server_list_component__["a" /* ServerListComponent */]
    }
];
var UiDemoRoutingModule = /** @class */ (function () {
    function UiDemoRoutingModule() {
    }
    UiDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_4__ui_demo_module__["a" /* UiDemoModule */]
            ]
        })
    ], UiDemoRoutingModule);
    return UiDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/routes/ui-demo/ui-demo-shared/components/form/form.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/ui-demo/ui-demo-shared/components/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sip_alain__ = __webpack_require__("./node_modules/sip-alain/esm5/sip-alain.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormComponent = /** @class */ (function (_super) {
    __extends(FormComponent, _super);
    function FormComponent(vcf) {
        return _super.call(this, vcf) || this;
    }
    FormComponent.prototype._init = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_sip_alain__["p" /* SipNgInit */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FormComponent.prototype, "_init", null);
    FormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sip-form',
            template: __webpack_require__("./src/app/routes/ui-demo/ui-demo-shared/components/form/form.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], FormComponent);
    return FormComponent;
}(__WEBPACK_IMPORTED_MODULE_1_sip_alain__["k" /* SipComponent */]));



/***/ }),

/***/ "./src/app/routes/ui-demo/ui-demo-shared/ui-demo-shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiDemoSharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_form_form_component__ = __webpack_require__("./src/app/routes/ui-demo/ui-demo-shared/components/form/form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UiDemoSharedModule = /** @class */ (function () {
    function UiDemoSharedModule() {
    }
    UiDemoSharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__components_form_form_component__["a" /* FormComponent */]
            ],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__components_form_form_component__["a" /* FormComponent */]
            ],
            entryComponents: []
        })
    ], UiDemoSharedModule);
    return UiDemoSharedModule;
}());



/***/ }),

/***/ "./src/app/routes/ui-demo/ui-demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ui_demo_shared_ui_demo_shared_module__ = __webpack_require__("./src/app/routes/ui-demo/ui-demo-shared/ui-demo-shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_list_component__ = __webpack_require__("./src/app/routes/ui-demo/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list_create_list_create_component__ = __webpack_require__("./src/app/routes/ui-demo/list-create/list-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__list_detail_list_detail_component__ = __webpack_require__("./src/app/routes/ui-demo/list-detail/list-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__list_form_list_form_component__ = __webpack_require__("./src/app/routes/ui-demo/list-form/list-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__server_list_server_list_component__ = __webpack_require__("./src/app/routes/ui-demo/server-list/server-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var UiDemoModule = /** @class */ (function () {
    function UiDemoModule() {
    }
    UiDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__ui_demo_shared_ui_demo_shared_module__["a" /* UiDemoSharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_5__list_create_list_create_component__["a" /* ListCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_6__list_detail_list_detail_component__["a" /* ListDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_7__list_form_list_form_component__["a" /* ListFormComponent */],
                __WEBPACK_IMPORTED_MODULE_8__server_list_server_list_component__["a" /* ServerListComponent */]
            ],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__ui_demo_shared_ui_demo_shared_module__["a" /* UiDemoSharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_5__list_create_list_create_component__["a" /* ListCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_6__list_detail_list_detail_component__["a" /* ListDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_7__list_form_list_form_component__["a" /* ListFormComponent */],
                __WEBPACK_IMPORTED_MODULE_8__server_list_server_list_component__["a" /* ServerListComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__list_form_list_form_component__["a" /* ListFormComponent */]
            ]
        })
    ], UiDemoModule);
    return UiDemoModule;
}());



/***/ })

});
//# sourceMappingURL=ui-demo-routing.module.chunk.js.map