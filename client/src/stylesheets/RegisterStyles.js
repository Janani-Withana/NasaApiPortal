import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from '../images/background5.jpeg.jpg';

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
  transparentBoxStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
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
