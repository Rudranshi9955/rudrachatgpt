import React from 'react'
import "./Home.css"
import man from "../../assets/man.png"



function Home() {



  return (
    <div id ="home">
      <div className="lefthome">
 <div className="homedetails">
  <div className="line1"> I'M</div>
  <div className="line2">RUDRANSHI</div>
  <div className="line3">WEB DEVELOPER</div>
  <button>HIRE ME</button>
 </div>
 </div>
      <div className="righthome">
<img src={man} alt="" />
      </div>
    </div>
  )
}

export default Home
