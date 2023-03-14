package com.omo.controller;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.omo.dao.MemberRepository;
import com.omo.dto.JwtToken;
import com.omo.dto.LoginRequest;
import com.omo.dto.MemberVo;
import com.omo.service.UserService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/user")
@Slf4j
public class UserController {
	
	@Autowired
	private UserService Service;
	
	@Autowired
	private MemberRepository memberRepository;
	
	
	@PostMapping("/login")
	public ResponseEntity<Optional<MemberVo>> log(@RequestBody LoginRequest dto){
		return ResponseEntity.ok().body(memberRepository.findMemberByUsername(dto.getUsername()));
	}

	@PostMapping("/signin")
	public ResponseEntity<JwtToken> login(@RequestBody Map<String, String> LoginRequest){
		log.info(LoginRequest.get("username"));
		log.info(LoginRequest.get("password"));
		JwtToken token = Service.login(LoginRequest.get("username"), LoginRequest.get("password"));
		System.out.print(token);
		
		return ResponseEntity.ok(token);
	}
}
