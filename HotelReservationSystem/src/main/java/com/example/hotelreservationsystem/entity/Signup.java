package com.example.hotelreservationsystem.entity;

import com.example.hotelreservationsystem.request.CreateCustomerRequest;
import com.example.hotelreservationsystem.request.SignupRequest;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "signup")
public class Signup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "signup_id")
    private Long signupID;

    @Column(name = "email")
    private String email;

    @Column(name = "pwd")
    private String password;

    @Column(name = "conf_pwd")
    private String confirmpwd;

    public Signup(String email, String password, String confirmpwd) {
        this.email = email;
        this.password = password;
        this.confirmpwd = confirmpwd;
    }

    public Signup(SignupRequest signupRequest) {
        this.email = signupRequest.getEmail();
        this.password = signupRequest.getPassword();
        this.confirmpwd = signupRequest.getConfirmpwd();
    }


}
