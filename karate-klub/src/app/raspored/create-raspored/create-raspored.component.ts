import { Component, OnInit } from '@angular/core';
import { Raspored } from 'src/app/model/raspored';
import { RasporedService } from 'src/app/services/raspored.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-raspored',
  templateUrl: './create-raspored.component.html',
  styleUrls: ['./create-raspored.component.css']
})
export class CreateRasporedComponent {

  public raspored: Raspored;
  public confirmed = false;
  public message = null;
 
  constructor(private rasporedService: RasporedService,private router:Router) {
    this.initializeRaspored();
  }

  initializeRaspored() {
    this.raspored =  {
      day: '',
      code: '',
      beginTime: '0',
      endTime: '0',
      description: '',
      favorite: false
    };
  }

  setRasporedBeginTime(time) {
    this.raspored.beginTime = time;
    
  }
  setRasporedEndTime(time) {
    this.raspored.endTime = time;
    
  }


  createRaspored(rasporedForm) {
    if (rasporedForm.valid) {
      this.rasporedService.createRaspored(this.raspored)
          .subscribe((result: any) => {
            this.message = result.msg;
            this.initializeRaspored();
            this.router.navigate(['rasporeds','list']);
          }, (err) => {
            this.message = err.error.msg;
          });
    } else {
      console.error('Raspored form is in an invalid state');
    }
  }
}