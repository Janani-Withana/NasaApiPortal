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
  inputContainer:{
    marginLeft: '10%'
  },
  title: {
    color: 'white', // Set text color to white
    position: 'flex',
  },
  textfieldGrid:{
    marginRight:'10px'
  },
  formGridItem: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  textfeild: {
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white', // Set outline color to white
    },
    '& .MuiInputLabel-outlined': {
      color: 'white', // Set label color to white
    },
    '& .MuiInputAdornment-root icon': {
      color: 'white', // Set icon color
    },
    '& .MuiOutlinedInput-root::placeholder': {
      color: 'white', // Set placeholder text color
      opacity: 1, // Set placeholder opacity
    },
    width:"250px"
  },
  formControl: {
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white', // Set outline color to white
    },
    '& .MuiInputLabel-outlined': {
      color: 'white', // Set label color to white
    },
    '& .MuiInputBase-root.MuiOutlinedInput-input': {
      color: 'white', // Set input text color to white
    },
    '& .MuiSvgIcon-root': {
      fill: 'white', // Set icon color to white
    },
    '& .MuiMenuItem-root': {
      color: 'black', // Set option text color to black
    },

  },
  manifestDetails: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adjust the opacity and color as needed
  },
  card: {
    marginTop: theme.spacing(2),
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Adjust the opacity and color as needed
  },
  
  exploreContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: 'center',
    textAlign: "center",
    color: "white",
    marginRight: "10%"
  },
  
  '@keyframes rotateRightLeft': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '50%': {
      transform: 'rotate(5deg)',
    },
    '100%': {
      transform: 'rotate(-5deg)',
    },
  },
  '@keyframes customAnimation': {
    '0%': {
      transform: 'scale(0)',
      opacity: 0,
    },
    '50%': {
      transform: 'scale(1.1)',
      opacity: 0.5,
    },
    '100%': {
      transform: 'scale(1)',
      opacity: 1,
    },
  },
  select: {
    '& .MuiSelect-select': {
      color: 'white', // Set selected option text color to white
    },
    '& .MuiSelect-icon': {
      color: 'white', // Set icon color to white
    },
    '& .MuiSelect-nativeInput': {
      color: 'black', // Set option text color to black
    },
  },
}))