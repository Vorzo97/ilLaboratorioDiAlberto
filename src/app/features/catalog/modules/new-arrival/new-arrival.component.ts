import { Component } from '@angular/core';

@Component({
  selector: 'app-new-arrival',
  templateUrl: './new-arrival.component.html',
  styleUrls: ['./new-arrival.component.scss']
})
export class NewArrivalComponent {
  newArrivals = [
    {
      name: 'Tavolo in legno massello',
      image: 'assets/image/lampada.jpeg',
      price: 249.99,
      description: 'Tavolo elegante in legno massello, perfetto per la tua sala da pranzo.'
    },
    {
      name: 'Lampada da terra moderna',
      image: 'assets/image/lampada.jpeg',
      price: 79.99,
      description: 'Lampada da terra dal design contemporaneo, ideale per il soggiorno.'
    },
    {
      name: 'Cuscino decorativo',
      image: 'assets/image/lampada.jpeg',
      price: 29.99,
      description: 'Cuscino morbido e colorato, perfetto per aggiungere un tocco di stile.'
    }
    // Aggiungi altri prodotti come necessario
  ];
}
