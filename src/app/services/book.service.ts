import { Injectable } from '@angular/core';
import { Book } from '../Models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
  private library: Book[] = [
    {
      id: 1, isbn: '978-88-297-0529-0', title: 'Blue Tango', authors: ['Paolo Roversi'],
      categories: ['Giallo'], image: 'https://books.google.it/books/publisher/content?id=PJFEDwAAQBAJ&hl=it&pg=PA1&img=1&zoom=3&bul=1&sig=ACfU3U3Mq64CwPyku4ZIkcfnFruRq_L7eQ&w=280',
      description: 'In una Milano autunnale, allagata dai temporali, il giovane cronista di nera Enrico Radeschi, freelance e hacker, si ritrova nel mezzo di una doppia inchiesta riguardante un serial killer che uccide giovani prostitute nei loro appartamenti e un misterioso suicidio-omicidio nella metropolitana, su cui incombe l\'ombra del terrorismo e di un traffico internazionale di droga. Grazie all\'amicizia che lo lega al vicequestore Loris Sebastiani, Radeschi comincerà a seguire entrambe le vicende per conto di un importante quotidiano milanese. Le sue conoscenze informatiche, insieme al fiuto giornalistico e a molta spregiudicatezza, saranno messe al servizio della polizia per arrivare alla risoluzione dei due casi.',
      stars: 3, readingState: 'Da Leggere'
    },
    {
      id: 2, isbn: '978-8830461925', title: 'Eruption', authors: ['James Patterson', 'Michael Crichton'],
      categories: ['Azione'], image: 'http://books.google.com/books/content?id=o9AKEQAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&source=gbs_api&#39;',
      description: `Hawaii, 2016. Rachel Sherrill, brillante biologa in forze ai Giardini Botanici di Hilo, sta accompagnando una scolaresca in visita, quando uno dei ragazzini le chiede di spiegargli uno strano fenomeno: alcuni alberi stanno diventando neri e trasudano una sostanza che sembra inchiostro, mentre nel cielo altrimenti sereno, contro il quale si staglia il profilo del vulcano Mauna Loa, risuonano tuoni minacciosi. Evacuato il parco, dopo un sopralluogo dell’esercito l’incidente viene derubricato a incendio, e tutto sembra continuare come se nulla fosse…
Hawaii, 2025. Nove anni dopo, mentre il mondo si prepara ad affrontare sfide ambientali sempre più pressanti, il Mauna Loa cova una furia sempre più intensa. John MacGregor, appassionato surfista nonché esperto vulcanologo e capo dell’Hawaiian Volcano Observatory, sa che un’eruzione catastrofica del Mauna Loa è inevitabile. Ma c’è di più. Nel cuore del vulcano si cela un segreto oscuro, un’eredità del passato che potrebbe essere la rovina dell’intero pianeta. Nei recessi di una caverna sulle pendici del monte sono stati nascosti anni prima alcuni contenitori di un erbicida che per errore è stato reso radioattivo. Se liberato nell’atmosfera da un’eruzione, avrebbe conseguenze catastrofiche non solo per la popolazione di Hilo, ma per l’ecosistema e gli abitanti di tutta la Terra. Mentre il tempo stringe e l’attività del Mauna Loa sfiora il punto di non ritorno, MacGregor e la sua squadra si lanciano in un’odissea disperata per fermare il disastro imminente, in lotta con il calore feroce delle colate laviche e le scosse sismiche che sembrano far crollare ogni speranza. Solo una missione suicida, o un miracolo in cui nessuno sembra più credere, possono salvare le sorti dell’umanità…z`, stars: 4, readingState: 'Da Leggere'
    }
  ];

  getAll(): Book[] {
    return this.library;
  }
  getOne(id: number | undefined): Book | undefined {
    return this.library.find(book => book.id === id);
  }
  delete(id: number) {
    this.library = this.library.filter(book => book.id !== id);
  }
  add(book: Book) {
    this.library.push(book);
  }
  getAuthors(): string[]{
    let authors: string[] = [];
    this.library.forEach(book => authors = authors.concat(book.authors));
    return authors;
  }
  filterByAuthor(author: string): Book[]{
    return this.library.filter(book => book.authors.includes(author));
  }
  getCategories(): string[]{
    let categories: string[] = [];
    this.library.forEach(book => categories = categories.concat(book.categories));
    return categories;
  }
  filterByCategory(category: string): Book[]{
    return this.library.filter(book => book.categories.includes(category));
  }
}
