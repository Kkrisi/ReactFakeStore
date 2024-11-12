
import React, { useContext, useState } from 'react'
import { ApiContext } from '../context/ApiContext';


export default function Urlap() {

  const {postAdat} = useContext(ApiContext);

    const [adat, setAdat] = useState({
      title: "Ez a termék neve",
      price: '...',
      category: '...',
      description: '...',
      image: '...'
    });

    function elkuld(event){
        event.preventDefault();
        console.log("Elkuld ",adat);
        postAdat("/products", adat);
    }

    function valtoztatasKezeles(event){
      const sObj = {...adat}
      sObj.title = event.target.value
      setAdat(...sObj);
    }

  return (
    <div>
        
        <form onSubmit={elkuld}>

            <div class="form-group">
                <label for="title" class="form-label">A termék neve</label>
                <input type="text" value={adat.title} onChange={valtoztatasKezeles} class="form-control" id="title" aria-describedby="emailHelp"/>

            </div>

            <div class="form-group">
                <label for="price" class="form-label">A termék neve</label>
                <input type="number" min="1000" max="100000" value={adat.price} onChange={valtoztatasKezeles} class="form-control" id="price" aria-describedby="emailHelp"/>

            </div>

            <div className="mb-3">
                <label htmlFor="description" class="form-label">A termék leírása</label>
                <textarea class="form-control" id="description" rows="3" onChange={valtoztatasKezeles}></textarea>
            </div>

            <div>
              <label for="category">Kategóriák</label>

              <select  name="category" id="category" value={adat.category}>

              </select>

              <br/>
              <br/>
              <input type="submit" value="Submit"/>
            </div>


            <button type="submit" class="btn btn-primary">Submit</button>

        </form>

    </div>
  )
}
