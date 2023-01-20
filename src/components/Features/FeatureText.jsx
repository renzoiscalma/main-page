import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

const headersubSx = {
  fontStyle: "italic",
  color: "#7a7d81",
};
const FeatureText = ({ subtitle, heading, description }) => {
  return (
    <>
      <Typography variant="subtitle2" sx={headersubSx}>
        {subtitle}
      </Typography>
      <Typography variant="h4">{heading}</Typography>
      <Typography variant="subtitle2">{description}</Typography>
    </>
  );
};

FeatureText.propTypes = {
  subtitle: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
};

export default FeatureText;
