package com.omo.service;

import java.util.List;

import org.springframework.security.core.Authentication;

import com.omo.dto.Post;
import com.omo.dto.Result;

import jakarta.servlet.http.HttpServletRequest;

public interface PostService {
	Result add(Post post, Authentication authentication, HttpServletRequest request);
	List<Post> list();
	Post detail(Post no);
	Result delete(Post no, Authentication authentication, HttpServletRequest request);
	Result update(Post no, Post post, Authentication authentication, HttpServletRequest request);
	List<Post> myboard(Authentication authentication,HttpServletRequest request);
}
