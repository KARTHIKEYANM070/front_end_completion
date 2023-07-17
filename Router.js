import React, { Component } from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import App from './App';
import Music from './Music';
import Profile from './Components/Profile';
export class Routing extends Component {
  render() {
    return (
        <BrowserRouter>
        <Routes>
            <Route exact path='/' Component={App}/>
            <Route exact path='/login' element={<Music/>}/>
            <Route exact path='/profile' element={<Profile/>}/>
        </Routes>

        </BrowserRouter>
    )
  }
}

export default Routing;