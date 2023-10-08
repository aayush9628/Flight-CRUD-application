import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { signup } from './signup.request';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  ngOnInit(): void {
    
  }
  constructor(
    private service: SignupService,
    private router: Router
    ){}

  @Output() allow = new EventEmitter<number>();

  signupModel = new signup("", "");

  onSubmit(){
    this.allow.emit(0);
    this.router.navigate(['/login']);
    this.service.signupWithNewUser(this.signupModel).subscribe();
  }

  goToLogin(){
    this.allow.emit(0);
    this.router.navigate(['/login']);
  }
}
