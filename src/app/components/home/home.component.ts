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
    this.getAuthors();
    this.getCategories();
     this.loadData();
  }
  setCardView(status: boolean) {
    this.cardView = status;
  }

  loadData() {
    this.bookService.getAll(this.filtroAutore, this.filtroCategoria).subscribe(r => { this.libreria = r; }); 
  }
  getAuthors(){
    this.bookService.getAuthors().subscribe(r => { this.authors = r; });
  }
  getCategories(){
    this.bookService.getCategories().subscribe(r => { this.categories = r; });
  }
}
