import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),

  color: theme.palette.text.secondary,
}));

const columns = [
  {
    id: "id",
    label: " ",
    minWidth: 10,
  },
  {
    id: "name",
    label: "Hotel Name",
    minWidth: 200,
  },
  {
    id: "address",
    label: "Address",
    minWidth: 200,
  },
  {
    id: "city",
    label: "City",
    minWidth: 100,
  },
  {
    id: "number",
    label: "Number",
    minWidth: 10,
  },
  {
    id: "type",
    label: "Type",
    minWidth: 50,
  },
  {
    id: "price",
    label: "Price",
    minWidth: 50,
  },
  {
    id: "point",
    label: "Point",
    minWidth: 50,
  },
];

export default function BookingScreen() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);
//   const [data, setData] = useState({
//     id: "",
//     name: "",
//     address: "",
//     city: "",
//     number: "",
//     type: "",
//     price: "",
//     point: "",
//     breakfast: "",
//     gym: "",
//   });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [hotelValue, setHotelValues] = useState("");
  useEffect(() => {
    //const getCity = localStorage.getItem('city');
    const getCity = JSON.parse(localStorage.getItem("city"));
    setHotelValues(getCity);
  }, []);

  let i;
  let id, name, address, city, number, maxguests, type, price, point, breakfast, gym;
  let ary = [];

  // let dollarFormat = Intl.NumberFormat("en-US", {
  //   style: "currency",
  //   currency: "USD",
  // });

  function createData() {
    for (i = 0; i < hotelValue.length; i++) {
      id = hotelValue[i].hotelID;
      name = hotelValue[i].hotelName;
      address = hotelValue[i].hotelAddress;
      city = hotelValue[i].hotelCity;
      number = hotelValue[i].roomNumber;
      maxguests = hotelValue[i].maxGuests;
      type = hotelValue[i].roomType;
      price = hotelValue[i].totalPrice;
      point = hotelValue[i].earnablePoints;
      ary.push({
        id,
        name,
        address,
        city,
        number,
        maxguests,
        type,
        price,
        point,
        breakfast,
        gym,
      });
    }
    return ary;
  }

  const rows = createData();
  let val;

  // handle button function
  const selectHandle = () => {};

  return (
    <Box sx={{ flexGrow: 1, position: "relative", top: "30vh" }}>
      <Grid container spacing={3}>
        <Grid xs></Grid>
        <Grid xs>
          <Item>
            <div>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="Data Table">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align="right"
                          style={{ minWidth: column.minWidth }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.code}
                          >
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell key={column.id} align="right" >
                                  {column.format && typeof value === "number"
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                              );
                            })}
                            <TableCell>
                              <Link
                                onClick={(event) => {
                                  //   event.preventDefault();
                                  val = row;
                                //   setData(val);
                                  selectHandle(row);
                                  localStorage.setItem("selectedHotel", JSON.stringify(val))
                                }}
                                to="/checkout"
                                // state={{
                                //   data: {
                                //     id: row.id,
                                //     name: row.name,
                                //     address: row.address,
                                //     city: row.city,
                                //     number: row.number,
                                //     type: row.type,
                                //     price: row.price,
                                //     point: row.point,
                                //     breakfast: row.breakfast,
                                //     gym: row.gym,
                                //   },
                                // }}
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
                                Select
                              </Link>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[3]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </div>
            <Button
              component={Link}
              to="/booking"
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
        </Grid>
        <Grid xs></Grid>
      </Grid>
    </Box>
  );
}
