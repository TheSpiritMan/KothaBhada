package com.thespiritman.kothabhada.Service;

import com.thespiritman.kothabhada.Repository.PostRepository;
import com.thespiritman.kothabhada.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;
import java.util.UUID;

@Service
public class InterestedService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PostService postService;
    @Autowired
    private PostRepository postRepository;

    @Autowired
    private JavaMailSender javaMailSender;
    @Autowired
    private JavaMailSender javaMailSender1;

    public String interestedPost(UUID pid, HttpServletRequest httpServletRequest){

        String interestedUser = postService.getEmail(httpServletRequest);
        UUID uuid = postRepository.findByPid(pid).getUid();
       // String phnNum = userRepository.findByEmail(interestedUser).getPhnNumber();

        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage);

        MimeMessage mimeMessage1 = javaMailSender1.createMimeMessage();
        MimeMessageHelper mimeMessageHelper1 = new MimeMessageHelper(mimeMessage1);

        //send mail
        try{
            //owner-notification
            mimeMessageHelper.setTo(userRepository.findByUid(uuid).getEmail());
            mimeMessageHelper.setFrom("KothaBhada@Project");
            mimeMessageHelper.setText("This message is from KothaBhada@Project. \n Your Post with ID: "+ pid + " is in interest to "+userRepository.findByEmail(interestedUser).getFullName()+". \n To contact with him/her. Please use below email: "+postService.getEmail(httpServletRequest)+" .\n And this is his/her phone number: "+ userRepository.findByEmail(interestedUser).getPhnNumber());
            mimeMessageHelper.setSubject("People Are Interested");
            javaMailSender.send(mimeMessage);


            //interested-notification
            mimeMessageHelper1.setTo(interestedUser);
            mimeMessageHelper1.setFrom("KothaBhada@Project");
            mimeMessageHelper1.setText("This message is from KothaBhada@Project. \nAs you are interested in Post with ID"+pid +" .\n The contact details of the post owner are:\nEmail: "+userRepository.findByUid(uuid).getEmail()+" \nPhone Number: "+userRepository.findByUid(uuid).getPhnNumber()+".\n Make contact with owner before other does to book the service.");
            mimeMessageHelper1.setSubject("You are Interested");
            javaMailSender1.send(mimeMessage1);

            return "send";
        }catch (MessagingException e) {
            throw new RuntimeException(e);
        }
    }

}
