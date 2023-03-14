package com.omo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.omo.dao.MemberRepository;
import com.omo.dto.JwtToken;
import com.omo.utils.JwtUtil;

import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@Transactional
public class UserService {
	
	private final AuthenticationManagerBuilder authenticationManagerBuilder;
	
	@Autowired
	private final MemberRepository memberRepository;
	private final BCryptPasswordEncoder encoder;
	private final JwtUtil jwtUtil;
	
	public UserService(BCryptPasswordEncoder encoder, AuthenticationManagerBuilder authenticationManagerBuilder, MemberRepository memberRepository, JwtUtil jwtUtil) {
		this.encoder = encoder;
		this.authenticationManagerBuilder = authenticationManagerBuilder;
		this.memberRepository = memberRepository;
		this.jwtUtil = jwtUtil;
	}

	
	@Value("${jwt.secret}")
	private String secretKey;
	
	private Long expiredMs = 1000 * 60 * 60l;
	
	public JwtToken login(String username, String password) {
		// Authentication 객체 생성
		log.info(username);
		log.info(password);
		UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username, password);
		System.out.println(authenticationToken);
		SecurityContextHolder.getContext().setAuthentication(authenticationToken);
		Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
		//System.out.println(authentication);
		// 검증된 인증 정보로 JWT 생성	
		JwtToken token = jwtUtil.createJwt(authentication);
		//System.out.println(token);
		return token;
	}
}
