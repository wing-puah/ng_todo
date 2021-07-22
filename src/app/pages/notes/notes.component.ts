import { Component, OnInit } from '@angular/core';

import { NotesStoreService } from '@services/notes-store.service';

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
}
