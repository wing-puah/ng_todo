import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[editorActionsDirective]',
})
export class EditorActionsDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
