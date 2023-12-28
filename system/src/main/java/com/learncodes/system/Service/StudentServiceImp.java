package com.learncodes.system.Service;

import com.learncodes.system.model.Student;
import com.learncodes.system.repo.StudentRepo;
import org.hibernate.mapping.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentServiceImp  implements StudentService{

    @Autowired
    private StudentRepo studentRepo;
    @Override
    public Student saveStudent(Student student) {
        return studentRepo.save(student);
    }

    @Override
    public List<Student> getAllStudent() {
        return (List<Student>) studentRepo.findAll();
    }

}
