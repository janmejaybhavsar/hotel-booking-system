package com.example.hotelreservationsystem.repository;

import com.example.hotelreservationsystem.entity.NewHotel;
import com.example.hotelreservationsystem.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface NewHotelRepository extends JpaRepository<NewHotel, Long> {

    @Query("select r from NewHotel r where r.hotelID = ?1")
    Reservation findByHotelID(Long hotelID);

    @Transactional
    @Modifying
    @Query("delete from NewHotel h where h.hotelID = ?1")
    void deleteHotelByHotelID(Long id);

      String hql_hotel = "update NewHotel set hotelName = :hotelName, hotelAddress = :hotelAddress, hotelCity = :hotelCity, roomNumber = :roomNumber, roomType = :roomType, maxGuests = :maxGuests, totalPrice = :totalPrice, earnablePoints = :earnablePoints, breakfast = :breakfast, gym = :gym  where hotelID = :hotelID";

    @Transactional
    @Modifying
    @Query(hql_hotel)
    public void updateHotelTable(String hotelName, String hotelAddress, String hotelCity, int roomNumber, String roomType, int maxGuests, double totalPrice, int earnablePoints, boolean breakfast, boolean gym, Long hotelID);

    NewHotel getHotelByHotelID(Long id);

    @Transactional
    @Modifying
    @Query("select h from NewHotel h")
    List<NewHotel> getAllHotels();


    List<NewHotel> findNewHotelByHotelCity(String city);
    


}
