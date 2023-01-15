import React from 'react';
import Popup from 'reactjs-popup';
import { ReactComponent as Menu } from '../assets/menu.svg';
import './musicOption.css';

function MusicOption({mood,setMood,idx,setIdx}) {

    return (
     <Popup trigger={<button className="button"><Menu/></button>}
    modal
    nested>
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header">Choose Mood</div>
        <div className="content">
        <MoodButton setIdx={setIdx} setMood={setMood}  mood={mood} val={"All"} idx={idx}/>
        <MoodButton setIdx={setIdx} setMood={setMood}  mood={mood} val={"LoFi Study"} idx={idx}/>
        <MoodButton setIdx={setIdx} setMood={setMood}  mood={mood} val={"Nostalgia"} idx={idx}/>
        <MoodButton setIdx={setIdx} setMood={setMood}  mood={mood} val={"Sad"} idx={idx}/>
        <MoodButton setIdx={setIdx} setMood={setMood}  mood={mood} val={"Happy"} idx={idx}/>
        <MoodButton setIdx={setIdx} setMood={setMood}  mood={mood} val={"NightCore"} idx={idx}/>
        <MoodButton setIdx={setIdx} setMood={setMood}  mood={mood} val={"Energy"} idx={idx}/>
        <MoodButton setIdx={setIdx} setMood={setMood}  mood={mood} val={"Retro"} idx={idx}/>
        <MoodButton setIdx={setIdx} setMood={setMood}  mood={mood} val={"Romantic"} idx={idx}/>
        <MoodButton setIdx={setIdx} setMood={setMood}  mood={mood} val={"Cheerful"} idx={idx}/>
        </div>
      </div>
    )}
  </Popup>
    );
}

function moodChange(setIdx,setMood,mood,val,idx){
  if(mood === val) return;
  setMood(val);
  if(idx !== 0) setIdx(0);
}

function MoodButton({setIdx,setMood,mood,val,idx}){
  if(mood === val) return <button className="select-botton" onClick={()=>moodChange(setIdx,setMood,mood,val,idx)}>{val}</button>;
  else return <button className="not-select-botton"  onClick={()=>moodChange(setIdx,setMood,mood,val,idx)}>{val}</button>
}

export default MusicOption;