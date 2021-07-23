import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { IconButton } from '@app/types/user-actions.types';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
})
export class IconButtonComponent implements OnInit {
  @Input() icon: IconButton;
  @Input() onClick: EventEmitter<any>;
  // @Output() handleClick = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    console.log({ icon: this.icon });
  }

}
