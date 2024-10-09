import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  productsExample = [
    { id: 1, name: 'Mensola EPAL', description: 'Realizzata a mano, perfetta per il tuo giardino o terrazzo.', image: 'assets/image/mensola.jpeg', price: 150 },
    { id: 2, name: 'Mobile EPAL', description: 'Design rustico e robusto per interni o esterni.', image: 'assets/image/mobiliVintage.jpeg', price: 80 },
    { id: 3, name: 'Lampadario EPAL', description: 'Un pezzo unico che combina legno riciclato con illuminazione moderna.', image: 'assets/image/lampada.jpeg', price: 200 },
  ]
}
