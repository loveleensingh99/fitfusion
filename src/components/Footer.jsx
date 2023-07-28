import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Logo from "../assets/images/Logo.png";

export default function Footer() {
  return (
    <>
      <Box mt="80px" bgcolor="#FFF3F4">
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
            style={{ width: "80px", height: "80px" }}
          />
          <Typography
            variant="h5"
            sx={{ fontSize: { lg: "28px", xs: "20px" }, fontWeight: "700" }}
            textAlign="center"
            color="#FF2625"
          >
            FitFusion
          </Typography>
        </Stack>
        <Typography
          variant="h5"
          sx={{ fontSize: { lg: "28px", xs: "20px" } }}
          mt="41px"
          textAlign="center"
          pb="40px"
        >
          Made with ❤️ by Loveleen Singh
        </Typography>
      </Box>
    </>
  );
}
