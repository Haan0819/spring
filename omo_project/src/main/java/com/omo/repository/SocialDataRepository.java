package com.omo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.omo.dto.SocialData;

@Repository
public interface SocialDataRepository extends CrudRepository<SocialData,Long> {

    SocialData findByIdAndType(String username, String type);

}