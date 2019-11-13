import {Component, OnInit} from '@angular/core';
import {CommandExecutorService} from '../command-executor.service';
import {IButton} from '../i-button';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {
  buttons: IButton[] = [
    {
      text: 'Save',
      description: 'this saves the record',
      command: 'Save'
    },
    {
      text: 'Lazy 1',
      description: 'this button is injected from some add on',
      command: 'Lazy1'
    },
    {
      text: 'Lazy 2',
      description: 'this button is injected from some add on',
      command: 'Lazy2'
    }
  ];

  whiteList = ['Lazy1'];

  constructor(public commandExecutor: CommandExecutorService) {
  }

  click(button: IButton) {
    const done = this.commandExecutor.execute(button.command, this);
    if (!done) {
      switch (button.command) {
        case 'Lazy1':
          this.Lazy1();
          break;

        default:
          console.log('Unable to find command ' + button.command);
      }
    }
  }

  Save() {
    console.log('Save called from inside folder');
  }

  Lazy1() {
    console.log('Lazy 1 executed from inside folder');
  }

  ngOnInit() {
  }

}
