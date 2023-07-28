import React from "react";

import Logo from "../assets/images/Logo.png";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <Stack
        direction={"row"}
        justifyContent="space-around"
        sx={{
          gap: { sm: "122px", xs: "40px" },
          mt: { sm: "32px", xs: "20px" },
          justifyContent: "none",
        }}
      >
        <Link to="/" >
          <Stack
            gap="40px"
            sx={{ alignItems: "center" }}
            flexWrap="wrap"
            px="40px"
            pt="24px"
            justifyContent={"center"}
            direction="row"
          >
            <img
              src={Logo}
              alt="logo"
              style={{ width: "48px", height: "48px" }}
            />
            <Typography
              variant="h5"
              sx={{
                fontSize: { lg: "28px", xs: "20px" },
                fontWeight: "700",
                textDecoration: "none",
              }}
              textAlign="center"
              color="#FF2625"
            >
              FitFusion
            </Typography>
          </Stack>
        </Link>

        <Stack
          direction="row"
          gap={"40px"}
          fontSize="24px"
          alignItems="flex-end"
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#3A1212",
              borderBottom: "3px solid #FF2625",
            }}
          >
            Home
          </Link>
          <a
            href="#exercises"
            style={{
              textDecoration: "none",
              color: "#3A1212",
            }}
          >
            Exercises
          </a>
        </Stack>
      </Stack>
    </>
  );
};

export default Navbar;
