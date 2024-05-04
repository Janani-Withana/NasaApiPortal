import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Link, makeStyles } from '@material-ui/core';
import logo from '../images/logo.png';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'fixed',
    boxShadow: 'none',
  },
  logo: {
    height: '50px',
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
    color: '#fff',
    fontSize: '24px',
    textShadow: '0 0 8px #0f0',
  },
  
  navLink: {
    margin: theme.spacing(0, 1),
    color: '#fff',
  },
  loggedInAppBar: {
    backgroundColor: 'rgba(10, 10, 10, 0.6)', 
  },
  loggedOutAppBar: {
    backgroundColor: 'rgba(200, 200, 200, 0.2)',  
  },
}));

export default function Navbar({ title = "NASA API PORTAL" }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);

  return (
    <AppBar position="absolute" className={`${classes.appBar} ${user ? classes.loggedInAppBar : classes.loggedOutAppBar}`}>
      <Toolbar>
        <IconButton component={RouterLink} to="/" edge="start" color="inherit" aria-label="home">
          <img src={logo} alt="Logo" className={classes.logo} />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        {user ? (
          <>
            <Button color="inherit" className={classes.navLink} component={RouterLink} to="/home">
              Home
            </Button>
            <Button color="inherit" className={classes.navLink} onClick={() => {
              setUser(null);
              localStorage.clear();
              navigate("/login", { replace: true });
            }}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button color="inherit" className={classes.navLink} component={RouterLink} to="/login">
              Login
            </Button>
            <Button color="inherit" className={classes.navLink} component={RouterLink} to="/register">
              Register
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
