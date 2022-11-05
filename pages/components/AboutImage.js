import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Image from "next/image";
import { Container } from "@mui/system";
import AboutSectionText from './AboutSectionText';

export default function AboutImage() {
  return (
    <Card sx={{ minHeight: {xs:'400px', md:'700px'}, margin:"0.3rem" }}>
      <CardCover className="md:min-h-full min-h-fit">
        <Image 
         src="/table.jpg"
         layout='fill'
         alt="about-image"
        />
      </CardCover>
     <CardContent sx={{ justifyContent: "center", textAlign:"center" }}>
      <Container className="shadow-2xl slate_background hover:bg-yellow-500" maxWidth="lg">
        <Typography
          className="text-white font-semibold"
          level="h2"
          fontSize="4rem"
          textColor="#000000"
          mb={1}
        >
          <AboutSectionText />
        </Typography>
        
      </Container>
    </CardContent>
    </Card>
  );
}
