import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {image1, image2} from "../utils/image";
const headline = {};
const gridData = [{}];

const Body = () => {
	return (
		<>
			<Grid container spacing={2}>
				{/* <Headline></Headline> */}
				{/* { Array.map(() => (<Grid> </Grid>))} */}
				<Grid item xs={6}>
						<Typography>
							Easier for you
						</Typography>
						<Typography>
							Spend less than 5 seconds sending your next invoice
						</Typography>
						<Typography>
							Spend more time doing the work you want to be doing. 
							TwoCards meets the needs of freelancers, 
							making invoicing swift, simple and secure.
						</Typography>
				</Grid>
				<Grid item xs={6}>
						<img
							src={image1}
							height={480}
						/>
				</Grid>
				<Grid item xs={6}>
						<img
							src={image2+"?w=480&h=480"}
							height={480}
						/>
				</Grid>
				<Grid item xs={6}>
						<Typography>
							Easier for you
						</Typography>
						<Typography>
							Spend less than 5 seconds sending your next invoice
						</Typography>
						<Typography>
							Spend more time doing the work you want to be doing. 
							TwoCards meets the needs of freelancers, 
							making invoicing swift, simple and secure.
						</Typography>
				</Grid>
			</Grid>
		</>
	)
};

export default Body;
