import Pocket from './Pocket'
import { useNavigate } from 'react-router-dom'
function Card() {
    const navigate=useNavigate();
    const handleBack = () =>{
       
        navigate('/');
    }
    const handleInputClick =()=>{
        navigate('/cardDetails');
    }
    return (
        <>
        <div style={{margin:"30px", marginLeft:"60px"}}>
        <div style={{margin:"30px", marginLeft:"60px"}}>
                <img src="/pocket.png"/></div>
        <div style={{marginTop:"20px", cursor:"pointer",marginLeft:"50px"}} onClick={handleBack}><img width="100px"src="/back.png" /></div>
        
        </div>
        <div style={{display:"flex",flexDirecton:"row",marginLeft:'80px', marginTop:"-50px"}}>
            <div style={{padding:'20px',width:'30%'}}>
            <h2 >Your Cards</h2>
            <div style={{textAlign:'center'}} class="container">
            <div class="tag"> 
            <textarea className="input1" placeholder="Full name&#x0a;email address"></textarea>
            <div onClick={handleInputClick} style={{ background:' #F6F6F6',   height:'48px', borderRadius:'30px',width:"250px",textAlign:"center"}}>
            <img style={{marginTop:"5px", marginRight:"20px"}}width="30px"src="/plusbutton.png" alt="btn"/> <span style={{color:"pink"}}>Create a new card</span>
                
            </div>
            </div>
                <img id='img'src="./pinkback.png"/>
            </div>

            </div>
            <div style={{width:'30%'}}>
            <h2>Share your Card</h2>
            <div style={{textAlign:'center'}} class="container">
            <div style={{marginLeft:"50px"}}class="tag"> 
            <img className="backimg" src="./group.png"></img>
            </div>
                <img id='img'src="./blueback.png"/>
            </div>

            </div>
            <div style={{width:'30%'}}>
            <h2>Unlock Features</h2>
            <div style={{textAlign:'center'}} class="container">
            <div style={{marginLeft:"50px"}}class="tag"> 
            <span style={{color:"#1F1F1F"}}>Upgrade your plan to unlock more exciting features
            
            </span>
            <button className="upgrade">Upgrade plan</button>
            </div>
                <img id="img" src="./orangeback.png"></img>
            </div>

            
            </div>
        </div>
        <div className="lastdiv">
        <div style={{background:"#CCD0F9", borderRadius:"30px 0px 0px 30px"}}><img width="36px"src="/group.png"/><p>Code</p></div>
        <div><img width="36px"src="/copy.png"/><p>Email</p></div>
        <div><img width="36px"src="/carbon_copy-link.png"/><p>Copy link</p></div>
        </div>
        </>
    )
}
export default Card
