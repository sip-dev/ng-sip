import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { LayoutFullScreenComponent } from './fullscreen/fullscreen.component';

const COMPONENTS = [
    LayoutFullScreenComponent
];

// passport
import { LayoutPassportComponent } from './passport/passport.component';
import { DefaultModule } from './default/default.module';


const PASSPORT = [
    LayoutPassportComponent
];

@NgModule({
    imports: [
        SharedModule,
        DefaultModule
    ],
    providers: [],
    declarations: [
        LayoutFullScreenComponent,
        ...PASSPORT,
    ],
    exports: [
        ...PASSPORT,
        DefaultModule
    ]
})
export class LayoutModule { }
