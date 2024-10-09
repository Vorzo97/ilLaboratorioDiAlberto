import { Component } from '@angular/core';

@Component({
  selector: 'app-outdoor-forniture',
  templateUrl: './outdoor-forniture.component.html',
  styleUrls: ['./outdoor-forniture.component.scss']
})
export class OutdoorFornitureComponent {
  outdoorFurnishings = [
    {
      name: 'Set di mobili da giardino',
      image: 'assets/image/lampada.jpeg',
      oldPrice: 499.99,
      price: 399.99,
      discountPercentage: 20,
      description: 'Set completo di mobili da giardino, ideale per rilassarsi all\'aperto.'
    },
    {
      name: 'Sedia a dondolo in legno',
      image: 'assets/image/lampada.jpeg',
      oldPrice: 149.99,
      price: 119.99,
      discountPercentage: 20,
      description: 'Sedia a dondolo classica in legno, perfetta per il tuo portico.'
    },
    {
      name: 'Ombrellone grande',
      image: 'assets/image/lampada.jpeg',
      oldPrice: 89.99,
      price: 69.99,
      discountPercentage: 0,
      description: 'Ombrellone grande per proteggerti dal sole durante l\'estate.'
    },
    {
      name: 'Ombrellone grande',
      image: 'assets/image/lampada.jpeg',
      oldPrice: 89.99,
      price: 69.99,
      discountPercentage: 22,
      description: 'Ombrellone grande per proteggerti dal sole durante l\'estate.'
    },
    {
      name: 'Sedia a dondolo in legno',
      image: 'assets/image/lampada.jpeg',
      oldPrice: 149.99,
      price: 119.99,
      discountPercentage: 20,
      description: 'Sedia a dondolo classica in legno, perfetta per il tuo portico.'
    },
    {
      name: 'Ombrellone grande',
      image: 'assets/image/lampada.jpeg',
      oldPrice: 89.99,
      price: 69.99,
      discountPercentage: 0,
      description: 'Ombrellone grande per proteggerti dal sole durante l\'estate.'
    },
    {
      name: 'Ombrellone grande',
      image: 'assets/image/lampada.jpeg',
      oldPrice: 89.99,
      price: 69.99,
      discountPercentage: 22,
      description: 'Ombrellone grande per proteggerti dal sole durante l\'estate.'
    },
    {
      name: 'Sedia a dondolo in legno',
      image: 'assets/image/lampada.jpeg',
      oldPrice: 149.99,
      price: 119.99,
      discountPercentage: 20,
      description: 'Sedia a dondolo classica in legno, perfetta per il tuo portico.'
    },
    {
      name: 'Ombrellone grande',
      image: 'assets/image/lampada.jpeg',
      oldPrice: 89.99,
      price: 69.99,
      discountPercentage: 0,
      description: 'Ombrellone grande per proteggerti dal sole durante l\'estate.'
    },
    {
      name: 'Ombrellone grande',
      image: 'assets/image/lampada.jpeg',
      oldPrice: 89.99,
      price: 69.99,
      discountPercentage: 22,
      description: 'Ombrellone grande per proteggerti dal sole durante l\'estate.'
    }

  ];
}
