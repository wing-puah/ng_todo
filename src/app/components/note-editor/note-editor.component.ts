import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ListItem } from '@services/user-actions-service';
import { NewCard, Card } from '@app/types/common.types';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.scss']
})
export class NoteEditorComponent implements OnInit {
  // "app-helper-bar": HelperBarComponent;
  @Input() data: Card;
  @Output() addEvent = new EventEmitter<NewCard>();
  @Output() editEvent = new EventEmitter<Card>();

  constructor() { }

  ngOnInit(): void {
  }

  get isExisting() {
    return !!this.data?.id;
  }

  initIcons(): ListItem[] {
    return [{
      title: 'test', icon: '<div></div>', onClick: e => console.log(e)
    }];
  }

  addData() {
    console.log('addding', this.data);
    this.addEvent.emit(this.data);
  }

  editData() {
    this.editEvent.emit(this.data);
  }
};
