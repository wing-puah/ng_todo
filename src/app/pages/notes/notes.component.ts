import { Component, OnInit } from '@angular/core';

import { NotesStoreService } from '@services/notes-store.service';
import { NewCard, Card } from '@app/types/common.types';


@Component({
  selector: 'app-note',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor(public notesStore: NotesStoreService) { }

  ngOnInit(): void {
  }

  onHover(): void {

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
