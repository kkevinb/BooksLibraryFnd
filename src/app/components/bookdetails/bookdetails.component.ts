import { Component, NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { BookService } from "../../services/book.service"; 
import { Book } from '../../Models/Book';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bookdetails',
  imports: [HeaderComponent, NgIf, NgFor,FormsModule],
  templateUrl: './bookdetails.component.html',
  styleUrl: './bookdetails.component.css'
})
export class BookdetailsComponent {
  book!: Book;;
  statiLettura:string[]=[]

  constructor(private bookService: BookService,private route: ActivatedRoute,private router:Router) {
    bookService.getOne(Number(route.snapshot.paramMap.get('id'))).subscribe(r => this.book = r);
    this.bookService.getReadingStates().subscribe(r => this.statiLettura = r);
  }

  deleteBook() {
    this.bookService.delete(Number(this.book.id)).subscribe({
      next: r=> this.router.navigate(['']),
      error: e => alert("Errore nella cancellazione")
    });
  }
  updateBook(){
    this.bookService.update(this.book).subscribe();
  }

}
