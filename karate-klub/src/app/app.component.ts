import { Component } from '@angular/core';
import {UserService} from 'src/app/services/user.service';
import { TrenerUcenikService } from 'src/app/services/trener-ucenik.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KARATE KLUB NOVI SAD';
  spremno = false;
  constructor(private userService: UserService,private trenerUcenik:TrenerUcenikService) { }
  onPocni() : void {
    
    this.userService.register('trener123', 'trenersifra123')
      .subscribe((resp) => {
        console.log('Successfully registered trener');
       
      }, (err) => {
        console.error('Error registering', err);
        
      });

      this.userService.register('ucenik123', 'uceniksifra123')
      .subscribe((resp) => {
        console.log('Successfully registered ucenik');
       
      }, (err) => {
        console.error('Error registering', err);
        
      });
      this.spremno = true;
  }
  trener() : boolean {
    return this.trenerUcenik.trener;
  }
  ucenik() : boolean {
    return this.trenerUcenik.ucenik;
  }
  gost() : boolean {
    return this.trenerUcenik.gost;
  }
}
