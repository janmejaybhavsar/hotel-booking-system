import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Email from "@mui/icons-material/Email";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),

  color: theme.palette.text.secondary,
}));

export default function LoginScreen() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [checked, setChecked] = useState(false);

  let navigate = useNavigate();
  let email, password;
  const [clickPassword, setClickPassword] = useState(false);
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

  const handleEmpChecked = () => {
    setChecked(!checked);
  };

  console.log("this is check box", checked);

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

  const handleClickPassword = () => {
    setClickPassword(!clickPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const isValid = values.email !== null && values.password !== "";

  const loginHandle = () => {
    if ((isValid && checked) === false) {
      fetch(
        `http://localhost:8080/confirmSignup/${values.email}/${values.password}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((response) => {
          const data = response;
          console.log("this is data after user logged in", data);
          if (data === true) {
            localStorage.setItem("values", JSON.stringify(values));
            navigate("/", {
              replace: true,
            });
          } else {
            setErrorMsg("Account does not exist!");
          }
        })
        .catch((error) => {
          console.error("Error", error);
        });
    }
    if (isValid && checked === true) {
      fetch(
        `http://localhost:8080/confirmAdmin/${values.email}/${values.password}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((response) => {
          const data = response;
          if (data === true) {
            localStorage.setItem("admin", JSON.stringify(values));
            navigate("/admin", {
              replace: true,
            });
          } else {
            setErrorMsg("Account does not exist!");
          }
        })
        .catch((error) => console.log("Error", error));
    }
  };

  return (
    <Box sx={{ flexGrow: 1, position: "relative", top: "30vh" }}>
      <Grid container spacing={3}>
        <Grid item lg={4} md={3} sm={2} xs={1}></Grid>
        <Grid item lg={4} md={6} sm={8} xs={10}>
          <Item>
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
                label="Password"
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
            <Typography sx={{ color: "red", fontSize: "12px" }}>
              {errorMsg}
            </Typography>
            <FormGroup sx={{ ml: "10px" }}>
              <FormControlLabel
                control={
                  <Checkbox checked={checked} onChange={handleEmpChecked} />
                }
                label="Are you an employee?"
              />
            </FormGroup>
            <Button
              variant="contained"
              sx={{
                marginTop: 2,
                backgroundColor: "SlateBlue",
                borderRadius: 100,
                padding: "8px 25px",
              }}
              onClick={loginHandle}
              disabled={isValid ? false : true}
            >
              Login
            </Button>
          </Item>
        </Grid>
        <Grid item lg={4} md={3} sm={2} xs={1}></Grid>
      </Grid>
    </Box>
  );
}
