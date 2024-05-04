import React, { useState, useEffect, useRef } from 'react';
import { fetchRoverManifest } from '../../api/apiService'; // Adjust the path as per your project structure
import { useStyles } from '../../stylesheets/marsstylesheets/RoverManifestStyles';
import backgroundVideo from '../../videos/background2.mp4';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Typography, CardContent, Card, Paper, Button, CircularProgress, Grid, Container, Box, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

const RoverManifest = () => {
  // State variables
  const [manifestData, setManifestData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [rover, setRover] = useState('curiosity');
  const classes = useStyles();
  const videoRef = useRef(null);

  const handleFetchManifest = async () => {
    setLoading(true);
    try {
      const response = await fetchRoverManifest(rover);
      const data = response.photo_manifest;
      setManifestData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  // Fetch manifest data for the default rover (Curiosity) when component mounts
  useEffect(() => {
    handleFetchManifest();
  }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

  //set background video
  useEffect(() => {
    const video = videoRef.current;
    const restartVideo = () => {
      if (video) {
        video.currentTime = 0; // Rewind video to the beginning
        video.play(); // Start playing again
      }
    };
    video.addEventListener('ended', restartVideo);
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
      <Grid container spacing={2} className={classes.inputContainer}>
        <Grid item xs={12}>
          <Typography variant="h3" className={classes.title}>Mission Manifests of Rovers</Typography><br />
        </Grid>
        <Grid item className={classes.textfieldGrid}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="rover-select" style={{ color: 'white' }}>Rover</InputLabel>
            <Select
              native
              value={rover}
              onChange={(e) => setRover(e.target.value)}
              label="Rover"
              inputProps={{
                name: 'rover',
                id: 'rover-select',
                style: { color: 'white' }, // Set text color
              }}
              IconComponent={KeyboardArrowDownIcon}
            >
              <option value="curiosity">Curiosity</option>
              <option value="opportunity">Opportunity</option>
              <option value="spirit">Spirit</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleFetchManifest} disabled={!rover || loading}>
            {loading ? <CircularProgress size={24} /> : 'Fetch Manifest'}
          </Button>
        </Grid>
      <br />
      {/* Manifest Details */}
      <Grid item xs={6}>
        {manifestData && (
          <Paper className={classes.manifestDetails}>
            <Typography variant="h4" gutterBottom>Rover Manifest - {manifestData.name}</Typography>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="body1">RoverName: {manifestData.name}</Typography>
                <Typography variant="body1">Landing Date: {manifestData.landing_date}</Typography>
                <Typography variant="body1">Launch Date: {manifestData.launch_date}</Typography>
                <Typography variant="body1">Status: {manifestData.status}</Typography>
                <Typography variant="body1">Max Sol: {manifestData.max_sol}</Typography>
                <Typography variant="body1">Max Date: {manifestData.max_date}</Typography>
                <Typography variant="body1">Total Photos: {manifestData.total_photos}</Typography>
              </CardContent>
            </Card>
          </Paper>
        )}
      </Grid>
      </Grid>
    </div>
  );
};

export default RoverManifest;
