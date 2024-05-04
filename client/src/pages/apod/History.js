import React, { useState, useEffect, useRef } from 'react';
import { fetchApodDataRange } from '../../api/apiService'; // Update the import path as needed
import { Typography, TextField, Button, CircularProgress, Grid, Container, Box } from '@material-ui/core';
import { useStyles } from '../../stylesheets/apodstylesheets/HistoryStyles'; // Importing styles
import backgroundVideo from '../../videos/background2.mp4';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ImgMediaCard from '../../components/ImageMediaCard'; // Importing the ImgMediaCard component

const History = () => {
  const classes = useStyles(); // Applying styles
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(false);

  //get the default start date (3 days before today)
  const getDefaultStartDate = () => {
    const today = new Date();
    const threeDaysAgo = new Date(today);
    threeDaysAgo.setDate(today.getDate() - 4);
    return formatDate(threeDaysAgo);
  };
  
  //get the default end date (yesterday)
  const getDefaultEndDate = () => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    return formatDate(yesterday);
  };

  // Function to format date in YYYY-MM-DD format (required by TextField type=date)
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const [startDate, setStartDate] = useState(getDefaultStartDate());
  const [endDate, setEndDate] = useState(getDefaultEndDate);
  const [apodData, setApodData] = useState(null);

   // Function to fetch APOD data
   const fetchApodData = async () => {
    try {
      const response = await fetchApodDataRange(startDate, endDate);
      setApodData(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  
  //Card set scroll
  const scrollContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const deviceWidth = window.innerWidth;
  const containerWidth = deviceWidth * 0.7;
  const cardWidth = 250;
  const visibleCards = Math.floor(containerWidth / cardWidth);
 // const visibleCards = 4; // Calculate visible cards
  const scrollLeft = () => {
    const newPosition = Math.max(scrollPosition - visibleCards, 0); // Move back by 3 cards
    setScrollPosition(newPosition);
  };

  const scrollRight = () => {
    const newPosition = Math.min(scrollPosition + visibleCards, apodData.length - visibleCards); // Move forward by 3 cards
    setScrollPosition(newPosition);
  };


  //background video play
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
    fetchApodData();
  }, []); // Empty dependency array ensures it runs only once on mount


  return (
    <div className={classes.root}>
      <video ref={videoRef} autoPlay muted className={classes.backgroundVideo}>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <Grid container spacing={2} className={classes.inputContainer}>
        <Grid item xs={12}>
          <Typography variant="h3" className={classes.title}>Explore APOD History</Typography><br />
        </Grid>
        <Grid item className={classes.textfieldGrid}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Start Date"
            type="date"
            className={classes.textfeild}
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              style: { color: "white" }, // Set background color
              endAdornment: (
                <DateRangeIcon style={{ color: 'white' }} />
              )
            }}
          />
        </Grid>
        <Grid item >
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="End Date"
            type="date"
            className={classes.textfeild}
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              style: { color: "white" }, // Set background color
              endAdornment: (
                <DateRangeIcon style={{ color: 'white' }} />
              )
            }}
          />
        </Grid>
         <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={fetchApodData} disabled={loading}>
            {loading ? <CircularProgress size={24} /> : 'Fetch Data'}
          </Button>
        </Grid>
        <br />
        <Grid item xs={12} className={classes.scrollGrid}>
          {apodData && (
            <div className={classes.cardScrollContainer}>
              <Container fluid className={classes.cardsArrows}>
                <div className={classes.scrollButtons}>
                  <button
                    onClick={scrollLeft}
                    className={classes.scrollButton}
                    disabled={scrollPosition === 0}
                  >
                    <ChevronLeftIcon />
                  </button>
                </div>
                <div className={classes.cardSet} ref={scrollContainerRef}>
                  <Box className={classes.scrollBox}>
                    {apodData.slice(scrollPosition, scrollPosition + visibleCards).map((item, index) => (
                      // <ImgMediaCard key={index} title={item.title} description={item.explanation} imageUrl={item.url} mediaType={item.media_type} date={item.date} />
                      <ImgMediaCard key={index} apodData={item} />
                    ))}
                  </Box>
                </div>
                <div className={classes.scrollButtons}>
                  <button
                    onClick={scrollRight}
                    className={classes.scrollButton}
                    disabled={
                      scrollPosition >= apodData.length - visibleCards
                    }
                  >
                    <ChevronRightIcon />
                  </button>
                </div>
              </Container>
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default History;
