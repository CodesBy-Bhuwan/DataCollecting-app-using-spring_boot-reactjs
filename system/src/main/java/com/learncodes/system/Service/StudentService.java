package com.learncodes.system.Service;

import com.learncodes.system.model.Student;
import jakarta.persistence.Entity;
import org.hibernate.mapping.List;
@Entity
public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudent();

    java.util.List<Student> getAllStudents();
}
