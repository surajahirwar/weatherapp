
import {Line} from 'react-chartjs-2'
import 'chart.js/auto';
import axios  from 'axios';
import { useEffect, useState } from 'react';

// import {
//   Spinner
// } from "@chakra-ui/react";
// defaults.global.tooltips.enabled = false
// defaults.global.legend.position = 'bottom'



export default function BarChart ({lat, long, dt}){

  var API_KEY = "b045804ab93431828b3e101e2be26dc1"

  const [data, setdata] = useState([])
  const newdata = []
  const newtemp = []
  useEffect(() => {
    
    const getdata =  async () =>{
      await axios.get(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${long}&dt=${dt-110885}&units=metric&appid=${API_KEY}`)
      .then((e)=>{
  
        setdata(e.data.hourly)
        
          
      })  
    }
  getdata()
    
    
  },[lat, long, dt]);

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