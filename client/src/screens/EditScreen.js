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

import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),

  color: theme.palette.text.secondary,
}));

export default function EditScreen(props) {
  const cusData = props.cusValues;
  const orderData = props.orderValues;
  const customerID = props.getcusID;
  const signID = props.getsignID;
  let navigate = useNavigate();


  let data = JSON.parse(localStorage.getItem("selectedHotel"));
  let cguest = orderData.guestsChanged;

  const [changedInfo, setChangedInfo] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    signupID: signID,
    checkin: orderData.checkin,
    checkout: orderData.checkout,
    totalPrice: orderData.totalPrice,
    guestsChanged: cguest,
  });


  console.log("this are ", orderData);

  console.log("this is ", changedInfo);

  const FnameHandle = (event) => {
    setChangedInfo({
      ...changedInfo,
      firstName: event.target.value,
    });
  };

  const LnameHandle = (event) => {
    setChangedInfo({
      ...changedInfo,
      lastName: event.target.value,
    });
  };

  const phoneHandle = (event) => {
    setChangedInfo({
      ...changedInfo,
      phoneNumber: event.target.value,
    });
  };

  const [selectedValue, setSelectedValue] = React.useState(orderData.maxGuests);
  const [selectedPrice, setSelectedPrice] = React.useState(
    orderData.totalPrice
  );

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (event) => {
    setSelectedValue(event.currentTarget.value);
    if (orderData.roomType === "Single") {
      if (event.currentTarget.value === 1) {
        setSelectedPrice(
          orderData.totalPrice - (50 / 100) * orderData.totalPrice
        );
        setChangedInfo({
          ...changedInfo,
          totalPrice: orderData.totalPrice - (50 / 100) * orderData.totalPrice,
          guestsChanged: 1,
        });
      }
      if (event.currentTarget.value === 2) {
        setSelectedPrice(orderData.totalPrice);
        setChangedInfo({
          ...changedInfo,
          totalPrice: orderData.totalPrice,
          guestsChanged: 2,
        });
      }
    }
    if (orderData.roomType === "Double") {
      if (event.currentTarget.value === 1) {
        setSelectedPrice(
          orderData.totalPrice - (75 / 100) * orderData.totalPrice
        );
        setChangedInfo({
          ...changedInfo,
          totalPrice: orderData.totalPrice - (75 / 100) * orderData.totalPrice,
          guestsChanged: 1,
        });
      }
      if (event.currentTarget.value === 2) {
        setSelectedPrice(
          orderData.totalPrice - (50 / 100) * orderData.totalPrice
        );
        setChangedInfo({
          ...changedInfo,
          totalPrice: orderData.totalPrice - (50 / 100) * orderData.totalPrice,
          guestsChanged: 2,
        });
      }
      if (event.currentTarget.value === 3) {
        setSelectedPrice(
          orderData.totalPrice - (25 / 100) * orderData.totalPrice
        );
        setChangedInfo({
          ...changedInfo,
          totalPrice: orderData.totalPrice - (25 / 100) * orderData.totalPrice,
          guestsChanged: 3,
        });
      }
      if (event.currentTarget.value === 4) {
        setSelectedPrice(orderData.totalPrice);
        setChangedInfo({
          ...changedInfo,
          totalPrice: orderData.totalPrice,
          guestsChanged: 4,
        });
      }
    }
    if (orderData.roomType === "Suite") {
      if (event.currentTarget.value === 1) {
        setSelectedPrice(
          orderData.totalPrice - (80 / 100) * orderData.totalPrice
        );
        setChangedInfo({
          ...changedInfo,
          totalPrice: orderData.totalPrice - (80 / 100) * orderData.totalPrice,
          guestsChanged: 1,
        });
      }
      if (event.currentTarget.value === 2) {
        setSelectedPrice(
          orderData.totalPrice - (64 / 100) * orderData.totalPrice
        );
        setChangedInfo({
          ...changedInfo,
          totalPrice: orderData.totalPrice - (64 / 100) * orderData.totalPrice,
          guestsChanged: 2,
        });
      }
      if (event.currentTarget.value === 3) {
        setSelectedPrice(
          orderData.totalPrice - (48 / 100) * orderData.totalPrice
        );
        setChangedInfo({
          ...changedInfo,
          totalPrice: orderData.totalPrice - (48 / 100) * orderData.totalPrice,
          guestsChanged: 3,
        });
      }
      if (event.currentTarget.value === 4) {
        setSelectedPrice(
          orderData.totalPrice - (32 / 100) * orderData.totalPrice
        );
        setChangedInfo({
          ...changedInfo,
          totalPrice: orderData.totalPrice - (32 / 100) * orderData.totalPrice,
          guestsChanged: 4,
        });
      }
      if (event.currentTarget.value === 5) {
        setSelectedPrice(
          orderData.totalPrice - (16 / 100) * orderData.totalPrice
        );
        setChangedInfo({
          ...changedInfo,
          totalPrice: orderData.totalPrice - (16 / 100) * orderData.totalPrice,
          guestsChanged: 5,
        });
      }
      if (event.currentTarget.value === 6) {
        setSelectedPrice(orderData.totalPrice);
        setChangedInfo({
          ...changedInfo,
          totalPrice: orderData.totalPrice,
          guestsChanged: 6,
        });
      }
    }
    setAnchorEl(null);
  };

  const defineGuest = () => {
    if (orderData.roomType === "Single") {
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
    if (orderData.roomType === "Double") {
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
    if (orderData.roomType === "Suite") {
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

  const displayComponent = () => {
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
              value={changedInfo.firstName}
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
              value={changedInfo.lastName}
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
              value={changedInfo.phoneNumber}
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
            onClick={() => {
              updateHandle();
            }}
          >
            Update
          </Button>
          <Button
            fullWidth
            component={Link}
            to="/uprofile"
            variant="contained"
            sx={{
              marginTop: 2,
              backgroundColor: "SlateBlue",
              borderRadius: 100,
              padding: "8px 25px",
            }}
            onClick={() => {
              props.setPassToCheckout(!props.passToCheckout);
            }}
          >
            Back
          </Button>
        </Item>
      </>
    );
  };

  const definePrice = () => {
    if (orderData.roomType === "Single") {
      return <TableCell align="right">{selectedPrice}</TableCell>;
    }
    if (orderData.roomType === "Double") {
      return <TableCell align="right">{selectedPrice}</TableCell>;
    }
    if (orderData.roomType === "Suite") {
      return <TableCell align="right">{selectedPrice}</TableCell>;
    }
  };

  const checkInhandle = (newValue) => {
    const checkin = new Date(newValue).toISOString();
    setChangedInfo({
      ...changedInfo,
      checkin: checkin,
    });
  };

  const checkOuthandle = (newValue) => {
    const checkout = new Date(newValue).toISOString();
    setChangedInfo({
      ...changedInfo,
      checkout: checkout,
    });
  };

  const updateHandle = () => {
    fetch(
      `http://localhost:8080/customer/updateCustomerByCustomerID/${customerID}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(changedInfo),
      }
    )
      .then((response) => {
        if (response.status === 200) {
          navigate("/", {
            replace: true,
          });
        }
      })
      .catch((error) => console.log("Error", error));
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
              value={changedInfo.checkin}
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
              value={changedInfo.checkout}
              onChange={checkOuthandle}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          {orderData === undefined ? (
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
                        {orderData.hotelName || ""}
                      </TableCell>
                      <TableCell align="right">
                        {orderData.hotelAddress || ""}
                      </TableCell>
                      <TableCell align="right">
                        {orderData.hotelCity || ""}
                      </TableCell>
                      {defineGuest()}
                      <TableCell align="right">
                        {orderData.roomType || ""}
                      </TableCell>
                      {definePrice()}
                      <TableCell align="right">
                        {orderData.earnablePoints || ""}
                      </TableCell>
                      <TableCell align="right">
                        {orderData.breakfast || ""}
                      </TableCell>
                      <TableCell align="right">{orderData.gym || ""}</TableCell>
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
