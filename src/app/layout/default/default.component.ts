import { Component, ViewChild, forwardRef, ViewContainerRef } from '@angular/core';
import { Router, NavigationEnd, RouteConfigLoadStart, NavigationError } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { ScrollService, MenuService } from '@delon/theme';
import { ReuseTabComponent, ReuseTabService, ReuseTabMatchMode } from '@delon/abc';
import { SipLayout } from 'sip-alain';
import { SipConfigService } from '../../core/sip/services/sip-config.service';

@Component({
    selector: 'layout-default',
    templateUrl: './default.component.html',
    providers: [{ provide: SipLayout, useExisting: forwardRef(() => LayoutDefaultComponent) }]
})
export class LayoutDefaultComponent implements SipLayout {
    isFetching = false;

    @ViewChild('tab') tab: ReuseTabComponent;

    get useTab() { return this._config.reuseTab.use }

    constructor(
        router: Router,
        scroll: ScrollService,
        private _message: NzMessageService,
        public menuSrv: MenuService,
        private _reuseTabSrv:ReuseTabService,
        private _config: SipConfigService) {

        // scroll to top in change page
        router.events.subscribe(evt => {
            if (!this.isFetching && evt instanceof RouteConfigLoadStart) {
                this.isFetching = true;
            }
            if (evt instanceof NavigationError) {
                this.isFetching = false;
                _message.error(`无法加载${evt.url}路由`, { nzDuration: 1000 * 3 });
                return;
            }
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            setTimeout(() => {
                let e: NavigationEnd = evt;
                if (!this.useTab && !/_L\=/.test(e.url))
                    this._reuseTabSrv.clear();

                scroll.scrollToTop();
                this.isFetching = false;
            }, 100);
        });
    }
}
