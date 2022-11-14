package com.thespiritman.kothabhada.Controller;

import com.thespiritman.kothabhada.Entity.User;
import com.thespiritman.kothabhada.Service.MyUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;


@RestController
public class PasswordController {
    @Autowired
    private MyUserDetailsService myUserDetailsService;

    @Autowired
    private JavaMailSender javaMailSender;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @GetMapping("/api/resetPassword")
    public String forgetPassword(@RequestParam("email") String email){

        User user = myUserDetailsService.findUserByEmail(email);

        //save to db
        user.setResetToken(UUID.randomUUID().toString());
        myUserDetailsService.save(user);

        //send mail
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage);

        try{
            //mimeMessageHelper.setFrom("support@kothabhada.project");
            mimeMessageHelper.setTo(user.getEmail());
            mimeMessageHelper.setFrom("KothaBhada@Project");
            mimeMessageHelper.setText("This message is from KothaBhada@Project. Place to rent a service.\nTo reset your password, Use this token: " + user.getResetToken());
            mimeMessageHelper.setSubject("Password Reset Request");

            javaMailSender.send(mimeMessage);
            return "Send";

        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
    }

    @GetMapping("/api/setNewPassword")
    public String setNewPassword(@RequestParam Map<String, String> reqParam){
        Optional user = myUserDetailsService.findUserByResetToken(reqParam.get("token"));


        if(user.isPresent()){
            User resetPass = (User) user.get();

            resetPass.setPassword(reqParam.get("password"));
            resetPass.setResetToken(null);

            myUserDetailsService.save(resetPass);
            return  "Reset Done";

        }else
            return  "Invalid Token";
    }
}
