package com.omo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.omo.dto.Member;
import com.omo.dto.Post;
import com.omo.dto.Result;
import com.omo.repository.MemberRepository;
import com.omo.repository.PostRepository;
import com.omo.utils.JwtTokenProvider;
import com.omo.utils.UtilService;

import jakarta.servlet.http.HttpServletRequest;

@Service
public class PostServiceImpl implements PostService{
	
	@Autowired
	private MemberRepository memberRepository;
	@Autowired
	private JwtTokenProvider jwtTokenProvider;
	@Autowired
	private PostRepository postRepository;
	@Autowired
	private UtilService utilService;
	
	@Transactional
	@Override
	public Result add(Post post, Authentication authentication, HttpServletRequest request) {
	        
	        Member author = memberRepository.findByUsername(authentication.getName()).orElse(null); 
	        String token = utilService.getAccessToken(request);
	        
	        
	        String formattedDateTime = utilService.getCreatedAt();

	        Result result = new Result();
	        if(jwtTokenProvider.validateToken(token)) {
	        
		    	Post posts = Post.builder()
		    			.title(post.getTitle())
		    			.content(post.getContent())
		    			.author(author)
		    			.createdAt(formattedDateTime)
		    			.notice(post.isNotice())
		    			.build();
		    	
		    	postRepository.save(posts);
		    	result.setEmpty(true);
		    	return result;
	        }else {
	        	result.setEmpty(false);
	        	return result;
	        }
	    }
	
	@Override
	public List<Post> list() {
		List<Post> list = postRepository.findAllOrderByNoticeAndIdDesc();
		System.out.println(list);
		return list;
	}
	
	@Override
	public Post detail(Post no) {
		Long id = no.getId();
		Post detail = postRepository.findById(id).orElse(null);
		
		Member member = memberRepository.findById(detail.getAuthor().getNo()).orElse(null);
		detail.setUsername(member.getUsername());
		
		
		return detail;
	}

	@Override
	public Result delete(Post no, Authentication authentication, HttpServletRequest request) {
		Post post = postRepository.findById(no.getId()).orElse(null);
		Member author = memberRepository.findByNo(post.getAuthor().getNo()).orElse(null);
		String token = utilService.getAccessToken(request);
		Result result = new Result();
        if(jwtTokenProvider.validateToken(token) && authentication.getName().equals(author.getUsername())) {
        	postRepository.deleteById(no.getId());
        	result.setEmpty(true);
        	return result;
        }else {
        	result.setEmpty(false);
        	return result;
	}
	}
	
	@Transactional
	@Override
	public Result update(Post no, Post newpost, Authentication authentication, HttpServletRequest request) {
	        
	        Member author = memberRepository.findByUsername(authentication.getName()).orElse(null); 
	        Post post = postRepository.findById(no.getId()).orElse(null);
	        String token = utilService.getAccessToken(request);
	        String formattedDateTime = utilService.getCreatedAt();

	        Result result = new Result();
	        
	        if(jwtTokenProvider.validateToken(token) && authentication.getName().equals(author.getUsername())) {
	        	post.setTitle(newpost.getTitle());
	        	post.setContent(newpost.getContent());
	        	post.setUpdatedAt(formattedDateTime);
	        	
		    	postRepository.save(post);
		    	result.setEmpty(true);
		    	return result;
	        }else {
	        	result.setEmpty(false);
	        	return result;
	        }
	    }

	@Override
	public List<Post> myboard(Authentication authentication, HttpServletRequest request) {
		Member author = memberRepository.findByUsername(authentication.getName()).orElse(null);
        String token = utilService.getAccessToken(request);
        
        if(jwtTokenProvider.validateToken(token)) {
        	List<Post >myPost = postRepository.findAllByAuthor(author);
        	return myPost;
        }
		return null;
	}
	
	
	
	
}
