import React from 'react';
import { useState ,useEffect} from 'react';
import Load from './load';
import axios from 'axios';
import effec from '../../../public/img/termine.png'
import croix from '../../../public/img/croixr.jpeg'
import Head from './Head';
const Todolist = () => {
    const [todos, settodos] = useState([]);
    const [etat,setetat] =useState(true)

            useEffect(()=>{
                axios.get("https://jsonplaceholder.typicode.com/todos?limit=10")
                .then(response =>{
                    settodos(response.data)
                    console.log(response)
                    setetat(false)
                })
                .catch(error =>{
                    console.log(error)
                })
            },[]);
if(etat){
    return <Load></Load>
}
    return (
       <>
         <Head></Head>
        <div className='container'>
          
        <h1 className='mt-5 mb-4'>TodoS</h1>
        <div className='row'>
            {todos.map(todo=>(
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={todo.id}>
                    <div className="card" >
                    <img src={todo.completed ? effec:croix}   class="card-img-top"/>
                        
                        <div className="card-body">
                            <h5 className="card-title  " style={{height:65}}>
                               {todo.title} 
                            </h5>
                            <p className="card-text">
                                ID : {todo.id}
                            </p>

                            <div className="d-flex justify-content-between">
                                <button className='btn btn-success '>Modifier</button>
                                <button className='btn btn-danger'>Supprimer</button>
                            </div>
                            {/* <button className="btn btn-primary">effecter</button> */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
    </div></>
    );
}

export default Todolist;
