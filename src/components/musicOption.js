import React from 'react';
import Popup from 'reactjs-popup';
import { ReactComponent as Menu } from '../assets/menu.svg';
import './musicOption.css';

function MusicOption() {
    return (
     <Popup
    trigger={<button className="button"><Menu/></button>}
    modal
    nested>
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header">Choose Mood</div>
        <div className="content">
        <button onClick={()=>console.log("LoFi Study")}>LoFi Study</button>
        <button onClick={()=>console.log("Nostalgia")}>Nostalgia</button>
        <button onClick={()=>console.log("Sad")}>Sad</button>
        <button onClick={()=>console.log("Happy")}>Happy</button>
        <button onClick={()=>console.log("NightCore")}>NightCore</button>
        <button onClick={()=>console.log("Energy")}>Energy</button>
        <button onClick={()=>console.log("Retro")}>Retro</button>
        <button onClick={()=>console.log("Romantic")}>Romantic</button>
        <button onClick={()=>console.log("Cheerful")}>Cheerful</button>
        <button onClick={()=>console.log("Bengali")}>Bengali</button>
        <button onClick={()=>console.log("English")}>English</button>
        <button onClick={()=>console.log("Hindi")}>Hindi</button>
        </div>
      </div>
    )}
  </Popup>
    );
}

export default MusicOption;