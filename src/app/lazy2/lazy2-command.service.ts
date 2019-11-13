import { Injectable } from '@angular/core';
import {Command} from '../command';
import {CommandExecutorService} from '../command-executor.service';

@Injectable()
export class Lazy2CommandService implements Command {
  id = 'Lazy2';

  constructor(private ex: CommandExecutorService) {
    ex.addCommand(this);
  }

  execute(folder: any) {
    alert('Lazy 2 clicked');
  }
}
