import axios from "axios";
import { error, loading, success } from "../Type";

export const Getweather = () => (dispatch)=> {
    dispatch({ type: loading });
    axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=41.211128&lon=-174.908081&exclude=hourly,minutely&units=metric&appid=0e8b2c4e5a41d2b3b81897c77b9e4d88")
    .then((e)=>{
        dispatch({type:success, payload:e.data})
    })  
    .catch(() => {
        dispatch({type:error});
    });
}

// export const Postweather = (data)=> {
//     return async(dispatch) => {

//     dispatch({ type: loading });
//     axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${data}&cnt=7&appid=3e513c133abef78e5e0b44a73b1dbe92&units=metric`)
//     .then((e)=>{
//         dispatch(Getweather(e.data.city.coord.long))
//     })  
//     .catch(() => {
//         dispatch({type:error});
//     });
    
// }
// }
