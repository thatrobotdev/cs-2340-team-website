import React from "react";
import Image from "next/image";

function BackImg() {
    return (
        <div style={{ position: "relative", height: "60vh", width: "100%" }}>
            <Image 
                src="/cs-2340-team-website/world_map_dots.svg"
                alt="Background"
                fill
                style={{objectFit: "cover", backgroundColor: "black"}}
            />
            <h1
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)", // Center the text
                    color: "white",
                    fontSize: "6.8rem",
                    textAlign: "center",
                }}
            >
                CS 2340 TEAM 4
            </h1>
            <h1
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)", // Center the text
                    color: "#FF5252",
                    fontSize: "7rem",
                    textAlign: "center",
                    paddingTop: "10px"
                }}
            >____________________
            </h1>
        </div>
    );
}

export default BackImg;