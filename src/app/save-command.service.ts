import { Injectable } from '@angular/core';
import {Command} from './command';

@Injectable()
export class SaveCommandService implements Command {
  id = 'Save';

  constructor() {
  }

  execute(folder: any) {
    alert('Save Clicked');
  }
}
