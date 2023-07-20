package com.example.hotelreservationsystem.service;

import com.example.hotelreservationsystem.request.NewCreateCustomerRequest;
import com.example.hotelreservationsystem.request.CreateCustomerRequest;
import com.example.hotelreservationsystem.entity.*;
import com.example.hotelreservationsystem.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    ReservationRepository reservationRepository;

    @Autowired
    NewHotelRepository newHotelRepository;

//    public List<CustomerResponseList> getAll(){
//    //    return customerRepository.findAll();
//
//        List<Customer> customerList = customerRepository.findAll();
//
//        List<CustomerResponseList> cList = new ArrayList<>();
//
//        for(Customer customer : customerList)
//        {
//            Reservation reservation = reservationRepository.findByCustomerID(customer.getCustomerID());
//            NewHotel newHotel = newHotelRepository.getHotelByHotelID(reservation.getHotelID());
//
//            CustomerResponseList customerResponseList = new CustomerResponseList(customer, newHotel, reservation);
//
//            cList.add(customerResponseList);
//        }
//
//        return cList;
//
//    }

    public Customer createCustomer(NewCreateCustomerRequest newCreateCustomerRequest) {

        //Retrieve customer object from the createCustomerRequest object.
        Customer customer = new Customer(newCreateCustomerRequest);

        //Save customer object into the customer table.
        customer = customerRepository.save(customer);

        return customer;
    }

    public void updateCustomer(CreateCustomerRequest c)
    {
        //Read reservation table by reservation id.
        Reservation reservation = reservationRepository.findByCustomerID(c.getCustomerID());
        Long reservationID = reservation.getReservationID();
        Long customerID = reservation.getCustomerID();
        Long hotelID = reservation.getHotelID();

        customerRepository.updateCustomerTable(c.getFirstName(), c.getLastName(), c.getPhoneNumber(), c.getRewardPoints(), c.getCustomerID());

//        newHotelRepository.updateHotelTable(c.getHotelName(), c.getHotelAddress(), c.getHotelCity(), c.getRoomNumber(), c.getRoomType(), c.getTotalPrice(), c.getEarnablePoints(), c.isBreakfast(), c.isGym(), hotelID);

        reservationRepository.updateReservationTable(c.getCustomerID(), c.getSignupID(), hotelID, c.getCheckin(), c.getCheckout(), c.getTotalPrice(), c.getGuestsChanged(), reservationID);
    }
    
    

    public void deleteCustomerReservationByReservationID(Long id)
    {
        //Read reservation table by reservation id.
        Reservation reservation = reservationRepository.findByCustomerID(id);
        Long reservationID = reservation.getReservationID();
        Long customerID = reservation.getCustomerID();
//        Long hotelID = reservation.getHotelID();

        //Delete reservation row based on customer id.
        reservationRepository.deleteReservationByReservationID(reservationID);

        //Delete customer row based on customer id.
        customerRepository.deleteCustomerByCustomerID(customerID);

        //Delete hotel row based on customer id.
//        newHotelRepository.deleteHotelByHotelID(hotelID);
    }

    public Customer getCustomerByFirstAndLastName(String firstName, String lastName){
        Customer customer = customerRepository.findByFirstNameAndLastName(firstName, lastName);

        return customer;
    }
    
    public Customer getCustomerById(Long customerID)
    {
    	return  customerRepository.getCustomerByCustomerID(customerID);
    }

//    public CustomerResponseList getCustomerByFNameLNameAndEmail(String firstName, String lastName, String email)
//    {
//        Customer c = customerRepository.findCustomerByFNameLNameAndEmail(firstName, lastName, email);
//
//        //Read reservation table by reservation id.
//        Reservation reservation = reservationRepository.findByCustomerID(c.getCustomerID());
//        Long reservationID = reservation.getReservationID();
//        Long customerID = reservation.getCustomerID();
//        Long hotelID = reservation.getHotelID();
//
//        NewHotel newHotel = newHotelRepository.getHotelByHotelID(hotelID);
//        return new CustomerResponseList(c, newHotel, reservation);
////        customerRepository.updateCustomerTable(c.getFirstName(), c.getLastName(), c.getEmail(), c.getPhoneNumber(), c.getStreetAddress(), c.getCity(), c.getState(), c.getZip(), c.getRewardPoints(), c.getCustomerID());
////
////        newHotelRepository.updateHotelTable(c.getHotelName(), c.getHotelAddress(), c.getHotelCity(), c.getRoomNumber(), c.getRoomType(), c.getTotalPrice(), c.getEarnablePoints(), c.isBreakfast(), c.isGym(), hotelID);
////
////        reservationRepository.updateReservationTable(c.getCustomerID(), hotelID, c.getCheckin(), c.getCheckout(), c.getTotalPrice(), reservationID);
//
//    }

//    public Customer getCustomerByEmail(String email)
//    {
//        return customerRepository.findByEmail(email);
//    }
//
//    public CustomerResponseList findByName(String firstName, String lastName){
//        Customer customer  = customerRepository.findCustomerByFirstName(firstName, lastName);
//        Reservation reservation = customerRepository.findReservationByCustomerID(customer.getCustomerID());
//        Hotel hotel = customerRepository.findHotelByID(reservation.getHotelID());
//        Room room = customerRepository.findRoomByID(reservation.getRoomID());
//        Amenity amenity = customerRepository.findAmenityByID(reservation.getAmenityID());
//        return new CustomerResponseList(customer, hotel, room, reservation, amenity);
//
//    }


}
