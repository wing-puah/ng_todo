import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { NewCard, Card } from '@app/types/common.types';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data: Card;

  constructor() { }

  get isNew() {
    return this.data?.id;
  }

  ngOnInit(): void {
  }
}
