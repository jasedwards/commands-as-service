import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsumerComponent } from './consumer.component';
import {COMMAND_BUTTONS} from '../tokens';
import {SaveCommandService} from '../save-command.service';
import {FolderModule} from '../folder/folder.module';



@NgModule({
  declarations: [ConsumerComponent],
  providers: [{provide: COMMAND_BUTTONS, useClass: SaveCommandService, multi: true}],
  imports: [
    CommonModule,
    FolderModule
  ],
  exports: [ConsumerComponent]
})
export class ConsumerModule { }
