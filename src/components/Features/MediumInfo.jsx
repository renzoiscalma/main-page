import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import PropTypes from "prop-types";

const iconSx = {
  height: "32px",
  width: "32px",
  borderRadius: "50px",
};

const containerSx = {
  borderTop: "1px solid #ebebeb",
  alignItems: "center",
  paddingTop: "24px",
  marginTop: "12px",
  display: "inline-flex",
};

const textContainerSx = {
  marginLeft: "12px",
};
const MediumInfo = ({ text, linkText, imgsrc }) => {
  return (
    <Box component="div" sx={containerSx}>
      <Box>
        <Box component="img" src={imgsrc} sx={iconSx} />
      </Box>
      <Box sx={textContainerSx}>
        <Typography>{text}</Typography>
        <Link href="/" underline="hover">
          {linkText}
        </Link>
      </Box>
    </Box>
  );
};

export default MediumInfo;

MediumInfo.propTypes = {
  text: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  imgsrc: PropTypes.string.isRequired,
};
