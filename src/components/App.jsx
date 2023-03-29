import React from 'react';
<<<<<<< HEAD

const App = () => (
  <div>
  App</div>
);
=======
import { CssBaseline } from '@mui/material';
import {Routes, Route } from 'react-router-dom';
import useStyles from './styles'
import {Actors,MovieInformation,Movies,Navbar,Profile} from './index'

const App = () =>{
   const classes  = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline /> 
      <Navbar/>
      <main className={classes.content}>
      <div className={classes.toolbar}>

      </div>
      <Routes>
      <Route exact path='/movie/:id' element={<MovieInformation/>}></Route>
      <Route exact path='/actors/:id' element={<Actors />}></Route>
      <Route exact path='/' element={<Movies />}></Route>
      <Route exact path='/profile/:id' element={<Profile />}></Route>
      </Routes>
      </main>
  
    </div>
  );

} 
>>>>>>> 1a4e742 (Devloping)
export default App;
