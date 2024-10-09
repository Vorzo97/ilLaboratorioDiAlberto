import { Component } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent {

  salesProducts = [
    {
      name: 'Sedia in legno riciclato',
      image: 'assets/image/lampada.jpeg',
      oldPrice: 0,
      price: 49.99,
      discountPercentage: 0,
      description: 'Sedia comoda e sostenibile realizzata con legno riciclato.'
    },
    {
      name: 'Tavolo da giardino',
      image: 'assets/image/lampada.jpeg',
      oldPrice: 159.99,
      price: 129.99,
      discountPercentage: 19,
      description: 'Tavolo spazioso per esterni, ideale per pranzi all’aperto.'
    },
    {
      name: 'Libreria in pallet',
      image: 'assets/image/lampada.jpeg',
      oldPrice: 99.99,
      price: 79.99,
      discountPercentage: 20,
      description: 'Libreria elegante e funzionale, realizzata in pallet.'
    }
  ];

}
