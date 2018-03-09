import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SipAlainModule, SetSipAlainConfig } from 'sip-alain';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { UEditorModule } from 'ngx-ueditor';
import { NgxTinymceModule } from 'ngx-tinymce';

import { AppComponent } from './app.component';

import { LayoutModule } from './layout/layout.module';
import { RoutesRoutingModule } from '@routes/routes-routing.module';

import { SipConfigService } from '@core/sip/services/sip-config.service';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		SipAlainModule.forRoot(SipConfigService),
		CoreModule,
		SharedModule,
		LayoutModule,
		RoutesRoutingModule,
		// thirds
		UEditorModule.forRoot({
			// **注：** 建议使用本地路径；以下为了减少 ng-alain 脚手架的包体大小引用了CDN，可能会有部分功能受影响
			// 指定ueditor.js路径目录
			path: '//apps.bdimg.com/libs/ueditor/1.4.3.1/',
			// 默认全局配置项
			options: {
				themePath: '//apps.bdimg.com/libs/ueditor/1.4.3.1/themes/'
			}
		}),
		NgxTinymceModule.forRoot({
			baseURL: '//cdn.bootcss.com/tinymce/4.7.4/'
		})
	],
	providers: [
	],
	bootstrap: [AppComponent],
	exports: [
		LayoutModule
	]
})
export class AppModule { }
