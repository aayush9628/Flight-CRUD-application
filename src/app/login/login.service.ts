import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { loginRequest } from "./login.request";

@Injectable({
    providedIn:'root'
})
export class LoginService{
    private url = "http://localhost:8080/user";
    constructor(private httpClient: HttpClient){}
    getLoginPermission(loginModel: loginRequest){
        return this.httpClient.get(this.url + "/login/" + loginModel.userName + "/" + loginModel.password);
    }
}
