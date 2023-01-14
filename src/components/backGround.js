import background from "../assets/img1.jpeg";
function BackGround() {
    return ( <div className="App" style={{ backgroundImage: `url(${background})`,height:'100vh',
    marginTop:-50,
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
     }}/> );
}

export default BackGround;