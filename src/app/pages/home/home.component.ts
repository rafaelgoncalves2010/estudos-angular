import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  id: number;
  saldo: number;
  local: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen', saldo: 1.0079, local: 'H'},
  {id: 2, name: 'Helium', saldo: 4.0026, local: 'He'},
  {id: 3, name: 'Lithium', saldo: 6.941, local: 'Li'},
  {id: 4, name: 'Beryllium', saldo: 9.0122, local: 'Be'},
  {id: 5, name: 'Boron', saldo: 10.811, local: 'B'},
  {id: 6, name: 'Carbon', saldo: 12.0107, local: 'C'},
  {id: 7, name: 'Nitrogen', saldo: 14.0067, local: 'N'},
  {id: 8, name: 'Oxygen', saldo: 15.9994, local: 'O'},
  {id: 9, name: 'Fluorine', saldo: 18.9984, local: 'F'},
  {id: 10, name: 'Neon', saldo: 20.1797, local: 'Ne'},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'saldo', 'local'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
