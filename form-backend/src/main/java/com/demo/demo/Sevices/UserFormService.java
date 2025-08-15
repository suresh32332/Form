package com.demo.demo.Sevices;


import com.demo.demo.Models.Form;
import com.demo.demo.Repository.UserFormRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserFormService {
    @Autowired
    private UserFormRepo userFormRepo;

     // save data
    public Form saveUser(Form form){
        return userFormRepo.save(form);
    }

    //list  all employee
    public List<Form> getAllUser(){
        return userFormRepo.findAll();
    }

    public Form creteUser(Form form) {
        return userFormRepo.save(form);
    }



}
