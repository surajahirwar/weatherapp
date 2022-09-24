import axios from "axios";
import { error, loading, success } from "../Type";

export const Getweather = () => (dispatch)=> {
    dispatch({ type: loading });
    axios.get("https://api.openweathermap.org/data/2.5/forecast?q=delhi&cnt=7&appid=3e513c133abef78e5e0b44a73b1dbe92&units=metric")
    .then((e)=>{
        dispatch({type:success, payload:e.data})
    })  
    .catch(() => {
        dispatch({type:error});
    });
}
// export const getMenData = () => (dispatch)=> {
//     dispatch({ type: GETDATA_LOADING});
//     axios.get("https://maxfashionbackendclone.herokuapp.com/men")
//     .then((e)=>{
//         dispatch({type:GETDATA_SUCCESS, payload:e.data})
//     })  
//     .catch(() => {
//         dispatch({type:GETDATA_ERROR});
//     });
// }
