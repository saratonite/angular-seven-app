import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss'],
})
export class InterpolationComponent implements OnInit {
  title: string = 'Interpolation Example';
  bitWiseOr = 5 | 10;

  gender: string = 'm';

  person: Object = {
    firstName: 'Sarath',
    lastName: 'TK',
  };

  constructor() {}

  ngOnInit() {}

  sayHello(name) {
    console.log('Called sayHello function ');
    return 'Hello ' + name;
  }
}
