package com.thespiritman.kothabhada.Controller;

import com.thespiritman.kothabhada.Service.InterestedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.UUID;

@RestController
public class InterestedController {

    @Autowired
    private InterestedService interestedService;

    @GetMapping("/api/post/interested")
    public String interestedPost(@RequestParam("pid")UUID pid, HttpServletRequest httpServletRequest){
        return interestedService.interestedPost(pid,httpServletRequest);
    }
}
