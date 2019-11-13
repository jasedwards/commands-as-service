import {Compiler, Injectable, Injector, NgModuleFactory, Type} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LazyLoaderService {
  constructor(
    private injector: Injector,
    private compiler: Compiler,
  ) {
  }

  async loadModule(mod: () => Promise<NgModuleFactory<any> | Type<any>>, inj?: Injector) {
    const ngModuleOrNgModuleFactory = await mod();

    let moduleFactory;

    if (ngModuleOrNgModuleFactory instanceof NgModuleFactory) {
      moduleFactory = ngModuleOrNgModuleFactory;
    } else {
      moduleFactory = await this.compiler.compileModuleAsync(
        ngModuleOrNgModuleFactory
      );
    }

    moduleFactory.create(inj || this.injector);
  }
}
