import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { NewCard, Card } from '@app/types/common.types';
import { IconButton } from '@app/types/user-actions.types';

// import { DynamicChildren } from '@shared/DynamicChildren';
// import { HelperBarComponent } from '@shared/helper-bar/helper-bar.component';

@Injectable({
  providedIn: 'root',
})
export class NotesStoreService {
  private readonly _notes = new BehaviorSubject<Card[]>([
    {
      id: 1,
      title: 'eee',
      value: '11',
    },
  ]);
  readonly notes$ = this._notes.asObservable();

  get notes(): Card[] {
    return this._notes.getValue();
  }

  private set notes(val: Card[]) {
    this._notes.next(val);
  }

  addNote(newNote: NewCard) {
    this.notes = [...this.notes, { id: this.notes.length + 1, ...newNote }];
  }

  removeNote(id: number) {
    this.notes = this.notes.filter((note) => note.id !== id);
  }

  editNote(editedNote: Card) {
    console.log({ editedNote });
    const indexToEdit = this.notes.findIndex((note) => note.id === editedNote.id);
    this.notes[indexToEdit] = editedNote;
  }

  generateNotesHelpers() {
    return null;
    // return new DynamicChildren<any, { icons: IconButton[] }>(HelperBarComponent, {
    //   icons: [
    //     {
    //       icon: 'test',
    //       title: 'add',
    //       onClick: (event: any, data: NewCard) => {
    //         console.log('getting clicked', data, event);
    //         // this.addNote(data);
    //       },
    //     },
    //   ],
    // });
  }
}
