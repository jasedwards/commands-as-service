import {Pipe, PipeTransform} from '@angular/core';
import {CommandExecutorService} from '../command-executor.service';
import {IButton} from '../i-button';

@Pipe({
  name: 'buttonFilter',
  pure: false // If we wait until modules are loaded then we would not need this
})
export class ButtonFilterPipe implements PipeTransform {
  constructor(private ex: CommandExecutorService) {
  }

  transform(value: IButton[], whiteList: string[]): any {
    return (value || []).filter(b => this.ex.hasCommand(b.command) || whiteList.indexOf(b.command) > -1);
  }

}
