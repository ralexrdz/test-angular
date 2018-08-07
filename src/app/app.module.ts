import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- ngModel lives here 

import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonaDetalleComponent } from './persona-detalle/persona-detalle.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MapaComponent } from './mapa/mapa.component';
import { CompArgsComponent } from './comp-args/comp-args.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    PersonaDetalleComponent,
    DashboardComponent,
    CalendarComponent,
    MapaComponent,
    CompArgsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
