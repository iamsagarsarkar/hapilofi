import background from "../assets/img1.jpeg";
function BackGround() {
    return ( <div className="App" style={{ backgroundImage: `url(${background})`,height:'100vh',
    marginTop:-50,
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
     }}>

<button onClick={()=>moodChange(setIdx,setMood,mood,"LoFi Study")}>LoFi Study</button>
        <button onClick={()=>moodChange(setIdx,setMood,mood,"Nostalgia")}>Nostalgia</button>
        <button onClick={()=>moodChange(setIdx,setMood,mood,"Sad")}>Sad</button>
        <button onClick={()=>moodChange(setIdx,setMood,mood,"Happy")}>Happy</button>
        <button onClick={()=>moodChange(setIdx,setMood,mood,"NightCore")}>NightCore</button>
        <button onClick={()=>moodChange(setIdx,setMood,mood,"Energy")}>Energy</button>
        <button onClick={()=>moodChange(setIdx,setMood,mood,"Retro")}>Retro</button>
        <button onClick={()=>moodChange(setIdx,setMood,mood,"Romantic")}>Romantic</button>
        <button onClick={()=>moodChange(setIdx,setMood,mood,"Cheerful")}>Cheerful</button>
     </div> );
}

export default BackGround;