package com.omo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.omo.dto.KPerson;

@Repository
public interface KPersonDAO extends JpaRepository<KPerson, Long>{


	KPerson findByEmail(String email);
}
