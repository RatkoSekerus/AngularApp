import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Informacija } from 'src/app/model/informacija';
import { InfromacijeService } from 'src/app/services/infromacije.service';
@Component({
  selector: 'app-informacije-list',
  templateUrl: './informacije-list.component.html',
  styleUrls: ['./informacije-list.component.css']
})
export class InformacijeListComponent implements OnInit {

  public informacije$: Observable<Informacija[]>;
  constructor(private informacijaService: InfromacijeService ) { }

  ngOnInit() {
    this.informacije$ = this.informacijaService.getInformacije();
  }

}
