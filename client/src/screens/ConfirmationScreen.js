import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router-dom";
import ListItemText from "@mui/material/ListItemText";

export default function CheckoutScreen() {
  const [reservationValues, setReservationValues] = React.useState({
    customerID: "",
    hotelID: "",
    checkin: new Date("03/20/2022").toISOString(),
    checkout: new Date("03/28/2022").toISOString(),
    totalPrice: "",
  });
  

  const reservationHandle = () => {
   fetch("http://localhost:8080/customer/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reservationValues),
    }).then((response) => console.log("this is response", response));
  };

  return (
    <Box sx={{ flexGrow: 1, position: "relative", top: "30vh" }}>
      <Grid container spacing={3} columnSpacing={1}>
        <Grid xs></Grid>
        <Grid item lg={4} md={6} sm={8} xs={10}>
          <List>
            <ListItem>
              <ListItemText
                primary="Information"
                primaryTypographyProps={{
                  fontSize: "25px",
                  marginBottom: "10px",
                }}
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item lg={4} md={6} sm={8} xs={10}>
          <List>
            <ListItem></ListItem>
          </List>
          <Link
            variant="contained"
            to="/uprofile"
            style={{
              textDecoration: "none",
              color: "white",
              padding: "10px 25px",
              fontFamily: "Arial",
              marginLeft: "5px",
              backgroundColor: "SlateBlue",
              borderRadius: 100,
            }}
            onClick={reservationHandle}
          >
            Confirm
          </Link>
          <Link
            component={Link}
            to="/checkout"
            variant="contained"
            style={{
              textDecoration: "none",
              color: "white",
              padding: "10px 25px",
              fontFamily: "Arial",
              marginLeft: "5px",
              backgroundColor: "SlateBlue",
              borderRadius: 100,
            }}
          >
            Back
          </Link>
        </Grid>
        <Grid xs></Grid>
      </Grid>
    </Box>
  );
}
