import { Component, Input, OnInit } from '@angular/core';

import { IconButton } from '@services/user-actions-service';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit {
  @Input()
  icon: IconButton;

  constructor() {
  }

  ngOnInit(): void {
    console.log({ icon: this.icon });
  }

}
