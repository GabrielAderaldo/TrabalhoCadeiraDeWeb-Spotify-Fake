import React from 'react';
import { BrowserRouter,Route,Switch} from 'react-router-dom';

import Login from './pages/Login';
import Faq from './pages/FAQ';
import Register from './pages/Register';
import Playlist from './pages/Playlist';
import Home from './pages/Home';
import PlayMusic1 from './pages/Play_music/1';
import PlayMusic2 from './pages/Play_music/2';
import PlayMusic3 from './pages/Play_music/3';
import PlayMusic4 from './pages/Play_music/4';
import PlayMusic5 from './pages/Play_music/5';
import PlayMusic6 from './pages/Play_music/6';
import PlayMusic7 from './pages/Play_music/7';
import PlayMusic8 from './pages/Play_music/8';

import fac1 from './pages/FAQ/fac1';
import fac2 from './pages/FAQ/fac2';
import fac3 from './pages/FAQ/fac3';

import fac4 from './pages/FAQ/fac4';
import fac5 from './pages/FAQ/fac5';
import fac6 from './pages/FAQ/fac6';
import fac7 from './pages/FAQ/fac7';
import fac8 from './pages/FAQ/fac8';
import fac9 from './pages/FAQ/fac9';


export default function Routes(){
    return(
        <BrowserRouter>
          <Switch>
              <Route path="/login"  component={Login}/>
              <Route path="/" exact component={Home}></Route>
              <Route path="/faq"  component={Faq}/>
              <Route path="/register" component={Register}/>
              <Route path="/playlist" component={Playlist}/>
              <Route path="/playMusic/1" component={PlayMusic1}/>
              <Route path="/playMusic/2" component={PlayMusic2}/>
              <Route path="/playMusic/3" component={PlayMusic3}/>
              <Route path="/playMusic/4" component={PlayMusic4}/>
              <Route path="/playMusic/5" component={PlayMusic5}/>
              <Route path="/playMusic/6" component={PlayMusic6}/>
              <Route path="/playMusic/7" component={PlayMusic7}/>
              <Route path="/playMusic/8" component={PlayMusic8}/>

            {/*Routas do FAQ*/}
            <Route path="/faq1" component ={fac1}></Route>
            <Route path="/faq2" component ={fac2}></Route>
            <Route path="/faq3" component ={fac3}></Route>
            <Route path="/faq4" component ={fac4}></Route>
            <Route path="/faq5" component ={fac5}></Route>
            <Route path="/faq6" component ={fac6}></Route>
            <Route path="/faq7" component ={fac7}></Route>
            <Route path="/faq8" component ={fac8}></Route>
            <Route path="/faq9" component ={fac9}></Route>
          </Switch>
        </BrowserRouter>
    )
}