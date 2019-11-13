import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IButton} from '../i-button';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() Buttons: IButton[];
  @Output() buttonClicked = new EventEmitter<IButton>();

  constructor() {
  }

  click(button: IButton) {
    this.buttonClicked.emit(button);
  }

  ngOnInit() {
  }

}
