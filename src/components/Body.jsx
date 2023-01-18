import Grid from "@mui/material/Grid";
import React from "react";
import { featureData, reviewData } from "../utils/data";
import Feature from "./Features/Feature";
import MediumInfo from "./Features/MediumInfo";
import Reviews from "./Reviews";
import PaymentInfo from "./Features/PaymentInfo";
import Headline from "./Headline";
import PricingBanner from "./PricingBanner";

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
        <Headline />
        <Feature {...featureData[0]}></Feature>
        <Feature {...featureData[1]}>
          <MediumInfo {...featureData[1].subComponentProps}></MediumInfo>
        </Feature>
        <Feature {...featureData[2]}>
          <PaymentInfo {...featureData[2].subComponentProps}></PaymentInfo>
        </Feature>

        {reviewData.map((val, index) => {
          return (
            <Grid item xs={6} id={index}>
              <Reviews {...val}></Reviews>
            </Grid>
          );
        })}
      </Grid>
      <PricingBanner></PricingBanner>
    </>
  );
};

export default Body;
