@playwright/test ERR_UNKNOWN_FILE_EXTENSION Repro
=================================================

To repro, run the following:

```
$ git clone git@github.com:rwoll/playwright-unknown-file-extension-repro.git
$ cd playwright-unknown-file-extension-repro

$ npm i
$ npm run test:e2e
```

That should spit out an error like:

```
$ npm run test:e2e

> playwright-unknown-file-extension-repro@1.0.0 test:e2e
> playwright test

Using config at $HOME/code/playwright-unknown-file-extension-repro/playwright.config.ts
TypeError [ERR_UNKNOWN_FILE_EXTENSION] [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".ts" for $HOME/code/playwright-unknown-file-extension-repro/e2e/example.spec.ts
    at Loader.defaultGetFormat [as _getFormat] (internal/modules/esm/get_format.js:71:15)
    at Loader.getFormat (internal/modules/esm/loader.js:105:42)
    at Loader.getModuleJob (internal/modules/esm/loader.js:243:31)
    at Loader.import (internal/modules/esm/loader.js:177:17)
    at Loader._requireOrImport ($HOME/code/playwright-unknown-file-extension-repro/node_modules/@playwright/test/lib/loader.js:217:52)
    at Loader.loadTestFile ($HOME/code/playwright-unknown-file-extension-repro/node_modules/@playwright/test/lib/loader.js:133:7)
    at Runner._run ($HOME/code/playwright-unknown-file-extension-repro/node_modules/@playwright/test/lib/runner.js:246:40) {
  code: 'ERR_UNKNOWN_FILE_EXTENSION'
}
```

However, if you remove the following (unused) import from `base.ts`, and re-run
`npm run test:e2e`, it works fine:

```js
import fetch from "node-fetch"; // this line breaks it!
```
