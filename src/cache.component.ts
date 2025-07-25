import { CacheBindings } from './keys';
import {Component, ProviderMap} from '@loopback/core';
import { CacheMetadataProvider, CacheCheckProvider, CacheSetProvider, CacheInvalidateProvider } from './providers';

export class CacheComponent implements Component {
  providers?: ProviderMap;

  // TODO(bajtos) inject configuration
  constructor() {
    this.providers = {
      [CacheBindings.CACHE_CHECK_ACTION.key]: CacheCheckProvider,
      [CacheBindings.CACHE_SET_ACTION.key]: CacheSetProvider,
      [CacheBindings.CACHE_INVALIDATE_ACTION.key]: CacheInvalidateProvider,
      [CacheBindings.METADATA.key]: CacheMetadataProvider,
    };
  }
}
