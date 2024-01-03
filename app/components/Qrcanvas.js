'use client'
import React from 'react'
import { useQRCode } from 'next-qrcode'

export default function Qrcanvas(props) {
    const { Canvas } = useQRCode();

  return (
    <>
    <Canvas
      text={props.url}
      options={{
        errorCorrectionLevel: 'M',
        margin: 3,
        scale: 4,
        width: 400,
      }}
    />
    </>
  )
}
