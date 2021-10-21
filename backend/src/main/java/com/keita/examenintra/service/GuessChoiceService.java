package com.keita.examenintra.service;

import com.keita.examenintra.model.GuessChoice;
import com.keita.examenintra.repository.GuessChoiceRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GuessChoiceService {

    private final GuessChoiceRepository guessChoiceRepository;

    public GuessChoiceService(GuessChoiceRepository guessChoiceRepository) {
        this.guessChoiceRepository = guessChoiceRepository;
    }

    public GuessChoice create(GuessChoice guessChoice) {
        return guessChoiceRepository.save(guessChoice);
    }

    public List<GuessChoice> findAll() {
        return guessChoiceRepository.findAll();
    }

}
