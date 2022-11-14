package com.thespiritman.kothabhada.Service;

import com.thespiritman.kothabhada.Entity.User;
import com.thespiritman.kothabhada.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
@Component
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException{
        User user = userRepository.findByEmail(email);

        if(user == null){
            throw new UsernameNotFoundException("User doest not exist");
        }else {
            return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(),new ArrayList<>());
        }
    }
    public void save(User user){
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String encPass = encoder.encode(user.getPassword());
        user.setPassword(encPass);
        userRepository.save(user);
    }

    public Optional findUserByResetToken(String resetToken){
        return userRepository.findByResetToken(resetToken);
    }

    public User findUserByEmail(String email){
        return  userRepository.findByEmail(email);
    }
}
