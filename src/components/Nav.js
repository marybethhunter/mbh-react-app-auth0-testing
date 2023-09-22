import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Nav = () => {
  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "10px",
        marginBottom: "20px",
        backgroundColor: "#AAFF00",
        alignItems: "center",
      }}
    >
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <img
          src="/plant-emoji.png"
          alt="plant emoji"
          height="70px"
          width="70px"
        />

        <p style={{ color: "#023020" }}>MB's Custom React App :)</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 12,
          alignItems: "center",
        }}
      >
        <LoginButton />
        <LogoutButton />
      </div>
    </nav>
  );
};

export default Nav;
