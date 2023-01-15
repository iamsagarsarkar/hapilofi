import { ReactComponent as FastRewind } from '../assets/fast_rewind.svg';
import { ReactComponent as FastForward } from '../assets/fast_forward.svg';
import { ReactComponent as PlaySvg } from '../assets/play_arrow.svg';
import { ReactComponent as PauseSvg } from '../assets/pause.svg';
import './musicSystem.css';
import React,{useState} from 'react';

function MusicSystem({idx,setIdx,music,sound,length,mood,array}) {
  const [isPlaying,setIsPlaying] = useState([true]);
  const [isHome,setIsHome] = useState([true]);

  const [volume, setVolume] = useState(1);
  const finalVolume = volume ** 2;
  sound.volume = finalVolume;

  if(!isHome && idx === 0) checkMood(mood,music,array,idx,setIdx,setIsPlaying,sound);

  React.useEffect(() => {
    window.addEventListener("keydown", keyHandler);
    return () => {
      window.removeEventListener("keydown", keyHandler);
    };
  });

  function keyHandler({ key }) {
    console.log(key);
    if(!isHome && key === "ArrowRight") forWard(idx,setIdx,sound,setIsPlaying,length,array,mood);
    else if(!isHome && key === "ArrowLeft") backWard(idx,setIdx,sound,setIsPlaying,length,array,mood);
    else if(!isHome && key === " ") handlePlayButton(isPlaying,setIsPlaying,sound);
    else if(!isHome && key === "ArrowUp" && volume<1) setVolume(volume+0.02)
    else if(!isHome && key === "ArrowDown" && volume>0) setVolume(volume-0.02);
    else if(isHome && key === "Enter") startPlaying(idx,setIdx,sound,setIsPlaying,setIsHome);
  }

  sound.onended = () => {
    forWard(idx,setIdx,sound,setIsPlaying,length);
  };
  
  if(isHome){
    return(<div className='start-content'>
      <button onClick={()=> startPlaying(idx,setIdx,sound,setIsPlaying,setIsHome)} className='start-button'><img src={require('../assets/startPlay.png')}/></button>
    </div>)
  }else{
    return (
      <div className='music-system'>
      <p className='music-name'>{music.name}</p>
      <div className='button-work'>
      <button onClick={()=> backWard(idx,setIdx,sound,setIsPlaying,length,array,mood)} className='button'><FastRewind fill='rgba(255,53,127,1)' /></button>  
      <button className='button' onClick={()=>handlePlayButton(isPlaying,setIsPlaying,sound)}><PlayOrPause isPlaying={isPlaying} /></button>
      <button onClick={()=> forWard(idx,setIdx,sound,setIsPlaying,length,array,mood)} className='button'><FastForward fill='rgba(59,173,227,1)'/></button>
      <input
          type="range"
          min={0}
          max={1}
          step={0.02}
          class="range blue"
          value={volume}
          onChange={event => {
            setVolume(event.target.valueAsNumber)
          }}
        />
      </div></div> );
  }
}


function startPlaying(idx,setIdx,sound,setIsPlaying,setIsHome){
  setIdx(0);
  soundStop(sound);
  setIsPlaying(false);
  setIsHome(false);
 }

function backWard(idx,setIdx,sound,setIsPlaying,length,array,mood){
  if(mood === "All"){
    if(idx === 1) setIdx(length-1);
    else setIdx(--idx);
    soundStop(sound);
    setIsPlaying(false);
  }else{
    let cur = idx-1;
    if(cur === 0) cur = length-1;
    while(cur%length !== idx && array[cur%length].mood !== mood){
      cur--;
      if(cur === 0) cur = length-1;
    }
    if(cur%array.length === idx) console.log("Not have that mood");
    else{
      setIdx(cur%array.length);
      soundStop(sound);
      setIsPlaying(false);
    }
  }
}

function forWard(idx,setIdx,sound,setIsPlaying,length,array,mood){
  if(mood ==="All"){
    if(idx === length-1) setIdx(1); 
    else setIdx(++idx);
    soundStop(sound);
    setIsPlaying(false);
  }else{
    let cur = idx+1;
    while(cur%array.length !== idx && array[cur%array.length].mood !== mood) cur++;
    if(cur%array.length === idx) console.log("Not have that mood");
    else{
      setIdx(cur%array.length);
      soundStop(sound);
      setIsPlaying(false);
    }
  }
}

function handlePlayButton(isPlaying,setIsPlaying,sound){
  setIsPlaying(!isPlaying);
  audio(isPlaying,sound);
}

function PlayOrPause({isPlaying}){
  if(isPlaying) return <PlaySvg fill='rgba(152,68,183,1)' />
  else return <PauseSvg fill='rgba(152,68,183,1)' />
}

function audio(isPlaying,sound){
  if(isPlaying) sound.play();
  else sound.pause();
}

function soundStop(sound){
  sound.pause();
  sound.currentTime = 0;
}

function checkMood(mood,music,array,idx,setIdx,setIsPlaying,sound){
  if(mood === "All") setIdx(1);
  if(mood !== "All" && mood !== music.mood){
    let cur = idx+1;
    while(cur%array.length !== idx && array[cur%array.length].mood !== mood) cur++;
    if(cur%array.length === idx) console.log("Not have that mood");
    else{
      setIdx(cur%array.length);
      soundStop(sound);
      setIsPlaying(false);
    }
   }
}



export default MusicSystem;