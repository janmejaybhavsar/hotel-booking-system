package com.example.hotelreservationsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.hotelreservationsystem.entity.Admin;
import com.example.hotelreservationsystem.entity.Signup;


@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {
	
	
	Admin findByEmailAndPassword(String email, String password);

}
