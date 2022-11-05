import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import careerData from "./CareerDescription.json";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const theme = createTheme();

export default function Careers() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
        <main>
          {/* Hero unit */}
          <Box
            sx={{
              bgcolor: "background.paper",
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
                sx={{fontSize: ["1.2rem", "3rem"]}}
              >
                JOB DESCRIPTIONS
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
                sx={{fontSize: ["1.2rem", "1.8rem"]}}
              >
                We have openings for the following position. Please send us your
                resume or contact us if you are interested in our job offers.
              </Typography>
            </Container>
          </Box>
          <Container sx={{ py: [1,6] }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {careerData.map((career) => (
                <Grid item key={1} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {career.cardTitle.position}
                      </Typography>
                      <Typography className="p-2">
                       <ul>
                        <li className="font-semibold text-lg ">
                        Qualifications:
                        </li>
                        <li>
                        {career.cardTitle.qualification}
                        </li>
                        </ul> 
                        
                      </Typography>
                      <Typography>
                        <ul>
                          <li className="font-semibold">
                          Description 
                          </li>
                          <li>
                          {career.jobDescription.description}
                          </li>
                        </ul>
                        
                       
                      </Typography>
                    </CardContent>
                    
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
      </ThemeProvider>
    </>
  );
}
