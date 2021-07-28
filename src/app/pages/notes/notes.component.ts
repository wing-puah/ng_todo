import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';

import { NotesStoreService } from '@services/notes-store.service';
import { NewCard, Card } from '@app/types/common.types';
import { DynamicChildren } from '@app/components/DynamicChildren';

@Component({
  selector: 'app-note',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NotesComponent implements OnInit, AfterViewInit {
  componentProps = [{ className: 'js-card', attributes: { class: ['m-2', 'reminder__cards'] } }];
  actions: DynamicChildren<any, any>;

  constructor(public notesStore: NotesStoreService) {}

  ngOnInit(): void {
    this.loadComponent();
  }

  ngAfterViewInit(): void {}

  loadComponent(): void {
    this.actions = this.notesStore.generateNotesHelpers();
  }

  onHover(): void {}

  onAddNotes(data: NewCard) {
    console.log({ onAddNotes: data });
    this.notesStore.addNote(data);
  }

  onEditNotes(data: Card) {
    console.log({ onEditNotes: data });
    this.notesStore.editNote(data);
  }
}
