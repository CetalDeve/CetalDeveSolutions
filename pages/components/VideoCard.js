import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

export default function VideoCard() {
  return (
    <Box
      component="ul"
      sx={{
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
        p: 0,
        m: 0,
        justifyContent: "center",
        minWidth: { sm: 200, md: 1000 }, minHeight: { md:600}  
      }}
    >
      <Card
        component="li"
        sx={{ minWidth: { sm: 200, md: 1000 }, minHeight: { xs: 300, md:500}  }}
      >
        <CardCover>
          <video
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
          >
            <source
              src="https://assets.codepen.io/6093409/river.mp4"
              type="video/mp4"
            />
          </video>
        </CardCover>
        <CardContent sx={{ justifyContent: "center", gap: 1 }}>
          <div className="slate_background hover:bg-yellow-400 text-base md:text-4xl p-2">
            <Typography
              level="h2"
              fontWeight="lg"
              textColor="#000000"
              sx={{ fontSize: ["2rem", "3rem"] , paddingBottom: "6px"}}
            >
              LET US HELP YOU
            </Typography>
            <Typography
              sx={{ fontSize: ["1rem", "1.5rem"]}}
            >
              Either your need an individual or a whole team, we are always here
              for service.
            </Typography>
            <Typography
              sx={{ fontSize: ["1rem", "1.5rem"]}}
            >
              Finding the right placement has never been so much easier.
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
}
