import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//DECORATORE
@Component({
  selector: 'app-root', // Selettore per il componente, utilizzato nel template HTML
  imports: [RouterOutlet], // Importa RouterOutlet per la navigazione tra le pagine
  templateUrl: './app.component.html', //Collega il template HTML
  styleUrls: ['./app.component.css'] //Collega il file CSS
})


export class AppComponent {
  title = 'BooksLibrary';
}
