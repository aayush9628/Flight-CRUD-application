import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})
export class UpdateFlightService{
    private url = "http://localhost:8080/flight";
    constructor(private httpClient: HttpClient){}

    updateFlight(flight: any){
        console.log(flight);
        return this.httpClient.put(this.url + "/updateFlight",flight);
    }
}