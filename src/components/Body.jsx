import Grid from "@mui/material/Grid";
import React from "react";
import { featureData, reviewData } from "../utils/data";
import Feature from "./Features/Feature";
import MediumInfo from "./Features/MediumInfo";
import Reviews from "./Reviews";
import PaymentInfo from "./Features/PaymentInfo";

const Body = () => {
  return (
    <>
      <Grid
        container
        spacing={6}
        justifyContent="center"
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Feature {...featureData[0]}></Feature>
        <Feature {...featureData[1]}>
          <MediumInfo {...featureData[1].subComponentProps}></MediumInfo>
        </Feature>
        <Feature {...featureData[2]}>
          <PaymentInfo {...featureData[2].subComponentProps}></PaymentInfo>
        </Feature>

        {reviewData.map((val) => {
          return (
            <Grid item xs={6}>
              <Reviews {...val}></Reviews>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Body;
