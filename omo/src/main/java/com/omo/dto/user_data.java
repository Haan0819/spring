package com.omo.dto;

import java.time.LocalDateTime;

public class user_data {
	private Integer no;	
	private String userName;
	private String password;
	private String name;
	private String birth;
	private String sex;
	private String role;
	private String createAt;
	private String updateAt;
	private String jwtoken;
	
	public user_data() {super(); }
	
	public Integer getNO() {
		return this.no;
	}
	
	public void setNo(Integer no) {
		this.no = no;
	}
	
	public String getUserName() {
		return this.userName;
	}
	
	public void setUserName(String userName) {
		this.userName = userName;
	}
	
	public String getPassword() {
		return this.password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getName() {
		return this.name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getBirth() {
		return this.birth;
	}
	
	public void setBirth(String birth) {
		this.birth = birth;
	}
	
	public String getSex() {
		return this.sex;
	}
	
	public void setSex(String sex) {
		this.sex = sex;
	}
	
	public String getUserRoles() {
		return this.role;
	}
	
	public void setUserRoles() {
		this.role = role;
	}
	
	public String getSignup() {
		return this.createAt;
	}
	
	public void setSignup() {
		this.createAt = createAt;
	}
	
	public String getSignin() {
		return this.updateAt;
	}
	
	public void setSignin(LocalDateTime now) {
		this.updateAt = updateAt;
	}
	
	public String getJwtToken() {
		return this.jwtoken;
	}
	
	public void setJwtToken() {
		this.jwtoken = jwtoken;
	}
}
