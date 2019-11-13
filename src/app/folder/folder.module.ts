import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FolderComponent} from './folder.component';
import {ToolbarModule} from '../toolbar/toolbar.module';
import {CommandExecutorService} from '../command-executor.service';
import { ButtonFilterPipe } from './button-filter.pipe';


@NgModule({
  declarations: [FolderComponent, ButtonFilterPipe],
  exports: [FolderComponent],
  providers: [CommandExecutorService],
  imports: [
    CommonModule,
    ToolbarModule
  ]
})
export class FolderModule {
  constructor(private ex: CommandExecutorService) {
    ex.init();
  }
}
