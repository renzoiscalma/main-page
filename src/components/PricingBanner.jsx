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
const PricingBanner = ({ pricingBannerData }) => {
  const [data1, data2] = pricingBannerData;
  console.log(data1, data2);
  return (
    <Box sx={containerSx}>
      <Grid container sx={gridContainer} spacing={6}>
        <Grid item xs={7} sx={descriptionSx}>
          <Typography variant="h3">{data1.heading}</Typography>
          <Typography variant="subtitle1">{data1.description}</Typography>
          <Box sx={checkContainer}>
            <Typography variant="subtitle1">{data1.checkText1}</Typography>
            <Typography variant="subtitle1">{data1.checkText2}</Typography>
          </Box>
        </Grid>
        <Grid item xs={5} sx={pricingBoxSx}>
          <Box sx={priceContainer}>
            <Typography variant="h3">
              {data2.currency}
              {data2.price}
            </Typography>
            <Typography sx={pMonth}>{data2.frequency}</Typography>
          </Box>
          <Typography sx={priceDesciption}>{data2.description}</Typography>
          <Button variant="contained" sx={buttonSx} size="large">
            {data2.buttonText}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PricingBanner;
