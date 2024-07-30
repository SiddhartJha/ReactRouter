import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams() // here we are getting the value of "userid" with the help of "useParams"
  return (
    <div className='flex items-center justify-center' >
        <div className='bg-gray-600 text-white text-3xl p-4 w-full text-center'>User: {userid} </div>
    </div>
    
  )
}

export default User