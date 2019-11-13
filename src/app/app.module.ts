import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NgModuleFactory, Type} from '@angular/core';

import {AppComponent} from './app.component';
import {COMMAND_BUTTONS} from './tokens';
import {SaveCommandService} from './save-command.service';
import {provideRoutes} from '@angular/router';
import {ConsumerModule} from './consumer/consumer.module';
import {commandButtons} from './commandButtons';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ConsumerModule
  ],
  providers: [provideRoutes(commandButtons)],
  bootstrap: [AppComponent]
})
export class AppModule {
}
