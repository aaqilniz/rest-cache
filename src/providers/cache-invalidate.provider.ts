import {Getter, Provider, inject} from '@loopback/core';
import {CacheBindings} from '../keys';
import {CacheInvalidateFn, CacheStrategy} from '../types';

export class CacheInvalidateProvider implements Provider<CacheInvalidateFn> {
  constructor(
    @inject.getter(CacheBindings.CACHE_STRATEGY)
    readonly getCacheStrategy: Getter<CacheStrategy>
  ) { }

  value(): CacheInvalidateFn {
    return (key) => this.action(key);
  }

  async action(key: string): Promise<void> {
    const cacheStrategy = await this.getCacheStrategy();

    if (!cacheStrategy) {
      return;
    }

    await cacheStrategy.invalidate(key);
  }
}
