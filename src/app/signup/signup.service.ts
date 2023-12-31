import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { signup } from "./signup.request";

@Injectable({
    providedIn:'root'
})
export class SignupService{
    private url = "http://localhost:8080/user";
    constructor(private httpClient: HttpClient){}
    signupWithNewUser(signupModel: signup){
        return this.httpClient.post(this.url + "/signup", signupModel);
    }
}