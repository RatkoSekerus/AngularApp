import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { TrenerUcenikService } from 'src/app/services/trener-ucenik.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public username: string = '';
  public password: string = '';
  public l  = false;

  public message: string = '';
  constructor(private userService: UserService, private router:Router,private trenerUcenik:TrenerUcenikService) { }

  login() {
    this.l = true;
    this.userService.login(this.username, this.password)
      .subscribe((resp) => {
        
        console.log('Successfully logged in');
        this.message = resp.msg;
        this.router.navigate(['rasporeds','list']);
      }, (err) => {
        
        console.error('Error logging in', err);
        this.message = err.error.msg;
      });
      if (this.username.charAt(0)==='t') {
        this.trenerUcenik.trener = true;
        this.trenerUcenik.ucenik = false;
      } else {
      this.trenerUcenik.ucenik = true;
      this.trenerUcenik.trener = false;
      }
  }
  lM() : boolean {
    return this.l;
  }
}