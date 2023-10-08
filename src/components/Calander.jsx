import React from 'react'
import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const Calander = () => {
    const [date, setDate] = useState(new Date())
    const onChange = () => {
        setDate(date)
    }

  return (
    <div>
        <Calendar wo onChange={onChange} value={date}/>
    </div>
  )
}

export default Calander