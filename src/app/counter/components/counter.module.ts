import {NgModule} from '@angular/core';
import { CounterComponet } from './counter.component';
@NgModule({
  declarations:[
  CounterComponet
  ],
  exports:[
  CounterComponet
  ],
  imports:[
  ]
})
export class CounterModule{}
