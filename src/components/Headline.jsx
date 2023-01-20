import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
const containerSx = {};

const headerSx = {
  maxWidth: "680px",
  margin: "112px auto",
  marginBottom: "12px",
};

const subSx1 = {
  maxWidth: "480px",
  marginBottom: "0px",
  margin: "12px auto",
};
const buttonSx = {
  margin: "24px auto",
  textTransform: "none",
  backgroundColor: "#532ee7",
  "&:hover": {
    backgroundColor: "#532ee7",
  },
};
const Headline = ({ head1, head2, head3, buttonText }) => {
  return (
    <>
      <Grid item xs={12} sx={containerSx} alignItems="center">
        <Typography variant="h2" sx={headerSx}>
          {head1}
        </Typography>
        <Typography variant="subtitle1" sx={subSx1}>
          {head2}
        </Typography>
        <Typography variant="subtitle2">{head3}</Typography>
        <Button variant="contained" sx={buttonSx} size="large">
          {buttonText}
        </Button>
      </Grid>
    </>
  );
};

export default Headline;
