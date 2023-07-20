import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),

  color: theme.palette.text.secondary,
}));

export default function CheckoutScreen(props) {
  const [checkInvalue, setCheckinValue] = React.useState(new Date().toISOString());
  var day1 = -1;
  var day2 = -1;
  var checkinadd = new Date(checkInvalue);
  checkinadd.setDate(checkinadd.getDate() + 7);
  var date = new Date();
  date.setDate(date.getDate() + 1);
  const [checkOutvalue, setCheckoutValue] = React.useState(date.toISOString());
  const [paymentVisible, setPaymentVisible] = useState(false);
  const [fakeCardInfo, setFakeCardInfo] = useState({
    nameOnCard: "",
    cardNum: "",
    expiredDate: "",
    cvv: "",
  });

  let data = JSON.parse(localStorage.getItem("selectedHotel"));


  const hotelValue = JSON.parse(localStorage.getItem("selectedHotel"));
  const checkUserId = JSON.parse(localStorage.getItem("signupId"));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedValue, setSelectedValue] = React.useState(data.maxguests);
  const [selectedPrice, setSelectedPrice] = React.useState(data.price);
  const [customerValues, setCustomerValues] = React.useState({
    signupID: checkUserId.signupID,
    firstName: "",
    lastName: "",
    phoneNumber: "",
    rewardPoints: "",
  });

  const customerHandle = () => {
    fetch("http://localhost:8080/customer/createCustomer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customerValues),
    })
      .then((response) => {
        localStorage.setItem("userflname", JSON.stringify(customerValues));
      })
      .catch((error) => console.log("Error", error));
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (event) => {
    setSelectedValue(event.currentTarget.value);
    if (data.type === "Single") {
      if (event.currentTarget.value === 1) {
        setSelectedPrice(data.price - (50 / 100) * data.price);
        setReservationValues({
          ...reservationValues,
          totalPrice: data.price - (50 / 100) * data.price,
          guestsChanged: 1,
        });
      }
      if (event.currentTarget.value === 2) {
        setSelectedPrice(data.price);
        setReservationValues({
          ...reservationValues,
          totalPrice: data.price,
          guestsChanged: 2,
        });
      }
    }
    if (data.type === "Double") {
      if (event.currentTarget.value === 1) {
        setSelectedPrice(data.price - (75 / 100) * data.price);
        setReservationValues({
          ...reservationValues,
          totalPrice: data.price - (75 / 100) * data.price,
          guestsChanged: 1,
        });
      }
      if (event.currentTarget.value === 2) {
        setSelectedPrice(data.price - (50 / 100) * data.price);
        setReservationValues({
          ...reservationValues,
          totalPrice: data.price - (50 / 100) * data.price,
          guestsChanged: 2,
        });
      }
      if (event.currentTarget.value === 3) {
        setSelectedPrice(data.price - (25 / 100) * data.price);
        setReservationValues({
          ...reservationValues,
          totalPrice: data.price - (25 / 100) * data.price,
          guestsChanged: 3,
        });
      }
      if (event.currentTarget.value === 4) {
        setSelectedPrice(data.price);
        setReservationValues({
          ...reservationValues,
          totalPrice: data.price,
          guestsChanged: 4,
        });
      }
    }
    if (data.type === "Suite") {
      if (event.currentTarget.value === 1) {
        setSelectedPrice(data.price - (80 / 100) * data.price);
        setReservationValues({
          ...reservationValues,
          totalPrice: data.price - (80 / 100) * data.price,
          guestsChanged: 1,
        });
      }
      if (event.currentTarget.value === 2) {
        setSelectedPrice(data.price - (64 / 100) * data.price);
        setReservationValues({
          ...reservationValues,
          totalPrice: data.price - (64 / 100) * data.price,
          guestsChanged: 2,
        });
      }
      if (event.currentTarget.value === 3) {
        setSelectedPrice(data.price - (48 / 100) * data.price);
        setReservationValues({
          ...reservationValues,
          totalPrice: data.price - (48 / 100) * data.price,
          guestsChanged: 3,
        });
      }
      if (event.currentTarget.value === 4) {
        setSelectedPrice(data.price - (32 / 100) * data.price);
        setReservationValues({
          ...reservationValues,
          totalPrice: data.price - (32 / 100) * data.price,
          guestsChanged: 4,
        });
      }
      if (event.currentTarget.value === 5) {
        setSelectedPrice(data.price - (16 / 100) * data.price);
        setReservationValues({
          ...reservationValues,
          totalPrice: data.price - (16 / 100) * data.price,
          guestsChanged: 5,
        });
      }
      if (event.currentTarget.value === 6) {
        setSelectedPrice(data.price);
        setReservationValues({
          ...reservationValues,
          totalPrice: data.price,
          guestsChanged: 6,
        });
      }
    }
    setAnchorEl(null);
  };

  const FnameHandle = (event) => {
    setCustomerValues({
      ...customerValues,
      firstName: event.target.value,
    });
  };

  const LnameHandle = (event) => {
    setCustomerValues({
      ...customerValues,
      lastName: event.target.value,
    });
  };

  const phoneHandle = (event) => {
    setCustomerValues({
      ...customerValues,
      phoneNumber: event.target.value,
    });
  };

  const continueHandle = () => {
    customerHandle();
    setPaymentVisible(!paymentVisible);
  };

  const submitReservation = () => {
    reservationHandle();
    setPaymentVisible(!paymentVisible);
  };

  const [cusId, setCusId] = useState("");

  const [reservationValues, setReservationValues] = React.useState({
    signupID: checkUserId.signupID,
    hotelID: hotelValue.id,
    customerID: "",
    checkin: checkInvalue,
    checkout: checkOutvalue,
    breakfast: "",
    gym: "",
    totalPrice: selectedPrice,
    guestsChanged: selectedValue,
  });

  const retrieveCustomerIdHandle = (event) => {
    setFakeCardInfo({
      ...fakeCardInfo,
      nameOnCard: event.target.value,
    });

    const uflname = JSON.parse(localStorage.getItem("userflname"));
    const fn = uflname.firstName;
    const ln = uflname.lastName;

    fetch(`http://localhost:8080/customer/getCustomerByName/${fn}/${ln}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((values) => {
        setCusId(values.customerID);
        const cusId = values.customerID;
        setReservationValues({
          ...reservationValues,
          customerID: cusId,
        });
      })
      .catch((error) => console.log("Error", error));
  };

  console.log(reservationValues);

  const checkInhandle = (newValue) => {
    const checkin = new Date(newValue).toISOString();
    const checkin1 = new Date(newValue);
    day1 = checkin1.getDay();
    const checkoutDate = new Date(checkOutvalue);
    setCheckinValue(checkin);
    if(day1 == 0 || day1 == 6){
        setSelectedPrice(selectedPrice*0.2 + selectedPrice);
        setReservationValues({
          ...reservationValues,
          checkin: checkin,
          totalPrice: selectedPrice*0.2 + selectedPrice,
        });
    }
    else{
        if(selectedValue == 1 && data.type === "Single" && checkoutDate.getDay() != 0 && checkoutDate.getDay() != 6){
            setSelectedPrice(data.price - (50 / 100) * data.price);
            setReservationValues({
              ...reservationValues,
              checkin: checkin,
              totalPrice: data.price - (50 / 100) * data.price,
            });
        }
        if(selectedValue == 2 && data.type === "Single" && checkoutDate.getDay() != 0 && checkoutDate.getDay() != 6){
            setSelectedPrice(data.price);
            setReservationValues({
              ...reservationValues,
              checkin: checkin,
              totalPrice: data.price,
            });
        }
        if(selectedValue == 1 && data.type === "Double" && checkoutDate.getDay() != 0 && checkoutDate.getDay() != 6){
            setSelectedPrice(data.price - (75 / 100) * data.price);
            setReservationValues({
              ...reservationValues,
              checkin: checkin,
              totalPrice: data.price - (75 / 100) * data.price,
            });
        }
        if(selectedValue == 2 && data.type === "Double" && checkoutDate.getDay() != 0 && checkoutDate.getDay() != 6){
            setSelectedPrice(data.price - (50 / 100) * data.price);
            setReservationValues({
              ...reservationValues,
              checkin: checkin,
              totalPrice: data.price - (50 / 100) * data.price,
            });
        }
        if(selectedValue == 3 && data.type === "Double" && checkoutDate.getDay() != 0 && checkoutDate.getDay() != 6){
            setSelectedPrice(data.price - (25 / 100) * data.price);
            setReservationValues({
              ...reservationValues,
              checkin: checkin,
              totalPrice: data.price - (25 / 100) * data.price,
            });
        }
        if(selectedValue == 4 && data.type === "Double" && checkoutDate.getDay() != 0 && checkoutDate.getDay() != 6){
            setSelectedPrice(data.price);
            setReservationValues({
              ...reservationValues,
              checkin: checkin,
              totalPrice: data.price,
            });
        }
        if(selectedValue == 1 && data.type === "Suite" && checkoutDate.getDay() != 0 && checkoutDate.getDay() != 6){
            setSelectedPrice(data.price - (80 / 100) * data.price);
            setReservationValues({
              ...reservationValues,
              checkin: checkin,
              totalPrice: data.price - (80 / 100) * data.price,
            });
        }
        if(selectedValue == 2 && data.type === "Suite" && checkoutDate.getDay() != 0 && checkoutDate.getDay() != 6){
            setSelectedPrice(data.price - (64 / 100) * data.price);
            setReservationValues({
              ...reservationValues,
              checkin: checkin,
              totalPrice: data.price - (64 / 100) * data.price,
            });
        }
        if(selectedValue == 3 && data.type === "Suite" && checkoutDate.getDay() != 0 && checkoutDate.getDay() != 6){
            setSelectedPrice(data.price - (48 / 100) * data.price);
            setReservationValues({
              ...reservationValues,
              checkin: checkin,
              totalPrice: data.price - (48 / 100) * data.price,
            });
        }
        if(selectedValue == 4 && data.type === "Suite" && checkoutDate.getDay() != 0 && checkoutDate.getDay() != 6){
            setSelectedPrice(data.price - (32 / 100) * data.price);
            setReservationValues({
              ...reservationValues,
              checkin: checkin,
              totalPrice: data.price - (32 / 100) * data.price,
            });
        }
        if(selectedValue == 5 && data.type === "Suite" && checkoutDate.getDay() != 0 && checkoutDate.getDay() != 6){
            setSelectedPrice(data.price - (16 / 100) * data.price);
            setReservationValues({
              ...reservationValues,
              checkin: checkin,
              totalPrice: data.price - (16 / 100) * data.price,
            });
        }
        if(selectedValue == 6 && data.type === "Suite" && checkoutDate.getDay() != 0 && checkoutDate.getDay() != 6){
            setSelectedPrice(data.price);
            setReservationValues({
              ...reservationValues,
              checkin: checkin,
              totalPrice: data.price,
            });
        }
    }
  };

  const checkOuthandle = (newValue) => {
    const checkout = new Date(newValue).toISOString();
    const checkout1 = new Date(newValue);
    day2 = checkout1.getDay();
    const checkinDate = new Date(checkInvalue);
    setCheckoutValue(checkout);
    if(day2 == 0 || day2 == 6){
        setSelectedPrice(selectedPrice*0.2 + selectedPrice);
        setReservationValues({
          ...reservationValues,
          checkout: checkout,
          totalPrice: selectedPrice*0.2 + selectedPrice,
        });
    }
    else{
        if(selectedValue == 1 && data.type === "Single" && checkinDate.getDay() != 0 && checkinDate.getDay() != 6){
            setSelectedPrice(data.price - (50 / 100) * data.price);
            setReservationValues({
              ...reservationValues,
              checkout: checkout,
              totalPrice: data.price - (50 / 100) * data.price,
            });
        }
        if(selectedValue == 2 && data.type === "Single" && checkinDate.getDay() != 0 && checkinDate.getDay() != 6){
            setSelectedPrice(data.price);
            setReservationValues({
              ...reservationValues,
              checkout: checkout,
              totalPrice: data.price,
            });
        }
        if(selectedValue == 1 && data.type === "Double" && checkinDate.getDay() != 0 && checkinDate.getDay() != 6){
            setSelectedPrice(data.price - (75 / 100) * data.price);
            setReservationValues({
              ...reservationValues,
              checkout: checkout,
              totalPrice: data.price - (75 / 100) * data.price,
            });
        }
        if(selectedValue == 2 && data.type === "Double" && checkinDate.getDay() != 0 && checkinDate.getDay() != 6){
            setSelectedPrice(data.price - (50 / 100) * data.price);
            setReservationValues({
              ...reservationValues,
              checkout: checkout,
              totalPrice: data.price - (50 / 100) * data.price,
            });
        }
        if(selectedValue == 3 && data.type === "Double" && checkinDate.getDay() != 0 && checkinDate.getDay() != 6){
            setSelectedPrice(data.price - (25 / 100) * data.price);
            setReservationValues({
              ...reservationValues,
              checkout: checkout,
              totalPrice: data.price - (25 / 100) * data.price,
            });
        }
        if(selectedValue == 4 && data.type === "Double" && checkinDate.getDay() != 0 && checkinDate.getDay() != 6){
            setSelectedPrice(data.price);
            setReservationValues({
              ...reservationValues,
              checkout: checkout,
              totalPrice: data.price,
            });
        }
        if(selectedValue == 1 && data.type === "Suite" && checkinDate.getDay() != 0 && checkinDate.getDay() != 6){
            setSelectedPrice(data.price - (80 / 100) * data.price);
            setReservationValues({
              ...reservationValues,
              checkout: checkout,
              totalPrice: data.price - (80 / 100) * data.price,
            });
        }
        if(selectedValue == 2 && data.type === "Suite" && checkinDate.getDay() != 0 && checkinDate.getDay() != 6){
            setSelectedPrice(data.price - (64 / 100) * data.price);
            setReservationValues({
              ...reservationValues,
              checkout: checkout,
              totalPrice: data.price - (64 / 100) * data.price,
            });
        }
        if(selectedValue == 3 && data.type === "Suite" && checkinDate.getDay() != 0 && checkinDate.getDay() != 6){
            setSelectedPrice(data.price - (48 / 100) * data.price);
            setReservationValues({
              ...reservationValues,
              checkout: checkout,
              totalPrice: data.price - (48 / 100) * data.price,
            });
        }
        if(selectedValue == 4 && data.type === "Suite" && checkinDate.getDay() != 0 && checkinDate.getDay() != 6){
            setSelectedPrice(data.price - (32 / 100) * data.price);
            setReservationValues({
              ...reservationValues,
              checkout: checkout,
              totalPrice: data.price - (32 / 100) * data.price,
            });
        }
        if(selectedValue == 5 && data.type === "Suite" && checkinDate.getDay() != 0 && checkinDate.getDay() != 6){
            setSelectedPrice(data.price - (16 / 100) * data.price);
            setReservationValues({
              ...reservationValues,
              checkout: checkout,
              totalPrice: data.price - (16 / 100) * data.price,
            });
        }
        if(selectedValue == 6 && data.type === "Suite" && checkinDate.getDay() != 0 && checkinDate.getDay() != 6){
            setSelectedPrice(data.price);
            setReservationValues({
              ...reservationValues,
              checkout: checkout,
              totalPrice: data.price,
            });
        }
    }
  };

  const reservationHandle = () => {
    fetch("http://localhost:8080/createReservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reservationValues),
    })
      .then((response) => console.log("this is response", response))
      .catch((error) => console.log("Error", error));
  };

  const displayComponent = () => {
    if (paymentVisible === false) {
      return (
        <>
          <Item>
            <div>Customer Information:</div>
            <div>
              <TextField
                fullWidth
                required
                id="first_name"
                label="First Name"
                variant="standard"
                sx={{ mt: 2, mb: 3 }}
                value={customerValues.firstName}
                onChange={FnameHandle}
              />
            </div>
            <div>
              <TextField
                fullWidth
                required
                id="last_name"
                label="Last Name"
                variant="standard"
                sx={{ mt: 2, mb: 3 }}
                value={customerValues.lastName}
                onChange={LnameHandle}
              />
            </div>
            <div>
              <TextField
                fullWidth
                required
                id="phone"
                label="Phone"
                variant="standard"
                sx={{ mb: 3 }}
                value={customerValues.phoneNumber}
                onChange={phoneHandle}
              />
            </div>

            <Button
              fullWidth
              variant="contained"
              sx={{
                marginTop: 2,
                backgroundColor: "SlateBlue",
                borderRadius: 100,
                padding: "8px 25px",
              }}
              onClick={continueHandle}
            >
              Continue
            </Button>
            <Button
              fullWidth
              component={Link}
              to="/bookingresult"
              variant="contained"
              sx={{
                marginTop: 2,
                backgroundColor: "SlateBlue",
                borderRadius: 100,
                padding: "8px 25px",
              }}
            >
              Back
            </Button>
          </Item>
        </>
      );
    } else {
      return (
        <>
          <Item>
            <div>Card Information:</div>
            <div>
              <TextField
                fullWidth
                required
                id="cardname"
                label="Name on Card"
                variant="standard"
                value={fakeCardInfo.nameOnCard}
                sx={{ mt: 2, mb: 3 }}
                onChange={retrieveCustomerIdHandle}
              />
            </div>
            <div>
              <TextField
                fullWidth
                required
                id="cardnumber"
                label="Card Number"
                variant="standard"
                value={fakeCardInfo.cardNum}
                sx={{ mb: 3 }}
                onChange={(event) =>
                  setFakeCardInfo({
                    ...fakeCardInfo,
                    cardNum: event.target.value,
                  })
                }
              />
            </div>
            <div>
              <TextField
                fullWidth
                required
                id="expiration"
                label="Card Expiration Date"
                variant="standard"
                value={fakeCardInfo.expiredDate}
                sx={{ mb: 3 }}
                onChange={(event) =>
                  setFakeCardInfo({
                    ...fakeCardInfo,
                    expiredDate: event.target.value,
                  })
                }
              />
            </div>
            <div>
              <TextField
                fullWidth
                required
                id="cvv"
                label="CVV"
                value={fakeCardInfo.cvv}
                variant="standard"
                sx={{ mb: 3 }}
                onChange={(event) =>
                  setFakeCardInfo({
                    ...fakeCardInfo,
                    cvv: event.target.value,
                  })
                }
              />
            </div>
          </Item>
          <Grid lg={2} md={2} sm={5}></Grid>
          <Button
            fullWidth
            component={Link}
            to="/"
            variant="contained"
            sx={{
              marginTop: 2,
              backgroundColor: "SlateBlue",
              borderRadius: 100,
              padding: "8px 25px",
            }}
            onClick={submitReservation}
          >
            Confirm
          </Button>
          <Button
            fullWidth
            onClick={() => setPaymentVisible(!paymentVisible)}
            variant="contained"
            sx={{
              marginTop: 2,
              backgroundColor: "SlateBlue",
              borderRadius: 100,
              padding: "8px 25px",
            }}
          >
            Back
          </Button>
        </>
      );
    }
  };

  const defineGuest = () => {
    if (data.type === "Single") {
      return (
        <TableCell align="right">
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{ color: "black" }}
          >
            {selectedValue}
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem value={1} onClick={handleMenuItemClick}>
              1
            </MenuItem>
            <MenuItem value={2} onClick={handleMenuItemClick}>
              2
            </MenuItem>
          </Menu>
        </TableCell>
      );
    }
    if (data.type === "Double") {
      return (
        <TableCell align="right">
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{ color: "black" }}
          >
            {selectedValue}
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem value={1} onClick={handleMenuItemClick}>
              1
            </MenuItem>
            <MenuItem value={2} onClick={handleMenuItemClick}>
              2
            </MenuItem>
            <MenuItem value={3} onClick={handleMenuItemClick}>
              3
            </MenuItem>
            <MenuItem value={4} onClick={handleMenuItemClick}>
              4
            </MenuItem>
          </Menu>
        </TableCell>
      );
    }
    if (data.type === "Suite") {
      return (
        <TableCell align="right">
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{ color: "black" }}
          >
            {selectedValue}
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem value={1} onClick={handleMenuItemClick}>
              1
            </MenuItem>
            <MenuItem value={2} onClick={handleMenuItemClick}>
              2
            </MenuItem>
            <MenuItem value={3} onClick={handleMenuItemClick}>
              3
            </MenuItem>
            <MenuItem value={4} onClick={handleMenuItemClick}>
              4
            </MenuItem>
            <MenuItem value={5} onClick={handleMenuItemClick}>
              5
            </MenuItem>
            <MenuItem value={6} onClick={handleMenuItemClick}>
              6
            </MenuItem>
          </Menu>
        </TableCell>
      );
    }
  };

  const definePrice = () => {
    if (data.type === "Single") {
      return <TableCell align="right">{selectedPrice}</TableCell>;
    }
    if (data.type === "Double") {
      return <TableCell align="right">{selectedPrice}</TableCell>;
    }
    if (data.type === "Suite") {
      return <TableCell align="right">{selectedPrice}</TableCell>;
    }
  };

  return (
    <Box sx={{ flexGrow: 1, position: "relative", top: "20vh" }}>
      <Grid container spacing={3}>
        <Grid lg={3} md={2} sm={1}></Grid>
        <Box sx={{ display: "inline-block" }}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Check In"
              inputFormat="MM/dd/yyyy"
              minDate={new Date()}
              value={checkInvalue}
              onChange={checkInhandle}
              renderInput={(params) => (
                <TextField
                  sx={{ marginRight: 3, marginBottom: 2 }}
                  {...params}
                />
              )}
            />
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Check Out"
              inputFormat="MM/dd/yyyy"
              minDate={new Date(checkInvalue)}
              value={checkOutvalue}
              onChange={checkOuthandle}
              maxDate={checkinadd}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          {data === undefined ? (
            <></>
          ) : (
            <Box sx={{ marginBottom: 3 }}>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Hotel Name</TableCell>
                      <TableCell align="right">Address</TableCell>
                      <TableCell align="right">City&nbsp;</TableCell>
                      <TableCell align="right">MaxGuests&nbsp;</TableCell>
                      <TableCell align="right">Type&nbsp;</TableCell>
                      <TableCell align="right">Price&nbsp;</TableCell>
                      <TableCell align="right">Point&nbsp;</TableCell>
                      <TableCell align="right">Breakfast&nbsp;</TableCell>
                      <TableCell align="right">Gym&nbsp;</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {data.name || ""}
                      </TableCell>
                      <TableCell align="right">{data.address || ""}</TableCell>
                      <TableCell align="right">{data.city || ""}</TableCell>
                      {defineGuest()}
                      {/* <TableCell align="right">{data.maxguests || ""}</TableCell> */}
                      <TableCell align="right">{data.type || ""}</TableCell>
                      {definePrice()}
                      <TableCell align="right">{data.point || ""}</TableCell>
                      <TableCell align="right">
                        {data.breakfast || ""}
                      </TableCell>
                      <TableCell align="right">{data.gym || ""}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          )}
        </Box>
        <Grid container spacing={4}></Grid>
        <Grid lg={4} md={2} sm={1}></Grid>
        <Grid item lg={4} md={4} sm={5}>
          {displayComponent()}
        </Grid>
        <Grid lg={4}></Grid>
      </Grid>
    </Box>
  );
}
