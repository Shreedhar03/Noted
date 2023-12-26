import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NOTES, Note } from '../notes';

@Component({
  selector: 'app-note-detail',
  standalone: true,
  imports: [],
  templateUrl: './note-detail.component.html',
  styleUrl: './note-detail.component.css'
})
export class NoteDetailComponent {
  activatRoute = inject(ActivatedRoute)
  constructor(private router: Router) { }
  noteId = Number(this.activatRoute.snapshot.paramMap.get('id'))
  note: Note | undefined = NOTES.find((n) => n.id === this.noteId);
  index: number = 0
  deleteNote() {
    this.index = NOTES.findIndex(n => n.id === this.noteId)
    NOTES.splice(this.index, 1)
    this.router.navigate(['/'])
  }
}
