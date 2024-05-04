import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    background: `linear-gradient(45deg, rgba(2, 2, 10, 1), rgba(2, 2, 10, 0.9))`, // Darker gradient with opacity
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.92, // Apply opacity to background
  },
  cardContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
    marginRight: '3%',
  },
  card: {
    width: '40%', // Take up half of the card's width
    height: 500, // Static height for card
    background: 'black',
    borderRadius: theme.spacing(2),
    overflow: 'hidden',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)', // Adding box shadow for depth
    display: 'flex',
    flexDirection: 'row', // Horizontal layout
  },
  textContainer: {
    width: '50%', // Take up half of the card's width
    padding: theme.spacing(2),
    marginLeft: '10%',
    marginRight: '2%',
    color: theme.palette.common.white, // Set text color to white
  },
  media: {
    width: '100%',
    height: '100%', // Cover the container
    objectFit: 'cover', // Ensuring the media fits the container properly
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Serif',
    fontSize: '26px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)', // Adding text shadow for better readability
    marginBottom: theme.spacing(2),
  },
  explanation: {
    marginTop: theme.spacing(1),
    color: 'white',
  },
  link: {
    color: theme.palette.secondary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  }, 
  header:{ 
    color: 'white',
    position: 'flex',
  },

  dataContainer:{
    marginTop: '5%',
  }

}));
