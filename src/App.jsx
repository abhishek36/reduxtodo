import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { Box, Container, ThemeProvider, createTheme } from "@mui/material";
import Form from "./Components/Form";
import ListGroup from "./Components/ListGroup";
import QuoteComponent from "./Components/QuoteComponent";

const App = () => {
  const [mode, setmode] = useState("light");
  const DarkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box
        sx={{ height: "100%" }}
        bgcolor={"background.default"}
        color={"text.primary"}
        // border={1}
      >
        <Navbar mode={mode} setmode={setmode} />
        <Container maxWidth={600} sx={{ padding: "50px 0", maxWidth: "600px" }}>
          <QuoteComponent />
          <Form />
          <ListGroup />
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
