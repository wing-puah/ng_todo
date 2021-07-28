import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[cardActionsDirective]',
})
export class CardActionsDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}