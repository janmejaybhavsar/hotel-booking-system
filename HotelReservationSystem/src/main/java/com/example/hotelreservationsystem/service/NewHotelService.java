package com.example.hotelreservationsystem.service;

import com.example.hotelreservationsystem.entity.NewHotel;
import com.example.hotelreservationsystem.repository.NewHotelRepository;
import com.example.hotelreservationsystem.request.CreateCustomerRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NewHotelService {

    @Autowired
    NewHotelRepository newHotelRepository;

    public NewHotel createNewHotel(CreateCustomerRequest createCustomerRequest)
    {
        NewHotel newHotel = new NewHotel(createCustomerRequest);

        newHotel = newHotelRepository.save(newHotel);

        return newHotel;
    }

    public List<NewHotel> getNewHotelByCity(String city)
    {
        List<NewHotel> hotelList = newHotelRepository.findNewHotelByHotelCity(city);

        return hotelList;
    }
    
    public NewHotel getNewHotelById(Long id)
    {
    	return  newHotelRepository.getHotelByHotelID(id);
    }
}
