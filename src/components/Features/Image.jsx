import PropTypes from "prop-types";
import Box from "@mui/material/Box";

const imageSx = {
  maxWidth: "100%",
};
const Image = ({ imagesrc }) => {
  return <Box component="img" src={imagesrc} sx={imageSx}></Box>;
};

Image.propTypes = {
  imagesrc: PropTypes.string,
};

export default Image;
