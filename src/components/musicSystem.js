import { ReactComponent as FastRewind } from '../assets/fast_rewind.svg';
import { ReactComponent as FastForward } from '../assets/fast_forward.svg';
import { ReactComponent as PlaySvg } from '../assets/play_arrow.svg';
import { ReactComponent as PauseSvg } from '../assets/pause.svg';
import './musicSystem.css';
import React,{useState,useEffect} from 'react';

function MusicSystem({idx,setIdx,music,sound,length}) {
  const [isPlaying,setIsPlaying] = useState([true]);
  const [isHome,setIsHome] = useState([true]);

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
      <button onClick={()=> backWard(idx,setIdx,sound,setIsPlaying,length)} className='button'><FastRewind/></button>  
      <button className='button' onClick={()=>handlePlayButton(isPlaying,setIsPlaying,sound)}><PlayOrPause isPlaying={isPlaying}/></button>
      <button onClick={()=> forWard(idx,setIdx,sound,setIsPlaying,length)} className='button'><FastForward/></button>
      </div></div> );
  }
}


function startPlaying(idx,setIdx,sound,setIsPlaying,setIsHome){
  setIdx(++idx);
  soundStop(sound);
  setIsPlaying(false);
  setIsHome(false);
 }

function backWard(idx,setIdx,sound,setIsPlaying,length){
  if(idx === 1) setIdx(length-1);
  else setIdx(--idx);
  soundStop(sound);
  setIsPlaying(false);
}

function forWard(idx,setIdx,sound,setIsPlaying,length){
 if(idx === length-1) setIdx(1); 
 else setIdx(++idx);
 soundStop(sound);
 setIsPlaying(false);
}

function handlePlayButton(isPlaying,setIsPlaying,sound){
  setIsPlaying(!isPlaying);
  audio(isPlaying,sound);
}

function PlayOrPause({isPlaying}){
  if(isPlaying) return <PlaySvg/>
  else return <PauseSvg/>
}

function audio(isPlaying,sound){
  if(isPlaying) sound.play();
  else sound.pause();
}

function soundStop(sound){
  sound.pause();
  sound.currentTime = 0;
}

export default MusicSystem;