import React, { useState, useEffect, useRef } from 'react';
import { fetchApodData } from '../../api/apiService'; // Update the import path as needed
import { Typography, Card, CardMedia, Link, CircularProgress } from '@material-ui/core';
import { Fade } from 'react-reveal'; // Importing animations library
import { useStyles } from '../../stylesheets/apodstylesheets/DailyPicStyles';
import backgroundVideo from '../../videos/background2.mp4'; 

const PictureoftheDay = () => {
  const classes = useStyles();
  const videoRef = useRef(null);
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodayOrPreviousData = async () => {
      const today = new Date();
      const data = await fetchDataForDate(today);
      if (!data) {
        const previousDay = new Date(today.setDate(today.getDate() - 1));
        const previousData = await fetchDataForDate(previousDay);
        setApodData(previousData);
      } else {
        setApodData(data);
      }
      setLoading(false);
    };

    fetchTodayOrPreviousData();
  }, []);

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

  const fetchDataForDate = async (date) => {
    const dateString = date.toISOString().slice(0, 10); // Get date in YYYY-MM-DD format
    try {
      const data = await fetchApodData(dateString);
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };

  return (
    <div className={classes.root}>
      {/*Background Video*/}
      <video ref={videoRef} autoPlay muted style={{ position: 'absolute', width: '100%', height: '100vh', objectFit: 'cover', zIndex: -1, padding: 0}}>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className={classes.cardContainer}>
        <div className={classes.textContainer}>
         <Typography variant="h3" className={classes.header}>Astronomy Picture of the Day</Typography>
         <Fade left>
          <div className={classes.dataContainer}>
            <Typography className={classes.title} gutterBottom>{apodData?.title}</Typography>
            <Typography variant="body1" className={classes.explanation}>{apodData?.explanation}</Typography><br/>
            <Typography variant="body2">Date: {apodData?.date}</Typography>
            <Typography variant="body2">Media Type: {apodData?.media_type}</Typography><br/>
            {apodData?.hdurl && (
              <Link href={apodData.hdurl} target="_blank" rel="noopener noreferrer" className={classes.link}>
                View HD Image
              </Link>
            )}
          </div>  
         </Fade>
        </div>
        <div className={classes.card}>
          {loading ? (
            <CircularProgress />
          ) : !apodData ? (
            <Typography variant="body1" className={classes.explanation}>No data available for today or yesterday.</Typography>
          ) : (
            <Fade right>
              <CardMedia
                className={classes.media}
                component={apodData.media_type === 'video' ? "iframe" : "img"}
                src={apodData.url}
                title={apodData.title}
              />
            </Fade>
          )}
        </div>
      </div>
    </div>
  );
};

export default PictureoftheDay;
