import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppLayoutComponent } from './components/app-layout/app-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'notes', pathMatch: 'full' },
  {
    path: 'notes',
    component: AppLayoutComponent,
    loadChildren: () => import('./pages/notes/notes.module').then((m) => m.NotesModule),
  },
  {
    path: 'reminders',
    component: AppLayoutComponent,
    loadChildren: () => import('./pages/reminders/reminders.module').then((m) => m.RemindersModule),
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
