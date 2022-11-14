package com.thespiritman.kothabhada.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class User {
    @Id
    @GeneratedValue(generator = "uuid2")
    @Column(columnDefinition = "BINARY(16)", updatable = false)
    private UUID uid;

    @Column(nullable = false)
    private String fullName;

    @Column(length = 50, nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(length = 10, nullable = false)
    private String phnNumber;

    @Column
    private String resetToken;
}
