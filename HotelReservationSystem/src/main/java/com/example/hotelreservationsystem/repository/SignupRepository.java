package com.example.hotelreservationsystem.repository;

import com.example.hotelreservationsystem.entity.Signup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SignupRepository extends JpaRepository<Signup, Long> {

    Signup findByEmailAndPassword(String email, String password);
    Signup findByEmail(String email);

}
