
import { useContext } from "react"
import { ApiContext } from "../context/ApiContext"
import Tablazat from "../components/Tablazat"



export default function Admin(){
    
    const {termekLista} = useContext(ApiContext)

    return (

    <main className='row'>
        <article className='col-lg-4'>
          <h4>TermékLista</h4>
            <Tablazat/>
        </article>
      </main>
    )
}