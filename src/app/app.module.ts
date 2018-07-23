import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
// import { MyCompComponent } from './my-comp/my-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    // MyCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
