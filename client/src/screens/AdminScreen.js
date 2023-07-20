import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#b8f1f4",
  opacity: 0.8,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const AdminScreen = () => {
  const [admin, setAdmin] = useState("");
  const [hotelID, setHotelID] = useState("");
  const [cusId, setCusId] = useState("");
  const [hotelDetail, setHotelDetail] = useState({});
  const [customerDetail, setCustomerDetail] = useState({});
  const [checki, setChecki] = useState("");
  const [checko, setChecko] = useState("");
  const [maxG, setMaxG] = useState("");
  const [price, setPrice] = useState("");

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getHotelInfo = () => {
    fetch(`http://localhost:8080/newHotel/getHotelsById/${hotelID}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((values) => {
        let data = values;
        setHotelDetail(data);
      })
      .catch((error) => console.log("Error", error));
  };

  const getCustomerInfo = () => {
    fetch(`http://localhost:8080/customer/getCustomerById/${cusId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((values) => {
        let data = values;
        setCustomerDetail(data);
      })
      .catch((error) => console.log("Error", error));
  };

  
  useEffect(() => {
    const loggedInAdmin = localStorage.getItem("admin");
    if (loggedInAdmin) {
      const foundUser = JSON.parse(loggedInAdmin);
      setAdmin(foundUser);

      fetch("http://localhost:8080/getAllReservations", {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((values) => {
          setPrice(values[0].totalPrice);
          let cId = values[0].customerID;
          let hId = values[0].hotelID
          setHotelID(hId);
          setCusId(cId);
          setChecki(values[0].checkin);
          setChecko(values[0].checkout);
          setMaxG(values[0].guestsChanged) 
        })
        .catch((error) => {
          console.log("Error", error);
        });
      getHotelInfo();
      getCustomerInfo();
    }
  }, [hotelID]);

 

  console.log("-----------1", checki);

  return (
    <Box sx={{ flexGrow: 1, position: "relative", top: "30vh" }}>
      <Grid container spacing={3}>
        <Grid item lg={1} md={3} sm={2} xs={1}></Grid>
        <Grid item lg={10} md={6} sm={8} xs={10}>
          <Item>
            <Box>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="right">Hotel Name</TableCell>
                      <TableCell align="right">Address</TableCell>
                      <TableCell align="right">City&nbsp;</TableCell>
                      <TableCell align="right">MaxGuests&nbsp;</TableCell>
                      <TableCell align="right">Type&nbsp;</TableCell>
                      <TableCell align="right">Price&nbsp;</TableCell>
                      <TableCell align="right">Point&nbsp;</TableCell>
                      <TableCell align="right">Breakfast&nbsp;</TableCell>
                      <TableCell align="right">Gym&nbsp;</TableCell>
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
                        {hotelDetail.hotelName}
                      </TableCell>
                      <TableCell align="right">
                        {hotelDetail.hotelAddress}
                      </TableCell>
                      <TableCell align="right">
                        {hotelDetail.hotelCity}
                      </TableCell>
                      <TableCell align="right">
                        {maxG}
                      </TableCell>
                      <TableCell align="right">
                        {hotelDetail.roomType}
                      </TableCell>
                      <TableCell align="right">
                        {price}
                      </TableCell>
                      <TableCell align="right">
                        {hotelDetail.earnablePoints}
                      </TableCell>
                      <TableCell align="right">
                        {hotelDetail.breakfast === false ? "No" : ""}
                      </TableCell>
                      <TableCell align="right">
                        {hotelDetail.gym === false ? "No" : ""}
                      </TableCell>
                      <TableCell>
                        <IconButton
                          onClick={() => {
                            handleClickOpen();
                            getCustomerInfo();
                          }}
                        >
                          <PersonIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Customer Information"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    <Typography>
                      First name: <span>{customerDetail.firstName}</span>{" "}
                    </Typography>
                    <Typography>
                      Last name: <span>{customerDetail.lastName}</span>
                    </Typography>
                    <Typography>
                      Phone number: <span>{customerDetail.phoneNumber}</span>
                    </Typography>
                    <Typography>
                      Check In:{" "}
                      <span>
                        {new Date(checki).toLocaleString("en-US", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        })}
                      </span>
                    </Typography>
                    <Typography>
                      Check Out:{" "}
                      <span>
                        {new Date(checko).toLocaleString("en-US", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        })}
                      </span>
                    </Typography>
                  </DialogContentText>
                </DialogContent>
              </Dialog>
            </Box>
          </Item>
        </Grid>
        <Grid item lg={1} md={3} sm={2} xs={1}></Grid>
      </Grid>
    </Box>
  );
};
export default AdminScreen;
