# rest-cache

[![LoopBack](https://github.com/loopbackio/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)

## Installation

Install RestCacheComponent using `npm`;

```sh
$ [npm install | yarn add] @aaqilniz/rest-cache
```

## Basic Use

Configure and load RestCacheComponent in the application constructor
as shown below.

```ts
import {RestCacheComponent, RestCacheComponentOptions, DEFAULT_REST_CACHE_OPTIONS} from 'rest-cache';
// ...
export class MyApplication extends BootMixin(ServiceMixin(RepositoryMixin(RestApplication))) {
  constructor(options: ApplicationConfig = {}) {
    const opts: RestCacheComponentOptions = DEFAULT_REST_CACHE_OPTIONS;
    this.configure(RestCacheComponentBindings.COMPONENT).to(opts);
      // Put the configuration options here
    });
    this.component(RestCacheComponent);
    // ...
  }
  // ...
}
```
