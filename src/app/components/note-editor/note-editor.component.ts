import { Component, OnInit } from '@angular/core';

import { ListItem } from '@services/user-actions-service';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.scss']
})
export class NoteEditorComponent implements OnInit {
  // "app-helper-bar": HelperBarComponent;

  constructor() { }

  ngOnInit(): void {
  }

  initIcons(): ListItem[] {
    return [{
      title: 'test', icon: '<div></div>', onClick: e => console.log(e)
    }];

  }
};
