import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const imageSx = {
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  margin: "12px",
  marginLeft: "0px",
  objectFit: "cover",
};

const reviewContainerSx = {
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
  maxWidth: "400px",
  margin: "auto",
};

const reviewHeaderSx = {
  display: "inline-flex",
  flexDirection: "row",
};

const headerDetailsSx = {
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
};

const positionSx = {
  fontSize: "0.8rem",
};

const nameSx = {
  fontSize: "0.95rem",
};

const Reviews = ({ comment, name, position, image }) => {
  return (
    <>
      <Box sx={reviewContainerSx}>
        <Box sx={reviewHeaderSx}>
          <Box component="img" src={image} sx={imageSx} />
          <Box sx={headerDetailsSx}>
            <Typography variant="h6" sx={nameSx}>
              {name}
            </Typography>
            <Typography variant="subtitle2" sx={positionSx}>
              {position}
            </Typography>
          </Box>
        </Box>
        <Typography variant="subtitle2">{comment}</Typography>
      </Box>
    </>
  );
};

export default Reviews;
