import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { UiDemoModule } from './ui-demo.module';
import { ListComponent } from './list/list.component';
import { ListCreateComponent } from './list-create/list-create.component';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { ServerListComponent } from './server-list/server-list.component';

const routes: Routes = [
    {
        path: 'list',
        component: ListComponent
    },
    {
        path: 'list-create',
        component: ListCreateComponent
    },
    {
        path: 'list-detail',
        component: ListDetailComponent
    },
    {
        path: 'server-list',
        component: ServerListComponent
    }
];

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		RouterModule.forChild(routes),
        UiDemoModule
    ]
})
export class UiDemoRoutingModule { }
