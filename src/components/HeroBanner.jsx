import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/fit.jpg";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography
        color="#808080"
        fontWeight="950" 
        fontSize="80px"
        sx={{
          opacity: "0.3",
        }}
      >
        GO BEAST
      </Typography>
      <Typography
        fontWeight={650}
        color="#808080"
        sx={{
          fontSize: { lg: "44px", xs: "40px" },
          fontFamily: "sans-serif extrabold",
        }}
        mb="23px"
        mt="30px"
      >
        Drive. Discipline. Domination.
      </Typography>
      <Typography
        fontSize="18px"
        lineHeight="35px"
        mb={5}
        color="#808080"
        fontFamily="sans-serif"
      >
        Transform your body and strength with the most <br />
        effective workout training..
      </Typography>

      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ backgroundColor: "#880808", padding: "10px" }}
      >
        Discover Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="grey"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize="190px"
      >
        Push Your Limits!!!
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
