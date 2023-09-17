import { Injectable } from '@angular/core';
import { Employee, IEmployee } from '../_models/employee';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl = 'https://localhost:44389/api/';

  constructor(private http: HttpClient) { }

  getEmployees(){
    return this.http.get<IEmployee[]>(this.baseUrl + 'employee');
  }

  getEmployee(id: number){
    return this.http.get<IEmployee[]>(this.baseUrl + 'employee/' + id);
  }

  saveEmployee(model: any){
    return this.http.post<any>(this.baseUrl + "employee/", model).pipe(
      map((user : Employee) => {
        if(user) {
         console.log("Employee successfully saved.");
        }
      })
    )
  }

  updateEmployee(model: any, id: Number) {
    return this.http.put(
      this.baseUrl + 'employee/' + id + '/' + model,
      console.log("Employee successfully updated.")
    );
  }
}
