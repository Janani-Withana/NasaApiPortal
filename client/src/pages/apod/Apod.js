import React, { useState, useEffect,useRef }from 'react';
import PictureoftheDay from './DailyPic';
import RandomImagesPage from './Random';
import History from './History';
import { useStyles } from '../../stylesheets/apodstylesheets/ApodStyles';
import { makeStyles} from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

function Apod() {
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
          <PictureoftheDay/>
        </div>
        <div id="section2" className={classes.contentSection}>
          <History/>
        </div>
        <div id="section3" className={classes.contentSection}>
          <RandomImagesPage/>
        </div>
      </div>
     <div className={classes.neonLine}>
        <Tooltip title="ASTRONOMY PICTURE OF THE DAY" placement="right" arrow>
          <div className={classes.point} onClick={() => scrollToSection('section1')}></div>
        </Tooltip>
        <Tooltip title="EXPLORE APOD HISTORY" placement="right" arrow>
          <div className={classes.point} style={{ top: '35vh' }} onClick={() => scrollToSection('section2')}></div>
        </Tooltip>
        <Tooltip title="DISCOVER RANDOM APOD" placement="right" arrow>
          <div className={classes.point} style={{ top: '58vh' }} onClick={() => scrollToSection('section3')}></div>
        </Tooltip>
      </div>
    </div>
  );
}

export default Apod;
