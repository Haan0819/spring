package com.omo.repository;

import org.springframework.data.repository.CrudRepository;

import com.omo.utils.SaltUtil;

public interface SaltRepository extends CrudRepository<SaltUtil,Long> {

}
