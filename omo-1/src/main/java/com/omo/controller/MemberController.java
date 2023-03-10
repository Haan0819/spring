package com.omo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.omo.dto.JwtToken;
import com.omo.dto.Member;
import com.omo.dto.MemberLoginRequestDto;
import com.omo.dto.Post;
import com.omo.dto.Search;
import com.omo.service.MemberService;
import com.omo.utils.JwtTokenProvider;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class MemberController {
    private final MemberService memberService;
    private final JwtTokenProvider jwtTokenProvider;
    private final HttpServletRequest request;
    
    @Autowired
    public MemberController(MemberService memberService, HttpServletRequest request, JwtTokenProvider jwtTokenProvider) {
        this.memberService = memberService;
        this.request = request;
        this.jwtTokenProvider = jwtTokenProvider;
    }
 
    @PostMapping("/signin")
    public ResponseEntity<String> signin(@RequestBody MemberLoginRequestDto memberLoginRequestDto, HttpServletResponse response) {
        String username = memberLoginRequestDto.getUsername();
        String password = memberLoginRequestDto.getPassword();
        
        JwtToken tokenInfo = memberService.signin(username, password, response);

        if(tokenInfo.getErrorMessage() == null) {
        	HttpHeaders headers = new HttpHeaders();
            headers.set("Authorization", tokenInfo.getAccessToken());
            String responseBody = "Success!";
            ResponseEntity<String> res = new ResponseEntity<>(responseBody, headers, HttpStatus.OK);
        	return res;
        }
        String message = tokenInfo.getErrorMessage();
        
        return new ResponseEntity<String>(message, HttpStatus.OK);
    }

    
    @PostMapping("/signup")
    public ResponseEntity<Member> signup(@RequestBody Member member) {
    	return new ResponseEntity<Member>(memberService.signup(member), HttpStatus.OK);
    }
    
    @PostMapping("/search_id")
    public ResponseEntity<String> SearchId(@RequestBody Search search){
    	return new ResponseEntity<String>(memberService.searchId(search), HttpStatus.OK);
    }
    
    @PostMapping("/search_pw")
    public ResponseEntity<String> SearchPw(@RequestBody Search search){
    	return new ResponseEntity<String>(memberService.searchPw(search), HttpStatus.OK);
    }
    @PostMapping("/change_pw")
    public ResponseEntity<String> ChangePw(@RequestBody Search search){
    	return new ResponseEntity<String>(memberService.changePw(search), HttpStatus.OK);
    }
    
    @RequestMapping(value = "/logout", method = RequestMethod.POST)
    public ResponseEntity<String> logout(HttpServletRequest request, HttpServletResponse response) {

        return ResponseEntity.ok("Successfully logged out.");
    }
    
    @PostMapping("/add_post")
    public ResponseEntity<Post> add_post(@RequestBody Post post, Authentication authentication){
    	return new ResponseEntity<Post>(memberService.add_post(post, authentication), HttpStatus.OK);
    }

    
    @PostMapping("/refresh")
    public ResponseEntity<String> refresh(HttpServletRequest request, HttpServletResponse response) {
        String tokenWithPrefix = request.getHeader("Authorization");
        String token = "";
        if (tokenWithPrefix != null && tokenWithPrefix.startsWith("Bearer ")) {
            token = tokenWithPrefix.substring(7);
            // ?????? token ???????????? ????????? "Bearer "??? ????????? ?????? ?????? ???????????? ??????
        }

        
        JwtToken regeneratedToken = memberService.refresh(token, request, response);
        String toke = regeneratedToken.getAccessToken();
        
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", toke);
        String responseBody = "Success!";
        ResponseEntity<String> res = new ResponseEntity<>(responseBody, headers, HttpStatus.OK);
        
        
        return res;
    }

}