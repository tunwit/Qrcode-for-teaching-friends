'use client'
import Image from 'next/image'
import Mybutton from './components/Mybutton'
import Qrcanvas from './components/Qrcanvas'
import { useState } from 'react'

export default function Home() {
  const [url,seturl] = useState('')
  return (
    <main>
      <div className='flex flex-row'>
        <div className='flex w-1/2 min-h-screen justify-center items-center '>
          <div className='flex flex-col bg-zinc-100 w-52 h-52 justify-center items-center rounded-xl border-dashed border-gray-500 border-2'>
            {
              url == '' ?(
                <p className='text-slate-500'>Fill in your url</p>
              ):(
                <>
                  <Qrcanvas url={url}></Qrcanvas>
                  <p>Qr code for {url}</p>
                </>
              )
            }
          </div>
        </div>

        <div className='flex flex-col w-1/2 min-h-screen  justify-center items-center gap-14'>
            <h3 className='font-extrabold text-4xl'>Welcome to QR CODE Maker</h3>
            <Mybutton changeurl={seturl}></Mybutton>
        </div>

      </div>
    </main>
  )
}
