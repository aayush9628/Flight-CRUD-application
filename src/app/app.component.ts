import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flight-crud';
  allow: number = 0;
  constructor(public router: Router){}

  permission(allow: number){
    this.allow = allow;
    // console.log(this.allow);
    if(this.allow === 1){
      // console.log("here");
      this.router.navigateByUrl('/home');
    }
    if(this.allow === 2){
      this.router.navigateByUrl('/signup');
      // window.location.reload();
    }
  }
}
