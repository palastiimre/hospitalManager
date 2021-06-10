package hospital.com.hospitalmanager.controllers;

import hospital.com.hospitalmanager.interfaces.IEmployeeService;
import hospital.com.hospitalmanager.models.EmployeeResponseModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("employees")
public class EmployeeController {

    @Autowired
    IEmployeeService employeeService;

    @GetMapping(value = "/{userId}",produces = MediaType.APPLICATION_JSON_VALUE)
    public EmployeeResponseModel getEmployee(@PathVariable String userId){
        return employeeService.getEmployeeByUserID(userId);
    }

    @PutMapping()
    public String updateEmployee() {
        return "update Employee was called";
    }

    @DeleteMapping()
    public String deleteEmployee() {
        return "delete Employee was called";
    }
}
