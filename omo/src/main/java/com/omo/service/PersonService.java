package com.omo.service;

import java.util.List;
import com.omo.dto.Person;
import com.omo.dto.user_data;

public interface PersonService {
	List<Person> getPersons();
	Person getPerson(Integer id);
	user_data getLogin(user_data data);
	void insertPerson(Person person);
	Person updatePerson(Integer id, Person person);
	Integer deletePerson(Integer id);
	void insertData(user_data data);
	List<user_data> getUser_id(user_data data);
}
