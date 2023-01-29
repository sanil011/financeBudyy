import React from 'react'

function ReciveMessage({ data }) {
  return (
    <div className='flex relative'>
      <div className='bg-sky-100 max-w-[50%] font-semibold text-lg ml-4 rounded-lg mt-4 p-4'>Hello, {data}
        <p>Please fill out the form:</p>
      </div>
      <div className="absolute border-r-[20px] border-r-sky-100 top-[22px]" style={{
        width: "0", height: "0", borderTop: "10px solid transparent",
        borderBottom: "10px solid transparent"
      }} />
    </div>
  )
}

function SendMessage({ data }) {
  return (
    <div className='flex justify-end relative'>
      <div className='p-4 max-w-[50%] mt-4 mr-4 font-semibold text-lg rounded-lg bg-white text-black'>{data}
      </div>
      <div className="absolute border-l-[20px] border-l-white top-[22px]" style={{
        width: "0", height: "0", borderTop: "10px solid transparent",
        borderBottom: "10px solid transparent"
      }} />
    </div>
  )
}

export { ReciveMessage, SendMessage };