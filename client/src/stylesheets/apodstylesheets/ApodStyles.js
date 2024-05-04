import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from '../../images/background3.jpg'

export const useStyles = makeStyles((theme) => ({
    backgroundStyle: {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: '100% 33%',
      backgroundRepeat: 'repeat-y',
      opacity: 1,
      padding: 0, // Remove padding
      margin: 0, // Remove margin
    },
    
    contentSection: {
      width: '100%', // Set width to 100%
    },
    container: {
      width: '100%',
      display: 'block',
      boxSizing: 'border-box',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: '0',
      paddingRight: '0',
      [theme.breakpoints.up('600px')]: {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
    neonLine: {
      position: 'fixed',
      left: '6%', // Position the line in the center horizontally
      bottom:'10%',
      transform: 'translateX(-50%)', // Adjust to center the line
      height: '70vh', // Span the entire height of the screen
      width: '2px',   
      backgroundColor: '#0f0',
      boxShadow: '0 0 20px 1px #0f0',
      zIndex: 1000, // Ensure the line is above other content
    },
    
    point: {
      position: 'absolute',// Adjust the position of the points vertically
      left: '10%', // Same position as the neon line
      top:'calc(10vh + 5px)', // 5px space between the line and the point
      transform: 'translate(-50%, 50%)', // Adjust to center the points vertically
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      backgroundColor: '#0f0',
      cursor: 'pointer',
      zIndex: 1001, // Ensure the points are above the neon line
    },

    tooltip: {
      position: 'absolute',
      backgroundColor: 'rgba(255, 255, 255, 0.9)', // Adjust opacity and color as needed
      color: 'white',
      padding: "8px",
      borderRadius: "4px",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)",
      display: 'none',
    },
    
    tooltipArrow: {
      content: "",
      position: 'absolute',
      top: 'calc(100% - 1px)',
      left: '50%',
      transform: 'translateX(-50%)',
      borderWidth: '6px',
      borderStyle: 'solid',
      borderColor: 'rgba(255, 255, 255, 0.9) transparent transparent transparent', // Adjust color as needed
    }
    
}));
