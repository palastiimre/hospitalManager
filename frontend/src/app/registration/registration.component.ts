import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {EmployeeService} from "../services/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  hide = true;


  registrationForm = this.formBuilder.group({
    firstName: [null, [Validators.required]],
    lastName: [null, [Validators.required]],
    email: [null, [Validators.required]],
    role: [null, [Validators.required]],
    position: [null, [Validators.required]],
    password: [null, [Validators.required]],
    confirmPassword: [null, [Validators.required]],
  });


  constructor(private formBuilder: FormBuilder, private employeeService: EmployeeService,private router: Router) {
  }

  ngOnInit(): void {
  }

  submitRegistration() {
    let employeeFormModel = this.registrationForm.value;
    this.employeeService.registerEmployee(employeeFormModel)
      .subscribe(response => {
          console.log(response);
        },
        error => {
          console.warn(error);

        },
        () => {
          this.router.navigate(['/login'])
        },
      );
    console.log(this.registrationForm.value)
  }
}
