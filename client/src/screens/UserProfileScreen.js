import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import EditScreen from "./EditScreen";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#b8f1f4",
  opacity: 0.8,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const UserProfileScreen = () => {
  const [getcusID, setGetcusID] = useState("");
  const [getsignID, setGetSignID] = useState("");

  const [userValue, setUserValues] = useState("");
  const [passToCheckout, setPassToCheckout] = useState(true);

  const [orderHistory, setOrderHistory] = useState({
    reservationID: "",
    checkin: "",
    checkout: "",
    hotelName: "",
    hotelAddress: "",
    signupID: "",
    hotelCity: "",
    maxGuests: "",
    guestsChanged: "",
    roomNumber: "",
    roomType: "",
    totalPrice: "",
    earnablePoints: "",
    breakfast: "",
    gym: "",
  });

  const [cusInfo, setCusInfo] = useState({
    firstName: "",
    lastName: "",
    signupID: "",
    phoneNumber: "",
    points: 0,
  });

  

  useEffect(() => {
    let getSignupId = JSON.parse(localStorage.getItem("signupId"));
    const loggedInUser = localStorage.getItem("values");
    const sId = getSignupId.signupID;

    let data = JSON.parse(localStorage.getItem("selectedHotel"));
    const maxGus = data?.maxguests;

    setGetSignID(sId);
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUserValues(foundUser);
      fetch(`http://localhost:8080/getReservation/${sId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data !== "") {
            let idcus = data[0].customerID;
            console.log("-------11--------", data);
            setGetcusID(idcus);
            setCusInfo({
              firstName: data[0].firstName,
              lastName: data[0].lastName,
              phoneNumber: data[0].phoneNumber,
              signupID: data[0].signupID,
              points: data[0].points,
            });
            setOrderHistory({
              reservationID: data[0].reservationID,
              checkin: data[0].checkin,
              checkout: data[0].checkout,
              signupID: data[0].signupID,
              hotelName: data[0].hotelName,
              roomNumber: data[0].roomNumber,
              hotelAddress: data[0].hotelAddress,
              hotelCity: data[0].hotelCity,
              maxGuests: data[0].maxGuests,
              guestsChanged: data[0].guestsChanged,
              roomType: data[0].roomType,
              totalPrice: data[0].totalPrice,
              earnablePoints: data[0].earnablePoints,
              breakfast: data[0].breakfast === false ? "No" : "Yes",
              gym: data[0].gym === false ? "No" : "Yes",
            });
          }
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }
  }, []);

  useEffect(() => {}, [cusInfo, orderHistory]);

  const enableEdit = () => {
    setPassToCheckout(!passToCheckout);
  };

  const deleteReservationHandle = () => {
    fetch(
      `http://localhost:8080/customer/deleteByCustomerId/${orderHistory.reservationID}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        if (response.status === 200) {
          setCusInfo({
            firstName: "",
            lastName: "",
            signupID: "",
            phoneNumber: "",
            points: 0,
          });
          setOrderHistory({
            reservationID: "",
            checkin: "",
            checkout: "",
            hotelName: "",
            hotelAddress: "",
            signupID: "",
            roomNumber: "",
            hotelCity: "",
            maxGuests: "",
            roomType: "",
            totalPrice: "",
            earnablePoints: "",
            breakfast: "",
            gym: "",
          });
        }
      })

      .catch((error) => console.log("Error", error));
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "relative",
        top: passToCheckout ? "30vh" : "5vh",
      }}
    >
      {passToCheckout ? (
        <Grid container spacing={3}>
          <Grid item lg={4} md={3} sm={2} xs={1}></Grid>
          <Grid item lg={4} md={6} sm={8} xs={10}>
            <Item>
              <Typography sx={{ marginBottom: "15px" }}>
                <strong style={{ fontSize: "20px" }}>First Name: </strong>
                {cusInfo.firstName}
              </Typography>
              <Typography sx={{ marginBottom: "15px" }}>
                <strong style={{ fontSize: "20px" }}>Last Name: </strong>
                {cusInfo.lastName}
              </Typography>
              <Typography sx={{ marginBottom: "15px" }}>
                <strong style={{ fontSize: "20px" }}>Email: </strong>
                {userValue.email}
              </Typography>
              <Typography sx={{ marginBottom: "15px" }}>
                <strong style={{ fontSize: "20px" }}>Phone Number: </strong>
                {cusInfo.phoneNumber}
              </Typography>
              <Typography sx={{ marginBottom: "15px" }}>
                <strong style={{ fontSize: "20px" }}>Reward Points: </strong>
                {orderHistory.earnablePoints === ""
                  ? 0
                  : orderHistory.earnablePoints}
              </Typography>
            </Item>
          </Grid>
          <Grid item lg={4} md={3} sm={2} xs={1}></Grid>
          <Grid container spacing={3}>
            <Grid item lg={0.5}></Grid>
            <Grid item lg={11} md={11}>
              <Item sx={{ marginTop: 8 }}>
                <Box>
                  <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="right">Check In</TableCell>
                          <TableCell align="right">Check Out</TableCell>
                          <TableCell align="right">Hotel Name</TableCell>
                          <TableCell align="right">Address</TableCell>
                          <TableCell align="right">City&nbsp;</TableCell>
                          <TableCell align="right">Number&nbsp;</TableCell>
                          <TableCell align="right">maxGuests&nbsp;</TableCell>
                          <TableCell align="right">Room Type&nbsp;</TableCell>
                          <TableCell align="right">Price&nbsp;</TableCell>
                          <TableCell align="right">
                            Earnable Point&nbsp;
                          </TableCell>
                          <TableCell align="right">Breakfast&nbsp;</TableCell>
                          <TableCell align="right">Gym&nbsp;</TableCell>
                          <TableCell align="right"></TableCell>
                          <TableCell align="right"></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row" align="right">
                            {new Date(orderHistory.checkin).toLocaleString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit",
                              }
                            ) === "Invalid Date"
                              ? ""
                              : new Date(orderHistory.checkin).toLocaleString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "2-digit",
                                    day: "2-digit",
                                  }
                                )}
                          </TableCell>
                          <TableCell align="right">
                            {new Date(orderHistory.checkout).toLocaleString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit",
                              }
                            ) === "Invalid Date"
                              ? ""
                              : new Date(orderHistory.checkout).toLocaleString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "2-digit",
                                    day: "2-digit",
                                  }
                                )}
                          </TableCell>
                          <TableCell align="right">
                            {orderHistory.hotelName}
                          </TableCell>

                          <TableCell align="right">
                            {orderHistory.hotelAddress}
                          </TableCell>
                          <TableCell align="right">
                            {orderHistory.hotelCity}
                          </TableCell>
                          <TableCell align="right">
                            {orderHistory.roomNumber}
                          </TableCell>
                          <TableCell align="right">
                            {orderHistory.guestsChanged !== 0 ? orderHistory.guestsChanged : orderHistory.maxGuests}
                          </TableCell>
                          <TableCell align="right">
                            {orderHistory.roomType}
                          </TableCell>
                          <TableCell align="right">
                            {orderHistory.totalPrice}
                          </TableCell>
                          <TableCell align="right">
                            {orderHistory.earnablePoints}
                          </TableCell>
                          <TableCell align="right">
                            {orderHistory.breakfast}
                          </TableCell>
                          <TableCell align="right">
                            {orderHistory.gym}
                          </TableCell>
                          <TableCell>
                            <IconButton onClick={enableEdit}>
                              <EditIcon />
                            </IconButton>
                            <IconButton onClick={deleteReservationHandle}>
                              <DeleteIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </Item>
            </Grid>

            <Grid item></Grid>
          </Grid>
        </Grid>
      ) : (
        <EditScreen
          getsignID={getsignID}
          getcusID={getcusID}
          cusValues={cusInfo}
          orderValues={orderHistory}
          setPassToCheckout={setPassToCheckout}
          passToCheckout={passToCheckout}
        />
      )}
    </Box>
  );
};
export default UserProfileScreen;
