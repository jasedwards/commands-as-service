import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Lazy1CommandService} from './lazy1-command.service';


@NgModule({
  declarations: [],
  providers: [Lazy1CommandService],
  imports: [
    CommonModule
  ]
})
export class Lazy1Module {
  constructor(private cmd: Lazy1CommandService) {
  }
}
