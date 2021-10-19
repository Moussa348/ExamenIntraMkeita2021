package com.keita.examenintra.service;

import com.keita.examenintra.model.User;
import com.keita.examenintra.repository.UserRepository;
import com.keita.examenintra.testdata.UserMockData;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {

    @Mock
    UserRepository userRepository;

    @InjectMocks
    UserService userService;


    @Test
    void shouldCreate(){
        //ARRANGE
        User user = UserMockData.getUser();

        when(userRepository.existsByEmail(anyString())).thenReturn(false);
        when(userRepository.save(any())).thenReturn(user);

        //ACT
        User savedUser = userService.create(user);

        //ASSERT
        assertNotNull(savedUser);
    }

    @Test
    void shouldNotCreate(){
        //ARRANGE
        User user = UserMockData.getUser();

        when(userRepository.existsByEmail(anyString())).thenReturn(true);

        //ACT
        User savedUser = userService.create(user);

        //ASSERT
        assertNull(savedUser);
    }

    @Test
    void shouldUpdate(){
        //ARRANGE
        User user = UserMockData.getUser();

        when(userRepository.save(any())).thenReturn(user);
        when(userRepository.findById(anyInt())).thenReturn(Optional.of(user));

        //ACT
        User updateUser = userService.update(user);

        //ASSERT
        assertNotNull(updateUser);
    }

    @Test
    void shouldNotUpdate(){
        //ARRANGE
        User user = UserMockData.getUser();

        when(userRepository.findById(anyInt())).thenReturn(Optional.empty());

        //ASSERT
        assertThrows(ResponseStatusException.class,() -> userService.update(user));
    }
}
