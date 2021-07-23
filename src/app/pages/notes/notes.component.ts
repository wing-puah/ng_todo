import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { HelperBarComponent } from '@components/helper-bar/helper-bar.component';
import { NotesStoreService } from '@services/notes-store.service';
import { NewCard, Card } from '@app/types/common.types';


@Component({
  selector: 'app-note',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class NotesComponent implements OnInit {
  componentProps = [{ className: 'js-card', attributes: { 'class': ['m-2', 'reminder__cards'] } }];
  actions = [];

  constructor(public notesStore: NotesStoreService) { }

  ngOnInit(): void {
    this.renderActions();
  };

  onHover(): void {

  };

  renderActions() {
    // this.actions = HelperBarComponent
  }

  onAddNotes(data: NewCard) {
    console.log({ onAddNotes: data });
    this.notesStore.addNote(data);
  }

  onEditNotes(data: Card) {
    console.log({ onEditNotes: data });
    this.notesStore.editNote(data);
  }
}
