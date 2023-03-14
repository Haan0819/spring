package com.omo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.omo.dao.PersonDAO;
import com.omo.dto.Person;
import com.omo.dto.user_data;

@Service
public class PersonServiceImpl implements PersonService {

	@Autowired
	private PersonDAO dao;
	
	
	@Override
	public List<Person> getPersons() {
		return dao.getPersons();
	}
	
	@Override
	public Person getPerson(Integer id) {
		return dao.getPerson(id);
	}
	
	@Override
	public user_data getLogin(user_data data) {
		user_data getData = new user_data();
		getData.setUserName(data.getUserName());
		getData.setPassword(data.getPassword());
		
		return getData;
	}
	
	@Override
	public void insertData(user_data data) {
		dao.insertData(data);
	}


	@Override
	public void insertPerson(Person person) {
		
		dao.insertPerson(person);
	}
	
	@Override
	public List<user_data> getUser_id(user_data data) {
		return dao.getUser_id(data);
	}

	@Override
	public Person updatePerson(Integer id, Person person) {
		
		Person updatedPerson = new Person();
		
		// SQL의 update는 갱신 성공한 레코드 수를 반환한다.
		if(dao.updatePerson(id, person) == 1) {
			updatedPerson.setId(id);
			updatedPerson.setName(person.getName());
			updatedPerson.setJob(person.getJob());
		}
		
		return updatedPerson;
	}

	@Override
	public Integer deletePerson(Integer id) {

		
		return dao.deletePerson(id);
	}
	
	
	
	

}