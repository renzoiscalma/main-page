import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
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
  display: { xs: "none", md: "flex" },
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "inherit",
  textDecoration: "none",
  flexGrow: 1,
  fontFamily: "AdobeCleanBold,Roboto",
  letterSpacing: "1px",
};

const logoXsSx = {
  mr: 1,
  flex: 1,
  display: { xs: "flex", md: "none" },
};

const buttonContainerSx = {
  flexGrow: 0,
  display: { xs: "none", md: "flex" },
};

const buttonNavBarSx = {
  my: 2,
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
};
const Header = () => {
  return (
    <AppBar position="fixed" sx={toolbarSx}>
      <Container maxWidth="xl" sx={noPadding}>
        <Toolbar>
          <AdbIcon sx={logoMdSx} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={logoTypoMdSx}
          >
            MAIN PAGE
          </Typography>

          <Box sx={buttonContainerSx}>
            {pageData.map((page) => (
              <Button key={page} onClick={() => {}} sx={buttonNavBarSx}>
                {page}
              </Button>
            ))}
          </Box>
          <AdbIcon sx={logoXsSx} />
          <Box sx={burgerSx}>
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
  );
};

export default Header;
