package com.keita.examenintra.service;

import com.keita.examenintra.model.User;
import com.keita.examenintra.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User create(User user) {
        return !userRepository.existsByEmail(user.getEmail()) ? userRepository.save(user) : null;
    }

    public User update(User user) {
        return userRepository.save(
                userRepository.findById(user.getId())
                        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cant find user"))
        );
    }

    public void delete(Integer id){
        userRepository.deleteById(id);
    }

    public List<User> getListUser() {
        return userRepository.findAll();
    }

}
