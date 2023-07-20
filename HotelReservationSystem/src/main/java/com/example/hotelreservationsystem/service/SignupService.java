package com.example.hotelreservationsystem.service;

import com.example.hotelreservationsystem.entity.Reservation;
import com.example.hotelreservationsystem.entity.Signup;
import com.example.hotelreservationsystem.repository.SignupRepository;
import com.example.hotelreservationsystem.request.CreateCustomerRequest;
import com.example.hotelreservationsystem.request.SignupRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SignupService {

    @Autowired
    SignupRepository signupRepository;

    public Signup signupUser(SignupRequest signupRequest) {

        //Retrieve customer object from the createCustomerRequest object.
        Signup signup = new Signup(signupRequest);

        //Save customer object into the customer table.
        signup = signupRepository.save(signup);


        return signup;
    }
    
    public Signup getCustomerByEmail(String email)
    {
        return signupRepository.findByEmail(email);
    }
    
    

    public boolean isValidCustomer(String email, String password)
    {
        Signup signup = signupRepository.findByEmailAndPassword(email, password);

        if(signup == null)
        {
            return false;
        }
        return true;
    }
}
