import React from 'react'
const Flight = ({plane}) => {
    return (
        <div className='flex  border-1 shadow-lg my-1 px-2   w-full h-[8rem] ' >
            <div className='flex flex-col items-center justify-center mx-3 '>
                <p className='place-self-start text-slate-400 text-sm ' >Airline Name</p>
                <p className='text-lg place-self-start ' >{plane.airlineName}</p>
            </div>
            <div className='flex flex-col items-center justify-center mx-3 ml-[67px] '>
                <p className='place-self-start text-slate-400 text-sm w-20 ' >From</p>
                <p className='text-lg place-self-start w-20' >{plane.from}</p>
            </div>
            <div className='flex flex-col items-center justify-center ml-[67px]' >
                <img 
                     src="https://media2.giphy.com/media/iCEPetKVHKDOVOzMSi/giphy.gif? 
                     cid=ecf05e476g9lt4kweigpdc7b50oj7s4heyqcb0cxpnlquu7a&rid=giphy.gif" 
                    alt="light"
                    width={100}
                     height={70} 
                 />
            </div>
            <div className='flex flex-col items-center justify-center mx-3 ml-[78px]'>
                <p className='place-self-start text-slate-400 text-sm w-20' >to</p>
                <p className='text-lg w-20' >{plane.to}</p>
            </div>
            <div className='flex flex-col items-center justify-center mx-3 ml-[67px]'>
                <p className='place-self-start text-slate-400 text-sm ' >Depart</p>
                <p className='text-lg place-self-start' >{plane.departure.departureDate}</p>
            </div>
            <div className='flex flex-col items-center justify-center mx-3 ml-[67px] '>
                <p className='place-self-start text-slate-400 text-sm ' >Flight Brand</p>
                <p className='text-lg place-self-start' >{plane.airlineName}</p>
            </div>
        </div>
    )
}

export default Flight
