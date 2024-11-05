import { createContext, useEffect, useState } from "react";
/*import axios from 'axios';*/
import { myAxios } from "./MyAxios";


export const ApiContext=createContext("")

export const ApiProvider=({children})=>{

    const [termekLista, setTermekLista] = useState([])

    const vegpont = "https://fakestoreapi.com/products"

    const getAdat = async (vegpont) => {
        
        try {
            const response = await myAxios.get(vegpont);
            setTermekLista(response.data)
        } catch (err) {
            console.log("Hiba történt");
        } finally {

        }

    };


    function katt(){


    }


    useEffect(()=>{
        getAdat(vegpont);
    }, [] );

    return (
    <ApiContext.Provider value={{ termekLista, katt }}>
        {children}
    </ApiContext.Provider>
    );
}