import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { loginRequest } from './login.request';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginModel = new loginRequest("", "");
  response: any;
  @Output() allow = new EventEmitter<number>();

  constructor(
    private loginService: LoginService,
    private router: Router
  ){}
  ngOnInit(): void {
    
  }
  
  onSubmit(){
    this.loginService.getLoginPermission(this.loginModel).subscribe(response => {
      this.response = response;
      this.allow.emit(this.response.allow);
    });
  }

  goToSignUp(){
    this.allow.emit(2);
    this.router.navigate(['/signup']);
    // window.location.reload();
  }
}
