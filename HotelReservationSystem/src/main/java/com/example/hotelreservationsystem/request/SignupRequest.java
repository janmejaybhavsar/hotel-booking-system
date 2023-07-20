package com.example.hotelreservationsystem.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignupRequest {

    private String email;
    private String password;
    private String confirmpwd;

    public SignupRequest(String email, String password, String confirmpwd) {
        this.email = email;
        this.password = password;
        this.confirmpwd = confirmpwd;
    }
}
