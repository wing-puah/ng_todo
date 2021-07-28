import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { CardComponent, CardActions } from './card.component';

@NgModule({
  declarations: [CardComponent, CardActions],
  exports: [CardComponent],
  imports: [CommonModule,  MatCardModule,],
})
export class CardModule {}
