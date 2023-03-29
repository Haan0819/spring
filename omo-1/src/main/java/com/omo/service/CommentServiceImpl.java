package com.omo.service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.omo.dto.Comment;
import com.omo.dto.Member;
import com.omo.dto.Post;
import com.omo.dto.Result;
import com.omo.repository.CommentRepository;
import com.omo.repository.MemberRepository;
import com.omo.repository.PostRepository;
import com.omo.utils.JwtTokenProvider;

import jakarta.servlet.http.HttpServletRequest;

@Service
public class CommentServiceImpl implements CommentService {
	
	@Autowired
	private CommentRepository commentRepository;
	@Autowired
	private JwtTokenProvider jwtTokenProvider;
	@Autowired
	private MemberRepository memberRepository;
	@Autowired
	private PostRepository postRepository;
	
	@Override
	public List<Comment> getComments(Post no){
		
		List<Comment> comments = commentRepository.findByPost(no);
		return comments;
	}
	
	@Override
	public Result add_comment(Comment comments, Post no, Authentication authentication, HttpServletRequest request) {
		Member author = memberRepository.findByUsername(authentication.getName()).orElse(null);
        String tokenWithPrefix = request.getHeader("Authorization");
        String token = "";
        Long id = no.getId();
        Post post = postRepository.findById(id).orElse(null);
        
        if (tokenWithPrefix != null && tokenWithPrefix.startsWith("Bearer ")) {
            token = tokenWithPrefix.substring(7);
            // 이제 token 변수에는 접두어 "Bearer "를 제거한 토큰 값이 저장되어 있음
        }
        
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String formattedDateTime = now.format(formatter);
        Result result = new Result();
        
        System.out.println(token);
        if(jwtTokenProvider.validateToken(token)) {
        
        	Comment comment = Comment.builder()
        			.comment(comments.getComment())
        			.author(author)
        			.post(post)
        			.created_at(formattedDateTime)
        			.build();
        	
        	commentRepository.save(comment);
        	result.setEmpty(true);
	    	return result;
        }else {
        	result.setEmpty(false);
        	return result;
        }
    }

	@Override
	public Result delete(Comment no, Authentication authentication, HttpServletRequest request) {
		Comment comment = commentRepository.findById(no.getId()).orElse(null);
		Member author = memberRepository.findByNo(comment.getAuthor().getNo()).orElse(null);
		String tokenWithPrefix = request.getHeader("Authorization");
        String token = "";
        Result result = new Result();
        
        if (tokenWithPrefix != null && tokenWithPrefix.startsWith("Bearer ")) {
            token = tokenWithPrefix.substring(7);
            // 이제 token 변수에는 접두어 "Bearer "를 제거한 토큰 값이 저장되어 있음
        }
		
        if(jwtTokenProvider.validateToken(token) && authentication.getName().equals(author.getUsername())) {
        	commentRepository.deleteById(no.getId());
        	result.setEmpty(true);
        	return result;
        }else {
        	result.setEmpty(false);
        	return result;
	}
	}

	@Override
	public Result update(Comment no, Comment comment, Authentication authentication, HttpServletRequest request) {
		Comment comm = commentRepository.findById(no.getId()).orElse(null);
		Member author = memberRepository.findByNo(comment.getAuthor().getNo()).orElse(null);
		String tokenWithPrefix = request.getHeader("Authorization");
        String token = "";
        Result result = new Result();
        
        if (tokenWithPrefix != null && tokenWithPrefix.startsWith("Bearer ")) {
            token = tokenWithPrefix.substring(7);
            // 이제 token 변수에는 접두어 "Bearer "를 제거한 토큰 값이 저장되어 있음
        }
        
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String formattedDateTime = now.format(formatter);
		
        if(jwtTokenProvider.validateToken(token) && authentication.getName().equals(author.getUsername())) {
        	comm.setComment(comment.getComment());
        	comm.setUpdated_at(formattedDateTime);
        	commentRepository.save(comm);
        	
        	result.setEmpty(true);
        	return result;
        }else {
        	result.setEmpty(false);
        	return result;
	}
	}
	
	
	
	
	
	
}
