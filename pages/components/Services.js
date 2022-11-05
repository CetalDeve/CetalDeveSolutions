import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import services from "./Services.json";
import { maxWidth } from "@mui/system";

export default function Services() {
  return (
    <>
    <div className="flex flex-col md:flex-none md:flex-row gap-4 justify-center p-2 md:p-10">
      <Typography className="text-center text-white text-xl md:text-3xl font-semibold p-4 border-4 rounded-2xl bg-yellow-400" gutterBottom>
          SERVICES
      </Typography>
      </div>
      <div className="flex flex-row gap-10 m-2 ">
      {services.map((service, index) => (
        <Card key={index} className=" md:max-h-full" sx={{ maxHeight: {xs:150, sm:345}}}>
          <CardContent className=' items-center'>
            <Typography
              className="services_text text-xs sm:text-3xl"
              gutterBottom
              variant="h5"
              component="div"
            >
              {service.title}
            </Typography>
            <Typography className="text-[0px] sm:text-xl" variant="body2" color="text.secondary" component="div">
              {service.description}
            </Typography>
          </CardContent>
        </Card>
      ))
      }
    </div>
    </>
  );
}
