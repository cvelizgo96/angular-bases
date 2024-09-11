import { NgModule } from '@angular/core';
import { CounterModule } from './counter/components/counter.module';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeroesModule } from './heroes/heroes.module';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
