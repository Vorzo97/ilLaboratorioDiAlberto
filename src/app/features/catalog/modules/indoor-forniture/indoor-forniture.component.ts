import { Component } from '@angular/core';

@Component({
  selector: 'app-indoor-forniture',
  templateUrl: './indoor-forniture.component.html',
  styleUrls: ['./indoor-forniture.component.scss']
})
export class IndoorFornitureComponent {

  indoorFurnishings = [
    {
      name: 'Tavolo in legno di pallet',
      image: 'assets/image/mensola.jpeg',
      oldPrice: 299.99,
      price: 249.99,
      discountPercentage: 17,
      description: 'Tavolo robusto realizzato in legno di pallet, perfetto per la sala da pranzo.'
    },
    {
      name: 'Sedia in legno di pallet',
      image: 'assets/image/mensola.jpeg',
      oldPrice: 89.99,
      price: 69.99,
      discountPercentage: 22,
      description: 'Sedia comoda realizzata in legno di pallet, ideale per abbinare al tavolo.'
    },
    {
      name: 'Libreria in pallet',
      image: 'assets/image/mensola.jpeg',
      oldPrice: 199.99,
      price: 159.99,
      discountPercentage: 20,
      description: 'Libreria versatile in legno di pallet, perfetta per riporre i tuoi libri e oggetti.'
    },
    {
      name: 'Poltrona in pallet',
      image: 'assets/image/mensola.jpeg',
      oldPrice: 179.99,
      price: 139.99,
      discountPercentage: 22,
      description: 'Poltrona accogliente in legno di pallet, per un tocco rustico al tuo soggiorno.'
    },
    {
      name: 'Panchetta in pallet',
      image: 'assets/image/mensola.jpeg',
      oldPrice: 129.99,
      price: 99.99,
      discountPercentage: 0,
      description: 'Panchetta multifunzionale realizzata in legno di pallet, perfetta per ogni ambiente.'
    },
    {
      name: 'Mobili da giardino in pallet',
      image: 'assets/image/mensola.jpeg',
      oldPrice: 499.99,
      price: 399.99,
      discountPercentage: 20,
      description: 'Set di mobili da giardino in legno di pallet, ideale per esterni e interni.'
    }
  ];


}
