package com.example.hotelreservationsystem.controller;

import com.example.hotelreservationsystem.entity.Customer;
import com.example.hotelreservationsystem.entity.Reservation;
import com.example.hotelreservationsystem.request.NewCreateCustomerRequest;
import com.example.hotelreservationsystem.request.NewReservationRequest;
import com.example.hotelreservationsystem.response.CustomerResponseList;
import com.example.hotelreservationsystem.response.ReservationResponse;
import com.example.hotelreservationsystem.response.ResponseList;
import com.example.hotelreservationsystem.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.*;

@RestController
@RequestMapping("/")
@CrossOrigin(origins="*")
public class ReservationController {

    @Autowired
    ReservationService reservationService;

    Set holidays = new HashSet();

    @PostMapping("/createReservation")
    public ReservationResponse createReservation(@RequestBody NewReservationRequest newReservationRequest) {
        Reservation reservation = reservationService.createReservation(newReservationRequest);

        return new ReservationResponse(reservation);
    }

    @GetMapping("/getReservation/{signupID}")
    public List<ResponseList> getReservationBySignupID(@PathVariable Long signupID) {
        List<ResponseList> reservationList = reservationService.getCustomerHotelReservationBySignupID(signupID);

        return reservationList;
    }
    
    
    @GetMapping("/getAllReservations")
    public List<Reservation> findAll(){
    	List<Reservation> reservations = new ArrayList<>();
    	reservationService.findAll().forEach(reservations :: add);
    	return reservations;
    }
  

    public void setHolidays()
    {
        SimpleDateFormat formatter = new SimpleDateFormat("MM/dd/yyyy");

        Date thanksgiving1 = new GregorianCalendar(2022, Calendar.NOVEMBER, 24).getTime();
        holidays.add(formatter.format(thanksgiving1));

        Date thanksgiving2 = new GregorianCalendar(2023, Calendar.NOVEMBER, 24).getTime();
        holidays.add(formatter.format(thanksgiving2));

        Date christmas1 = new GregorianCalendar(2022, Calendar.DECEMBER, 25).getTime();
        holidays.add(formatter.format(christmas1));

        Date christmas2 = new GregorianCalendar(2023, Calendar.DECEMBER, 25).getTime();
        holidays.add(formatter.format(christmas2));

        Date independenceDay1 = new GregorianCalendar(2022, Calendar.JULY, 4).getTime();
        holidays.add(formatter.format(independenceDay1));

        Date independenceDay2 = new GregorianCalendar(2023, Calendar.JULY, 4).getTime();
        holidays.add(formatter.format(independenceDay2));

        Date newYears1 = new GregorianCalendar(2022, Calendar.DECEMBER, 31).getTime();
        holidays.add(formatter.format(newYears1));

        Date newYears2 = new GregorianCalendar(2023, Calendar.DECEMBER, 31).getTime();
        holidays.add(formatter.format(newYears2));
    }

    public boolean isHoliday(String date)
    {
        setHolidays();
        SimpleDateFormat formatter = new SimpleDateFormat("MM/dd/yyyy");

        if (holidays.contains(formatter.format(date)))
        {
            return true;
        }
        return false;
    }

    public boolean isWeekend(Date date)
    {
        SimpleDateFormat formatter = new SimpleDateFormat("MM/dd/yyyy");
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);

        int day = calendar.get(Calendar.DAY_OF_WEEK);
        return day == Calendar.SATURDAY || day == Calendar.SUNDAY;
    }


}
