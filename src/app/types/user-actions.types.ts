import { EventEmitter } from '@angular/core';

type Icon = HTMLDivElement | Element | String;

export interface IconButton {
  icon: Icon;
  title?: string;
  data?: any;
  onClick(event: EventEmitter<any>, data?: any): void;
}

export interface ActionableText {
  label: string;
  icon?: Icon;
  title?: string;
  onClick(event: EventEmitter<any>): void;
}

export type ListItem = IconButton | ActionableText;
