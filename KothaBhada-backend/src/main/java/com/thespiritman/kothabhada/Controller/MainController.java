package com.thespiritman.kothabhada.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    @GetMapping("/index")
    public String indexPage(){
        return "index";
    }
//
//    @GetMapping("/error")
//    public String error(){
//        return "error";
//    }
}
