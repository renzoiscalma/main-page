import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

const pages = ['Product', 'Pricing', 'Login'];

const Header = () => {
	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar>
					<AdbIcon sx={{ display: { xs: 'none', md: 'flex'}, mr: 1}} />
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
							flexGrow: 1
						}}
					>
						MAIN PAGE
					</Typography>
					<Box sx={{ flexGrow: 0, display: {xs: 'none', md: 'flex'}}}>
						{pages.map(page => (
							<Button 
							key={page}
							onClick={() => {}}
							sx={{my: 2, display: 'block', color: 'white'}}
							>
								{page}
							</Button>
						))}
					</Box>

					<AdbIcon sx={{ display: { xs: 'flex', md: 'none'}, mr: 1}} />
					<Typography
						variant="h5"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: {xs: 'flex', md: 'none'},
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						MAIN PAGE
					</Typography>
					<Box sx={{flexGrow: 0, display: { xs: 'flex', md: 'none'}}}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={() => {}}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>

					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
};

export default Header;
