import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: {
          sm: "452px",
          xs: "30px",
          mt: { sm: "32px", xs: "20px" },
          justifyContent: "none",
        },
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "41px", height: "44px", margin: "0 50px" }}
        />
      </Link>
      <Stack direction="row" gap="30px" fontSize="17px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            fontFamily: "Arial",
            textDecoration: "none",
            color: "#808080",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Link>
        <a
          href="#excerises"
          style={{ fontFamily:'Arial', textDecoration: "none", color: "#808080" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
