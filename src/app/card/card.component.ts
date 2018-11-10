import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() title: string = 'Sample Title';
  @Input() footer: string = null;
  @Input() link: string = null;
  constructor() {}

  ngOnInit() {}
}
