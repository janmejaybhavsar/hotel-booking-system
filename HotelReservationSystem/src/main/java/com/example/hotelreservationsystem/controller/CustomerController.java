package com.example.hotelreservationsystem.controller;

import com.example.hotelreservationsystem.entity.*;
import com.example.hotelreservationsystem.request.NewCreateCustomerRequest;
import com.example.hotelreservationsystem.request.CreateCustomerRequest;
import com.example.hotelreservationsystem.response.CustomerResponse;
import com.example.hotelreservationsystem.response.CustomerResponseList;
import com.example.hotelreservationsystem.service.*;
import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/customer")
@CrossOrigin(origins="*")
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @Autowired
    ReservationService reservationService;

    @Autowired
    NewHotelService newHotelService;


//    @GetMapping("/getAll")
//    public List<CustomerResponse> getAll()
//    {
//        List<Customer> customerList = customerService.getAll();
//        List<CustomerResponse> customerResponseList = new ArrayList<>();
//
//        customerList.stream().forEach(customer -> {
//            customerResponseList.add(new CustomerResponse(customer, hotel));
//        });
//        return customerResponseList;
//    }

//    @GetMapping("/getAll")
//    public List<CustomerResponseList> getAll() {
//        List<CustomerResponseList> customerList = customerService.getAll();
//
////        customerList.stream().forEach(customer -> {
////            customerResponseList.add(new CustomerResponse(customer, hotel));
////        });
//        return customerList;
//    }

    @GetMapping("/getCustomerByName/{firstName}/{lastName}")
    public Customer getCustomerByFirstAndLastName(@PathVariable String firstName, @PathVariable String lastName) {
        Customer customer = customerService.getCustomerByFirstAndLastName(firstName, lastName);
        return customer;
    }

//    @GetMapping("/getCustomerByFNameLNameAndEmail/{firstName}/{lastName}/{email}")
//    public CustomerResponseList getCustomerByFNameLNameAndEmail(@PathVariable String firstName, @PathVariable String lastName, @PathVariable String email) {
//        return customerService.getCustomerByFNameLNameAndEmail(firstName, lastName, email);
//    }

//    @GetMapping("/getByName/{firstName}/{lastName}")
//    public CustomerResponseList getByName(@PathVariable String firstName, @PathVariable String lastName) {
//        CustomerResponseList customerResponse = customerService.findByName(firstName, lastName);
//        return customerResponse;
//    }
//
//
//    @GetMapping("/getCustomerByEmail/{email}")
//    public Customer getCustomerByEmail(@PathVariable String email) {
//        Customer customer = customerService.getCustomerByEmail(email);
//        return customer;
//    }
//
//
//    @PostMapping("/create")
//    public CustomerResponseList createCustomer(@RequestBody NewCreateCustomerRequest newCreateCustomerRequest) {
//        Customer customer = customerService.createCustomer(createCustomerRequest);
//        createCustomerRequest.setCustomerID(customer.getCustomerID());

//        NewHotel newHotel = newHotelService.createNewHotel(createCustomerRequest);
//        createCustomerRequest.setHotelID(newHotel.getHotelID());

//        Hotel hotel = hotelService.createHotel(createCustomerRequest);
//        createCustomerRequest.setHotelID(hotel.getHotelID());
//
//        Room room = roomService.createRoom(createCustomerRequest);
//        createCustomerRequest.setRoomID(room.getRoomID());
//
//        Amenity amenity = amenityService.createAmenity(createCustomerRequest);
//        createCustomerRequest.setAmenityID(amenity.getAmenityID());
//
//        Reservation reservation = reservationService.createReservation(createCustomerRequest);
//
//
//        return new CustomerResponseList(customer, newHotel, reservation);
//    }



    @PostMapping("/createCustomer")
    public CustomerResponseList createCustomer(@RequestBody NewCreateCustomerRequest newCreateCustomerRequest) {
        Customer customer = customerService.createCustomer(newCreateCustomerRequest);

        return new CustomerResponseList(customer);
    }


    @DeleteMapping("/deleteByCustomerId/{id}")
    public void deleteCustomerByCustomerId(@PathVariable Long id) {
        customerService.deleteCustomerReservationByReservationID(id);
//        return customer;
    }
    
    @GetMapping("/getCustomerById/{customerID}")
    public Customer getCustomerById(@PathVariable Long customerID) {
        Customer customerList = customerService.getCustomerById(customerID);

        return customerList;
    }

    @PutMapping("/updateCustomerByCustomerID/{id}")
    public void updateCustomer(@RequestBody CreateCustomerRequest createCustomerRequest, @PathVariable Long id)
    {
    	createCustomerRequest.setCustomerID(id);
        customerService.updateCustomer(createCustomerRequest);

    }




}
