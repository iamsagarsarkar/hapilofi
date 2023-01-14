import {  getDocs, collection } from "@firebase/firestore";
import { firestore} from "./config/fbConfig";
import React,{useState,useEffect} from 'react';
import MusicSystem from './components/musicSystem';
import MusicOption from './components/musicOption';
import natural from "./assets/natural.jpg";

const array = [];
array.push({image:natural,name: "hello",url: ""});
const sound = new Audio();

function App() {
  const [idx,setIdx] = useState(0);
  const [musics,setMusics]=useState([]);


  const [mood,setMood] = useState("All");

  const fetchMusics=async()=>{
    const response = collection(firestore, "music");
    const data = await getDocs(response);
    data.docs.forEach(item=>{
        array.push(item.data());
        setMusics([...musics,item.data()])
    })
  }
  useEffect(() => {
    fetchMusics();
  }, [])
  
  const music = array[idx%array.length];
  const background = music.image;
  if(idx !== 0){
    sound.src = music.url;
    sound.play();
  } 
  

  return (
  <div className="App" style={{ backgroundImage: `url(${background})`,height:'100vh',
  marginTop:-50,
  fontSize:'50px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  position: 'center'
   }}>
    <p></p>
    <MusicOption mood={mood} setMood={setMood} idx={idx}  setIdx={setIdx}/>
    <MusicSystem idx={idx}  setIdx={setIdx} music={music} sound={sound} length={array.length}/>
  </div>);}



export default App;
