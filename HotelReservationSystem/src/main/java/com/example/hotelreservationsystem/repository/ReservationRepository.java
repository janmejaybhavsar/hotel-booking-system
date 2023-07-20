package com.example.hotelreservationsystem.repository;

import com.example.hotelreservationsystem.entity.Customer;
import com.example.hotelreservationsystem.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {

    public List<Reservation> getBySignupID(Long signupID);

    @Query("select r from Reservation r where r.signupID = ?1")
    Reservation findBySignupID(Long signupID);

    @Query("select r from Reservation r where r.customerID = ?1")
    Reservation findByCustomerID(Long customerID);
    
   
    List<Reservation> findAll();
    
    @Transactional
    @Modifying
    @Query("delete from Reservation r where r.reservationID = ?1")
    void deleteReservationByReservationID(Long id);


    String hql_reservation = "update Reservation set customerID = :customerID, hotelID = :hotelID, signupID = :signupID, checkin = :checkin, checkout = :checkout, totalPrice = :totalPrice, guestsChanged = :guestsChanged where reservationID = :reservationID";

    @Transactional
    @Modifying
    @Query(hql_reservation)
    public void updateReservationTable(Long customerID, Long signupID, Long hotelID, Date checkin, Date checkout, double totalPrice, int guestsChanged, Long reservationID);

}
