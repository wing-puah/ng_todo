import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild,   Directive, } from '@angular/core';

import { Card, UserDefinedProps } from '@app/types/common.types';

import { CardActionsDirective } from './card.directive';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @ViewChild(CardActionsDirective, { static: true }) cardActionsDirective!: CardActionsDirective;

  @Input() data: Card;
  @Input() actions: any;
  @Input() componentProps: UserDefinedProps;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  get isNew() {
    return this.data?.id;
  }

  ngOnInit(): void {
    this.loadActions();
  }

  loadActions() {
    // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.actions.component);
    // const viewContainerRef = this.cardActionsDirective.viewContainerRef;
    // viewContainerRef.clear();
    // const componentRef = viewContainerRef.createComponent<any>(componentFactory);
    // console.log({ card: this.actions, componentRef });
    // if (this.actions.data) {
    //   Object.entries(this.actions.data).forEach(([key, value]) => {
    //     // if (key === 'onClick') {
    //     //   componentRef.instance.onClick = (e:any) => value(e, this.data);
    //     // } else {
    //     componentRef.instance[key] = value;
    //     // }
    //   });
    // }
  }
}

@Directive({ selector: 'app-card-actions, [app-card-actions], [appCardActions]'})
export class CardActions {}