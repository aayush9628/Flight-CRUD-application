import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})
export class BookFlightService{
    private url = "http://localhost:8080/booking";
    constructor(private httpClient: HttpClient){}
    addBooking(flightDetails: any){
        console.log(flightDetails);
        return this.httpClient.post(this.url + "/create",flightDetails);
    }
}