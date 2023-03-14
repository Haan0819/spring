package com.omo.repository;

import org.springframework.data.repository.CrudRepository;

import com.omo.dto.Member;

public interface MemberRepository extends CrudRepository<Member, Long> {

    Member findByUsername(String username);

}
