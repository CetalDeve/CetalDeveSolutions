import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";


const theme = createTheme();

const SuccessState = styled.p`
  color: #087d07;
  padding-top: 20px;
`;
const ErrorState = styled.p`
  color: #b00020;
  padding-top: 20px;
`;

function Contact() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState("idle");
  const [errorMsg, setErrorMsg] = useState(null);

  const subscribe = async (e) => {
    e.preventDefault();
    setState("Loading");

    try {
      const response = await axios.post("/api/subscribe", { email, firstName, lastName, phoneNumber });
      setState("Success");
      setEmail("");
      setFirstName("");
      setLastName("");
      setPhoneNumber("");
      setMessage("");
    } catch (e) {
      console.log("Error", e.response);
      setErrorMsg("Error happened, please try again later");
      setState("Error");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Contact Us
          </Typography>
          <Box component="form" onSubmit={subscribe} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="FirstName"
              label="FirstName"
              id="firstName"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="LastName"
              label="LastName"
              id="lastname"
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="PhoneNumber"
              label="PhoneNumber"
              id="phoneNumber"
              type="number"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Button
              className="bg-blue-500 hover:bg-yellow-400"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "primary.main" }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>
        {state === 'Error' && (
           <ErrorState className="error-state">{errorMsg}</ErrorState>
         )}
         {state === 'Success' && (
           <SuccessState>Awesome, you have been subscribed!</SuccessState>
         )}
      </Container>
    </ThemeProvider>
  );
}

export default Contact;

