package hospital.com.hospitalmanager.repositories;

import hospital.com.hospitalmanager.entities.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

    Employee findByEmail(String email);
    Employee findEmployeeByUserId(String userID);
}
