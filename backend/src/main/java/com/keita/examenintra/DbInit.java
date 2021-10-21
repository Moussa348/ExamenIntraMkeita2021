package com.keita.examenintra;

import com.keita.examenintra.model.User;
import com.keita.examenintra.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Order(1)
@Component
public class DbInit implements CommandLineRunner {

    private final UserRepository userRepository;

    public DbInit(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    private void insertUsers(){
        List<User> users = Arrays.asList(
                User.builder().email("marc@gmail.com").firstName("marc").lastName("jean").phoneNumber("5143345678").build(),
                User.builder().email("jonhatan@gmail.com").firstName("jonhatan").lastName("jean").phoneNumber("5143345678").build(),
                User.builder().email("mafoud@gmail.com").firstName("mafoud").lastName("jean").phoneNumber("5143345678").build()
        );

        userRepository.saveAll(users);
    }

    @Override
    public void run(String... args) throws Exception {
        insertUsers();
    }
}
