import React from 'react'
import {Line} from 'react-chartjs-2'
import 'chart.js/auto';

// defaults.global.tooltips.enabled = false
// defaults.global.legend.position = 'bottom'

export default function BarChart (){
  return (
    <div>
      <Line
        data={{
          
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'  ],
          datasets: [
           
            {
              label: 'Disable chart',
              data: [47, 52, 67, 58, 9, 50,47, 52, 67, 58, 9, 50],
              fill: true,
              borderColor: 'rgb(75, 192, 192)',
              borderWidth: 2,
              // fillcolor: 'rgb(75, 192, 192)',
              tension: 0.1,
           
              
              
            },
          ],
        }}
        
        height={400}
        width={600}
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
          maintainAspectRatio: false,
          plugins: {
              // legend: false // Hide legend
          },
          scales: {
              y: {
                  display: false // Hide Y axis labels
              },
             
             
          }   
        }}
      />
    </div>
  )
}