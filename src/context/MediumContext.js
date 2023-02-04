import { createContext, useState } from 'react'
import { signInWithPopup,signOut  } from 'firebase/auth'
import { auth, provider } from '../firebase'

export const MediumContext = createContext()

export const MediumProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [flightDetails ,setFlightDetails] = useState(null)
  const [startDayMonthYear , setStartDayMonthYear] = useState('')
  const [returnDayMonthYear , setReturnDayMonthYear] = useState('')
  const handleUserSignOut =async()=> {
    signOut(auth).then(() => {
      console.log("sign out")
      // window.location.reload(false);
      window.location.reload();
   
    }).catch((error) => {
      console.log(error.message)
    });
  }
  const handleUserAuth = async () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user 
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        setUser(user)
      })
      .catch(error => {
        console.error(error.message)
      })
  }

  return (
    <MediumContext.Provider
      value={{ user ,handleUserAuth ,flightDetails ,setFlightDetails,startDayMonthYear ,setStartDayMonthYear  , returnDayMonthYear, setReturnDayMonthYear,handleUserSignOut}}
    >
      {children}
    </MediumContext.Provider>
  )
}