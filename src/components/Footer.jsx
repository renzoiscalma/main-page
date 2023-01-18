import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { checklight } from "../utils/image";
const footerData = [
  {
    heading: "About",
    items: ["Pricing", "Terms", "Privacy", "Contact"],
  },
  {
    heading: "Resources",
    items: ["Press"],
  },
  {
    heading: "Social",
    items: ["Twitter", "Instagram", "Facebook"],
  },
];

const extraFeatures = [
  "Track your data",
  "Duplicate invoices",
  "Send automatic updates",
  "Instant status updates",
  "Simple summary",
];
const footerRegistration = "MainPage Ltd. • Registered";

const extraFeaturesSx = {
  display: "inline-flex",
  "&::before": {
    background: `url(${checklight}) no-repeat 50%`,
    content: "''",
    width: "26px",
    height: "26px",
    borderRight: "10px",
  },
};

const Footer = () => {
  return (
    <>
      <Grid
        container
        spacing={6}
        justifyContent="center"
        sx={{
          maxWidth: "1000px",
          margin: "24px auto",
        }}
      >
        <Grid container xs={12} columns={10} justifyContent="normal">
          {extraFeatures.map((feature) => (
            <Grid sx={extraFeaturesSx} xs={2}>
              <Typography variant="subtitle2">{feature}</Typography>
            </Grid>
          ))}
        </Grid>
        {footerData.map((data) => (
          <Grid item xs={4} align="left" id={data.heading}>
            <Typography variant="h6">{data.heading}</Typography>
            {data.items.map((item) => (
              <Typography variant="body2" id={item}>
                {item}
              </Typography>
            ))}
          </Grid>
        ))}
        <Grid item xs={12} align="left" sx={{ fontStyle: "italic" }}>
          <Typography variant="body2" color="grey">
            {footerRegistration}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
