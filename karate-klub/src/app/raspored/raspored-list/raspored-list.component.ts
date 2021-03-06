import { Component, OnInit } from '@angular/core';
import { RasporedService } from 'src/app/services/raspored.service';
import { Raspored } from 'src/app/model/raspored';
import { Observable } from 'rxjs';
import { UserStoreService } from '../../services/user-store.service';
import { TrenerUcenikService } from 'src/app/services/trener-ucenik.service';
@Component({
  selector: 'app-raspored-list',
  templateUrl: './raspored-list.component.html',
  styleUrls: ['./raspored-list.component.css']
})
export class RasporedListComponent implements OnInit {

  public rasporeds$: Observable<Raspored[]>;
  constructor(private rasporedService: RasporedService, private userStore: UserStoreService,private trenerUcenik:TrenerUcenikService) { }

  ngOnInit() {
    this.rasporeds$ = this.rasporedService.getRasporeds();
  }
  fetchRasporeds() {
    this.rasporeds$ = this.rasporedService.getRasporeds();
    }
  trener() : boolean {
    return this.trenerUcenik.trener;
  }
}