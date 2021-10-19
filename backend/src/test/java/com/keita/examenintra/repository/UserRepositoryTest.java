package com.keita.examenintra.repository;

import com.keita.examenintra.model.User;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

@DataJpaTest(properties = "spring.datasource.initialization-mode=never")
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class UserRepositoryTest {

    @Autowired
    UserRepository userRepository;

    @BeforeAll
    void insert(){
        List<User> users = Arrays.asList(
                User.builder().email("lacouf@gmail.com").build()
        );

        userRepository.saveAll(users);
    }

    @Test
    void existByEmail(){
        //ARRANGE
        String email1 = "lacouf@gmail.com";
        String email2 = "sdadsdas@gmail.com";

        //Act
        boolean exist = userRepository.existsByEmail(email1);
        boolean notExist = userRepository.existsByEmail(email2);

        //Assert
        assertTrue(exist);
        assertFalse(notExist);
    }

}
