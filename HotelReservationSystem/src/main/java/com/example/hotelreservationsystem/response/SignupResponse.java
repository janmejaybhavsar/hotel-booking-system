package com.example.hotelreservationsystem.response;

import com.example.hotelreservationsystem.entity.Signup;
import com.example.hotelreservationsystem.request.SignupRequest;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignupResponse {

    private Long id;
    private String email;
    private String password;
    private String confirmpwd;

    public SignupResponse(Long id, String email, String password, String confirmpwd) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.confirmpwd = confirmpwd;
    }

    public SignupResponse(Signup signup)
    {
        this.id = signup.getSignupID();
        this.email = signup.getEmail();
        this.password = signup.getPassword();
        this.confirmpwd = signup.getConfirmpwd();
    }


}
