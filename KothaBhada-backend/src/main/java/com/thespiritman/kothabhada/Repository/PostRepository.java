package com.thespiritman.kothabhada.Repository;

import com.thespiritman.kothabhada.Entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Repository
public interface PostRepository extends JpaRepository<Post, String> {
    Post findByPid(UUID pid);
    List<Post> findByUid(UUID uuid);

    @Transactional
    @Modifying
    @Query("delete from Post p where p.pid = ?1")
    void deleteByPid(UUID pid);


    List<Post> findByType(String type);

}
