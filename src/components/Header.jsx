import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { pageData } from "../utils/data";

const logoMdSx = {
  display: { xs: "none", md: "flex" },
  mr: 1,
};

const logoTypoMdSx = {
  mr: 2,
  fontWeight: 700,
  color: "inherit",
  textDecoration: "none",
  flexGrow: "0 0",
  fontFamily: "AdobeCleanBold,Roboto",
  letterSpacing: "1px",
};

const logoXsSx = {
  mr: 1,
  flex: "0 0 auto",
  display: { xs: "flex", md: "none" },
};

const buttonContainerSx = {
  display: { xs: "none", md: "flex" },
  marginLeft: "auto",
  transition: "transform 0.2s ease",
};

const buttonNavBarSx = {
  my: 2,
  mx: 2,
  display: "block",
  color: "white",
};

const burgerSx = {
  flex: 1,
  flexDirection: "row-reverse",
  display: {
    xs: "flex",
    md: "none",
  },
};

const toolbarSx = {
  backgroundColor: "#532ee7",
};

const noPadding = {
  paddingLeft: "0 !important",
  paddingRight: "0 !important",
  maxWidth: "none !important",
};

const tryButtonSx = {
  mx: 3,
  backgroundColor: "#1abd7d",
  margin: "auto 0",
  height: "36px",
  transition: "flex-grow 0.2s ease",
  "&:hover": {
    backgroundColor: "#1abd7d",
  },
};

const Header = ({ headerScrolled }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={toolbarSx}>
      <Container maxWidth="xl" sx={noPadding}>
        <Toolbar>
          <AdbIcon sx={logoMdSx} />
          <AdbIcon sx={logoXsSx} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={logoTypoMdSx}
          >
            MAIN PAGE
          </Typography>

          <Box
            sx={{
              ...buttonContainerSx,
              transform: headerScrolled ? "" : "translate(191px)",
            }}
          >
            {pageData.map((page) => (
              <Button key={page} onClick={() => {}} sx={buttonNavBarSx}>
                {page}
              </Button>
            ))}
            <Button variant="contained" sx={tryButtonSx} size="large">
              Try it out now
            </Button>
          </Box>
          <Box sx={burgerSx}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {pageData.map((page) => (
                <MenuItem key={page} onClick={handleClose}>
                  {page}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
