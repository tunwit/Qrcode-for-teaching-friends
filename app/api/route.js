import React from 'react'

export default async function route(req,res) {
  return (
    res.status(200).json({ message: 'Hello from Next.js!' })
  )
}
