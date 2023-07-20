import "./App.css";
import { Routes, Route } from "react-router-dom";
import AppBar from "./components/AppBar";
import Home from "./screens/HomeScreen";
import Login from "./screens/LoginScreen";
import Join from "./screens/RegistrationScreen";
import Booking from "./screens/BookingScreen";
import BookingResult from "./screens/BookingResultScreen"
import Checkout from "./screens/CheckoutScreen"
import Confirmation from "./screens/ConfirmationScreen"
import UserProfile from "./screens/UserProfileScreen"
import Admin from "./screens/AdminScreen";

import bcv4 from "./img/video.mp4";
import bcvw from "./img/video.webm";


function App( ) {
  return (
    <div className="App">
        <div style={{ position: "absolute", height: "100vh", width: "100vw" }}>
          <div style={{ position: "absolute", width: "100%" }}>
            <AppBar />
          </div>
          <div
            style={{
              top: 0,
              left: 0,
              height: { lg: "100%", md: "100%", sm: "100%", xs: "100%" },
              width: { lg: "100%", md: "100%", sm: "100%", xs: "100%" },
              zIndex: -1,
              opacity: 0.15,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <video
              style={{
                height: "100vh",
                width: "100%",
                objectFit: "cover",
              }}
              autoPlay
              muted
              loop
            >
              <source src={bcv4} type="video/mp4" />
              <source src={bcvw} type="video/webm" />
            </video>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Join />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/bookingresult" element={<BookingResult />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/uprofile" element={<UserProfile />} />
          <Route path="/admin" element={<Admin />} />
        </Routes> 
    </div>
  );
}

export default App;
