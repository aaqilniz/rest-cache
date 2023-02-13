# first-extension

[![LoopBack](https://github.com/loopbackio/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)

## Installation

Install FirstExtensionComponent using `npm`;

```sh
$ [npm install | yarn add] first-extension
```

## Basic Use

Configure and load FirstExtensionComponent in the application constructor
as shown below.

```ts
import {FirstExtensionComponent, FirstExtensionComponentOptions, DEFAULT_FIRST_EXTENSION_OPTIONS} from 'first-extension';
// ...
export class MyApplication extends BootMixin(ServiceMixin(RepositoryMixin(RestApplication))) {
  constructor(options: ApplicationConfig = {}) {
    const opts: FirstExtensionComponentOptions = DEFAULT_FIRST_EXTENSION_OPTIONS;
    this.configure(FirstExtensionComponentBindings.COMPONENT).to(opts);
      // Put the configuration options here
    });
    this.component(FirstExtensionComponent);
    // ...
  }
  // ...
}
```
