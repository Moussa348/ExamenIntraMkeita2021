package com.keita.examenintra.controller;

import com.keita.examenintra.model.User;
import com.keita.examenintra.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/create")
    public User create(@RequestBody User user){
        return userService.create(user);
    }

    @PutMapping("/update")
    public User update(@RequestBody User user){
        return userService.update(user);
    }

    @GetMapping("/getListUser")
    public List<User> getListUser(){
        return userService.getListUser();
    }

}
