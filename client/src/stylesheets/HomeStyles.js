import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from '../images/background3.jpg'

const useStyles = makeStyles((theme) => ({
  backgroundStyle: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  neonLine: {
    position: 'absolute',
    bottom: 0,
    left: '10%', // Position the line in the center horizontally
    transform: 'translateX(-50%)', // Adjust to center the line
    height: '60vh', // Span the entire height of the screen
    width: '1px',
    backgroundColor: '#0f0',
    boxShadow: '0 0 20px 1px #0f0',
  },
  dot: {
    width: '5px',
    height: '5px',
    borderRadius: '50%',
    backgroundColor: '#0f0',
    display: 'inline-block',
    margin: '0 10px',
    boxShadow: '0 0 10px 5px #0f0',
  },
  root: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    width: '100vw',
    height: '100vh',
  },
  video: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  },
  content: {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
    color: '#fff',
  },
  caption: {
    fontStyle: 'italic',
    marginBottom: '50px',
  },
  button: {
    borderRadius: '20px',
    padding: '10px 30px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    color: 'white',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    transition: 'background 0.5s ease',
    '&:hover': {
      background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
    },
  },
  // Button styles for different gradients
  buttonBlue: {
    borderRadius: '20px',
    padding: '10px 20px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    // background: 'linear-gradient(45deg, #060b4f 5%, #0c169c 30%, #21CBF3 90%)',
    //background: 'linear-gradient(45deg, #060b4f 5%, #0c169c 30%, #21CBF3 90%)',
    background: 'blue',
    border: 1,
    color: 'white',
    boxShadow: '0 2px 8px 1px rgba(0, 0, 255, .3)',
    transition: 'background 0.5s ease',
    '&:hover': {
      background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
      boxShadow: '0 2px 8px 1px rgba(255, 255, 255, .8)',
    },
  },
  buttonPurple: {
    borderRadius: '20px',
    padding: '10px 20px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    // background: 'linear-gradient(45deg, #9c27b0 30%, #e91e63 90%)',
    background: 'red',
    border: 1,
    color: 'white',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    transition: 'background 0.5s ease',
    '&:hover': {
      background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
      boxShadow: '0 2px 8px 1px rgba(255, 255, 255, .8)',
    },
  },
  heading: {
    fontWeight: 'bold',
    color: '#fff',
    // textShadow: '0 0 10px #fff, 0 0 20px #ff69b4, 0 0 30px #ff69b4, 0 0 40px #ff69b4, 0 0 50px #ff69b4, 0 0 60px #ff69b4, 0 0 70px #ff69b4, 0 0 80px #ff69b4',
    textShadow: '#FFF 0px 0px 15px, #FF2D95 0px 0px 20px,  #48069e 0px 0px 40px, #48069e 0px 0px 50px, #48069e 0px 0px 75px, 2px 2px 2px rgba(206,89,55,0)'
},
 

}));

export default useStyles;
