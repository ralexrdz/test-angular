import { Component, OnInit } from '@angular/core';

import { Persona } from '../persona'
import { personasList } from '../mock-personas'

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  // personas: string[] = [
  //   'Hugo',
  //   'Paco',
  //   'Luis',
  //   'Donnald'
  // ]
  // persona: Persona = {
  //   name: 'Ralex',
  //   lastname: 'Rdz',
  //   age: 29
  // }
  persona: Persona
  personas = personasList
  titulo:string = '--Personas--'
  constructor() { }

  ngOnInit() {
    console.log('hola')
  }

  onSelectPerson( persona: Persona) {
    this.persona = persona
  }

  cancel() {
    this.persona = null
  }
}
