import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {EmployeeService} from "../services/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;

  loginForm = this.formBuilder.group({
    email: [null, [Validators.required]],
    password: [null, [Validators.required]],
  });


  constructor(private formBuilder: FormBuilder,private employeeService: EmployeeService,private router: Router) {
  }

  ngOnInit(): void {
  }

  login() {
    let employeeLoginModel = this.loginForm.value;
    this.employeeService.loginEmployee(employeeLoginModel)
      .subscribe(response => {
          console.log(response);
        },
        error => {
          console.warn(error);

        },
        () => {
          this.router.navigate(['/'])
        },
      );
    console.log(this.loginForm.value)
  }
}
