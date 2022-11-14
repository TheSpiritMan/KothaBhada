package com.thespiritman.kothabhada.Filter;

import com.thespiritman.kothabhada.Service.JwtService;
import com.thespiritman.kothabhada.Service.MyUserDetailsService;
import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Objects;

@Component
public class JwtFilter extends OncePerRequestFilter{
    @Autowired
    private MyUserDetailsService myUserDetailsService;
    @Autowired
    private JwtService jwtService;
    @Override
    protected void doFilterInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, FilterChain filterChain) throws ServletException, IOException{
        final String authHeader = httpServletRequest.getHeader("Authorization");

        String userName = null;

       if(Objects.nonNull(authHeader) && authHeader.startsWith("Bearer ")){
           userName = jwtService.extractClaim(authHeader.substring(7), Claims::getSubject);
       }

       if(Objects.nonNull(userName) && Objects.isNull(SecurityContextHolder.getContext().getAuthentication())){
           UserDetails userDetails = myUserDetailsService.loadUserByUsername(userName);

           if(jwtService.isValidToken(authHeader.substring(7), userDetails)){
               UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userName, userDetails.getPassword(), userDetails.getAuthorities());
               usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(httpServletRequest));
               SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
           }
       }

       filterChain.doFilter(httpServletRequest, httpServletResponse);
    }
}
