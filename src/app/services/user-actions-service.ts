import { EventEmitter } from '@angular/core';

type Icon = HTMLDivElement | Element | String;

export interface IconButton {
    icon: Icon;
    title?: String;
    onClick(event: EventEmitter<any>): void;
}

export interface ActionableText {
    label: string;
    icon?: Icon;
    title?: String;
    onClick(event: EventEmitter<any>): void;
}

export type ListItem = IconButton | ActionableText;
