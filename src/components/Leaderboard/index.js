import React, { useEffect, useState } from 'react';
import firebase from '../../firebase';
import nbalogo from '../images/logo.png'
import { useNavigate } from 'react-router-dom';


const Leaderboard = () => {
  const navigate = useNavigate();

  const [leaderboardData, setLeaderboardData] = useState([]);

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

    if(window.innerWidth< 800){
      var elements = document.getElementsByClassName('bar')
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.flex = '40%'; // Replace 'property' and 'value' with your desired styles
    }

    
    }
    else{
      var elements = document.getElementsByClassName('bar')

      for (var i = 0; i < elements.length; i++) {
        elements[i].style.flex = '70%'; // Replace 'property' and 'value' with your desired styles
    }
    }
  }, []);


  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", justifyContent: "center", alignItems: "center", textAlign: 'center'}}>
        
            <img onClick={()=>{navigate('/')}} style={{width: '150px', position: 'absolute', top: '25px', right: '25px'}} src={nbalogo} alt="NBALogo"/>
        
`        <div style={{width:'100%', display: "flex", justifyContent: "center", alignItems: "center"}}>
          <div style={{backgroundColor: '#00438C', margin: '2 0px', padding: '0', height: '80px', width: '400px', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h1 style={{color: 'white', fontSize: '25px'}}>LEADERBOARD</h1>
          </div>
        </div>`
        
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-10px'}}>
          <div style={{display:'flex',flexDirection:'column',width:'80%'}}>
                {leaderboardData.map((user,index) => (
                <div style={{display:'flex', width:'100%',marginBottom:'8px'}}>
                    <div style={{flex:'40%', borderRadius:'10px', background:'#00438C', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '45px'}}>
                        <h1 style={{color:'white',fontSize:'25px'}}>{index+1 === 10? index+1: `0${index+1}`}</h1>
                    </div>

                    <div className='bar' style={{flex:'40%', height: '50px', borderRadius:'10px', background:'#985299',justifyContent:'space-between',marginLeft:'-340px', display: 'flex', justifyItems: 'center', alignItems: 'center', border: '1px solid #00438C'}}>
                        <div style={{paddingLeft:'90px', fontSize: '25px', color: 'white'}}>
                            <h1 style={{color:'white',fontSize:'25px'}}>{user.Name}</h1>
                        </div>

                        <div style={{paddingRight:'90px', fontSize: '25px', color: 'white'}}>
                            <h1 style={{color:'white',fontSize:'25px'}}>{user.Score}</h1>
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