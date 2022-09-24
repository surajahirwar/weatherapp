import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Getweather } from './Redux/action/weatherAction'


export default function Weather() {
    // https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=41.211128&lon=174.908081&dt=1664009618&appid=3e513c133abef78e5e0b44a73b1dbe92
    // https://api.openweathermap.org/data/2.5/forecast?q=delhi&cnt=7&appid=3e513c133abef78e5e0b44a73b1dbe92&units=metric
    // https://api.openweathermap.org/data/2.5/onecall?lat=-41.211128&lon=174.908081&exclude=daily,minutely,current,alerts&units=metric&appid=3e513c133abef78e5e0b44a73b1dbe92
    
    const dispatch = useDispatch();
    const {data} = useSelector((state)=> state.weatherReducer)

    useEffect(()=>{
        dispatch(Getweather())
    },[])

    console.log(data)
    

  return (
    <div>




    </div>
  )
}
