package com.example.hotelreservationsystem.controller;

import com.example.hotelreservationsystem.entity.NewHotel;
import com.example.hotelreservationsystem.response.CustomerResponseList;
import com.example.hotelreservationsystem.service.NewHotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/newHotel")
@CrossOrigin(origins="*")
public class NewHotelController {

    @Autowired
    NewHotelService newHotelService;

    @GetMapping("/getHotelsByCity/{city}")
    public List<NewHotel> getHotelsByCity(@PathVariable String city) {
        List<NewHotel> customerList = newHotelService.getNewHotelByCity(city);

        return customerList;
    }
    
    
    @GetMapping("/getHotelsById/{hotelID}")
    public NewHotel getHotelsById(@PathVariable Long hotelID) {
        NewHotel customerList = newHotelService.getNewHotelById(hotelID);

        return customerList;
    }
}
