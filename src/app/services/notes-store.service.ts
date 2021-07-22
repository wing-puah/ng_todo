import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Note {
  title: String;
  value: String;
  id: Number;
  label?: String;
}

type NewNote = Omit<Note, 'id'>;

@Injectable({
  providedIn: 'root'
})
export class NotesStoreService {
  private readonly _notes = new BehaviorSubject<Note[]>([]);
  readonly notes$ = this._notes.asObservable();

  get notes(): Note[] {
    return this._notes.getValue();
  }

  private set notes(val: Note[]) {
    this._notes.next(val);
  }

  addNote(newNote: NewNote) {
    this.notes = [
      ...this.notes, { id: this.notes.length + 1, ...newNote }
    ];
  }

  removeNote(id: number) {
    this.notes = this.notes.filter(note => note.id !== id);
  }

  editNote(editedNote: Note) {
    const indexToEdit = this.notes.findIndex(note => note.id === editedNote.id);
    this.notes[indexToEdit] = editedNote;
  }
}
