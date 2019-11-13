import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Lazy2CommandService} from './lazy2-command.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [Lazy2CommandService]
})
export class Lazy2Module {
  constructor(private cmd: Lazy2CommandService) {
  }
}
