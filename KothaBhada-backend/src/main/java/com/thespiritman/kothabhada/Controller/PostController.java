package com.thespiritman.kothabhada.Controller;

import com.thespiritman.kothabhada.Entity.Post;
import com.thespiritman.kothabhada.Model.PostRequest;
import com.thespiritman.kothabhada.Service.PostService;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
public class PostController {

    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @PostMapping("/api/create-post")
    public String savePost(@ModelAttribute PostRequest postRequest, HttpServletRequest httpServletRequest) {
        postService.savePost(postRequest, httpServletRequest);
        return "Successfully saved.";
    }

    @GetMapping("/api/getPost/{pid}")
    public Optional<Post> getPostById(@PathVariable UUID pid) {
        return postService.getPost(pid);
    }

    @GetMapping("/api/getAllPost")
    public List<Post> getPostList() {
        return postService.getAllPost();
    }

    @GetMapping("/api/allMyPost")
    public List<Post> getAllMyPost(HttpServletRequest httpServletRequest){
        return postService.getPostByUUID(httpServletRequest);
    }

    @CrossOrigin(allowedHeaders = {"Authorization", "Origin"})
    @DeleteMapping("/api/delPost/{pid}")
    public String delPost(@PathVariable UUID pid, HttpServletRequest httpServletRequest) {
       return postService.delPost(pid, httpServletRequest);
    }

    @GetMapping("/api/getPostByType/flat")
    public List<Post> getPostByTypeFlat(){
        return postService.getPostByType("flat");
    }
    @GetMapping("/api/getPostByType/room")
    public List<Post> getPostByTypeRoom(){
        return postService.getPostByType("room");
    }
    @GetMapping("/api/getPostByType/building")
    public List<Post> getPostByTypeBuilding(){
        return postService.getPostByType("building");
    }
}