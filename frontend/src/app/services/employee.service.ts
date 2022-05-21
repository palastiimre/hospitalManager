import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EmployeeRegistrationRequestModel} from "../models/EmployeeRegistrationRequestModel";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {EmployeeLoginRequestModel} from "../models/EmployeeLoginRequestModel";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private BASE_URL = environment.apiUrl+'api/registration';
  private LOGIN_URL =environment.apiUrl +'login';

  constructor(private http:HttpClient) { }

  registerEmployee(employeeFormModel:EmployeeRegistrationRequestModel):Observable<any>{
    console.log(employeeFormModel.role)
    return this.http.post(this.BASE_URL,employeeFormModel);
  }

  loginEmployee(employeeLoginModel:EmployeeLoginRequestModel):Observable<any> {
  console.log(employeeLoginModel)
    return this.http.post(this.LOGIN_URL,employeeLoginModel);
  }
}
