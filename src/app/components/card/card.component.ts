import { Component, OnInit, Input, Output, EventEmitter, ComponentFactoryResolver, ViewChild } from '@angular/core';

import { Card, UserDefinedProps } from '@app/types/common.types';

import { CardActionsDirective } from '@components/card/card.directive';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @ViewChild(CardActionsDirective, { static: true }) cardActionsDirective!: CardActionsDirective;

  @Input() data: Card;
  @Input() actions: any;
  @Input() componentProps: UserDefinedProps;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {

  }

  get isNew() {
    return this.data?.id;
  }

  ngOnInit(): void {
    this.loadActions();
    console.log({ actions: this.actions, cardComponent: this.cardActionsDirective, aaa: this.componentFactoryResolver });
  }

  loadActions() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.actions.component);
    const viewContainerRef = this.cardActionsDirective.viewContainerRef;
    viewContainerRef.clear();
    console.log({ viewContainerRef });
    const componentRef = viewContainerRef.createComponent<any>(componentFactory);
    componentRef.instance.data = this.actions.data;
  }
  // updateActions(userActions: any) {
  //   this.actions = userActions;
  // }
  // set actions() {

  // }

  // need to find out how to conditionally add attributes
  // renderAttributes(key: ComponentPropsKey) {
  //   console.log({ cp: this.componentProps });
  //   if (!(this.componentProps && this.componentProps[key])) return;
  //   return this.componentProps[key];
  // }
}
