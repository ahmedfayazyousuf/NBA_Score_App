import tick from '../images/tick.png'

const Success = () => {
    return(
            
        <div style={{display:"flex", flexDirection:"column", width:"100%", height: "100vh", justifyContent:"center", alignItems:"center", flexWrap: 'wrap', textAlign: 'center'}}>
            <img style={{minWidth: '100px', maxWidth: '300px'}} src={tick} alt="tick"/>
            <h1 style={{paddingRight: '50px', paddingLeft: '50px', color: 'white', fontSize: '20px'}}>Your response has been recorded</h1>
            <h1 style={{paddingRight: '50px', paddingLeft: '50px', color: 'red', marginTop: '10px'}}>Thank You!</h1>
        </div>
    )
}

export default Success;