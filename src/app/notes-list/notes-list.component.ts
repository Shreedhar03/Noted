import { Component } from '@angular/core';
import { NOTES, Note } from '../notes';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css'
})
export class NotesListComponent {
  notes: Note[] = NOTES
  handleClick(id:Number){
    alert(id)
  }
}
