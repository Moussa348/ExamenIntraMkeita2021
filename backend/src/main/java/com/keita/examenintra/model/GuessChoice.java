package com.keita.examenintra.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GuessChoice implements Serializable {

    @Id
    @GeneratedValue
    private Integer id;
    private String name;
    private Integer randomNumber;
    private boolean win;
}
