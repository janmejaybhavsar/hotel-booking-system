import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Email from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";


import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),

  color: theme.palette.text.secondary,
}));

export default function RegistrationScreen() {
  const [values, setValues] = useState({
    // firstName: "",
    // lastName: "",
    email: "",
    password: "",
    confirmpwd: "",
    // phoneNumber: "",
    // streetAddress: "",
    // city: "",
    // state: "",
    // zip: "",
    // rewardPoints: "",
  });
  let navigate = useNavigate();
  let email, password, confirmpwd;

  const [clickPassword, setClickPassword] = useState(false);
  const [clickConfirmPassword, setClickConfirmPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  let mailFormat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleEmail = (event) => {
    email = event.target.value;
    if (email.match(mailFormat) !== null) {
      setValues({
        ...values,
        email: email,
      });
      setErrorMsg("");
    } else {
      setValues({
        ...values,
        email: "",
      });
      setErrorMsg("Wrong Email format");
    }
  };

  const handlePassword = (event) => {
    password = event.target.value;
    if (password.length > 8) {
      setValues({
        ...values,
        password: password,
      });
      setErrorMsg("");
    } else {
      setValues({
        ...values,
        password: "",
      });
      setErrorMsg("Input at least 8 characters for password ");
    }
  };

  const handleConfirmPassword = (event) => {
    confirmpwd = event.target.value;
    if (confirmpwd === values.password) {
      setValues({
        ...values,
        confirmpwd: confirmpwd,
      });
      setErrorMsg("");
    } else {
      setValues({
        ...values,
        confirmpwd: "",
      });
      setErrorMsg("Confirm password have to match with password.");
    }
  };

  const handleClickPassword = () => {
    setClickPassword(!clickPassword);
  };

  const handleClickConfirmPassword = () => {
    setClickConfirmPassword(!clickConfirmPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };

  const isValid =
    // values.firstName !== "" &&
    // values.lastName !== "" &&
    values.email !== null && values.password !== "" && values.confirmpwd !== "";
  // values.phoneNumber !== "" &&
  // values.streetAddress !== "" &&
  // values.city !== "" &&
  // values.state !== "" &&
  // values.zip !== "";
  const submitHandle = () => {
    if (isValid) {
      fetch("http://localhost:8080/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then((data) => {
          navigate("/login");
          console.log("Sucess", data);
        })
        .catch((error) => {
          console.error("Error", error);
        });
    } else {
      setErrorMsg("Please fill in required area!");
    }
  };

  return (
    <Box sx={{ flexGrow: 1, position: "relative", top: "30vh" }}>
      <Grid container spacing={3}>
        <Grid item lg={4} md={3} sm={2} xs={1}></Grid>
        <Grid item lg={4} md={6} sm={8} xs={10}>
          <Item 
          // sx={{ marginTop: "-150px" }}
          >
            {/* <div>
              <TextField
                label="First Name"
                fullWidth
                error={values.firstName === "" ? true : false}
                required
                color={values.firstName !== "" ? "primary" : "error"}
                value={values.firstName}
                onChange={valueHandle("firstName")}
                InputProps={{
                  startAdornment: (
                    <IconButton position="start">
                      <AccountCircle />
                    </IconButton>
                  ),
                }}
                variant="standard"
                sx={{ mb: 3 }}
              />
            </div>
            <div>
              <TextField
                label="Last Name"
                fullWidth
                required
                error={values.lastName === "" ? true : false}
                color={values.lastName !== "" ? "primary" : "error"}
                value={values.lastName}
                onChange={valueHandle("lastName")}
                InputProps={{
                  startAdornment: (
                    <IconButton position="start">
                      <AccountCircle />
                    </IconButton>
                  ),
                }}
                variant="standard"
                sx={{ mb: 3 }}
              />
            </div> */}
            <div>
              <TextField
                fullWidth
                label="Email"
                required
                type="email"
                value={email !== null ? email : null}
                color={values.email !== "" ? "primary" : "error"}
                onChange={handleEmail}
                InputProps={{
                  startAdornment: (
                    <IconButton position="start">
                      <Email />
                    </IconButton>
                  ),
                }}
                variant="standard"
                sx={{ mb: 3 }}
              />
            </div>
            <div>
              <TextField
                fullWidth
                label="Password (at least 8 characters)"
                required
                color={values.password.length >= 8 ? "primary" : "error"}
                inputProps={{ minLength: 8 }}
                InputProps={{
                  startAdornment: (
                    <IconButton
                      position="start"
                      onClick={handleClickPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {clickPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  ),
                }}
                variant="standard"
                value={password}
                type={clickPassword ? "text" : "password"}
                onChange={handlePassword}
                sx={{ mb: 3 }}
              />
            </div>
            <div>
              <TextField
                fullWidth
                label="Confirm Password"
                required
                color={values.confirmpwd.length >= 8 ? "primary" : "error"}
                value={confirmpwd}
                type={clickConfirmPassword ? "text" : "password"}
                onChange={handleConfirmPassword}
                inputProps={{ minLength: 8 }}
                InputProps={{
                  startAdornment: (
                    <IconButton
                      position="start"
                      onClick={handleClickConfirmPassword}
                      onMouseDown={handleMouseDownConfirmPassword}
                    >
                      {clickConfirmPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  ),
                }}
                variant="standard"
                sx={{ mb: 3 }}
              />
            </div>

            {/*    <div>
              <TextField
                fullWidth
                label="Phone Number"
                error={values.phoneNumber === "" ? true : false}
                value={values.phoneNumber }
                color={values.phoneNumber !== "" ? "primary" : "error"}
                onChange={valueHandle("phoneNumber")}
                required
                InputProps={{
                  startAdornment: (
                    <IconButton position="start">
                      <ContactPhone />
                    </IconButton>
                  ),
                }}
                variant="standard"
                sx={{ mb: 3 }}
              />
            </div>
            <div>
              <TextField
                fullWidth
                label="Street Address"
                error={values.streetAddress === "" ? true : false}
                value={values.streetAddress}
                color={values.streetAddress !== "" ? "primary" : "error"}
                onChange={valueHandle("streetAddress")}
                required
                InputProps={{
                  startAdornment: (
                    <IconButton position="start">
                      <HomeIcon />
                    </IconButton>
                  ),
                }}
                variant="standard"
                sx={{ mb: 3 }}
              />
            </div>
            <div>
              <TextField
                fullWidth
                label="City"
                error={values.city === "" ? true : false}
                value={values.city}
                color={values.city !== "" ? "primary" : "error"}
                onChange={valueHandle("city")}
                required
                InputProps={{
                  startAdornment: (
                    <IconButton position="start">
                      <LocationCityIcon />
                    </IconButton>
                  ),
                }}
                variant="standard"
                sx={{ mb: 3 }}
              />
            </div>
            <div>
              <TextField
                fullWidth
                label="State"
                value={values.state}
                error={values.state === "" ? true : false}
                color={values.state !== "" ? "primary" : "error"}
                onChange={valueHandle("state")}
                required
                InputProps={{
                  startAdornment: (
                    <IconButton position="start">
                      <MapsHomeWorkIcon />
                    </IconButton>
                  ),
                }}
                variant="standard"
                sx={{ mb: 3 }}
              />
            </div>
            <div>
              <TextField
                fullWidth
                label="Zip"
                error={values.zip === "" ? true : false}
                value={values.zip}
                color={values.zip !== "" ? "primary" : "error"}
                onChange={valueHandle("zip")}
                required
                InputProps={{
                  startAdornment: (
                    <IconButton position="start">
                      <NumbersIcon />
                    </IconButton>
                  ),
                }}
                variant="standard"
                sx={{ mb: 3 }}
              />
            </div>
            <div>
              <TextField
                fullWidth
                label="Reward Points"
                value={values.rewardPoints}
                color={values.rewardPoints !== "" ? "primary" : "error"}
                onChange={valueHandle("rewardPoints")}
                InputProps={{
                  startAdornment: (
                    <IconButton position="start">
                      <GradeIcon />
                    </IconButton>
                  ),
                }}
                variant="standard"
              />
            </div> */}
            <Typography sx={{ color: "red", fontSize: "12px" }}>
              {errorMsg}
            </Typography>
            <Button
              variant="contained"
              disabled={isValid ? false : true}
              sx={{
                marginTop: 2,
                backgroundColor: "SlateBlue",
                borderRadius: 100,
                padding: "8px 25px",
              }}
              onClick={submitHandle}
            >
              Submit
            </Button>
          </Item>
        </Grid>
        <Grid item lg={4} md={3} sm={2} xs={1}></Grid>
      </Grid>
    </Box>
  );
}
