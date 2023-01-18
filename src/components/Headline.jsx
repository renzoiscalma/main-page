import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
const containerSx = {};

const headerSx = {
  maxWidth: "680px",
  margin: "48px auto",
  marginBottom: "12px",
};

const subSx1 = {
  maxWidth: "480px",
  marginBottom: "0px",
  margin: "12px auto",
};

const subSx2 = {};

const buttonSx = {
  margin: "24px auto",
  textTransform: "none",
};
const Headline = () => {
  return (
    <>
      <Grid item xs={12} sx={containerSx} alignItems="center">
        <Typography variant="h2" sx={headerSx}>
          Super Fast Professional Invoicing for Freelancers
        </Typography>
        <Typography variant="subtitle1" sx={subSx1}>
          MainPage helps you send your invoices as quickly as possible, getting
          you paid faster.
        </Typography>
        <Typography variant="subtitle2">
          Try out our services for free for the first purchase!
        </Typography>
        <Button variant="contained" sx={buttonSx} size="large">
          Get started for free
        </Button>
      </Grid>
    </>
  );
};

export default Headline;
