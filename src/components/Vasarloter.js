import React from 'react'
import Termek from './Termek'

export default function Vasarloter(props) {

    return (
        <>
            {
                props.termekLista.map( (elem, index)=>{
                    return (<Termek jel={elem} key={index} index={index} className="row"/>)
                })
            }
        </>
      )
}
