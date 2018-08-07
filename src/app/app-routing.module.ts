import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasComponent } from './personas/personas.component'
import { DashboardComponent }   from './dashboard/dashboard.component'
import { PersonaDetalleComponent }   from './persona-detalle/persona-detalle.component'
import { CalendarComponent }   from './calendar/calendar.component'
import { MapaComponent }   from './mapa/mapa.component'

const routes: Routes = [
  {
    path: 'personas',
    component: PersonasComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'mapa',
    component: MapaComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detalle/:id',
    component: PersonaDetalleComponent
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
