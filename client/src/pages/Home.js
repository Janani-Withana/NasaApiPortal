import React, { useEffect, useRef } from 'react';
import { Typography, Button, Container, Grid } from '@material-ui/core';
import useStyles from '../stylesheets/HomeStyles';
import backgroundVideo from '../videos/background.mp4';

const Home = () => {
  const classes = useStyles();
  const videoRef = useRef(null);

  //set background video
  useEffect(() => {
    const video = videoRef.current;
    const restartVideo = () => {
      if (video) {
        video.currentTime = 0; // Rewind video to the beginning
        video.play(); // Start playing again
      }
    };

    // Event listener to restart the video when it ends
    video.addEventListener('ended', restartVideo);

    // Cleanup function to remove the event listener
    return () => {
      if (video) {
        video.removeEventListener('ended', restartVideo);
      }
    };
  }, []);


  return (
    <div className={classes.root}>
      {/*Background Video*/}
      <video ref={videoRef} autoPlay muted style={{ position: 'absolute', width: '100%', height: '100vh', objectFit: 'cover', zIndex: -1, padding: 0 }}>
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      {/* Content */}
      <Container maxWidth="md" className={classes.content}>
        <Typography variant="h3" gutterBottom >
          Welcome to the Universe
        </Typography>

        <Typography variant="body1" paragraph>
          Explore the mysteries of the cosmos with NASA's Astronomy Picture of the Day (APOD) and Mars Imagery.
        </Typography>

        {/* Caption */}
        <Typography variant="body2" paragraph className={classes.caption}>
          "Discover the beauty beyond our world."
        </Typography>

        {/* Buttons */}
        <Grid  container spacing={3} justify="center">
          <Grid item>
            <Button variant="contained" color="primary" size="large" href="/apod">Explore APOD</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary" size="large" href="/mars">Explore Mars Rover Photos</Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
