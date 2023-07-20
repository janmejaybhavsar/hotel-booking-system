package com.example.hotelreservationsystem.response;

import com.example.hotelreservationsystem.entity.Admin;
import com.example.hotelreservationsystem.entity.Customer;
import com.example.hotelreservationsystem.entity.Signup;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AdminResponse {

	 private Long id;
	    private String email;
	    private String password;
	    private String confirmpwd;

	    public AdminResponse(Long id, String email, String password, String confirmpwd) {
	        this.id = id;
	        this.email = email;
	        this.password = password;
	        this.confirmpwd = confirmpwd;
	    }

	    public AdminResponse(Admin admin)
	    {
	        this.id = admin.getEmpID();
	        this.email = admin.getEmail();
	        this.password = admin.getPassword();
	        this.confirmpwd = admin.getConfirmpwd();
	    }



}
