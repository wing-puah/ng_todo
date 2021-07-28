import { Component, Input, OnInit } from '@angular/core';

import { IconButton } from '@app/types/user-actions.types';

@Component({
  selector: 'app-helper-bar',
  templateUrl: './helper-bar.component.html',
})
export class HelperBarComponent implements OnInit {
  @Input()
  icons: IconButton[];

  constructor() {}

  ngOnInit(): void {}
}
