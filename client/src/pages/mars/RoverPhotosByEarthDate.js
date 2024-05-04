import React, { useState, useEffect, useRef } from 'react';
import { Typography, TextField, Button, CircularProgress, Grid, Container, Box, FormControl, InputLabel, Select, IconButton, Modal} from '@material-ui/core';
import { fetchRoverPhotosByEarthDate } from '../../api/apiService'; // Import the function for querying by Earth date
import { useStyles } from '../../stylesheets/marsstylesheets/EarthRoverStyles';
import backgroundVideo from '../../videos/background2.mp4';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import exploreNowImage from '../../images/explorenow1.png';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import CloseIcon from '@material-ui/icons/Close'

function RoverPhotosByEarthDate() {
  const classes = useStyles();
  const videoRef = useRef(null);
  const [rover, setRover] = useState('curiosity'); // Default to Curiosity
  const [earthDate, setEarthDate] = useState('');
  const [camera, setCamera] = useState('');
  const [photosData, setPhotosData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState(1);
  const [openModal, setOpenModal] = useState(false);

  const handleFetchPhotos = async () => {
    try {
      setLoading(true);
      const response = await fetchRoverPhotosByEarthDate(rover, earthDate, camera || null);
      const data = response.photos; // Extract the array of photos from the response
      setPhotosData(data);
    } catch (error) {
      console.error('Error fetching photos:', error);
    } finally {
      setLoading(false);
    }
  };


  //Card set scroll
  const scrollContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const deviceWidth = window.innerWidth;
  const containerWidth = deviceWidth * 0.8;
  const cardWidth = deviceWidth * 0.2;
  const visibleCards = Math.floor(containerWidth / cardWidth);
  // const visibleCards = 4; // Calculate visible cards
  const scrollLeft = () => {
    const newPosition = Math.max(scrollPosition - visibleCards, 0); // Move back by 3 cards
    setScrollPosition(newPosition);
  };
  const scrollRight = () => {
    const newPosition = Math.min(scrollPosition + visibleCards, photosData.length - visibleCards); // Move forward by 3 cards
    setScrollPosition(newPosition);
  };

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


  //Modal Handler
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className={classes.root}>
      {/*Background Video*/}
      <video ref={videoRef} autoPlay muted style={{ position: 'absolute', width: '100%', height: '100vh', objectFit: 'cover', zIndex: -1, padding: 0 }}>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <Grid container spacing={2} className={classes.inputContainer}>
        <Grid item xs={12}>
          <Typography variant="h3" className={classes.title}>Mars Rover Photos by Earth Date</Typography><br />
        </Grid>
        <Grid item className={classes.textfieldGrid}>
          <FormControl variant="outlined" className={classes.formControl}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Date"
              type="date"
              className={classes.textfeild}
              value={earthDate}
              onChange={(e) => setEarthDate(e.target.value)}
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
          </FormControl>
        </Grid>
        <Grid item className={classes.textfieldGrid}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="camera-select" style={{ color: 'white' }}>Camera</InputLabel>
            <Select
              native
              value={camera}
              onChange={(e) => setCamera(e.target.value)}
              label="Camera"
              inputProps={{
                name: 'Camera',
                id: 'camera-select',
              }}
              className={classes.select}
              IconComponent={KeyboardArrowDownIcon}
            >
              <option value="FHAZ">Front Hazard Avoidance Camera (FHAZ)</option>
              <option value="RHAZ">Rear Hazard Avoidance Camera (RHAZ)</option>
              <option value="MAST">Mast Camera (MAST)</option>
              <option value="CHEMCAM">Chemistry and Camera Complex (CHEMCAM)</option>
              <option value="MAHLI">Mars Hand Lens Imager (MAHLI)</option>
              <option value="MARDI">Mars Descent Imager (MARDI)</option>
              <option value="NAVCAM">Navigation Camera (NAVCAM)</option>
              <option value="PANCAM">Panoramic Camera (PANCAM)</option>
              <option value="MINITES">Miniature Thermal Emission Spectrometer (Mini-TES)</option>
            </Select>
          </FormControl>
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
        <Grid item >
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Pages"
            type="number"
            min="1"
            className={classes.textfeild}
            value={pages}
            onChange={(e) => setPages(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              style: { color: "white" }, // Set background color
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleFetchPhotos} disabled={!earthDate || loading}>
            {loading ? <CircularProgress size={24} /> : 'Fetch Photos'}
          </Button>
        </Grid>
        <br />
        <Grid item xs={12} className={classes.scrollGrid}>
          {photosData && photosData.length > 0 ? (
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
                    {photosData.slice(scrollPosition, scrollPosition + visibleCards).map((item, index) => (
                      <div style={{ position: 'relative', width: '100%', height: '250px', margin: '5px', overflow: 'hidden' }}>
                        <img
                          key={item.id}
                          src={item.img_src}
                          alt="Mars Rover"
                          style={{width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '10px' }}>
                          <Typography variant="body2">Earth Date: {item.earth_date}</Typography>
                          <Typography variant="body2">Camera: {item.camera.name}</Typography>
                          <IconButton className={classes.iconButton} onClick={handleOpenModal}>
                            <ZoomInIcon />
                          </IconButton>
                        </div>
                        <Modal open={openModal} onClose={handleCloseModal}>
                          <img
                            src={item.img_src}
                            alt="Mars Rover"
                            className={classes.modalImage}
                          />
                        </Modal>
                      </div>
                    ))}
                  </Box>
                </div>
                <div className={classes.scrollButtons}>
                  <button
                    onClick={scrollRight}
                    className={classes.scrollButton}
                    disabled={
                      scrollPosition >= photosData.length - visibleCards
                    }
                  >
                    <ChevronRightIcon />
                  </button>
                </div>
              </Container>
            </div>
          ) : (
            <Grid className={classes.exploreContainer}>
              <img src={exploreNowImage} alt="Explore Now" style={{ width: '8%', height: '8%', margin: '0 auto', opacity: '0.6' }} />
              <br /><Typography variant="body" style={{ color: "#7d95a8" }}>No rover photos found</Typography>
            </Grid>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default RoverPhotosByEarthDate;