import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import img5 from "../img/img5.jpg";


const CarouselComponent = () => {
  let items = [
    {
      img: img1,
      //   description: "Probably the most random thing you have ever seen!",
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img4,
    },
    {
      img: img5
    }
  ];

  return (
    <Carousel animation="fade">
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

function Item(props) {
  return (
    <Paper style={{ width: "50rem", height: "28.125rem" }}>
      <img
        src={props.item.img}
        alt=""
        style={{ width: "50rem", height: "28.125rem" }}
      />
    </Paper>
  );
}

export default CarouselComponent;
