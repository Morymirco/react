import React from 'react';

const PIXEL = () => {
    const [photos, setphotos] = useState([]);

            useEffect(()=>{
                
                axios.get("https://api.pexels.com/v1/wU03UtynPrZhNMtJOxe0E25HExzYHyIwa0Xvwre9cq6ZaUN8xHC5kwaV")
                .then(response =>{
                    setphotos(response.data)
                    console.log(response)
                })
                .catch(error =>{
                    console.log(error)
                })
            },[]);
    return (
        <div>
            



        </div>
    );
}

export default PIXEL;
