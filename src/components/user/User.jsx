import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const { userId } = useParams();
  return (
    <>
      <div className='bg-slate-700 text-white p-5'>
        <h1 className='text-center font-bold'>User</h1>
        <p>User ID: {userId}</p>
      </div>
    </>
  )
}

export default User