

import Weather from "./components/Weather"
import Data from  "./db.json"


function App() {
  
  return (
    <div className="App">
      
     
      <Weather Data={Data} />
     
    
    </div>
  )
}

export default App
