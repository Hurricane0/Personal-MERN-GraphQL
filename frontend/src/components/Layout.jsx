import React from "react";
import { Container } from "@material-ui/core";
import Navbar from "./Navbar";

const Layout = ({ maxWidth = "md", children }) => {
  return (
    <>
      <Navbar />
      <Container maxWidth={maxWidth}>
        <main>{children}</main>
      </Container>
    </>
  );
};

export default Layout;
