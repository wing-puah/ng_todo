import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconButtonModule } from '@shared/icon-button/icon-button.module';
import { HelperBarComponent } from './helper-bar.component';

@NgModule({
  declarations: [HelperBarComponent],
  imports: [CommonModule, IconButtonModule],
  exports: [HelperBarComponent],
})
export class HelperBarModule {}
