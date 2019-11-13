import {NgModuleFactory, Type} from '@angular/core';

export const commandButtons: { name: string, loadChildren: () => Promise<NgModuleFactory<any> | Type<any>> }[] = [
  {
    name: 'Lazy1',
    loadChildren: () => import('./lazy1/lazy1.module').then(m => m.Lazy1Module)
  },
  {
    name: 'Lazy2',
    loadChildren: () => import('./lazy2/lazy2.module').then(m => m.Lazy2Module)
  }
];
