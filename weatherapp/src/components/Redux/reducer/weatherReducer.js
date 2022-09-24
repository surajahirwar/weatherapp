import { error, loading, success } from "../Type";


const inital = {
    getdata:{
        loading:false,
        error:false,
    },
    data:[]
}

export const weatherReducer = (state=inital, { type, payload })=> {
    switch (type) {
        case loading:{
                return { ...state, getdata:{ 
                    ...state.getdata,
                    loading:true,
                    error:false,
                }}    
        }
        case success:{
                return { ...state, getdata:{
                    ...state.getdata,
                    loading:false,
                    error:false,
                },
                data:payload,
            }      
        }
        case error:{
                return { ...state, getdata:{
                    ...state.getdata,
                    loading:false,
                    error:true,
                }
            }
        }
        default:{
          return state;
        }
    }
};

