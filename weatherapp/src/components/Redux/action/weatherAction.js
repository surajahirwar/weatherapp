import axios from "axios";
import { error, loading, success } from "../Type";

export const Getweather = () => (dispatch)=> {
    dispatch({ type: loading });
    axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=41.211128&lon=-174.908081&exclude=hourly,minutely&units=metric&appid=977e0624961df3cc904063e07026af4b")
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
