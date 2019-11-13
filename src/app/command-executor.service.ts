import {Inject, Injectable, Optional} from '@angular/core';
import {COMMAND_BUTTONS} from './tokens';
import {Command} from './command';

@Injectable()
export class CommandExecutorService {
  commands: { [key: string]: Command } = {};
  id: string;
  constructor(@Inject(COMMAND_BUTTONS) @Optional() private cmds: Command[]) {
    this.commands = this.buttonArrayToObj(cmds);
    this.id = Date.now().toString();
  }

  hasCommand(id: string): boolean {
    return this.commands.hasOwnProperty(id);
  }

  addCommand(command: Command) {
    this.commands[command.id] = command;
  }

  private buttonArrayToObj(buttons: Command[]) {
    const result = {};
    for (const w of buttons) {
      result[w.id] = w;
    }
    return result;
  }

  execute(command: string, folder: any): boolean {
    if (this.hasCommand(command)) {
      this.commands[command].execute(folder);
      return true;
    }
    return false;
  }

  init() {
    console.log(this);
  }
}
