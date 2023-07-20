package com.example.hotelreservationsystem.repository;

import com.example.hotelreservationsystem.entity.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

    public Customer getByCustomerID(Long customerID);

    public Customer getBySignupID(Long signupID);

    Customer findByFirstNameAndLastName(String firstName, String lastName);
//    Customer findByEmail(String email);

//    @Query("select c from Customer c where c.firstName = ?1 and c.lastName = ?2")
//    Customer findCustomerByFirstName(String firstName, String lastName);

//    @Query("select c from Customer c where c.firstName = ?1 and c.lastName = ?2 and c.email = ?3")
//    Customer findCustomerByFNameLNameAndEmail(String firstName, String lastName, String email);

//    @Query("select r from Reservation r where r.customerID = ?1")
//    Reservation findReservationByCustomerID(Long customerID);

    //Delete customer by id.
    @Transactional
    @Modifying
    @Query("delete from Customer c where c.customerID = ?1")
    void deleteCustomerByCustomerID(Long id);

    Customer getCustomerByCustomerID(Long id);
    

	String hql = "update Customer set firstName = :firstName, lastName = :lastName, phoneNumber = :phoneNumber, rewardPoints = :rewardPoints where customerID = :customerID";
	
	@Transactional
	@Modifying
	@Query(hql)
	public void updateCustomerTable(String firstName, String lastName, String phoneNumber, int rewardPoints, Long customerID);
}

