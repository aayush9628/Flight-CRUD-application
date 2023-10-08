import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})
export class FlightService{
    private url = "http://localhost:8080/flight";
    constructor(private httpClient: HttpClient){}

    getAllFlights(){
        return this.httpClient.get(this.url + "/display");
    }

    updateFlight(flight: any){
        return this.httpClient.put(this.url + "/updateFlight",flight);
    }

    deleteFlight(id: number){
        return this.httpClient.delete(this.url + "/deleteFlight/" + id);
    }
}