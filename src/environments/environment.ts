// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// mock
import { DelonMockModule } from '@delon/mock';
import * as MOCKDATA from '../../_mock';
const MOCKMODULE = [DelonMockModule.forRoot({ data: MOCKDATA, force:false })];

export const environment = {
    SERVER_URL: `./`,
    production: false,
    hmr: false,
    useHash: true,
    MOCKMODULE: [DelonMockModule.forRoot({ data: MOCKDATA })]
};
