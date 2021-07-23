import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Card, UserDefinedProps } from '@app/types/common.types';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data: Card;
  @Input() actions: any;
  @Input() componentProps: UserDefinedProps;

  constructor() {

  }

  get isNew() {
    return this.data?.id;
  }

  ngOnInit(): void {

  }

  // need to find out how to conditionally add attributes
  // renderAttributes(key: ComponentPropsKey) {
  //   console.log({ cp: this.componentProps });
  //   if (!(this.componentProps && this.componentProps[key])) return;
  //   return this.componentProps[key];
  // }
}
