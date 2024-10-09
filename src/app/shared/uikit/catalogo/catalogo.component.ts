import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent{


  @Input() sectionTitle: string = '';
  @Input() sectionDescription: string = '';
  @Input() products: any[] = [];




}
