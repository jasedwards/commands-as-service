import {Component, Injector, OnInit} from '@angular/core';
import {LazyLoaderService} from '../lazy-loader.service';
import {CommandExecutorService} from '../command-executor.service';
import {commandButtons} from '../commandButtons';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.scss'],
  providers: [CommandExecutorService]
})
export class ConsumerComponent {

  constructor(private service: LazyLoaderService, private injector: Injector) {
  }

  Load() {
    this.service.loadModule(commandButtons.find(x => x.name === 'Lazy1').loadChildren, this.injector);
    this.service.loadModule(commandButtons.find(x => x.name === 'Lazy2').loadChildren, this.injector);
  }

}
