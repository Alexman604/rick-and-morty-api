import React from "react";

const Spinner = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          borderRadius: "50%",
          border: "8px solid rgba(255, 255, 255, 0.4)",
          borderTopColor: "#3498db",
          width: "50px",
          height: "50px",
          animation: "spin 1s linear infinite",
        }}
      ></div>
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Spinner;
