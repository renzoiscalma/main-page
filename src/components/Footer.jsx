import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
const footerData = [
  {
    heading: "About",
    items: ["Pricing", "Terms", "Privacy", "Contact"],
  },
  {
    heading: "About",
    items: ["Pricing", "Terms", "Privacy", "Contact"],
  },
  {
    heading: "About",
    items: ["Pricing", "Terms", "Privacy", "Contact"],
  },
  {
    heading: "About",
    items: ["Pricing", "Terms", "Privacy", "Contact"],
  },
];
const footerRegistration = "MainPage Ltd. • Registered in Canada";

const Footer = () => {
  return (
    <>
      <Grid
        container
        spacing={6}
        justifyContent="center"
        sx={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {footerData.map((data) => (
          <Grid item xs={3} align="left">
            <Typography variant="h6">{data.heading}</Typography>
            {data.items.map((item) => (
              <Typography variant="body2">{item}</Typography>
            ))}
          </Grid>
        ))}
        <Grid
          item
          xs={12}
          align="left"
          sx={{ margin: "56px 0", fontStyle: "italic" }}
        >
          <Typography variant="body2" color="grey">
            {footerRegistration}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
