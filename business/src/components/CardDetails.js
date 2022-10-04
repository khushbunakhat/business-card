import Pocket from './Pocket';
import style from './cardDetails.module.css';
import { useNavigate } from 'react-router-dom'

function CardDetails() {
    const navigate=useNavigate();
    const handleBack = () =>{
        navigate('/card');
    }

    return (
        <div>
        
            {/* <img src="./cardDetail.png"/> */}
            <div style={{margin:"30px", marginLeft:"100px"}}>
                <img src="/pocket.png"/></div>
        <div style={{marginTop:"20px",cursor:"pointer",marginLeft:"100px"}} onClick={handleBack}><img width="100px"src="/back.png" /></div>

            <div className="upload">
            <div style={{textAlign:'center'}} class="container">
            <div style={{marginLeft:"50px"}}class="tag"> 
            <img className={style.uploadimg}src="./upload.png"/>
            </div>
            <img className={style.backimg} src="./image.png"></img>
               
            <div className={style.addlogo}><img width="80px"src="./addlogo.png"/></div>

            </div>
         </div>
          <div className={style.inputBox}>
        <form >
            <label>First Name</label>
            <input type="text" />
            <label>Middle Name</label>
            <input type="text" />
            <label>Last Name</label>
            <input type="text" />
            <label>Designation</label>
            <input type="text" />
            <label>Company Name</label>
            <input type="text" />
            <label>Contact Number</label>
            <input type="text" />
            <label>Email ID</label>
            <input type="text" />
            <label>Website URL</label>
            <input type="text" />

        </form>
        </div> 
        <div className={style.detail}>
            <img width="500px"src="/cardDetail.png" alt="logo"/>
        </div>
        <div className={style.button}>
            <button className={style.btn1}>Cancel</button>
            <button className={style.btn2}>Save</button>
        </div>
        </div>
        
        
    )
}
export default CardDetails
     