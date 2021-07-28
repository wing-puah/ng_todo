import { Component, OnInit, Input, Output, EventEmitter, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { ListItem } from '@app/types/user-actions.types';
import { NewCard, Card } from '@app/types/common.types';

import { EditorActionsDirective } from './note-editor.directive';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
})
export class NoteEditorComponent implements OnInit {
  @ViewChild(EditorActionsDirective, { static: true }) editorDirective!: EditorActionsDirective;

  @Input() data: Card;
  @Input() actions: any;
  @Output() addEvent = new EventEmitter<NewCard>();
  @Output() editEvent = new EventEmitter<Card>();

  noteEditorForm = this.fb.group({
    id: [''],
    title: [''],
    value: [''],
  });

  constructor(private fb: FormBuilder, private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.loadActions();
  }

  loadActions() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.actions.component);
    const viewContainerRef = this.editorDirective.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<any>(componentFactory);

    if (this.actions.data) {
      Object.entries(this.actions.data).forEach(([key, value]) => {
        componentRef.instance[key] = value;
      });
    }
  }

  get isExisting() {
    return !!this.data?.id;
  }

  get id() {
    return this.noteEditorForm.get('id');
  }
  get title() {
    return this.noteEditorForm.get('title');
  }
  get value() {
    return this.noteEditorForm.get('value');
  }

  getFormValue(): Card | NewCard {
    return this.noteEditorForm.value;
  }

  renderSubmissionMsg() {
    return this.isExisting ? 'Update' : 'Add';
  }

  onSubmit() {
    if (this.isExisting) {
      this.editData();
    } else {
      this.addData();
    }
  }

  addData() {
    this.addEvent.emit(this.getFormValue());
  }

  editData() {
    this.editEvent.emit();
  }
}
