import React from "react";

function BackImg() {
    return (
        <div style={{ position: "relative", height: "60vh", width: "100%" }}>
            <img 
                src="https://img.freepik.com/premium-vector/dotted-world-map-black-background-vector-illustration_541075-470.jpg"
                alt="Background"
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />

            <h1
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)", // Center the text
                    color: "white",
                    fontSize: "5.5rem",
                    textAlign: "center",
                }}
            >
                CS2340 TEAM 4
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
            >_________________
            </h1>
        </div>
    );
}

export default BackImg;