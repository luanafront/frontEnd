import React from "react";

function Rating ({rate, count}) {
  return (
    <div style={{
      position: "relative",
      height: "20px",
    }}>
      <div style={{
        backgroundColor: "transparent",
        height: "20px",
        position: "absolute",
        width: 22 * rate, 
        overflow: "hidden"
      }}>
        <p style={{
        margin: "0"
      }}>⭐⭐⭐⭐⭐</p>
      </div>
      <p style={{
        textAlign: "start",
        opacity: ".7",
        fontSize: "12px",
        margin: "20px 0 0 5px"
      }}>({count})</p>
    </div>
  )
}

export default Rating