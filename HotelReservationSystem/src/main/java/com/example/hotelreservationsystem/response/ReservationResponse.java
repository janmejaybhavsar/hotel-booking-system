package com.example.hotelreservationsystem.response;

import com.example.hotelreservationsystem.entity.Reservation;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class ReservationResponse {

    private Long reservationID;
    private Long customerID;
    private Long signupID;
    private Long hotelID;
    private Date checkin;
    private Date checkout;
    private double totalPrice;
    private int guestsChanged;

    public ReservationResponse(Long customerID, Long signupID, Long hotelID, Date checkin, Date checkout, double totalPrice, int guestsChanged) {
        this.customerID = customerID;
        this.signupID = signupID;
        this.hotelID = hotelID;
        this.checkin = checkin;
        this.checkout = checkout;
        this.totalPrice = totalPrice;
        this.guestsChanged = guestsChanged;
    }

    //Reservation object returns to client.
    public ReservationResponse(Reservation reservation) {
        this.reservationID = reservation.getReservationID();
        this.customerID = reservation.getCustomerID();
        this.signupID = reservation.getSignupID();
        this.hotelID = reservation.getHotelID();
        this.checkin = reservation.getCheckin();
        this.checkout = reservation.getCheckout();
        this.totalPrice = reservation.getTotalPrice();
        this.guestsChanged = reservation.getGuestsChanged();

    }
}
