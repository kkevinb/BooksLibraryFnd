import { Injectable } from '@angular/core';
import { Book } from '../Models/Book';
import { HttpClient } from '@angular/common/http';
import { map,Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
    

  }
  library: Book[] = [];
  islogged : boolean = false
  getAll(filtroAutore: string, filtroCategoria: string): Observable<Book[]> {
    var url= environment.apiUrl+"/libri";
    let filtri=""

    if(filtroAutore!="-" && filtroAutore!="") filtri += `author=${filtroAutore}`;
    if(filtroCategoria!="-" && filtroCategoria!=""){
      if(filtri!="") filtri += "&";
      filtri += `category=${filtroCategoria}`
    }
    if(filtri!="") url += `?${filtri}`

    return this.http.get<Book[]>(url);
  }
  getOne(id: number):Observable<Book> {
    return this.http.get<Book>(environment.apiUrl+"/libri/"+id);
  }
  delete(id: number) {
    return this.http.delete(environment.apiUrl+"/libri/"+id);
  }
  update(book: Book) {
    return this.http.put(environment.apiUrl+"/libri/"+book.id, book);
  }
  add(book: Book) {
    return this.http.post(environment.apiUrl+"/libri", book);
  }
  getAuthors(){
    return this.http.get<string[]>(environment.apiUrl+"/autori");
  }
  getCategories(){
    return this.http.get<string[]>(environment.apiUrl+"/generi");
  }
  getReadingStates(){
    return this.http.get<string[]>(environment.apiUrl+"/statilettura");
  }

  webLibrary: Book[] = [];
   searchOnGoogle(isbn:string)
  {
    /*return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=+isbn:${isbn}`)*/

    return this.http.get<Book[]>(`https://www.googleapis.com/books/v1/volumes?q=+isbn:${isbn}`)
    .pipe(
      map( (r:any) => r.items.map( (item:any) => {
        return {
          id:0,
          isbn:isbn,
          title:item.volumeInfo.title,
          authors:item.volumeInfo.authors,
          description:item.volumeInfo.description,
          categories:item.volumeInfo.categories,
          image:item.volumeInfo.imageLinks.thumbnail,
          stars:0,
          readingState:'Da Leggere'
        }
      })
    ))
  }
}
