package com.omo.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.omo.dto.MemberVo;


@Repository
public interface MemberRepository extends JpaRepository<MemberVo, Long> {
	
    public Optional<MemberVo> findMemberByUsername(String username);

    public Optional<MemberVo> findByPassword(String password);
    

    //like검색도 가능
//    public List<MemberVo> findByNameLike(String keyword);
}