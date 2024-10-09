import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products = [
    { id: 1, name: 'Panchina EPAL', description: 'Perfetta per il giardino, realizzata con legno riciclato.', image: 'assets/image/lampada.jpeg', price: 150 },
    { id: 2, name: 'Sedia EPAL', description: 'Comoda e robusta, ideale per ogni ambiente.', image: 'assets/image/lampada.jpeg', price: 80 },
    { id: 3, name: 'Lampadario EPAL', description: 'Un tocco di eleganza per il tuo spazio, realizzato a mano.', image: 'assets/image/lampada.jpeg', price: 200 },
    { id: 4, name: 'Tavolo EPAL', description: 'Spazioso e resistente, per pranzi e cene all\'aperto.', image: 'assets/image/mensola.jpeg', price: 300 },
    { id: 5, name: 'Mensola EPAL', description: 'Pratica e bella, perfetta per esporre i tuoi oggetti.', image: 'assets/image/mensola.jpeg', price: 50 },
    { id: 6, name: 'Sgabello EPAL', description: 'Versatile e facile da spostare, adatto a ogni ambiente.', image: 'assets/image/mensola.jpeg', price: 60 },
    { id: 7, name: 'Portafiori EPAL', description: 'Un\'aggiunta rustica per il tuo giardino o balcone.', image: 'assets/image/mensola.jpeg', price: 40 },
    { id: 8, name: 'Scaffale EPAL', description: 'Pratico e robusto, per organizzare i tuoi spazi.', image: 'assets/image/mensola.jpeg', price: 120 },
    { id: 9, name: 'Letto EPAL', description: 'Un design unico per il tuo riposo, fatto a mano.', image: 'assets/image/mensola.jpeg', price: 500 },
    { id: 10, name: 'Cassettiera EPAL', description: 'Funzionale e di stile, perfetta per ogni camera.', image: 'assets/image/mensola.jpeg', price: 220 },
    { id: 11, name: 'Tavolino EPAL', description: 'Ideale per il soggiorno, un tocco rustico e chic.', image: 'assets/image/mensola.jpeg', price: 130 }
  ];

  constructor(private router: Router) {}

  goToSelectProduct(product: any) {
    console.log('Prodotto selezionato:', product);
    const navigationExtras: NavigationExtras = {
      state: {
        prodotto: product,
      }
    };
    const url = `catalog/detail/${product.id}`;

    this.router.navigateByUrl(url,{state: {navigationExtras }});
  }



}
