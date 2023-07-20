package com.example.hotelreservationsystem.entity;

import com.example.hotelreservationsystem.request.NewCreateCustomerRequest;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "customer")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "customer_id")
    private Long customerID;

    @Column(name = "signup_id")
    private Long signupID;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "reward_points")
    private int rewardPoints;

    public Customer(Long signupID, String firstName, String lastName, String phoneNumber, int rewardPoints) {
        this.signupID = signupID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.rewardPoints = rewardPoints;
    }

    //    @OneToMany(mappedBy = "customer")
//    private List<Reservation> reservationsList;

//    public Customer(CreateCustomerRequest createCustomerRequest) {
//        this.firstName = createCustomerRequest.getFirstName();
//        this.lastName = createCustomerRequest.getLastName();
//        this.email = createCustomerRequest.getEmail();
//        this.phoneNumber = createCustomerRequest.getPhoneNumber();
//        this.streetAddress = createCustomerRequest.getStreetAddress();
//        this.city = createCustomerRequest.getCity();
//        this.state = createCustomerRequest.getState();
//        this.zip = createCustomerRequest.getZip();
//        this.rewardPoints = createCustomerRequest.getRewardPoints();
//    }

    public Customer(NewCreateCustomerRequest newCreateCustomerRequest) {
        this.signupID = newCreateCustomerRequest.getSignupID();
        this.firstName = newCreateCustomerRequest.getFirstName();
        this.lastName = newCreateCustomerRequest.getLastName();
        this.phoneNumber = newCreateCustomerRequest.getPhoneNumber();
        this.rewardPoints = newCreateCustomerRequest.getRewardPoints();
    }
}
