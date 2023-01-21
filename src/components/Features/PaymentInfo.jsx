import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import PropTypes from "prop-types";

const containerSx = {
  borderTop: "1px solid #ebebeb",
  alignItems: "center",
  paddingTop: "24px",
  marginTop: "12px",
};

const imageSx = {
  maxWidth: "100%",
  margin: "24px 0",
};

const linkContainerSx = {
  marginBottom: "24px",
};

const PaymentInfo = ({ text, linkText, imgsrc }) => {
  return (
    <Box component="div" sx={containerSx}>
      <Typography variant="subtitle2">{text}</Typography>
      <Box component="img" sx={imageSx} src={imgsrc} />
      <Box sx={linkContainerSx}>
        <Link href="/">
          <Typography variant="subtitle1">{linkText}</Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default PaymentInfo;

PaymentInfo.propTypes = {
  text: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  imgsrc: PropTypes.string.isRequired,
};
