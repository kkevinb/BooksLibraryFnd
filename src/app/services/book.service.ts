import { Injectable } from '@angular/core';
import { Book } from '../Models/Book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
    

  }
  library: Book[] = [];
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
  add(book: Book) {
  }
  getAuthors(){
    return this.http.get<string[]>(environment.apiUrl+"/autori");
  }
  getCategories(){
    return this.http.get<string[]>(environment.apiUrl+"/generi");
  }
}
