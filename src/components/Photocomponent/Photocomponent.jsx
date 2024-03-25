import React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';
import Head from './Head';
import Load from './load';
const Photocomponent = () => {
    const [photos, setphotos] = useState([]);
    const [etat,setetat] =useState(true)

            useEffect(()=>{
                axios.get("https://jsonplaceholder.typicode.com/photos")
                .then(response =>{
                    setphotos(response.data)
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
          
            <h1 className='mt-5 mb-4'>PHOTOS</h1>
            <div className='row'>
                {photos.map(photo=>(
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={photo.id}>
                        <div className="card">
                            <img src={photo.thumbnailUrl}  className="card-img-top" alt={photo.title} />
                            <div className="card-body">
                                <h5 className="card-title">
                                   {photo.title} 
                                </h5>
                                <p className="card-text">
                                    ID : {photo.id}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
     </>
    );
}

export default Photocomponent;
