import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import logo from "../img/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const pages = [""];

const ResponsiveAppBar = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const userLoggedIn = location.state;

  const [userValue, setUserValues] = useState("");

  const loggedInUser = localStorage.getItem("values");
  const loggedInAdmin = localStorage.getItem("admin");
  useEffect(() => {
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUserValues(foundUser);
    }
    if (loggedInAdmin) {
      const foundUser = JSON.parse(loggedInAdmin);
      setUserValues(foundUser);
    }
  }, [loggedInUser, loggedInAdmin]);

  const profileClicked = () => {
    navigate("/uprofile", {
      replace: true,
      state: userLoggedIn,
    });
  };

  const logoutHandle = () => {
    setUserValues("");
    localStorage.clear();
    navigate("/");
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        height: "100px",
        opacity: 0.8,
        marginTop: "20px",
        padding: "0px 0px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {loggedInAdmin ? (
            <></>
          ) : (
            <Link
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                color: "black",
              }}
              onClick={() => navigate("/")}
              component="button"
            >
              <img
                src={logo}
                style={{ width: "155px", height: "100px" }}
                alt="logo"
              />
            </Link>
          )}

          <Box sx={{ flexGrow: 1, display: '{ xs: "none", md: "flex" }' }}>
            {pages.map((page) => (
              <NavLink
                to="/booking"
                style={{
                  textDecoration: "none",
                  backgroundColor: "SlateBlue",
                  color: "white",

                  fontFamily: "Arial",
                  borderRadius: 100,
                }}
              >
                {page}
              </NavLink>
            ))}
          </Box>
          {userValue === "" ? (
            <>
              <NavLink
                to="/login"
                style={{
                  textDecoration: "none",
                  color: "white",
                  padding: "10px 25px",
                  fontFamily: "Arial",
                  marginRight: "5px",
                  backgroundColor: "SlateBlue",
                  borderRadius: 100,
                }}
              >
                Login
              </NavLink>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  height: { lg: "40px", md: "40px", xs: "30px" },
                  marginTop: { lg: "30px", md: "30px", sm: "35px", xs: "35px" },
                }}
              />
              <NavLink
                to="/register"
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
                Join
              </NavLink>
            </>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                style={{
                  color: "black",
                  padding: "10px 0px",
                  fontFamily: "Arial",
                  marginRight: "10px",
                  fontSize: "25px",
                }}
              >
                Welcome:
              </Typography>
              <Link
                onClick={profileClicked}
                underline="none"
                component="button"
              >
                <Typography
                  style={{
                    color: "black",
                    padding: "10px 0px",
                    fontFamily: "Arial",
                    marginRight: "50px",
                  }}
                >
                  {userValue.email}
                  {/* {userValue.lastName} */}
                </Typography>
              </Link>
              <Link
                component="button"
                underline="none"
                sx={{
                  padding: "10px 25px",
                  backgroundColor: "#DCDCDC",
                  color: "black",
                }}
                onClick={logoutHandle}
              >
                Log Out
              </Link>
            </div>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
