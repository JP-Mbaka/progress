import React,{useState, useEffect} from 'react'

function Sample3() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(()=>{
        if(isMounted){
            console.log("Send Mesage to backend to request Email verification");
        } else{
            console.log("Send Mesage to backend to resend request Phone verification");}
    },[isMounted])

    return(
        <div>
            <button onClick = {()=>setIsMounted(!isMounted)}>
                {isMounted? "Unmount":"Mount"}
            </button>
        </div>
    );
}

export default Sample3;
