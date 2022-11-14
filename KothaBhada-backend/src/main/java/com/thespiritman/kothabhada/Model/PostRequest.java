package com.thespiritman.kothabhada.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class PostRequest {

    private String address;
    private String type;
    private Double price;
    private String title;
    private MultipartFile multipartFile;
    private String description;
}
