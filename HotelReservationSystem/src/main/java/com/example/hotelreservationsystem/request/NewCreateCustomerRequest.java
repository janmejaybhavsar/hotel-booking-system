package com.example.hotelreservationsystem.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NewCreateCustomerRequest {

    private Long customerID;
    private Long signupID;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private int rewardPoints;

}
