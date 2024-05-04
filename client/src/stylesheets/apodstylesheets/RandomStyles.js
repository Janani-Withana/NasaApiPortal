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
  title: {
    color: 'white', // Set text color to white
    position: 'flex',
   
  },
  mainContainer:{
    paddingLeft: '10%'
  },
}))