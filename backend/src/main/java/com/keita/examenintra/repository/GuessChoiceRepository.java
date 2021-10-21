package com.keita.examenintra.repository;

import com.keita.examenintra.model.GuessChoice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GuessChoiceRepository extends JpaRepository<GuessChoice,Integer> {
}
