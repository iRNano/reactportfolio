import React, { Fragment } from "react";
import Navbar from "./layouts/Navbar";
import Cover from "./components/Cover";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./layouts/Footer";
import { ThemeProvider } from "styled-components";
import * as theme from "./config/theme";
import Wrapper from "./layouts/Wrapper";

const App = () => {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Navbar></Navbar>
          <Cover></Cover>
          <Skills></Skills>
          <Projects></Projects>
          <Footer></Footer>
        </Wrapper>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
