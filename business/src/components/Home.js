import Pocket from "./Pocket";
import { useNavigate } from 'react-router-dom'


function Home() {
    const navigate=useNavigate();
    const handleCreatecard =()=>{
        navigate('/card');

    }
    return (
      <div className="App">
        <div className="leftdiv">     
            <div style={{margin:"30px", marginLeft:"18px"}}>
                <img src="/pocket.png"/></div>
            <div className="seconddiv">
            <p className="text">Make your professional life easy</p>
            <p className="freeplan">Create your <span>Free</span></p>
            <p className="virtual">Virtual Business Card</p>
            <p className="step">Take your first step towards a successful business</p>
             <button className="bottomcard" onClick={handleCreatecard}>CREATE A CARD</button> 
            </div>
        </div>
    <div className="rightdiv">
        <div className="main" >
          <div className="navstyle">FEATURES</div>
          <div className="navstyle">PRICING</div>
          <div className="navstyle">BUSINESS</div>
          <div className="navstyle">SMART CARD</div>
     
         <button className="createtbtn" onClick={handleCreatecard}>CREATE A CARD</button>
        </div>
        <img style={{marginTop:"150px"}}src="/computer.png" alt="computer"/>
    </div>
    <div className="dot"><img src="/dotted.png" alt="dots"/></div>
    <div class="mobileback">
    <div className="phone">
        <img src="/phone.png" alt="phone"/>
    </div>
    <div style={{marginTop:"250px", width:'800px', marginLeft:'700px', height:'500px'}}>
        <p style={{color:"#1F1F1F", fontSize:"26px"}}>Create your</p>
        <p style={{fontSize:'36px', lineHeight: '55px'}}>DIGITAL BUSINESS CARD </p>
        <p style={{color:"#1F1F1F", fontSize:"26px", marginTop:"20px"}}>Just enter the information you <br/>want to show on the card.<br/>
Share anywhere, anytime on any<br/> Platform.</p>
<button className="butn">Contact us</button>
    </div>
    </div>
    </div>
            
    );
  }
  
  export default Home;
  