import {Injectable} from '@angular/core';
import {Command} from '../command';
import {CommandExecutorService} from '../command-executor.service';

@Injectable()
export class Lazy1CommandService implements Command {
  id = 'Lazy1';

  constructor(private ex: CommandExecutorService) {
    ex.addCommand(this);
  }

  execute(folder: any) {
    alert('Lazy 1 clicked');
  }
}
