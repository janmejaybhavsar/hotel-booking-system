package com.example.hotelreservationsystem.response;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class ResponseList {

    //Customer info.
	private int id;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private int rewardPoints;

    //Hotel info.
    private String hotelName;
    private String hotelAddress;
    private String hotelCity;
    private int roomNumber;
    private String roomType;
    private int maxGuests;
    private double h_totalPrice;
    private int earnablePoints;
    private boolean breakfast;
    private boolean gym;

    //Reservation info.
    private Long reservationID;
    private Long customerID;
    private Long signupID;
    private Long hotelID;
    private Date checkin;
    private Date checkout;
    private double totalPrice;
    private int guestsChanged;
    
    
}
