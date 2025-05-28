import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { BookService } from "../../services/book.service"; 
import { Book } from '../../Models/Book';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-bookdetails',
  imports: [HeaderComponent, NgIf, NgFor],
  templateUrl: './bookdetails.component.html',
  styleUrl: './bookdetails.component.css'
})
export class BookdetailsComponent {
  book!: Book;

  constructor(private bookService: BookService,private route: ActivatedRoute,private router:Router) {
    bookService.getOne(Number(route.snapshot.paramMap.get('id'))).subscribe(r => this.book = r);
  }

  deleteBook() {
    this.bookService.delete(Number(this.book.id)).subscribe({
      next: r=> this.router.navigate(['']),
      error: e => alert("Errore nella cancellazione")
    });
  }

}
