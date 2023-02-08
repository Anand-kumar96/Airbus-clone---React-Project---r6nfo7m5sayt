import { createContext, useState } from 'react'

export const MediumContext = createContext()

export const MediumProvider = ({ children }) => {
  const [flightDetails ,setFlightDetails] = useState(null)
  const [startDayMonthYear , setStartDayMonthYear] = useState('')
  const [returnDayMonthYear , setReturnDayMonthYear] = useState('')
  return (
    <MediumContext.Provider
      value={{flightDetails ,setFlightDetails,startDayMonthYear ,setStartDayMonthYear  , returnDayMonthYear, setReturnDayMonthYear}}
    >
      {children}
    </MediumContext.Provider>
  )
}