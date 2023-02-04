import React, { useEffect, useState } from 'react'
import Flight from './Flight'

const Available = () => {
const [data , setData] = useState([]);
   useEffect(() => {
     async function GetData(){
        await fetch('https://content.newtonschool.co/v1/pr/63b86a1d735f93791e09cb11/flights')
            .then(res => res.json())
            .then(flight => setData(flight))
          }
          GetData() ;
        }, [])
      
    return (
        <div className='flex items-center justify-center flex-col  w-[60rem] h-[25rem]' >
            <h3 className='text-5xl my-3 text-white font-medium place-self-start'>
             Available flights...</h3> 
            <div className='flex flex-col bg-white items-center overflow-y-auto w-full rounded-md ...' >
            { data.map((flight , index) => (
            <Flight key={index} plane={flight} />
             ))
            }
           </div> 
        </div>
    )
}
export default Available
