import React, {useState} from "react";
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";


const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),

    color: theme.palette.text.secondary,
}));


export default function BookingScreen() {
    const [values, setValues] = useState({city: ""});
    let city;
    //const [location, setLocation] = React.useState();

    const handleLocation = (event) => {
        city = event.target.value;
        setValues({...values, city: city});
        console.log(`Location => ${event.target.value}`);
    };

    let navigate = useNavigate();

    // handle button function
    const searchHandle = () => {
        fetch(`http://localhost:8080/newHotel/getHotelsByCity/${values.city}`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then((response) => response.json())
            .then((data) => {
                    localStorage.setItem("city", JSON.stringify(data));
                    navigate("/bookingresult", {replace: true,})
                }
            )
    };

    return (
        <Box sx={{flexGrow: 1, position: "relative", top: "30vh"}}>
            <Grid container spacing={3}>
                <Grid item lg={4} md={3} sm={2} xs={1}></Grid>
                <Grid item lg={4} md={6} sm={8} xs={10}>
                    <Item>
                        <div>
                            <TextField
                                fullWidth
                                label="Location"
                                value={city}
                                onChange={handleLocation}
                                variant="standard"
                                sx={{mb: 3}}
                            >
                            </TextField>

                            <Button
                                //for demo use, delete when finished api
                                //component={Link} to="/bookingresult"
                                variant="contained"
                                sx={{
                                    marginTop: 2,
                                    backgroundColor: 'SlateBlue',
                                    borderRadius: 100,
                                    padding: '8px 25px'
                                }}
                                onClick={searchHandle}
                            >
                                Search
                            </Button>
                        </div>
                    </Item>
                </Grid>
                <Grid item lg={6} md={3} sm={2} xs={1}></Grid>
            </Grid>
        </Box>
    );
}

