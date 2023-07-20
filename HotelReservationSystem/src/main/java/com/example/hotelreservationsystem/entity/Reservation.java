package com.example.hotelreservationsystem.entity;

import com.example.hotelreservationsystem.request.CreateCustomerRequest;
import com.example.hotelreservationsystem.request.NewReservationRequest;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "reservations")
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "reservations_id")
    private Long reservationID;

    @Column(name = "customer_id")
    private Long customerID;

    @Column(name = "signup_id")
    private Long signupID;

    @Column(name = "hotel_id")
    private Long hotelID;

    @Column(name = "checkin")
    private Date checkin;

    @Column(name = "checkout")
    private Date checkout;

    @Column(name = "total_price")
    private double totalPrice;
    
    @Column(name = "max_guests")
    private int guestsChanged;

    public Reservation(Long reservationID, Long customerID, Long signupID, Long hotelID, Date checkin, Date checkout, double totalPrice, int guestsChanged) {
       this.reservationID = reservationID;
    	this.customerID = customerID;
        this.signupID = signupID;
        this.hotelID = hotelID;
        this.checkin = checkin;
        this.checkout = checkout;
        this.totalPrice = totalPrice;
        this.guestsChanged = guestsChanged;
    }

    public Reservation(NewReservationRequest newReservationRequest) {
    	
    	this.reservationID = newReservationRequest.getReservationID();
        this.customerID = newReservationRequest.getCustomerID();
        this.signupID = newReservationRequest.getSignupID();
        this.hotelID = newReservationRequest.getHotelID();
        this.checkin = newReservationRequest.getCheckin();
        this.checkout = newReservationRequest.getCheckout();
        this.totalPrice = newReservationRequest.getTotalPrice();
        this.guestsChanged = newReservationRequest.getGuestsChanged();
    }
	
    
    
    //    @ManyToOne
//    @JoinColumn(name = "customer_id")
//    private Customer customer;
}
