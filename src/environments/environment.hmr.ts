
// mock
import { DelonMockModule } from '@delon/mock';
import * as MOCKDATA from '../../_mock';
const MOCKMODULE = [DelonMockModule.forRoot({ data: MOCKDATA, force:false })];

export const environment = {
    chore: false,
    SERVER_URL: `./`,
    production: false,
    hmr: true,
    useHash: true,
    MOCKMODULE: MOCKMODULE
};
