import { Component, OnInit, Input } from '@angular/core';

import { Card } from '@app/types/common.types';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  data: Card;

  constructor() { }

  ngOnInit(): void {
  }

}
