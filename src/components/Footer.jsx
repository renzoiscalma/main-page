import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
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

const extraFeatureContainerSx = {
  margin: "0 auto",
};

const extraFeaturesSx = {
  display: "flex",
  justifyContent: "center",
  "&::before": {
    background: `url(${checklight}) no-repeat 50%`,
    content: "''",
    width: "20px",
    height: "20px",
    marginRight: "2px",
    marginTop: "auto",
    marginBottom: "auto",
  },
};

const extraFeatureTypoSx = {
  fontSize: "0.90em",
};

const footerContainer = {
  width: "100%",
  maxWidth: "1000px",
  margin: "24px auto",
};

const footerDataSx = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const Footer = () => {
  return (
    <>
      <Grid
        container
        columns={{ xs: 3, md: 12 }}
        spacing={6}
        justifyContent="center"
        sx={footerContainer}
      >
        <Grid
          container
          columns={{ xs: 2, md: 10 }}
          justifyContent={{ xs: "center", md: "normal" }}
          sx={extraFeatureContainerSx}
        >
          {extraFeatures.map((feature) => (
            <Grid item sx={extraFeaturesSx} xs={1} md={2} key={feature}>
              <Typography sx={extraFeatureTypoSx} variant="subtitle2">
                {feature}
              </Typography>
            </Grid>
          ))}
        </Grid>
        {footerData.map((data) => (
          <Grid item xs={3} align="left" key={data.heading} sx={footerDataSx}>
            <Typography variant="h6">{data.heading}</Typography>
            {data.items.map((item) => (
              <Typography variant="body2" key={item}>
                {item}
              </Typography>
            ))}
          </Grid>
        ))}
        <Grid item xs={3} align="left" sx={footerDataSx}>
          <Typography variant="h6">Interested?</Typography>
          <Typography variant="body2">Contact me now!</Typography>
        </Grid>
        {/* <Grid item xs={12} align="left" sx={{ fontStyle: "italic" }}>
          <Typography variant="body2" color="grey">
            {footerRegistration}
          </Typography>
        </Grid> */}
      </Grid>
    </>
  );
};

export default Footer;
