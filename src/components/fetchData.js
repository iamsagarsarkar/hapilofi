import {  getDocs, collection } from "@firebase/firestore";
import { firestore,storage} from "../config/fbConfig";
import React,{useState,useEffect} from 'react';
import MusicOption from "./musicOption";


function FetchData() {
    const [musics,setMusics] = useState([]);
    const fetchMusics=async()=>{
    const response = collection(firestore, "music");
    const data = await getDocs(response);
    const array = [];
    data.docs.forEach(item=>{
        array.push(item.data());
    })
    console.log(array[1]);
  }
  useEffect(() => {
    fetchMusics();
  }, [])
  return (
    <div className="fetch-data">
      {
        musics && musics.map(music=>{
          return(
            <div className="blog-container">
            <p>{music.name}</p>
            </div>
          )
       })
      }
    </div>
  );
}

export default FetchData;