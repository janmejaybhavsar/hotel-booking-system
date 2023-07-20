package com.example.hotelreservationsystem.controller;

import com.example.hotelreservationsystem.entity.*;
import com.example.hotelreservationsystem.request.CreateCustomerRequest;
import com.example.hotelreservationsystem.request.SignupRequest;
import com.example.hotelreservationsystem.response.CustomerResponseList;
import com.example.hotelreservationsystem.response.SignupResponse;
import com.example.hotelreservationsystem.service.ReservationService;
import com.example.hotelreservationsystem.service.SignupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
@CrossOrigin(origins="*")
public class SignupController {

    @Autowired
    SignupService signupService;


    @PostMapping("/signup")
    public SignupResponse signupUser(@RequestBody SignupRequest signupRequest) {
        Signup signup = signupService.signupUser(signupRequest);
        return new SignupResponse(signup);
    }

    @GetMapping("/confirmSignup/{email}/{password}")
    public boolean verifySignup(@PathVariable String email, @PathVariable String password)
    {
        return signupService.isValidCustomer(email, password);
    }

    @GetMapping("/getCustomerByEmail/{email}")
    public Signup getCustomerByEmail(@PathVariable String email) {
        Signup signup = signupService.getCustomerByEmail(email);
        return signup;
    }

}
