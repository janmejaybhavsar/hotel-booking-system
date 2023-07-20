package com.example.hotelreservationsystem.service;

import com.example.hotelreservationsystem.entity.Customer;
import com.example.hotelreservationsystem.entity.NewHotel;
import com.example.hotelreservationsystem.entity.Reservation;
import com.example.hotelreservationsystem.repository.CustomerRepository;
import com.example.hotelreservationsystem.repository.NewHotelRepository;
import com.example.hotelreservationsystem.repository.ReservationRepository;
import com.example.hotelreservationsystem.request.CreateCustomerRequest;
import com.example.hotelreservationsystem.request.NewReservationRequest;
import com.example.hotelreservationsystem.response.ResponseList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class ReservationService {

    @Autowired
    ReservationRepository reservationRepository;

    @Autowired
    NewHotelRepository newHotelRepository;

    @Autowired
    CustomerRepository customerRepository;

    public Reservation createReservation(NewReservationRequest newReservationRequest) {

        //Retrieve customer object from the createCustomerRequest object.
        Reservation reservation = new Reservation(newReservationRequest);

        //Save customer object into the customer table.
        reservation = reservationRepository.save(reservation);

        return reservation;
    }
    
    
    public List<Reservation> findAll(){
    	return reservationRepository.findAll();
    }
 

    public List<ResponseList> getCustomerHotelReservationBySignupID(Long signupID)
    {
        List<Reservation> reservation = reservationRepository.getBySignupID(signupID);

        List<ResponseList> reservationList = new ArrayList<>();

        for (int i = 0; i < reservation.size(); i++)
        {
            ResponseList responseList = new ResponseList();
            responseList.setReservationID(reservation.get(i).getReservationID());
            responseList.setHotelID(reservation.get(i).getHotelID());
            responseList.setCustomerID(reservation.get(i).getCustomerID());
            responseList.setSignupID(reservation.get(i).getSignupID());
            responseList.setCheckin(reservation.get(i).getCheckin());
            responseList.setCheckout(reservation.get(i).getCheckout());
            responseList.setTotalPrice(reservation.get(i).getTotalPrice());
            responseList.setGuestsChanged(reservation.get(i).getGuestsChanged());
            System.out.println("--------------->" + reservation.get(i).getGuestsChanged());

            //Hotel info.
            NewHotel newHotel = newHotelRepository.getHotelByHotelID(reservation.get(i).getHotelID());
            responseList.setHotelName(newHotel.getHotelName());
            responseList.setHotelAddress(newHotel.getHotelAddress());
            responseList.setHotelCity(newHotel.getHotelCity());
            responseList.setRoomNumber(newHotel.getRoomNumber());
            responseList.setRoomType(newHotel.getRoomType());
            responseList.setMaxGuests(newHotel.getMaxGuests());
            responseList.setH_totalPrice(newHotel.getTotalPrice());
            responseList.setEarnablePoints(newHotel.getEarnablePoints());
            responseList.setBreakfast(newHotel.isBreakfast());
            responseList.setGym(newHotel.isGym());


            //Customer info.
            Customer customer = customerRepository.getBySignupID(reservation.get(i).getSignupID());
            responseList.setFirstName(customer.getFirstName());
            responseList.setLastName(customer.getLastName());
            responseList.setPhoneNumber(customer.getPhoneNumber());
            responseList.setRewardPoints(customer.getRewardPoints());

            reservationList.add(responseList);
        }

        return reservationList;

    }
}
