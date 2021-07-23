import { Directive, TemplateRef, ViewContainerRef, Input, ElementRef, } from '@angular/core';

import { UserDefinedProps, } from '@app/types/common.types';

@Directive({
  selector: '[appRenderProps]',
})
export class RenderPropsDirective {
  public renderProps: UserDefinedProps[];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private elementRef: ElementRef
  ) { }

  @Input() set appRenderProps(props: UserDefinedProps[]) {
    this.viewContainer.createEmbeddedView(this.templateRef);
    this.renderProps = props;

    if (this.renderProps && this.renderProps.length > 0) {
      // dirty solution 
      const element = (this.viewContainer as any)._hostLView[0];

      this.renderProps.forEach(singleProp => {
        const { className, attributes } = singleProp;
        const elsToChange = element.getElementsByClassName(className);
        updateAttributes(elsToChange, attributes);
      });

      // check to see if build file also refelct a wierd attribute
      // element.removeAttribute('ng-reflect-component-props');
    }
  }

}

function updateAttributes(el: HTMLElement[], attributes: UserDefinedProps['attributes']): void {
  // need to figure out to add styles
  Array.from(el).forEach(singleEl => {
    Object.entries(attributes).forEach(([k, v]) => {
      switch (k) {
        case 'class':
          singleEl.classList.add(...v);
          break;

        default:
          break;
      }
      // this will throw a typescript error
      //   case 'style':
      //     Object.entries(v).forEach(([styleKey, styleValue]) => {
      //       singleEl.style[styleKey] = styleValue;
      //     });
      //     break;
    });
  });
};