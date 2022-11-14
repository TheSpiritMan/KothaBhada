package com.thespiritman.kothabhada.Service;

import com.thespiritman.kothabhada.Entity.Post;
import com.thespiritman.kothabhada.Entity.User;
import com.thespiritman.kothabhada.Model.PostRequest;
import com.thespiritman.kothabhada.Repository.PostRepository;
import com.thespiritman.kothabhada.Repository.UserRepository;
import io.jsonwebtoken.Claims;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.UUID;


@Service
public class PostService {

    @Autowired
    private JwtService jwtService;
    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;
    @SneakyThrows
    public void savePost(PostRequest postRequest, HttpServletRequest httpServletRequest){

        Post post= new Post();
        post.setAddress(postRequest.getAddress());
        post.setTitle(postRequest.getTitle());
        post.setType(postRequest.getType());
        post.setPrice(postRequest.getPrice());
        post.setImage(postRequest.getMultipartFile().getBytes());
        post.setDescription(postRequest.getDescription());

        String email = getEmail(httpServletRequest);
        post.setUid(userRepository.findByEmail(email).getUid());
        postRepository.save(post);
    }

    public String getEmail(HttpServletRequest httpServletRequest) {
       final String authHeader = httpServletRequest.getHeader("Authorization");
        String username = "";
        if(Objects.nonNull(authHeader) && authHeader.startsWith("Bearer ")){
           username =  jwtService.extractClaim(authHeader.substring(7), Claims::getSubject);
        }
        return username;
    }

    public String  delPost(UUID pid, HttpServletRequest httpServletRequest) {
        String email = getEmail(httpServletRequest);
        UUID uid = userRepository.findByEmail(email).getUid();
        UUID testUUID = postRepository.findByPid(pid).getUid();
        System.out.println(uid);
        System.out.println(testUUID);

        if (uid.equals(testUUID)) {
            postRepository.deleteByPid(pid);
            return "deleted";
        }else
            return "failed to delete";
    }
    public Optional<Post> getPost(UUID pid){
        return Optional.ofNullable(postRepository.findByPid(pid));
    }

    public List<Post> getAllPost(){
        return postRepository.findAll();
    }

    public List<Post> getPostByType(String type) {
            return postRepository.findByType(type);
    }

    public List<Post> getPostByUUID(HttpServletRequest httpServletRequest){
        String email = getEmail(httpServletRequest);
        UUID uid = userRepository.findByEmail(email).getUid();
        return postRepository.findByUid(uid);
    }
}
