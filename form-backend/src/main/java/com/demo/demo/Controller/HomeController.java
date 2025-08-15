package com.demo.demo.Controller;

import com.demo.demo.Models.Form;
import com.demo.demo.Sevices.UserFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController("/api/user")
@CrossOrigin("http://localhost:5173/")

public class HomeController {

    @Autowired
    private UserFormService userFormService;
    @PostMapping
    public Form createNewUser(@RequestBody Form form) {
        return userFormService.creteUser(form);
    }
    @GetMapping
    public List<Form> getAll(){
        return userFormService.getAllUser();
    }
}
