package com.omo.service;

import java.util.List;

import org.springframework.security.core.Authentication;

import com.omo.dto.Comment;
import com.omo.dto.Post;
import com.omo.dto.Result;

import jakarta.servlet.http.HttpServletRequest;

public interface CommentService {
	List<Comment> getComments(Post no);

	Result add_comment(Comment comment, Post no, Authentication authentication, HttpServletRequest request);

	Result delete(Comment no, Authentication authentication, HttpServletRequest request);

	Result update(Comment no, Comment comment, Authentication authentication, HttpServletRequest request);
}
