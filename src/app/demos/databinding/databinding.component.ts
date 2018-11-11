import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss'],
})
export class DatabindingComponent implements OnInit {
  title: string = 'Hello';

  val: number = 1;

  enableButton1: boolean = true;

  selectedColor: string = 'blue';

  isSelected: boolean = true;

  user: any = {
    email: 'someone@someone.xyz',
  };

  constructor() {}

  ngOnInit() {}

  increment() {
    this.val++;
  }

  resetEmail() {
    this.user.email = 'someone@someone.xyz';
  }
}
