package hospital.com.hospitalmanager.models;

import hospital.com.hospitalmanager.enums.UserRole;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class EmployeeRegistrationRequestModel {

    private String firstName;
    private String lastName;
    private String email;
    private UserRole role;
    private String position;
    private String password;
}
