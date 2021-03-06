import { Injectable } from '@angular/core';
import { Informacija } from 'src/app/model/informacija';
import { Observable } from 'rxjs';
import { of as ObservableOf } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InfromacijeService {
  private informacije: Informacija[];
  constructor() {
  this.informacije = [
  new Informacija('O klubu', 'assets/slika.jpg',  'Karate klub za sve uzraste, za rekreativce i takmicare. Adresa kluba je Brace Ribnikar 20'),
  new Informacija('Istorija', 'assets/slika2.png',  'Klub je nastao 2009. godine, najveci uspesi su dve srebrne medalje na evropskom prvenstvima za seniore'),
  new Informacija('Clanovi', 'assets/slika3.jpg',  'Clanove naseg kluba cine dvoje trenera i brojni takmicari i rekreativci')
  ];
  }
  getInformacije() : Observable<Informacija[]> {
  return ObservableOf(this.informacije);
  }
  getInformacija(naslov:string) : Observable<Informacija> {
    let foundInformacija = this.informacije.find(each => each.naslov === naslov);
    if (foundInformacija) {
      return ObservableOf(foundInformacija);
    }
    return null;
    }
}
