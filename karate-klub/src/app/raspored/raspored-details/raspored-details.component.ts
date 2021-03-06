import { Component, OnInit } from '@angular/core';
import { RasporedService } from '../../services/raspored.service';
import { ActivatedRoute } from '@angular/router';
import { Raspored } from '../../model/raspored';

@Component({
  selector: 'app-raspored-details',
  templateUrl: './raspored-details.component.html',
  styleUrls: ['./raspored-details.component.css']
})
export class RasporedDetailsComponent implements OnInit {
  public beginTime: string;
  public endTime: string;
  public code : string;
  public raspored: Raspored;
  constructor(private rasporedService: RasporedService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const rasporedCode = this.route.snapshot.paramMap.get('code');
    this.rasporedService.getRaspored(rasporedCode).subscribe(raspored => this.raspored = raspored);
   
    //this.init(rasporedCode);
  }
  init(rasporedCode) : void {
    this.beginTime = this.raspored.beginTime;
    this.endTime = this.raspored.endTime;
    this.code = rasporedCode;
  }
  beginTimeM() : string {
    return this.beginTime;
  }
  endTimeM() : string {
    return this.endTime;
  }

  changeRaspored() {
    this.rasporedService.changeRaspored(this.beginTime,this.endTime,this.code)
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