import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})
export class AddFlightService{
    private url = "http://localhost:8080/flight";
    constructor(private httpClient: HttpClient){}

    addFlight(flight: any){
        return this.httpClient.post(this.url + "/addFlight",flight);
    }
}