package com.example.hotelreservationsystem.request;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class NewReservationRequest {

	private Long reservationID;
    private Long customerID;
    private Long signupID;
    private Long hotelID;
    private Date checkin;
    private Date checkout;
    private double totalPrice;
    private int guestsChanged;
}
