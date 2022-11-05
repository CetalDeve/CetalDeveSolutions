import React from "react";
import BlogHeader from "./BlogHeader";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPosts";
import Main from "./Main";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function BlogPage({ blogPost }) {
  const theme = createTheme();
  const sections = [{ title: "Technology", url: "#" }];

  return (
    <>
      {blogPost.map((post, index) => {
        {
          console.log("Entered return", post);
        }
        <ThemeProvider key={1} theme={theme}>
          <CssBaseline />
          <Container maxWidth="lg">
            <BlogHeader title="Blog" sections={sections} />
            <main>
              <MainFeaturedPost post={post} />
              <Grid container spacing={4}>
                <FeaturedPost key={index} post={post} />
              </Grid>
              <Grid container spacing={5} sx={{ mt: 3 }}>
                <Main title="From the firehose" posts={post} />
              </Grid>
            </main>
          </Container>
        </ThemeProvider>;
      })}
    </>
  );
}
