import { Type } from '@angular/core';

export class DynamicChildren<T, D>{
    constructor(public component: T | Type<any>, public data: D | any) { }
}
