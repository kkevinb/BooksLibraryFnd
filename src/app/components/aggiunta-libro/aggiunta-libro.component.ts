import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { BookService } from "../../services/book.service";
import { FormsModule } from '@angular/forms';
import { Book } from '../../Models/Book';
import { HeaderComponent } from "../header/header.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-aggiunta-libro',
  imports: [NgFor, FormsModule, NgIf, HeaderComponent],
  templateUrl: './aggiunta-libro.component.html',
  styleUrl: './aggiunta-libro.component.css'
})
export class AggiuntaLibroComponent {
  constructor(private bookService: BookService, private router: Router) {

  }
  risultati: Book[] = [];
  ISBN = "";

  search() {
    if (!this.ISBN) return;
    this.bookService.searchOnGoogle(this.ISBN).subscribe({
      next: (books) => {
        this.risultati = books;
      },
      error: () => {
        this.risultati = [];
      }
    });
  }
  AddBook(isbn: string) {
    let book = this.risultati.find(book => book.isbn === isbn)!;
    this.bookService.add(book).subscribe(
      (response: any) => {
        console.log(response);
      }
    );
    this.router.navigate(['']);
  }
}