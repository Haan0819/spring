package com.omo.dao;
import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import com.omo.dto.LoginRequest;
import com.omo.dto.Person;
import com.omo.dto.user_data;

//데이터에 접근하는 인터페이스!
@Repository
public interface PersonDAO {
	List<Person> getPersons();
	Person getPerson(Integer id);
	user_data getLogin(@Param("data") user_data data);
	LoginRequest login(@Param("data") LoginRequest data);
	void insertData(user_data data);
	void insertPerson(Person person);
	void searchPerson(Person person);
	Integer updatePerson(@Param("id") Integer id, @Param("person") Person person);
	Integer deletePerson(Integer id);
	List<user_data> getUser_id(@Param("data") user_data data);
}