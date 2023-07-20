package com.example.hotelreservationsystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.hotelreservationsystem.entity.Admin;
import com.example.hotelreservationsystem.entity.Customer;
import com.example.hotelreservationsystem.service.AdminService;



@RestController
@RequestMapping("/")
@CrossOrigin(origins="*")
public class AdminController {
	
	
	@Autowired
    AdminService adminService;

	 @GetMapping("/confirmAdmin/{email}/{password}")
	    public boolean verifySignup(@PathVariable String email, @PathVariable String password)
	    {
	        return adminService.isValidCustomer(email, password);
	    }
	
}
