package com.keita.examenintra.controller;

import com.keita.examenintra.model.GuessChoice;
import com.keita.examenintra.service.GuessChoiceService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/guessChoice")
@CrossOrigin(origins = "http://localhost:3000")
public class GuessController {

    private final GuessChoiceService guessChoiceService;

    public GuessController(GuessChoiceService guessChoiceService) {
        this.guessChoiceService = guessChoiceService;
    }

    @PostMapping("/create")
    public GuessChoice create(@RequestBody GuessChoice guessChoice){
        return guessChoiceService.create(guessChoice);
    }

    @GetMapping("/findAll")
    public List<GuessChoice> findAll(){
        return guessChoiceService.findAll();
    }
}
