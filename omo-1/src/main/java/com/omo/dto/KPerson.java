package com.omo.dto;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.CreatedDate;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity(name="kperson")
public class KPerson {
	private String nick_name;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="kperson_id" ,updatable = false, unique = true, nullable = false)
	private Long id;
	
	@Column(name = "email", unique = true)
	private String email;

	private String authority;
	
	@CreatedDate
	private LocalDateTime register_time;
	
    @JsonIgnore
    @OneToMany(mappedBy = "kauthor")
    private List<Comment> comments = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "kauthor", cascade = CascadeType.DETACH)
    private List<Post> posts = new ArrayList<>();
	
	public KPerson() {}
	
	public void setAuthority(String authority) {
		this.authority = "ROLE_USER";
	}
	
	public void update(String email, String authority) {
		this.email = email;
		this.authority = authority;
	}
	
}
