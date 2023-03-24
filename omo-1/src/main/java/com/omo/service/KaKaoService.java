package com.omo.service;

import java.util.HashMap;

import com.omo.dto.KPerson;

public interface KaKaoService {
	String getKakaoAccessToken(String code);
	HashMap<String, Object> getUserInfo (String access_Token);
	KPerson kperson(String email);
}
