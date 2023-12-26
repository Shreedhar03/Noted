import { Routes } from '@angular/router';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';

export const routes: Routes = [
    {path:'',title:'Notes',component:NotesListComponent},
    {path:'note-detail/:id',title:'Detail',component:NoteDetailComponent}
];
