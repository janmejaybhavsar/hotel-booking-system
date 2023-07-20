package com.example.hotelreservationsystem.request;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import java.util.Date;
import java.util.List;

@Getter
@Setter
public class CreateCustomerRequest {
    //Customer table
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private Long signupID;
    private int rewardPoints;
    private Long customerID;

    //new hotels table
    private String hotelName;
    private String hotelAddress;
    private String hotelCity;
    private int roomNumber;
    private String roomType;
    private int maxGuests;
    private double totalPrice;
    private int earnablePoints;
    private boolean breakfast;
    private boolean gym;
    private Long hotelID;

    //reservations table
    private Date checkin;
    private Date checkout;
    private int guestsChanged;

}
