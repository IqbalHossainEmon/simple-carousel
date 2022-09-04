import React from "react";

const Items = ({ obj, position, firstItem, secondItems, thirdItems, secondPosition, thirdposition, lastposition }) => {
  const { img, id } = obj;
  const style = {
    minWidth: "9.375rem",
    position: "relative",
    margin: "0.313rem",
    transform: `translateX(${position}px)`,
    transition: "transform 0.3s",
  };
  const firstStyle = {
    minWidth: "9.375rem",
    position: "relative",
    margin: "0.313rem",
    transform: `translateX(${position}px) scale(0.9)`,
    transition: "transform 0.3s",
  };
  const secondStyle = {
    minWidth: "9.375rem",
    position: "relative",
    margin: "0.313rem",
    transform: `translateX(${secondPosition}%) scale(0.8)`,
    transition: "transform 0.3s",
  };
  const thirdStyle = {
    minWidth: "9.375rem",
    position: "relative",
    margin: "0.313rem",
    transform: `translateX(${thirdposition}%) scale(0.7)`,
    transition: "transform 0.3s",
  };
  const lastStyle = {
    minWidth: "9.375rem",
    position: "relative",
    margin: "0.313rem",
    transform: `translateX(${lastposition}%) scale(0.7)`,
  }
  const lastestStyle = {
    minWidth: "9.375rem",
    position: "relative",
    margin: "0.313rem",
    visibility: "hidden",
    transform: `translateX(${lastposition}%) scale(0)`,
    transition: "transform 0.3s",
  }
  const imgStyle = {
    border: "2px solid white",
    width: "100%",
    filter: "grayscale(100%)",
    borderRadius: "10px",
    transition: "filter 0.3s",
  }
  const focImgStyle = {
    border: "2px solid white",
    width: "100%",
    borderRadius: "10px",
  }
  return (
    <div style={firstItem === id ? firstStyle : style && secondItems === id ? secondStyle : style && thirdItems === id ? thirdStyle : style && (thirdItems - 1) === id ? lastStyle : style && thirdItems - 1 > id ? lastestStyle : style}>
      <img style={firstItem === id ? focImgStyle : imgStyle} src={img} alt="" />
    </div>
  );
};

export default Items
