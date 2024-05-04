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
  scrollGrid:{
    marginTop: '16px',
  },
  cardScrollContainer: {
    display: 'flex', // Set display to flex
    overflowX: 'hidden', /* Enable horizontal scrolling */
    overflowY: 'hidden', /* Hide the vertical scrollbar */
    whiteSpace: 'nowrap', /* Prevent content from wrapping to the next line */
    width: '100%', /* Ensure the container takes full width */
    marginLeft: '0px'
  },
  cardsArrows:{
    display: "flex",
    marginLeft: '0px' 
  },
  cardSet: {
    maxWidth: '100%', /* Ensure cards stay within the middle part's boundaries */
  },
  iconButton: {
    position: 'absolute',
    top: '15%',
    left: '75%',
    color:"white",
    zIndex: 1,
  },
  modalImage: {
    width: '80vw',
    height: '80vh',
    objectFit: 'contain',
    margin: 'auto',
    display: 'block',
    marginTop:'5%'
  },  
  imageCard:{
    margin: "5px",
    width:"200px",
    height: "250px"
  },
  scrollButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    margin:  '120px 0 ',
    position: 'sticky',
    zIndex:1, /* Optional: Ensure they appear above the card content */
  },
  scrollBox:{
      display: 'flex', // Set display to flex
      flexDirection: 'row', // Set direction to row
      alignItems: 'center', // Align items horizontally
      overflowX: 'auto', // Enable horizontal scrolling
  },
  scrollButton: {
    fontSize: 24,
    cursor: 'pointer',
    padding: '10px',
    margin: '5px',
    backgroundColor: '#ccc',
    border: 'none',
    borderRadius: '50%', // Make the button a circle by setting border-radius to 50%
    width: '40px', // Set width and height to create a circle
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: 'rgba(204, 204, 204, 0.7)', // Change background color on hover
    },
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