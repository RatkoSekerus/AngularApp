import { Component, OnInit, Input } from '@angular/core';
import { Informacija } from 'src/app/model/informacija';

@Component({
  selector: 'app-informacije-item',
  templateUrl: './informacije-item.component.html',
  styleUrls: ['./informacije-item.component.css']
})
export class InformacijeItemComponent implements OnInit {

  constructor() { }
  @Input() public informacija : Informacija;
  ngOnInit(): void {
  }

}
