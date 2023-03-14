package com.omo.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.omo.dto.Person;
import com.omo.dto.user_data;
import com.omo.service.PersonService;

@CrossOrigin(origins = "*", exposedHeaders = "Authorization")
@RestController
public class PersonController {
	// 이 어노테이션 하나로 서비스와의 매핑이 자동으로 처리된다.
		@Autowired
		private PersonService service;
		
		@GetMapping(path="/test")
		public Person personTest() {
			Person person = new Person();
			person.setId(3);
			person.setName("yoo");
			person.setJob("sales");
			return person;
		}
		
		@GetMapping(path="/persons")
		public List<Person> getPersons(){
			return service.getPersons();
		}
		
		@GetMapping(path="/persons/{id}")
		public Person getPerson(@PathVariable Integer id){
			return service.getPerson(id);
		}
		
	    @PostMapping(path="/login")
	    public user_data getLogin(@RequestBody final user_data data) {
	    	return service.getLogin(data);
	    }
	    
	    @PostMapping(path="/signup")
	    public user_data insertData(@RequestBody user_data data) {
	    	service.insertData(data);
	    	return data;
	    }
	    
	    @PostMapping(path="/checkid")
	    public List<user_data> getUser_id(@RequestBody final user_data data) {
	    	return service.getUser_id(data);
	    }
		
		// @RequestBody : 요청 시 포함할 데이터
		@PostMapping(path="/persons")
		public Person insertPerson(@RequestBody Person person) {
			
			// 실제로 삽입하는 처리를 만들어야 한다.
			service.insertPerson(person);
			return person;
		}
		
		@PutMapping(path="persons/{id}")
		public Person updatePerson(@PathVariable Integer id, @RequestBody Person person) {
			
			return service.updatePerson(id, person);
		}
		
		@DeleteMapping(path="persons/{id}")
		public Integer deletePerson(@PathVariable Integer id) {
			return service.deletePerson(id);
		}
	}