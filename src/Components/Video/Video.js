import React, { useState } from 'react';

const Video = ({ vid }) => {
    const [mute, setMute] = useState(true);
    const style = {
        width: "50rem",
    }
    const buttonStyle = {
        position: "absolute",
        left: 20,
        top: 50,
        background: "transparent",
        border: "none"
    }
    return (
        <div style={{ position: "relative", height: "28.125rem" }}>
            <video style={style} loop muted={mute} autoPlay src={vid}></video>
            <button style={buttonStyle} onClick={() => setMute(!mute)}><img style={{ width: "3rem" }} src={mute ? "images/mute.svg" : "images/unMute.svg"} alt="" /></button>
        </div >
    );
};

export default Video;