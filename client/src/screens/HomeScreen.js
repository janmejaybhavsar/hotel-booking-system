import React, {useEffect, useState} from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import PriceCheckTwoToneIcon from "@mui/icons-material/PriceCheckTwoTone";
import DateRangeTwoToneIcon from "@mui/icons-material/DateRangeTwoTone";
import PhoneInTalkTwoToneIcon from "@mui/icons-material/PhoneInTalkTwoTone";
import MoneyOffCsredTwoToneIcon from "@mui/icons-material/MoneyOffCsredTwoTone";

import Carousel from "../components/Carousel";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: "transparent",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  lineHeight: "2rem",
}));

export default function HomeScreen() {  

  const userInfo = JSON.parse(localStorage.getItem("values"));
  const uEmail = userInfo?.email;


  console.log("after sign up", uEmail);


  useEffect(() => {
    signupIdHandle();
  },[])

  const signupIdHandle = () => {
    fetch(`http://localhost:8080/getCustomerByEmail/${uEmail}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json())
    .then((data) => {
     let signupData = data;
     localStorage.setItem("signupId", JSON.stringify(signupData))
    }).catch((error) => console.log("Error", error))
  }



  return (
    <Box sx={{ flexGrow: 1, position: "relative", top: "30vh" }}>
      <Grid container spacing={3} columnSpacing={1}>
        <Grid item md={1} sm={0.6}></Grid>
        <Grid item lg={5} md={6} sm={11} xs={12}>
          <Carousel />
        </Grid>
        <Grid item lg={4} md={5} sm={12} xs={12}>
          <Demo>
            <List>
              <ListItem>
                <ListItemIcon>
                  <PriceCheckTwoToneIcon
                    fontSize="large"
                    style={{ color: "black" }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Best prices guaranteed!"
                  primaryTypographyProps={{
                    fontSize: "25px",
                    marginBottom: "10px",
                  }}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <DateRangeTwoToneIcon
                    fontSize="large"
                    style={{ color: "black" }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Easy booking."
                  primaryTypographyProps={{
                    fontSize: "25px",
                    marginBottom: "10px",
                  }}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PhoneInTalkTwoToneIcon
                    fontSize="large"
                    style={{ color: "black" }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="24/7 customer service."
                  primaryTypographyProps={{
                    fontSize: "25px",
                    marginBottom: "10px",
                  }}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <MoneyOffCsredTwoToneIcon
                    fontSize="large"
                    style={{ color: "black" }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="No cancellation fees!"
                  primaryTypographyProps={{
                    fontSize: "25px",
                    marginBottom: "10px",
                  }}
                />
              </ListItem>

              <ListItem sx={{ alignItems: "center", justifyContent: "center" }}>
                <NavLink
                  to="/booking"
                  style={{
                    textDecoration: "none",
                    backgroundColor: "SlateBlue",
                    color: "white",
                    padding: "15px 35px",
                    fontFamily: "Arial",
                    borderRadius: 100,
                    marginTop: "30px",
                    fontSize: "25px",
                  }}
                  onClick={signupIdHandle}
                >
                  Booking Now
                </NavLink>
              </ListItem>
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
}
