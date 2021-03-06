import { Component, OnInit } from '@angular/core';
import { Informacija } from 'src/app/model/informacija';
import { InfromacijeService } from 'src/app/services/infromacije.service';
import { ActivatedRoute } from '@angular/router';
import { TrenerUcenikService } from 'src/app/services/trener-ucenik.service'
@Component({
  selector: 'app-informacije-details',
  templateUrl: './informacije-details.component.html',
  styleUrls: ['./informacije-details.component.css']
})
export class InformacijeDetailsComponent implements OnInit {

  public informacija: Informacija;
  
  constructor(private informacijeService: InfromacijeService,
              private route: ActivatedRoute, private trenerUcenik: TrenerUcenikService) { }

  ngOnInit() {
    const informacijeNaslov = this.route.snapshot.paramMap.get('naslov');
    this.informacijeService.getInformacija(informacijeNaslov).subscribe(informacija => this.informacija = informacija);
    this.trenerUcenik.gost = true;
  }
  istorija() : boolean {
  return this.informacija.naslov === "Istorija";
  }
  oKlubu() : boolean {
    return this.informacija.naslov === "O klubu";
  }
  clanovi() : boolean {
      return this.informacija.naslov === "Clanovi";
  }
  

}
