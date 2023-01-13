import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { image1, image2 } from "../utils/image";
const headline = {};
const gridData = [{}];

const Body = () => {
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
        <Grid
          item
          xs={6}
          sx={{
            marginBottom: "124px",
            margin: "auto 0",
          }}
        >
          <Typography align="left">Easier for you</Typography>
          <Typography variant="h4" align="left">
            Spend less than 5 seconds sending your next invoice
          </Typography>
          <Typography variant="subtitle2" align="left">
            Spend more time doing the work you want to be doing. TwoCards meets
            the needs of freelancers, making invoicing swift, simple and secure.
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            marginBottom: "124px",
          }}
        >
          <Box
            component="img"
            src={image1}
            sx={{
              maxWidth: "100%",
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Box
            component="img"
            src={image2}
            sx={{
              maxWidth: "100%",
            }}
          />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            marginBottom: "124px",
            margin: "auto 0",
          }}
        >
          <Typography align="left">Easier for you</Typography>
          <Typography variant="h4" align="left">
            Spend less than 5 seconds sending your next invoice
          </Typography>
          <Typography variant="subtitle2" align="left">
            Spend more time doing the work you want to be doing. TwoCards meets
            the needs of freelancers, making invoicing swift, simple and secure.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Body;
