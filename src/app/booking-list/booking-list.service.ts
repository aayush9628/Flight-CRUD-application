import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})
export class BookingListService{
    private url = "http://localhost:8080/booking";
    constructor(private httpClient: HttpClient){}
    deleteBooking(id: any){
        return this.httpClient.delete(this.url + "/delete/" + id);
    }
    getBooking(){
        return this.httpClient.get(this.url + "/all");
    }
}