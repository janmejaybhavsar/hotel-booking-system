package com.example.hotelreservationsystem.response;

import com.example.hotelreservationsystem.entity.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class CustomerResponseList {

    //customer table
    private Long id;
    private Long signupID;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private int rewardPoints;


    public CustomerResponseList(Customer customer) {
        //customer table fields
        this.id = customer.getCustomerID();
        this.signupID = customer.getSignupID();
        this.firstName = customer.getFirstName();
        this.lastName = customer.getLastName();
        this.phoneNumber = customer.getPhoneNumber();
        this.rewardPoints = customer.getRewardPoints();

    }


}
