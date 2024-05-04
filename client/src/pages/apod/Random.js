import React, { useState, useEffect, useRef } from 'react';
import { fetchRandomApodData } from '../../api/apiService'; // Update the import path as needed
import { useStyles } from '../../stylesheets/apodstylesheets/RandomStyles';
import backgroundVideo from '../../videos/background2.mp4';
import { Typography, Grid } from '@material-ui/core';
import RandomImageList from '../../components/RandomImageList'; // Import the RandomImageList component

const RandomImagesPage = () => {
  const classes = useStyles();
  const videoRef = useRef(null);
  const MIN_COUNT = 12;
  const MAX_COUNT = 20; // Adjust as needed

  const getRandomCount = () => {
    return Math.floor(Math.random() * (MAX_COUNT - MIN_COUNT + 1)) + MIN_COUNT;
  };

  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFetchRandomData = async () => {
    setLoading(true);

    try {
      const response = await fetchRandomApodData(getRandomCount());
      setApodData(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }

    setLoading(false);
  };

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

  useEffect(() => {
    // Fetch random APOD data initially
    handleFetchRandomData();

    // Set interval to fetch new random APOD data every 20 seconds
    const interval = setInterval(() => {
      handleFetchRandomData();
    }, 30000); // 20 seconds in milliseconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []); 

  return (
    <div className={classes.root}>
      {/* Background Video */}
      <video ref={videoRef} autoPlay muted style={{ position: 'absolute', width: '100%', height: '100vh', objectFit: 'cover', zIndex: -1, padding: 0 }}>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <Grid container spacing={2} className={classes.mainContainer}>
        <Grid item xs={12}>
          <Typography variant="h3" className={classes.title}>Discover More APODs</Typography><br />
        </Grid>
        {/* Render the RandomImageList component passing the random images data */}
        {apodData && <RandomImageList randomImages={apodData} />}
      </Grid>
    </div>
  );
};

export default RandomImagesPage;
