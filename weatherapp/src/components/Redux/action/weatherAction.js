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

export const GetweatherHours = () => (dispatch)=> {

    dispatch({ type: loading });
    axios.get("https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=41.211128&lon=174.908081&dt=1664009618&appid=0e8b2c4e5a41d2b3b81897c77b9e4d88")
    .then((e)=>{
        
        dispatch({type:success, payload:e.data})
    })  
    .catch(() => {
        dispatch({type:error});
    });
}
