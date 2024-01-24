import { useEffect, useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import firebase from '../../firebase';
import box from '../images/Rectangle.png'
import bluebox from '../images/bluebox.png'
import nbalogo from '../images/logo.png'

const Score = () => {

    const [score,setScore] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(5)
    const location = useLocation()
    const navigate = useNavigate();

    useEffect(() => {
        const Users = firebase.firestore().collection("Users");
        const scorev =  parseInt(document.getElementById('Score').innerHTML, 10)

        let myInterval = setInterval(() => {
          if (seconds > 0) {
            setSeconds(seconds - 1)
          } if (seconds === 0) {
            if (minutes === 0) {
              clearInterval(myInterval)
              document.getElementById('pop').style.zIndex = '100'
              document.getElementById('score').innerHTML = scorev
              Users.doc(location.state.data.id).update({Score:scorev})

              setTimeout(()=>{
                navigate('/Leaderboard')
              }, 5000)

            } else {
              setMinutes(minutes - 1)
              setSeconds(59)
            }
          }
        }, 1000)
        return () => {
          clearInterval(myInterval)
        }
      })
 

    function add(n){
            // setScore(score + n)
            console.log(document.getElementById('Score').innerHTML)
            document.getElementById('Score').innerHTML=  parseInt(document.getElementById('Score').innerHTML, 10) + n;
            // setScore(score+n)
    }
    return(
            
        <div style={{display:"flex", flexDirection:"column", width:"100%", height: "100vh", justifyContent:"center", alignItems:"center", flexWrap: 'wrap', textAlign: 'center'}}>
          
          <img style={{width: '150px', position: 'absolute', top: '25px', right: '25px'}} src={nbalogo} alt="NBALogo"/>
          
          <div style={{marginBottom:'20px',color:'white'}}>
                <h1>{location.state.data.name}</h1>
          </div>

          <div style={{display:'flex',width:'100%',display:'flex',justifyContent:"center", alignItems:"center"}}>
            <div style={{backgroundImage:`url(${box}) `,  backgroundRepeat: 'no-repeat', backgroundSize:'contain',width:'340px',height:'180px',display:'flex',justifyContent:"center", alignItems:"center",marginRight:'90px'}}>
            <h1 style={{color:'white'}}>{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
            </div>

            <div style={{backgroundImage:`url(${box}) `,  backgroundRepeat: 'no-repeat', backgroundSize:'contain',width:'340px',height:'180px',display:'flex',justifyContent:"center", alignItems:"center"}}>
                <h1 id="Score" style={{color:'white'}}>{score}</h1>
            </div>
          </div>

          <div style={{display:'flex',width:'100%',display:'flex',justifyContent:"center", alignItems:"center",marginTop:'50px'}}>
            <div onClick={()=>{add(1)}} style={{width:'100px',height:'70px',display:'flex',justifyContent:"center", alignItems:"center",borderRadius:'10px',backgroundColor:'#00438C',marginRight:'30px',color:'white'}}>
                1
            </div>

            <div onClick={()=>{add(2)}} style={{width:'100px',height:'70px',display:'flex',justifyContent:"center", alignItems:"center",borderRadius:'10px',backgroundColor:'#00438C',marginRight:'30px',color:'white'}}>
                2
            </div>

            <div onClick={()=>{add(3)}} style={{width:'100px',height:'70px',backgroundColor:'#00438C',display:'flex',justifyContent:"center", alignItems:"center",borderRadius:'10px',marginRight:'30px',color:'white'}}>
                3
            </div>
          </div>

          <div id="pop" style={{width:'100%',height:'100%',position:'absolute',display:'flex',justifyContent:"center", alignItems:"center",background:'rgba(0,0,0,0.5)',zIndex:'-1'}}>

            <div style={{backgroundImage:`url(${bluebox}) `,  backgroundRepeat: 'no-repeat', backgroundSize:'contain',width:'700px',height:'480px',display:'flex',justifyContent:"center", alignItems:"center",borderRadius:'20px',flexDirection:'column'}}>
                <h1 style={{marginBottom:'20px',color:'white'}}>GAME OVER!!</h1>

                <p style={{marginBottom:'20px',color:'white'}}>What a game! You've given it your all.<br />

                The court won't be the same without your skills!</p>


                <h1 style={{marginBottom:'20px',color:'white'}}>YOUR SCORE</h1>
                
                <div style={{width:'300px',height:'100px',border:'1px white solid', borderRadius:'20px',display:'flex',justifyContent:"center", alignItems:"center",color:'white'}}>

                    <h1 id="score"></h1>
                </div>

            </div>


          </div>
        </div>
    )
}

export default Score;