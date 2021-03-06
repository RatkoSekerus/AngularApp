import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Raspored } from '../../model/raspored';
import { RasporedService } from 'src/app/services/raspored.service';
import { TrenerUcenikService } from "src/app/services/trener-ucenik.service"
@Component({
  selector: 'app-raspored-item',
  templateUrl: './raspored-item.component.html',
  styleUrls: ['./raspored-item.component.css']
})
export class RasporedItemComponent implements OnInit {
  public beginTime = '';
  public endTime = '';
  @Input() public raspored : Raspored;
  
  constructor(private trenerUcenik: TrenerUcenikService,private rasporedService: RasporedService) { }

  ngOnInit(): void {
  }
  trener() : boolean {
    return this.trenerUcenik.trener;
  }

  changeRaspored() {
    this.rasporedService.changeRaspored(this.beginTime,this.endTime,this.raspored.code)
      .subscribe((raspored) => this.update(raspored)
      //this.raspored.beginTime = this.beginTime 
                         //      this.raspored.endTime = this.endTime
                               );
  }
  update (rasporedS: Raspored) : void {
    rasporedS.beginTime = this.beginTime 
    rasporedS.endTime = this.endTime
    
  }


}
