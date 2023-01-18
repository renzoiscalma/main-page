import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const containerSx = {
  backgroundColor: "#532ee7",
  padding: "64px",
  margin: "0 auto",
  textAlign: "left",
  marginTop: "56px",
};

const gridContainer = {
  margin: "0 auto",
  maxWidth: "1010px",
  marginBottom: "48px",
  color: "white",
};

const descriptionSx = {};

const pricingBoxSx = {};

const checkContainer = {
  marginTop: "10px",
};

const priceContainer = {};

const pMonth = {};

const buttonSx = {};

const priceDesciption = {
  borderTop: "1px solid hsla(0,0%,100%,.2)",
  marginTop: "24px",
  marginBottom: "12px",
};
const PricingBanner = () => {
  return (
    <Box sx={containerSx}>
      <Grid container sx={gridContainer} spacing={6}>
        <Grid item xs={7} sx={descriptionSx}>
          <Typography variant="h3">Affordable pricing for everyone.</Typography>
          <Typography variant="subtitle1">
            Very simple pricing, one plan for a monthly fee. Unlimited
            everything, go wild, invoice to your hearts content.
          </Typography>
          <Box sx={checkContainer}>
            <Typography variant="subtitle1">Free for 30 days</Typography>
            <Typography variant="subtitle1">
              No credit card required!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={5} sx={pricingBoxSx}>
          <Box sx={priceContainer}>
            <Typography variant="h3">$12</Typography>
            <Typography sx={pMonth}>per month</Typography>
          </Box>
          <Typography sx={priceDesciption}>
            Completely free for 30 days, unlimited everything so you can truely
            work out if MainPage is right for you.
          </Typography>
          <Button variant="contained" sx={buttonSx} size="large">
            Start your 30 day free trial!
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PricingBanner;
