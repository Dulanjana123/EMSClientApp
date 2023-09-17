import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../_services/employee.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {}

  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
  }


  register() {
    this.employeeService.saveEmployee(this.model).subscribe({
      next: () => {
       console.log("Registration Success");
       alert("Registration Success");
      },
      error: error => alert(error)
    
    })
  }


}
