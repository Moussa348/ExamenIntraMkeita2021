package com.keita.examenintra.testdata;

import com.keita.examenintra.model.User;

public abstract class UserMockData {

    public static User getUser(){
        return User.builder()
                .id(1)
                .email("test@gmail.com")
                .firstName("test")
                .lastName("test")
                .phoneNumber("test-test-test")
                .build();
    }
}
