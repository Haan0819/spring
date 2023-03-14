package com.omo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.omo.dao.MemberRepository;
import com.omo.dto.MemberVo;

import jakarta.transaction.Transactional;

@Service
public class MemberService {
	

    private MemberRepository memberRepository;
    
    @Autowired
    @Qualifier("memberRepository")
    public void setMemberRepository(MemberRepository memberRepository) {
    	this.memberRepository = memberRepository;
    }

    @Transactional
    public List<MemberVo> findAll() {
        List<MemberVo> members = new ArrayList<>();
        memberRepository.findAll().forEach(e -> members.add(e));
        return members;
    }

    public Optional<MemberVo> findById(Long mbrNo) {
        Optional<MemberVo> member = memberRepository.findById(mbrNo);
        return member;
    }

    public void deleteById(Long mbrNo) {
        memberRepository.deleteById(mbrNo);
    }

    public MemberVo save(MemberVo member) {
        memberRepository.save(member);
        return member;
    }

    public void updateById(Long mbrNo, MemberVo member) {
        Optional<MemberVo> e = memberRepository.findById(mbrNo);

        if (e.isPresent()) {
            e.get().setMbrNo(member.getMbrNo());
            e.get().setUsername(member.getUsername());
            e.get().setPassword(member.getPassword());
            memberRepository.save(member);
        }
    }
}