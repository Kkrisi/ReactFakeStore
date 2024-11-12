import { createContext, useEffect, useState } from "react";
/*import axios from 'axios';*/
import { myAxios } from "./MyAxios";


export const ApiContext=createContext("")

export const ApiProvider=({children})=>{

    const [termekLista, setTermekLista] = useState([]);
    const [katLista, setKatLista] = useState([]);

    const vegpont = "https://fakestoreapi.com/products"

    const getAdat = async (vegpont, callback) => {
        
        try {
            const response = await myAxios.get(vegpont);
            setTermekLista(response.data)
            callback([...response.data])
        } catch (err) {
            console.log("Hiba történt");
        } finally {

        }

    };



    const postAdat = async (vegpont, adat) => {
        
        try {
            const response = await myAxios.post(vegpont, adat);
            console.log(response);
        } catch (err) {
            console.log("Hiba történt");
        } finally {

        }

    };


    function katt(){

    }


    useEffect(()=>{
        getAdat("/products", setTermekLista);
        getAdat("/products/categories", setKatLista);

    }, [] );

    return (
    <ApiContext.Provider value={{ termekLista, postAdat, katLista}}>
        {children}
    </ApiContext.Provider>
    );
}