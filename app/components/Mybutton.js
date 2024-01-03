'use client'
import React, { useState } from 'react'

export default function Mybutton(props) {
    const [message,setmessage] = useState('')
    const [disable,setdisable] = useState(true)
    const messagehandle = (e)=>{
      if (e.target.value.length == 0){
        setmessage('');
        props.changeurl('')
       }else{console.log('hi');setmessage(e.target.value);}
      
       if (e.target.value.length > 0){
        setdisable(false)
       }else{setdisable(true)}
    }

    const submithandle = (e) =>{
      e.preventDefault();
      props.changeurl(message)
    }
  return (
    <>
    <form className='flex flex-col gap-14 justify-center items-center' onSubmit={(e) => {submithandle(e);}}>
        <input type='text' className='outline-none border-b-2 w-80 focus:border-black transition-all duration-300' onChange={(e)=>{messagehandle(e);}}></input>
        <input type='submit' disabled={disable} className='bg-indigo-700 text-white px-5 py-3 rounded-2xl hover:bg-indigo-900 disabled:bg-slate-400 transition-all' value={'create your QR CODE'}></input>
    </form>
    </>
  )
}
