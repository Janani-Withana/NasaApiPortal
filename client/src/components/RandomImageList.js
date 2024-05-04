import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import InfoIcon from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton';
import LearnMoreModal from './LearnMoreModal';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: 'transparent',
    marginRight: '10%',
  },
  imageList: {
    width: '100%',
    height: 450,
    padding: '5px',
    position: 'relative', // Add position relative for absolute positioning of date
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  whiteText: {
    color: 'white',
  },
  dateText: {
    position: 'absolute',
    top: '5px',
    left: '5px',
    color: 'white',
    padding: '5px',
    borderRadius: '5px',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  titleText: {
    position: 'absolute',
    top: '20px',
    left: '5px',
    color: 'white',
    padding: '5px',
    borderRadius: '5px',
    fontSize: '18px',
    fontWeight: 'bold',
  }
}));

const RandomImageList = ({ randomImages }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpen = (item) => () => { // Change here
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Check if randomImages is null or undefined
  if (!randomImages) {
    return <div className={classes.whiteText}>Loading...</div>;
  }

  // Check if randomImages is an empty array
  if (randomImages.length === 0) {
    return <div className={classes.whiteText}>No images available</div>;
  }

  return (
    <div className={classes.root}>
      <ImageList rowHeight={180} className={classes.imageList} cols={4}>
        {randomImages.map((item, index) => (
          <ImageListItem key={index} cols={item.cols || 1}>
            {item.media_type === 'video' ? (
              <div style={{ position: 'relative' }}>
                <iframe
                  title={item.title}
                  src={item.url}
                  height="100%"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div style={{ position: 'relative' }}>
                <img src={item.url} alt={item.title} className={classes.whiteText} />
              </div>
            )}
            <ImageListItemBar
              subtitle={<span>{item.date}</span>}
              title={item.title}
              actionIcon={
                <IconButton
                  aria-label={`info about ${item.title}`}
                  className={classes.icon}
                  onClick={handleOpen(item)} // Change here
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <LearnMoreModal open={open} handleClose={handleClose} apodData={selectedItem} />
    </div>
  );
};

export default RandomImageList;
