import React ,{useContext} from 'react'
import Payment from './Payment'
import {MediumContext} from '../context/MediumContext'
import  { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

const Result = () => {
  const[name,setName]=useState("");
  const[card,setCard]=useState("");
  const[cv,setCv]=useState("");
  const { flightDetails,
          startDayMonthYear,
          returnDayMonthYear,
          setFlightDetails } = useContext(MediumContext)

  const [startDate3, setStartDate3] = useState(null);

 const bookTicket =(e)=>{
  e.preventDefault();
  if(!flightDetails || !name) {
    alert("Card is Successfully added")
    setFlightDetails(null)
    setName("");
    setCard("");
    setCv("");
    setStartDate3(null);
  } else{
    alert(`payment successful and Ticket has been booked
    Ticket details:
    Name:-> ${name}
    Airplane Name:-> ${flightDetails.airlineName}
    Ticket No:->${flightDetails.from.slice(0,3) +"-"+ flightDetails.to.slice(0,3)+":"+Math.floor(Math.random()*10000)}
    from: ${flightDetails.from} to ${flightDetails.to}
    Departure :->  Date: ${startDayMonthYear} Time: ${flightDetails.departure.departureTime}
    Return :->  Date: ${returnDayMonthYear} Time: ${flightDetails.return.returnTime}
   `
    )
    setFlightDetails(null)
    setName("");
    setCard("");
    setCv("");
    setStartDate3(null);
  }
  
 }
  return (
    <div className='flex  justify-center w-full ' >
    { flightDetails ?
      <Payment data={flightDetails} />
      :(
      <div className='flex flex-col p-4 bg-blue-400 justify-center items-center w-3/5 ' >
      <h1 className='text-3xl font-xl mt-2 mb-4' >No ticket in your cart</h1>
      <h3 className='text-xl font-xl mt-2 mb-4' >Make a safe journey by airbus</h3>
      <img 
          src="https://media2.giphy.com/media/iCEPetKVHKDOVOzMSi/giphy.gif?cid=ecf05e476g9lt4kweigpdc7b50oj7s4heyqcb0cxpnlquu7a&rid=giphy.gif" 
          alt="light"
          width={200}
          height={150} 
        />
      </div>)
    }

      <div className='flex flex-col items-center justify-center  bg-blue-200 p-4 w-2/5' >
      <h2 className='text-[22px] ' >ADD CARD TO PAY</h2>

        <form className='bg-white p-4 rounded'
          onSubmit={bookTicket}>
          <div className="relative z-0 w-full mb-6 group">
            <input type="text" name="floating_email" id="floating_email" 
            className="block py-2.5 px-0 w-full text-sm text-gray-900 
            bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
            dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none 
            focus:ring-0 focus:border-blue-600 peer font-[600] " 
            placeholder="NAME ON CARD" 
            value={name} 
            onChange={(e)=>setName(e.target.value)} required  />
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input type="text" name="floating_password" id="floating_password" 
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
            border-0 border-b-2 border-gray-300 appearance-none 
            dark:text-black dark:border-gray-600 dark:focus:border-blue-500 
            focus:outline-none focus:ring-0 focus:border-blue-600 peer font-[600] " 
            placeholder="CARD NUMBER"
            value={card} 
            onChange={(e)=>setCard(e.target.value)} required />
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
            <DatePicker
                    selected={startDate3}
                    onChange={(date) => setStartDate3(date)}
                    minDate={new Date()}
                    showDisabledMonthNavigation
                    placeholderText='EXPIRY DATE'
                    name="floating_first_name" id="floating_first_name" 
                    className=" block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
                    border-0 border-b-2 border-gray-300 appearance-none 
                    dark:text-black dark:border-gray-600 dark:focus:border-blue-500 
                    focus:outline-none focus:ring-0 focus:border-blue-600 peer font-[600] " 
                    value={startDate3}  
                      />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input type="text" name="floating_last_name" id="floating_last_name" 
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 
              border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 
              dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer font-[600] " 
              placeholder="CVV" 
              value={cv} 
              onChange={(e)=>setCv(e.target.value)} required />
            </div>
          </div>
          <button type="submit"  
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
          focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 
          text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-[600]">
          Submit</button>
        </form>

      </div>
    </div>
  )
}

export default Result
