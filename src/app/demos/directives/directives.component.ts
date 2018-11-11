import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent implements OnInit {
  isUserActive: boolean = true;

  viewMode = 'map';
  

  constructor() {}

  ngOnInit() {}

  toggleUserActive() {
    this.isUserActive = !this.isUserActive;
  }
}
