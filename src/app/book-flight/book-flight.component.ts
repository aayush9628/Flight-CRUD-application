import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BookFlightService } from './book-flight.service';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit{
  constructor(
    private router: Router,
    private service: BookFlightService
  ){}
  ngOnInit(): void {
    
  }
  @Output() page = new EventEmitter<number>();
  @Input() bookFlightDetails: any;
  backToHome(){
    this.page.emit(1);
    this.router.navigate(['/home']);
  }
  confirm(){
    this.service.addBooking(this.bookFlightDetails).subscribe();
    this.page.emit(1);
    this.router.navigate(['/home']);
  }
}
