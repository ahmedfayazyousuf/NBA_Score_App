import React, { useEffect, useState } from 'react';
import firebase from '../../firebase';
import { useNavigate } from 'react-router-dom';
import nbalogo from '../images/logo.png'



const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [count,setCount] = useState(0)
  const navigate = useNavigate();

  useEffect(() => {
    const Users = firebase.firestore().collection("Users");
    const query = Users.orderBy("Score", "desc").limit(10);

    query.onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setLeaderboardData(data);
    });
  }, []);


  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", justifyContent: "center", alignItems: "center", textAlign: 'center'}}>
        
            <img style={{width: '200px', position: 'absolute', top: '20px', right: '20px'}} src={nbalogo} alt="NBALogo"/>
        
`        <div style={{width:'100%', display: "flex", justifyContent: "center", alignItems: "center"}}>
          <div style={{backgroundColor: '#00438C', margin: '40px', padding: '0', height: '80px', width: '400px', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h1 style={{color: 'white', fontSize: '30px'}}>LEADERBOARD</h1>
          </div>
        </div>`
        
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-10px'}}>
          <div style={{display:'flex',flexDirection:'column',width:'80%'}}>
                {leaderboardData.map((user,index) => (
                <div style={{display:'flex', width:'100%',marginBottom:'20px'}}>
                    <div style={{flex:'40%', borderRadius:'10px', background:'#00438C', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '60px'}}>
                        <h1 style={{color:'white',fontSize:'30px'}}>{index+1 === 10? index+1: `0${index+1}`}</h1>
                    </div>

                    <div style={{flex:'80%', height: '60px', borderRadius:'10px', background:'#985299',justifyContent:'space-between',marginLeft:'-340px', display: 'flex', justifyItems: 'center', alignItems: 'center', border: '1px solid #00438C'}}>
                        <div style={{paddingLeft:'90px', fontSize: '20px', color: 'white'}}>
                            <h1 style={{color:'white',fontSize:'30px'}}>{user.Name}</h1>
                        </div>

                        <div style={{paddingRight:'90px', fontSize: '20px', color: 'white'}}>
                            <h1 style={{color:'white',fontSize:'30px'}}>{user.Score}</h1>
                        </div>
                    </div>
                </div>
                ))}
            </div>

          </div>
        </div>
    </>
  )
}

export default Leaderboard;