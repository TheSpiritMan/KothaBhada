package com.thespiritman.kothabhada;

import com.thespiritman.kothabhada.Entity.Post;
import com.thespiritman.kothabhada.Entity.User;
import com.thespiritman.kothabhada.Service.MyUserDetailsService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@SpringBootTest
class KothaBhadaTests {
    @Autowired
    private MyUserDetailsService myUserDetailsService;

    @Test
    void testRegisterUser() {
        User user = new User();
        user.setFullName("Sandab GC");
        user.setEmail("sandab@gmail.com");
        String pass = "@Hello123";
        user.setPassword("Lamjung");
        user.setPhnNumber("9860815608");
        myUserDetailsService.save(user);
    }

}
