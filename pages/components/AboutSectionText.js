import * as React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { Container } from "@mui/system";

export default function AboutSectionText() {
  return (
    <CardContent sx={{ justifyContent: "center", textAlign: "center", minHeight: {xs:'100px', md:'300px'}}}>
      <Container maxWidth="lg">
        <Typography
          className="text-black text-4xl md:text-6xl"
          level="h2"
          fontSize="4rem"
          mb={1}
        >
          ABOUT US
        </Typography>
        <Typography className="text-black text-base md:text-2xl">
            <h2 className="animate-pulse">
              Cetal Deve Solutions is a consulting firm committed to provide
              experienced, excellent and highly skilled professionals to help
              with client business requirements.{" "}
            </h2>
            <h2 className="p-4 animate-pulse">
              We have an excellent record of client satisfaction as we firmly
              believe in providing quality over quantity.{" "}
            </h2>
          
        </Typography>
      </Container>
    </CardContent>
  );
}
