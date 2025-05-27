import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { BookService } from '../../services/book.service';
import { Book } from '../../Models/Book';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { BookcardComponent } from "../bookcard/bookcard.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, NgFor, BookcardComponent, NgIf],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  libreria:Book[] = [];
  cardView = true;
    constructor(private bookService:BookService) { 
        this.libreria = this.bookService.getAll();
    }
    setCardView(status:boolean) {
        this.cardView = status;
    }
}
