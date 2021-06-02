package hospital.com.hospitalmanager.interfaces;


import hospital.com.hospitalmanager.models.EmployeeModel;
import hospital.com.hospitalmanager.models.EmployeeRegistrationRequestModel;
import hospital.com.hospitalmanager.models.EmployeeResponseModel;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface IEmployeeService extends UserDetailsService {
    EmployeeModel create(EmployeeModel userModel);
    EmployeeResponseModel registration(EmployeeRegistrationRequestModel employeeRegistrationRequestModel) throws Exception;
    EmployeeModel getEmployee(String email) throws Exception;

    EmployeeResponseModel getEmployeeByUserID(String userID);

}
