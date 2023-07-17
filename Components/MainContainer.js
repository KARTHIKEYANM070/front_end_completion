import React from 'react'
import Music from '../Songs/src_audios_KAASH.mp3';
import '../Styles/MainContainer.css'
function MainContainer() {
  return (
    <div className='main'>     
    <audio src={Music} controls autoPlay/>
    </div>
  );
}
export {MainContainer}
