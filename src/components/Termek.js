import React, { useContext } from 'react'

export default function Termek(props) {
    



  return (

        <div className='card w-25 col-lg-4'>
            <h4 className='card-title'>{props.jel.title}</h4>
            <img className="card-img" src={props.jel.image} alt={props.jel.image}/>
            <p>{props.jel.description}</p>
            <p>{props.jel.category}</p>
            <button type="button" className="btn btn-primary">Kosárba</button>
            <p>{props.jel.price} $</p>
        </div>

  )
}
