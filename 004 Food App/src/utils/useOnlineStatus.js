import {useEffect, useState} from 'react'

const useOnlineStatus =()=>{

    const [onlinestatus,SetOnlinestatus]= useState(true);
    
    useEffect(()=>{
        // console.log("useEffect")
        window.addEventListener('online',(e)=>{
            // console.log(onlinestatus)
            // console.log(e)
            SetOnlinestatus(true)
        })
        window.addEventListener('offline',(e)=>{
            // console.log(onlinestatus)
            SetOnlinestatus(false)
        })
        
    },[])
        
    return onlinestatus
}

export default useOnlineStatus;