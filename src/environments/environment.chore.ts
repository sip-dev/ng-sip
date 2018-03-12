// mock
import { DelonMockModule } from '@delon/mock';
import * as MOCKDATA from '../../_mock';
const MOCKMODULE = [DelonMockModule.forRoot({ data: MOCKDATA })];

export const environment = {
    chore: true,
    SERVER_URL: `./`,
    production: true,
    hmr: false,
    useHash: false,
    MOCKMODULE: MOCKMODULE
};
