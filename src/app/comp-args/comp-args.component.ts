import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comp-args',
  templateUrl: './comp-args.component.html',
  styleUrls: ['./comp-args.component.css']
})
export class CompArgsComponent implements OnInit {
  @Input() hola: string;
  @Input() imgRoute: string;
  constructor() { }

  ngOnInit() {
  }

}
