import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { IconButtonComponent } from './icon-button.component';

@NgModule({
  declarations: [IconButtonComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [IconButtonComponent],
})
export class IconButtonModule {}
