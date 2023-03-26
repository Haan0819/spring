package com.omo.utils;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.stereotype.Service;

import jakarta.servlet.http.HttpServletRequest;

@Service
public class UtilService {
	public String getAccessToken(HttpServletRequest request) {
		String tokenWithPrefix = request.getHeader("Authorization");
	    String token = "";
	    
	    if (tokenWithPrefix != null && tokenWithPrefix.startsWith("Bearer ")) {
	        token = tokenWithPrefix.substring(7);
	        // 이제 token 변수에는 접두어 "Bearer "를 제거한 토큰 값이 저장되어 있음
	    }
	    return token;
	}
	
	public String getCreatedAt() {
		LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String formattedDateTime = now.format(formatter);
        return formattedDateTime;
	}
}
