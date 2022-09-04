import React, { useEffect, useState } from "react";
import Items from "../Items/Items";
import Video from "../Video/Video";

const Main = ({ arr }) => {
  const newElemets = (obj) => {
    const newObj = { ...obj };
    switch (newObj.id) {
      case 1:
        newObj.id = arr.length + 1;
        break;
      case 2:
        newObj.id = arr.length + 2;
        break;
      case 3:
        newObj.id = arr.length + 3;
        break;
      case 4:
        newObj.id = arr.length + 4;
        break;
      case 5:
        newObj.id = arr.length + 5;
        break;
      case 6:
        newObj.id = arr.length + 6;
        break
      default:
        break;
    }
    return newObj;
  }

  const [position, setPosition] = useState(0);
  const [secondPosition, setSecondPosition] = useState(80);
  const [thirdposition, setThirdPosition] = useState(160);
  const [lastposition, setLastPosition] = useState(267);
  const newArray = [...arr, newElemets(arr[0]), newElemets(arr[1]), newElemets(arr[2]), newElemets(arr[3]), newElemets(arr[4]), newElemets(arr[5])];
  const [firstItem, setFirstItem] = useState(3);
  const [secondItems, setSecondItem] = useState(2);
  const [thirdItems, setThirdItem] = useState(1);
  const [vid, setVid] = useState(newArray[firstItem - 1].vid)
  const length = newArray.length;

  const previousButton = () => {
    if (-((length - 7) * 160) === position) {
      return;
    }
    setPosition(position - 160);
    setFirstItem(firstItem === newArray[arr.length - 1] ? 1 : firstItem + 1);
    setSecondItem(secondItems === newArray[arr.length - 1] ? 1 : secondItems + 1)
    setThirdItem(thirdItems === newArray[arr.length - 1] ? 1 : thirdItems + 1)
    setSecondPosition(secondPosition - 106.67)
    setThirdPosition(thirdposition - 106.67)
    setLastPosition(lastposition - 106.67)
  };
  const nextButton = () => {
    if (0 === position) {
      return;
    }
    setPosition(position + 160);
    setFirstItem(firstItem === newArray[0] ? arr[arr.length - 1] : firstItem - 1);
    setSecondItem(secondItems === newArray[0] ? arr[arr.length - 1] : secondItems - 1);
    setThirdItem(thirdItems === newArray[0] ? arr[arr.length - 1] : thirdItems - 1);
    setSecondPosition(secondPosition + 106.67);
    setThirdPosition(thirdposition + 106.67);
    setLastPosition(lastposition + 106.67);
  };

  useEffect(() => { setVid(newArray[firstItem - 1].vid) }, [firstItem])

  const fourItems = {
    display: "flex",
    width: "1080px",
    overflow: "hidden",
  };

  const mainStyle = {
    display: "flex",
    width: "1080px",
    marginLeft: "auto"
  }

  const buttonStyle = {
    color: "#DE4839",
    lineHeight: "0",
    borderRadius: "50%",
    padding: 0,
    border: "none",
    marginRight: "20px",
    marginTop: "20px"
  }

  const buttonDiv = {
    display: "flex",
    justifyContent: "right"
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50vw" }}>
        </div>
        <div>
          <Video vid={vid} />
        </div>
      </div>
      <div style={mainStyle}>
        <div style={fourItems}>
          {newArray.map((obj) => (
            <Items key={obj.id} thirdItems={thirdItems} secondItems={secondItems} firstItem={firstItem} secondPosition={secondPosition} thirdposition={thirdposition} position={position} obj={obj} lastposition={lastposition} />
          ))}
        </div>
      </div>
      <div style={buttonDiv}>
        <button style={buttonStyle} onClick={previousButton}><img src="images/back.png" alt="" /></button>
        <button style={buttonStyle} onClick={nextButton}><img src="images/next.png" alt="" /></button>
      </div>
    </>
  );
};

export default Main;
