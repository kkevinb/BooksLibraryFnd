import { Component, Input } from '@angular/core';
import { Book } from '../../Models/Book';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-bookcard',
  imports: [NgIf, NgFor],
  templateUrl: './bookcard.component.html',
  styleUrl: './bookcard.component.css'
})
export class BookcardComponent {
  @Input() book!:Book;
  constructor(private router: Router) {}

OpenBookDetails(id: number) {
  this.router.navigate(['/libri', id]);
}
}