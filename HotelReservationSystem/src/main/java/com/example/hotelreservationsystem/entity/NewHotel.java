package com.example.hotelreservationsystem.entity;

import com.example.hotelreservationsystem.request.CreateCustomerRequest;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "new_hotels")
public class NewHotel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "hotel_id")
    private Long hotelID;

    @Column(name = "hotel_name")
    private String hotelName;

    @Column(name = "hotel_address")
    private String hotelAddress;

    @Column(name = "hotel_city")
    private String hotelCity;

    @Column(name = "room_number")
    private int roomNumber;

    @Column(name = "room_type")
    private String roomType;
    
    @Column(name = "max_guests")
    private int maxGuests;

    @Column(name = "total_price")
    private double totalPrice;

    @Column(name = "earnable_points")
    private int earnablePoints;

    @Column(name = "breakfast")
    private boolean breakfast;

    @Column(name = "gym")
    private boolean gym;

    public NewHotel(String hotelName, String hotelAddress, String hotelCity, int roomNumber, String roomType, int maxGuests, double totalPrice, int earnablePoints, boolean breakfast, boolean gym) {
        this.hotelName = hotelName;
        this.hotelAddress = hotelAddress;
        this.hotelCity = hotelCity;
        this.roomNumber = roomNumber;
        this.roomType = roomType;
        this.maxGuests = maxGuests;
        this.totalPrice = totalPrice;
        this.earnablePoints = earnablePoints;
        this.breakfast = breakfast;
        this.gym = gym;
    }

    public NewHotel(CreateCustomerRequest createCustomerRequest) {
        this.hotelName = createCustomerRequest.getHotelName();
        this.hotelAddress = createCustomerRequest.getHotelAddress();
        this.hotelCity = createCustomerRequest.getHotelCity();
        this.roomNumber = createCustomerRequest.getRoomNumber();
        this.roomType = createCustomerRequest.getRoomType();
        this.maxGuests = createCustomerRequest.getMaxGuests();
        this.totalPrice = createCustomerRequest.getTotalPrice();
        this.earnablePoints = createCustomerRequest.getEarnablePoints();
        this.breakfast = createCustomerRequest.isBreakfast();
        this.gym = createCustomerRequest.isGym();

    }
}
