import React, { useEffect, useRef, useState } from "react";
import Body from "../Body";
import Footer from "../Footer";
import Header from "../Header";
import Box from "@mui/material/Box";

const Layout = () => {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", scrollCheck);

    return () => window.removeEventListener("scroll", scrollCheck);
  });

  const scrollCheck = () => {
    if (headerRef.current) {
      const { scrollHeight } = headerRef.current;
      if (window.pageYOffset + 70 > scrollHeight) setHeaderScrolled(true);
      else setHeaderScrolled(false);
    }
  };
  return (
    <>
      <Box sx={{ overflow: "hidden" }}>
        <Header headerScrolled={headerScrolled}></Header>
        <Body headlineRef={headerRef}></Body>
        <Footer></Footer>
      </Box>
    </>
  );
};

export default Layout;
