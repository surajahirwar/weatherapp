
import {Line} from 'react-chartjs-2'
import 'chart.js/auto';
import axios  from 'axios';
import { useEffect, useState } from 'react';

// import {
//   Spinner
// } from "@chakra-ui/react";
// defaults.global.tooltips.enabled = false
// defaults.global.legend.position = 'bottom'



export default function BarChart ({location}){

  // console.log(location)

  const [data, setdata] = useState([])
  const newdata = []
  const newtemp = []
  useEffect(() => {
    
    axios.get(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${location.lat}&lon=${location.lon}&dt=1664009618&units=metric&appid=3e513c133abef78e5e0b44a73b1dbe92`)
    .then((e)=>{

      setdata(e.data.hourly)
      
        
    })  
    
  },[location]);

  const getday = (day) =>{
   var hoursday = new Date(day*1000)
  
  const dateString = hoursday.getHours()
    return dateString
  }
  for(let i = 0; i<data.length; i++){
    const res = getday(data[i].dt)
    newtemp.push(data[i].temp)
    newdata.push(res)
  }
  // console.log(data)
  
  // console.log(newtemp)
 



  return (

    <div >
      <Line
        data={{
          labels: newdata,
          datasets: [
            
            {
              label: 'temp chart',
              data: newtemp,
              fill: true,
              borderColor: 'rgb(75, 192, 192)',
              borderWidth: 2,
              fillcolor: 'rgb(75, 192, 192)',
              tension: 0.1,
              
              
              
            },
          ],
        }}
        height={300}
        width={650}
        
        options={{
          animations: {
            tension: {
              duration: 1000,
              easing: 'linear',
              from: 1,
              to: 0,
              loop: true
            }
          },
          
         
        }}
        
        />
        
    </div>
  )
}