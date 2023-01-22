import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
const containerSx = {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
};

const headerSx = {
  maxWidth: "680px",
  margin: "112px 0",
  marginBottom: "12px",
  fontSize: {
    xs: "2em",
    md: "3.75em",
  },
};

const subSx1 = {
  maxWidth: "480px",
  marginBottom: "0px",
  margin: "12px 0",
};
const buttonSx = {
  margin: "24px 0",
  textTransform: "none",
  backgroundColor: "#532ee7",
  "&:hover": {
    backgroundColor: "#532ee7",
  },
};
const Headline = ({ head1, head2, head3, buttonText, innerRef }) => {
  return (
    <>
      <Grid item xs={12} sx={containerSx} alignItems="center" ref={innerRef}>
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
