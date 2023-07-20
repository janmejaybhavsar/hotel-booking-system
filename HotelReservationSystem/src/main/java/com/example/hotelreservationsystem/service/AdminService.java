package com.example.hotelreservationsystem.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.hotelreservationsystem.entity.Admin;
import com.example.hotelreservationsystem.entity.Signup;
import com.example.hotelreservationsystem.repository.AdminRepository;
import com.example.hotelreservationsystem.request.AdminRequest;
import com.example.hotelreservationsystem.request.SignupRequest;


@Service
public class AdminService {
	
	
	@Autowired
	AdminRepository adminRepository;
	
	public Admin adminUser(AdminRequest adminRequest) {

        //Retrieve customer object from the createCustomerRequest object.
        Admin admin = new Admin(adminRequest);

        //Save customer object into the customer table.
        admin = adminRepository.save(admin);


        return admin;
    }

    public boolean isValidCustomer(String email, String password)
    {
        Admin admin = adminRepository.findByEmailAndPassword(email, password);

        if(admin == null)
        {
            return false;
        }
        return true;
    }

}
