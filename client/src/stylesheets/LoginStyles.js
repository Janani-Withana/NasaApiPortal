import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from '../images/background3.jpg'

export const useStyles = makeStyles((theme) => ({
  backgroundStyle: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    zIndex: -1,
  },
  video: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  transparentBoxStyle: {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(180, 180, 180, 0.2)',
  padding: '2rem',
  borderRadius: '10px',
  },

  textStyle: {
    color: '#ffffff',
  },
  form: {
    marginTop: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  link: {
    marginTop: theme.spacing(2),
    color: '#ffffff',
  },
}));
