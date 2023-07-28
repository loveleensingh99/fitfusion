import { Button, Stack, Typography, capitalize } from "@mui/material";
import React from "react";

import BodyPart from "../assets/icons/body-part.png";
import Target from "../assets/icons/target.png";
import Equipment from "../assets/icons/equipment.png";

export default function Detail({ exerciseDetail }) {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    { icon: BodyPart, name: bodyPart },
    { icon: Target, name: target },
    { icon: Equipment, name: equipment },
  ];
  return (
    <>
      <Stack
        gap="60px"
        sx={{ flexDirection: { lg: "row" }, p: "20px ", alignItems: "center" }}
      >
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
        <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
          <Typography variant={"h3"}>{name}</Typography>

          <Typography variant="h6">
            Exercises keep you strong. {name} {` `} is one of the best exercises
            to target your {target}. It will help you improve your mood and gain
            energy.{" "}
          </Typography>

          {extraDetail.map((item) => (
            <Stack
              key={item.name}
              direction="row"
              gap="24px"
              alignItems="center"
            >
              <Button
                sx={{
                  background: "#fff2db",
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                }}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  style={{ width: "50px", height: "50px" }}
                />
              </Button>
              <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
                {item.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </>
  );
}
