import { Routes as Switch ,Route} from 'react-router-dom';
import {AuthContextProvider} from './context/AuthContext';
import { ToastContextProvider } from './context/ToastContext';
import './App.css';
import Layout from './components/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
//APOD
import Apod from './pages/apod/Apod';
import PictureoftheDay from './pages/apod/DailyPic';
import History from './pages/apod/History'
import Random from './pages/apod/Random'
//Mars
import Mars from './pages/mars/Mars';
import RoverPhotosBySol from './pages/mars/RoverPhotosBySol'
import RoverPhotosByEarthDate from './pages/mars/RoverPhotosByEarthDate';



function App() {
  return (
    <>
    <AuthContextProvider>
      <ToastContextProvider></ToastContextProvider>
    <Layout>
    <Switch>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/apod' element={<Apod/>}></Route>
      <Route path='/mars' element={<Mars/>}></Route>
      <Route path='/pictureoftheday' element={<PictureoftheDay/>}></Route>
      <Route path='/history' element={<History/>}></Route>
      <Route path='/random' element={<Random/>}></Route>
      <Route path='/roverphotosbysol' element={<RoverPhotosBySol/>}></Route>
      <Route path='/roverphotosbyearthdate' element={<RoverPhotosByEarthDate/>}></Route>
    </Switch>

    </Layout>
    </AuthContextProvider>
    </>
  );
}

export default App;
