package com.example.hotelreservationsystem.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.example.hotelreservationsystem.request.AdminRequest;
import com.example.hotelreservationsystem.request.SignupRequest;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "admin")
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "emp_id")
    private Long empID;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "conf_pwd")
    private String confirmpwd;

    public Admin(String email, String password, String confirmpwd) {
        this.email = email;
        this.password = password;
        this.confirmpwd = confirmpwd;
    }
    
    

    public Admin(AdminRequest adminRequest) {
        this.email = adminRequest.getEmail();
        this.password = adminRequest.getPassword();
        this.confirmpwd = adminRequest.getConfirmpwd();
    }


}