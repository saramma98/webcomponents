import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import {createCustomElement} from '@angular/elements';



import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
  
    CardComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  entryComponents :[CardComponent],
  providers: [],
  
})
export class AppModule {
  constructor(injector: Injector){
    const custom = createCustomElement(CardComponent,{injector});

    customElements.define('card-maker',custom);
  }
  ngDoBootstrap(){}
 }
