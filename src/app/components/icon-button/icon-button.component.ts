import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { IconButton } from '@app/types/user-actions.types';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
})
export class IconButtonComponent implements OnInit {
  @Input() icon: IconButton;
  @Output() onClick = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
}
