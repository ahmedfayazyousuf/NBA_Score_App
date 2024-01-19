import { useEffect, useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import firebase from '../../firebase';

const Score = () => {

    const [score,setScore] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(5)
    const location = useLocation()
    const navigate = useNavigate();

    useEffect(() => {
        const Users = firebase.firestore().collection("Users");

        let myInterval = setInterval(() => {
          if (seconds > 0) {
            setSeconds(seconds - 1)
          } if (seconds === 0) {
            if (minutes === 0) {
              clearInterval(myInterval)
              document.getElementById('pop').style.zIndex = '100'
              Users.doc(location.state.data.id).update({Score:score})

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
            setScore(score + n)
    }
    return(
            
        <div style={{display:"flex", flexDirection:"column", width:"100%", height: "100vh", justifyContent:"center", alignItems:"center", flexWrap: 'wrap', textAlign: 'center'}}>
          <div>

          </div>

          <div style={{display:'flex',width:'100%',display:'flex',justifyContent:"center", alignItems:"center"}}>
            <div style={{width:'350px',height:'300px',border:'1px black solid',display:'flex',justifyContent:"center", alignItems:"center"}}>
            <h1>{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
            </div>

            <div style={{width:'350px',height:'300px',border:'1px black solid',display:'flex',justifyContent:"center", alignItems:"center"}}>
                <p id="Score">{score}</p>
            </div>
          </div>

          <div style={{display:'flex',width:'100%',display:'flex',justifyContent:"center", alignItems:"center",marginTop:'50px'}}>
            <div onClick={()=>{add(1)}} style={{width:'150px',height:'50px',border:'1px black solid'}}>
                1
            </div>

            <div onClick={()=>{add(2)}} style={{width:'150px',height:'50px',border:'1px black solid'}}>
                2
            </div>

            <div onClick={()=>{add(3)}} style={{width:'150px',height:'50px',border:'1px black solid'}}>
                3
            </div>
          </div>

          <div id="pop" style={{width:'100%',height:'100%',position:'absolute',display:'flex',justifyContent:"center", alignItems:"center",background:'rgba(0,0,0,0.5)',zIndex:'-1'}}>

            <div style={{width:'300px',height:'250px',background:'white ',display:'flex',justifyContent:"center", alignItems:"center",borderRadius:'20px'}}>
                <h1>Game Over</h1>
            </div>

          </div>
        </div>
    )
}

export default Score;