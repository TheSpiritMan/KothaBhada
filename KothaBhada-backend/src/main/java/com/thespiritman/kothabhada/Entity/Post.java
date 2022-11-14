package com.thespiritman.kothabhada.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.UUID;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Component
public class Post {
    @Id
    @GeneratedValue(generator = "uuid2")
    @Column(columnDefinition = "BINARY(16)", updatable = false)
    private UUID pid;

    @Column(columnDefinition = "BINARY(16)",name = "fk_uid")
    private UUID uid;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private Double price;

    @Column(nullable = false)
    private String type; //flat, building, room

    @Column(nullable = false)
    @Lob
    private byte[] image;

    @Column
    private String description;
}
