import Grid from "@mui/material/Grid";
import React from "react";
import {
  headlineData,
  featureData,
  reviewData,
  pricingBannerData,
} from "../utils/data";
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
        columns={{ xs: 6, md: 12, lg: 12 }}
        spacing={6}
        justifyContent="center"
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <Headline {...headlineData} />
        <Feature {...featureData[0]}></Feature>
        <Feature {...featureData[1]}>
          <MediumInfo {...featureData[1].subComponentProps}></MediumInfo>
        </Feature>
        <Feature {...featureData[2]}>
          <PaymentInfo {...featureData[2].subComponentProps}></PaymentInfo>
        </Feature>

        {reviewData.map((val, index) => {
          return (
            <Grid item xs={6} key={index}>
              <Reviews {...val}></Reviews>
            </Grid>
          );
        })}
      </Grid>
      <PricingBanner pricingBannerData={pricingBannerData}></PricingBanner>
    </>
  );
};

export default Body;
