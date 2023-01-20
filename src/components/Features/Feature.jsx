import Grid from "@mui/material/Grid";
import Image from "./Image";
import FeatureText from "./FeatureText";
import PropTypes from "prop-types";

const containerSx = {
  marginBottom: "124px",
  margin: "auto 0",
  textAlign: "left",
};

const hideXsSx = {
  display: {
    xs: "block",
    md: "none",
  },
};

const hideMdSx = {
  display: {
    xs: "none",
    md: "block",
  },
};

const Feature = ({ imagesrc, text, flipped, children }) => {
  if (flipped) {
    return (
      <>
        <Grid
          item
          xs={6}
          sx={{
            ...containerSx,
            ...hideXsSx,
          }}
        >
          <Image imagesrc={imagesrc} />
        </Grid>
        <Grid item xs={6} sx={containerSx}>
          <FeatureText {...text} />
          <div>{children}</div>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            ...containerSx,
            ...hideMdSx,
          }}
        >
          <Image imagesrc={imagesrc} />
        </Grid>
      </>
    );
  }
  return (
    <>
      <Grid
        item
        xs={6}
        sx={{
          ...containerSx,
          ...hideXsSx,
        }}
      >
        <Image imagesrc={imagesrc} />
      </Grid>
      <Grid item xs={6} sx={containerSx}>
        <FeatureText {...text} />
        <div>{children}</div>
      </Grid>
      <Grid
        item
        xs={6}
        sx={{
          ...containerSx,
          ...hideMdSx,
        }}
      >
        <Image imagesrc={imagesrc} />
      </Grid>
    </>
  );
};

export default Feature;

Feature.propTypes = {
  imagesrc: PropTypes.string,
  text: PropTypes.shape({
    subtitle: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
  }),
  flipped: PropTypes.bool,
  customComponent: PropTypes.elementType,
};
