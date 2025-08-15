package com.demo.demo.Repository;

import com.demo.demo.Models.Form;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserFormRepo extends JpaRepository<Form, Integer> {

}
