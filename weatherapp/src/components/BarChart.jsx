
import {Line} from 'react-chartjs-2'
import 'chart.js/auto';
import axios  from 'axios';
import { useEffect, useState } from 'react';

// import {
//   Spinner
// } from "@chakra-ui/react";
// defaults.global.tooltips.enabled = false
// defaults.global.legend.position = 'bottom'



export default function BarChart (){

  const [data, setdata] = useState([])
  const newdata = []
  const newtemp = []
  useEffect(() => {
    
    axios.get("https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=41.211128&lon=-174.908081&dt=1664009618&units=metric&appid=0e8b2c4e5a41d2b3b81897c77b9e4d88")
    .then((e)=>{

      setdata(e.data.hourly)
        
        
    })  
    
  },[]);

  const getday = (day) =>{
   var hoursday = new Date(day*1000)
  
  const dateString = hoursday.getHours()
    return dateString
  }

for(let i = 0; i<data.length; i++){
    const res = getday(data[i].dt)
    const tem = getday(data[i].temp)
    newtemp.push(tem)
   newdata.push(res)
}

 



//   if(getdata.loading) return <div
//     style={{
//       position:"absolute",
//       display: "flex",
//       justifyContent:"center",
//       alignItems: "center",
//       left:"30%",
//       top:"40%"
        
        
//     }}
//     >
//     <Spinner
        
//         speed='0.65s'
//         emptyColor='gray.200'
//         color='blue.500'
//         size='xl'
//         w="200px"
//         h="200px"
// />
// </div>
console.log(newtemp)

// const newdata = ['1', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'  ];
  return (

    <div >
      <Line
        
        data={{
          
          labels: newdata,
          datasets: [
            
            {
              label: 'Disable chart',
              data: newtemp,
              fill: true,
              borderColor: 'rgb(75, 192, 192)',
              borderWidth: 2,
              // fillcolor: 'rgb(75, 192, 192)',
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