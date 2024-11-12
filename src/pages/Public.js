import { useContext } from "react"
import { ApiContext } from "../context/ApiContext"



export default function Public(){
    
    const {termekLista} = useContext(ApiContext)

    return (

    <main className='row'>
        <aside className='col-lg-4'>
          <h4>Kosár</h4>
            <Kosar/>
        </aside>
        <article className='col-lg-8 row'>
          <h4>Vásárlótér</h4>
            <Vasarloter termekLista={termekLista}/>
        </article>
      </main>
    )
}