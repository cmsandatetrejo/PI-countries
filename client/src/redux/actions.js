import axios from "axios";
import { GET_COUNTRIES } from "./actions-types";

export const getCountries=()=>{
   
    return async (dispatch) => {
       try{
          const response=await axios.get("http://localhost:3001/");
          const {data}=response;
          if(!data.length) throw Error("No se encontraron Countries");
 
          return dispatch({
             type: GET_COUNTRIES,
             payload: data,
          });
       }catch (error){
          console.log(error.message);   
       }
    };
 }