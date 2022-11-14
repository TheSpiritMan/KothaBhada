package com.thespiritman.kothabhada.Controller;

import com.thespiritman.kothabhada.Entity.User;
import com.thespiritman.kothabhada.Model.AuthRequestModel;
import com.thespiritman.kothabhada.Service.JwtService;
import com.thespiritman.kothabhada.Service.MyUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {
    @Autowired
    private MyUserDetailsService myUserDetailsService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtService jwtService;

    @PostMapping("/api/user-register")
    public String registerUser(@RequestBody User user){
      myUserDetailsService.save(user);
      return "Successfully registered";

    }

    @PostMapping("/api/user-login")
    public String getJWTAuthToken(@RequestBody AuthRequestModel authRequestModel) throws Exception{
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequestModel.getEmail(), authRequestModel.getPassword()));
        } catch (BadCredentialsException e) {
            throw new Exception("Incorrect Username or Password", e);
        }

        UserDetails userDetails = myUserDetailsService.loadUserByUsername(authRequestModel.getEmail());
        return jwtService.getJWT(userDetails);
    }
    @GetMapping("/check")
    public String check(){
        return "Just Checking JWT Access";
    }
}
