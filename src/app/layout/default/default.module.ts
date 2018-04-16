import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { LayoutDefaultComponent } from './default.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderSearchComponent } from './header/components/search.component';
import { HeaderNotifyComponent } from './header/components/notify.component';
import { HeaderTaskComponent } from './header/components/task.component';
import { HeaderIconComponent } from './header/components/icon.component';
import { HeaderFullScreenComponent } from './header/components/fullscreen.component';
import { HeaderI18nComponent } from './header/components/i18n.component';
import { HeaderStorageComponent } from './header/components/storage.component';
import { HeaderUserComponent } from './header/components/user.component';
import { HeaderServerComponent } from './header/components/server.component';
import { HeaderCartComponent } from './header/components/cart.component';

const COMPONENTS = [
    LayoutDefaultComponent,
    HeaderComponent,
    SidebarComponent
];

const HEADERCOMPONENTS = [
    HeaderSearchComponent,
    HeaderNotifyComponent,
    HeaderTaskComponent,
    HeaderIconComponent,
    HeaderFullScreenComponent,
    HeaderI18nComponent,
    HeaderStorageComponent,
    HeaderUserComponent,
    HeaderServerComponent,
    HeaderCartComponent
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [
        ...COMPONENTS,
        ...HEADERCOMPONENTS
    ],
    providers: [],
    exports:[
        ...COMPONENTS
    ],
    entryComponents:[]
})
export class DefaultModule { }
