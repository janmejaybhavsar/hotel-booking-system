package com.example.hotelreservationsystem.response;

import com.example.hotelreservationsystem.entity.Customer;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CustomerResponse {

    //customer table
    private Long id;
    private Long signupID;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private int rewardPoints;

    public CustomerResponse(Long signupID, String firstName, String lastName, String phoneNumber, int rewardPoints) {
        this.signupID = signupID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.rewardPoints = rewardPoints;
    }

    public CustomerResponse(Customer customer) {
        this.id = customer.getCustomerID();
        this.signupID = customer.getSignupID();
        this.firstName = customer.getFirstName();
        this.lastName = customer.getLastName();
        this.phoneNumber = customer.getPhoneNumber();
        this.rewardPoints = customer.getRewardPoints();
    }


}
