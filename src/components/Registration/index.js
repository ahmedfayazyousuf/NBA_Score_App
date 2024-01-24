import { useNavigate } from 'react-router-dom';
import firebase from '../../firebase';
import '../images/All.css';
import nbalogo from '../images/logo.png'
import { useState } from 'react';
import './style.scss'
import {useRef} from 'react';
import email from '../images/email.png'
import user from '../images/name.png'
import mobile from '../images/phone.png'

const Registration = () =>{
    // const [numberr, setNumberr] = useState(false);
    const navigate = useNavigate();
    // const location = useLocation();
    // eslint-disable-next-line
    const buttonRef = useRef(null);
    // eslint-disable-next-line
    const [select, setSelect] = useState('m')

//    function onlyOnetwo(e) {
//         var checkm = document.getElementById('checkm');
//         var checkf = document.getElementById('checkf');
//         // checkm.checked = !checkm.checked 
//         // checkf.checked = !checkf.checked 
//         // console.log(checkbox)

//         if(e === 'm'){

//             checkf.checked = false
//             setSelect("m")
            
//             // setUser({...user, [firstname]:value})
//         }

//         if(e === 'f'){

            
//             checkm.checked = false
//             setSelect("f")

//             // setUser({...user, [firstname]:value})
//         }
//     }

    function HandleSubmit(){
        console.log('2');

        // buttonRef.current.disabled = true;
        const Users = firebase.firestore().collection("Users");
        const Email = document.getElementById("email").value;
        const Number = document.getElementById("no").value;
        const Name = document.getElementById("Name").value;
        // const Msg = document.getElementById("message").value;
        // const Country = document.getElementById("country").value;
        // const Check = document.getElementById("invalidCheck").checked;
       
        console.log(Email)

        if(Name === ''){
            // buttonRef.current.disabled = false;
            document.getElementById('error').innerHTML = "PLEASE ENTER YOUR NAME"
            return;
        }

        var validRegex =   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (Email === "" || !Email.match(validRegex))
        {
            document.getElementById('error').innerHTML = "PLEASE ENTER A VALID EMAIL"
            return;
        }

        // eslint-disable-next-line
        if (document.getElementById("no").value === "" ){
            console.log('Hello')
            // buttonRef.current.disabled = false;
            document.getElementById('error').innerHTML = "PLEASE ENTER A VALID PHONE NUMBER"
            return;
            
        }

        // if(select === ''){
        //     document.getElementById('error').innerHTML = "PLEASE SELECT YOUR GENDER"
        //     return;
        // }

        // if(Check === false){
        //     document.getElementById('error').innerHTML = "PLEASE CHECK THE CONSENT"
        //     return
        // }

        Users.add({
            Name:Name,
            Email:Email,
            Number:Number,       
            time: firebase.firestore.FieldValue.serverTimestamp()

        }).then((docRef)=>{
            navigate('/Score',{state:{data:{id:docRef.id,name:Name}}})
        })
    }


    
    return( 
            
        <div style={{display:"flex", flexDirection:"column", width:"100vw", height: "100vh", justifyContent:"center", alignItems:"center"}}>

            <div style={{display: 'flex', flexDirection: 'column', width: '70%', gap:'5px', alignItems: 'center', justifyContent:'center'}}>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '18px', paddingTop:'45px'}}>
                    <img style={{minWidth: '100px', maxWidth: '300px'}} src={nbalogo} alt="NBALogo"/>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vh', marginBottom:'10px'}}>
                    <h1 style={{paddingRight: '50px', paddingLeft: '50px', color: 'white', fontSize: '20px'}}>WELCOME</h1>
                </div>
                <div style={{width:"100%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <input type="text" placeholder='NAME' id="Name" style={{background:"transparent",fontSize:'20px',color:'white', borderRadius: '10px', border:"1px solid white", marginBottom:'15px', width:"900px", height:'47px', paddingLeft: '40px', paddingRight: '10px', backgroundColor:'transparent',zIndex:'10'}}/> 

                    <div style={{width:'900px',display:'flex',height:'47px',position:'absolute',paddingLeft:'10px',paddingTop:'3px',zIndex:'0'}}>
                        <img src={user} style={{position:'absolute',width:'20px',zIndex:'0'}} />
                    </div>
                </div>
                
                <div style={{width:"100%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <input type="email" placeholder='EMAIL' id='email' style={{background:"transparent",fontSize:'20px',color:'white', borderRadius: '10px', border:"1px solid white", marginBottom:'15px', width:"900px", height:'47px', paddingLeft: '40px', paddingRight: '10px', backgroundColor: 'transparent',zIndex:'10' }} />

                    
                    <div style={{width:'900px',display:'flex',height:'47px',position:'absolute',paddingLeft:'10px',paddingTop:'8px',zIndex:'0'}}>
                        <img src={email} style={{position:'absolute',width:'20px',zIndex:'0'}} />
                    </div>
                </div>


                <div style={{width:"100%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <input type="number" placeholder='MOBILE (971 xx xxx xxxx)' id='no' style={{background:"transparent",fontSize:'20px',color:'white', borderRadius: '10px', border:"1px solid white", marginBottom:'15px', width:"900px", height:'47px', paddingLeft: '40px', paddingRight: '10px', backgroundColor: 'transparent',zIndex:'10' }} />
                        
                    <div style={{width:'900px',display:'flex',height:'47px',position:'absolute',paddingLeft:'10px',paddingTop:'5px',zIndex:'0'}}>
                        <img src={mobile} style={{position:'absolute',width:'20px',zIndex:'0'}} />
                    </div>
                </div>

       

{/*       
                
                <div className="form-check" style={{marginTop: '10px'}}>
                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" style={{backgroundColor: '#061A1B', borderColor: 'white'}}/>
                    <label className="form-check-label" style={{fontSize: '10px', color: 'white'}}>* I consent to the use of my personal information by the NBA 2K League and its affiliates, NBA Media Ventures, and Take-Two Interactive Software to provide me with information about the NBA 2K League and other promotional information and for business purposes, in accordance with the NBA.com Network Privacy Policy and Take-Two Interactive Software Inc. Privacy Policy.</label>
                </div> */}

                <div>
                    <p id='error' style={{color:"red", marginBottom: '5px'}}></p>
                </div>


                {/* <div style={{display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'center'}}>        
                    <button className="grab"  style={{cursor: 'grab', width: '250px', padding: '5px', border: 'none', borderRadius: '10px', marginLeft: '20px', backgroundColor: 'black', color: 'white', fontSize: '25px'}} variant="contained" onClick={HandleSubmit}>SUBMIT</button>
                </div> */}

                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom:'60px', cursor: 'grab'}} onClick={HandleSubmit}>  
                    <div style={{width:'150px',height:'50px',background:'#00438C',borderRadius:'10px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <p>REGISTER</p>
                    </div>      
                    {/* <img style={{width: '150px'}} src={submit} alt="submit"/> */}
                </div>

            </div>
            
        </div>
    )
}

export default Registration;
