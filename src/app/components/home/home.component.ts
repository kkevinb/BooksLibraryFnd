import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { BookService } from '../../services/book.service';
import { Book } from '../../Models/Book';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { BookcardComponent } from "../bookcard/bookcard.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, NgFor, BookcardComponent, NgIf, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  libreria: Book[] = [];
  cardView = true;
  authors: string[] = [];
  categories: string[] = [];

  filtroAutore: string = "-";
  filtroCategoria: string = "-";

  constructor(private bookService: BookService) {
    this.loadData();
    this.authors = this.bookService.getAuthors();
    this.categories = this.bookService.getCategories();
  }
  setCardView(status: boolean) {
    this.cardView = status;
  }

  loadData() {
    if(this.filtroAutore !== "-"){
      this.libreria = this.bookService.filterByAuthor(this.filtroAutore);
      if(this.filtroCategoria !== "-"){
        this.libreria = this.libreria.filter(book => book.categories.includes(this.filtroCategoria));
      }
    }else if(this.filtroCategoria !== "-"){
      this.libreria = this.bookService.filterByCategory(this.filtroCategoria);
    }
    else{
      this.libreria = this.bookService.getAll();
    }
  }
}
