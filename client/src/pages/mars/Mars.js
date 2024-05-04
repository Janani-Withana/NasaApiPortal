import React, { useState, useEffect,useRef }from 'react';
import { useStyles } from '../../stylesheets/apodstylesheets/ApodStyles';
import Tooltip from '@material-ui/core/Tooltip';
import RoverPhotosByEarthDate from './RoverPhotosByEarthDate';
import RoverPhotosBySol from './RoverPhotosBySol';
import RoverManifest from './RoverManifest';

function Mars() {
  const classes = useStyles();
  const videoRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={classes.backgroundStyle}>
      <div className={classes.container}>
        <div id="section1" className={classes.contentSection}>
          <RoverPhotosBySol/>
        </div>
        <div id="section2" className={classes.contentSection}>
          <RoverPhotosByEarthDate/>
        </div>
        <div id="section3" className={classes.contentSection}>
          <RoverManifest/>
        </div>
      </div>
     <div className={classes.neonLine}>
        <Tooltip title="ROVER PHOTOS BY SOL" placement="right" arrow>
          <div className={classes.point} onClick={() => scrollToSection('section1')}></div>
        </Tooltip>
        <Tooltip title="ROVER PHOTOS BY EARTH DATE" placement="right" arrow>
          <div className={classes.point} style={{ top: '35vh' }} onClick={() => scrollToSection('section2')}></div>
        </Tooltip>
        <Tooltip title="ROVER MISSION MANIFEST" placement="right" arrow>
          <div className={classes.point} style={{ top: '58vh' }} onClick={() => scrollToSection('section3')}></div>
        </Tooltip>
      </div>
    </div>
  );
}

export default Mars;
