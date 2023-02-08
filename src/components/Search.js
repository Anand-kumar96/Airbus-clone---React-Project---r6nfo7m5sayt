import React , {useContext,useState} from 'react'
import { MediumContext } from '../context/MediumContext';
import { addMonths } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'



const Search = ({start , last , switch1}) => {
    const [startDate1, setStartDate1] = useState(null);
    const [startDate2, setStartDate2] = useState(null);
    const { setStartDayMonthYear, setReturnDayMonthYear} = useContext(MediumContext)
    function handleDeparture(date){
        setStartDate1(date)
        let month = date.getUTCMonth() + 1; 
        let day = date.getUTCDate();
        let year = date.getUTCFullYear();
        let newDate=[day.toString().padStart(2, '0'), month.toString().padStart(2, '0'),year ].join('-')
        setStartDayMonthYear(newDate);
    }
    const handleReturn=(date)=>{
        setStartDate2(date)
        let month = date.getUTCMonth() + 1; 
        let day = date.getUTCDate();
        let year = date.getUTCFullYear();
        let newDate=[day.toString().padStart(2, '0'), month.toString().padStart(2, '0'),year ].join('-')
        setReturnDayMonthYear(newDate);
    }

    return (
        <div className='flex items-center  flex-col'>
            <div className='flex flex-col ' >
                <h2 className='text-5xl my-5 text-white font-medium place-self-start' >Let the journey begin...</h2>
                <div className='h-[7rem] rounded-lg bg-white flex items-center justify-center p-4  "bg-[#50d71e]"' >
                 <form onSubmit={switch1} className='h-[7rem] rounded-lg bg-white flex items-center justify-center p-4  "bg-[#50d71e]"'>
                    <div className='flex flex-col items-center justify-center mx-3'>
                        <p className='place-self-start text-slate-400 text-sm ' >From</p>
                        <input list="placesStart" type="text" onChange={(e)=>{start(e.target.value)}}  placeholder='DELHI' className='border-b-4 ' required />
                         <datalist id="placesStart" className='bg-[#50d71e]'>
                            <option value="Delhi"></option>
                            <option value="Mumbai"></option>
                            <option value="Varansi"></option>
                            <option value="Jaipur"></option>
                            <option value="Chennai"></option>
                         </datalist>
                    </div>
                    <div className='flex flex-col items-center justify-center mx-3 '>
                        <p className='place-self-start text-slate-400 text-sm ' >to</p>
                        <input list="placesReturn" type="text" onChange={(e)=>{last(e.target.value)}} placeholder='MUMBAI' className='border-b-4 ' required/>
                        <datalist id="placesReturn" className='bg-[#50d71e]'>
                            <option value="Mumbai"></option>
                            <option value="Goa"></option>
                            <option value="Varansi"></option>
                            <option value="Kolkata"></option>
                            <option value="Indore"></option>
                         </datalist>
                    </div>
                    <div className='flex flex-col items-center justify-center mx-1 '>
                        <p className='place-self-start text-slate-400 text-sm ' >Depart</p>
                        <DatePicker
                                    selected={startDate1}
                                    onChange={handleDeparture}
                                    minDate={new Date()}
                                    maxDate={addMonths(new Date(), 5)}
                                    showDisabledMonthNavigation
                                    placeholderText='Please Select'
                                    className='border-b-4 w-29'
                                    required/>
                    </div>
                    <div className='flex flex-col items-center justify-center mx-1 '>
                        <p className='place-self-start text-slate-400 text-sm ' >Return</p>
                        <DatePicker
                                    selected={startDate2}
                                    onChange={handleReturn}
                                    minDate={new Date()}
                                    maxDate={addMonths(new Date(), 5)}
                                    showDisabledMonthNavigation
                                    placeholderText='Please Select'
                                    className='border-b-4 w-29'
                                    required/>
                    </div>

                    <button className='bg-amber-400 py-2 px-5 rounded-lg text-base shadow-lg ml-5' >
                    Search Flights
                    </button>
                    </form>
                 
                </div>
            </div>
        </div>
    )
}

export default Search
