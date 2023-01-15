import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const imageSx = {
  borderRadius: "50%",
  width: "50px",
  height: "50px",
};
const Reviews = ({ comment, name, position, image }) => {
  return (
    <>
      <Box component="img" src={require("../media/" + image)} sx={imageSx} />
      <Typography>{comment}</Typography>
      <Typography>
        {name}, {position}
      </Typography>
    </>
  );
};

export default Reviews;
