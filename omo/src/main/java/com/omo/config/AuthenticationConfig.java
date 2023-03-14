package com.omo.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.omo.utils.JwtUtil;


@Configuration
@EnableWebSecurity
public class AuthenticationConfig {
	
	private final JwtUtil jwtUtil;
	
	@Value("${jwt.secret}")
	private String secretKey;
	
	public AuthenticationConfig(JwtUtil jwtUtil) {
		this.jwtUtil = jwtUtil;
	}

	@Bean
	public BCryptPasswordEncoder encoder() {
		return new BCryptPasswordEncoder();
	}
	
	
	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception{
		return httpSecurity
				.httpBasic().disable()
				.cors().and()
				.csrf().disable()
				
				.authorizeHttpRequests()
				.requestMatchers("/api/user/signup", "/api/user/signin").permitAll()
				.requestMatchers("/").permitAll()
				.anyRequest().permitAll()
				.and()
				.sessionManagement()
				.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
				.and()
				.addFilterBefore(new JwtFilter(jwtUtil), UsernamePasswordAuthenticationFilter.class)
		 		.build();
	}

}
