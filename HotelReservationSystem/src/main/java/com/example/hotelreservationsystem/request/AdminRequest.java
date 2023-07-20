package com.example.hotelreservationsystem.request;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class AdminRequest {
	
	private String email;
    private String password;
    private String confirmpwd;

    public AdminRequest(String email, String password, String confirmpwd) {
        this.email = email;
        this.password = password;
        this.confirmpwd = confirmpwd;
    }
    
    
   
}

