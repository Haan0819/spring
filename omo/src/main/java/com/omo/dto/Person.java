package com.omo.dto;


/*
 * 데이터를 표현하기 위해 정의한 클래스
 * VO(Value Object) : 단순히 데이터를 표현할 때 주로 사용하는 약어
 * DTO(Data Transfer Object) : 모델(DB)을 표현할 때 주로 사용하는 약어
 * */

public class Person {
	private Integer id;
	private String name;
	private String job;
	
	public Person() { super(); }
	
	// 각 변수에 대한 getter, setter 
	public Integer getId() {
		return this.id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getName() {
		return this.name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public String getJob() {
		return this.job;
	}
	public void setJob(String job) {
		this.job = job;
	}	
	
}