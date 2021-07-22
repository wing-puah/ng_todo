import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { NewCard, Card } from '@app/types/common.types';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';


@Injectable({
  providedIn: 'root'
})
export class NotesStoreService {
  private readonly _notes = new BehaviorSubject<Card[]>([]);
  readonly notes$ = this._notes.asObservable();

  get notes(): Card[] {
    return this._notes.getValue();
  }

  private set notes(val: Card[]) {
    this._notes.next(val);
  }

  addNote(newNote: NewCard) {
    console.log({ newNote });
    this.notes = [
      ...this.notes, { id: this.notes.length + 1, ...newNote }
    ];
  }

  removeNote(id: number) {
    this.notes = this.notes.filter(note => note.id !== id);
  }

  editNote(editedNote: Card) {
    console.log({ editedNote });
    const indexToEdit = this.notes.findIndex(note => note.id === editedNote.id);
    this.notes[indexToEdit] = editedNote;
  }
}
