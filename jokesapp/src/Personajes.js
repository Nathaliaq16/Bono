import React, { useEffect, useState } from 'react';
//importa navbar.css
import {MD5} from 'crypto-js';

function Personajes() {
  const [lista, setPersonajes] = useState([]);


  useEffect(() => {
    const ts = Date.now()
    const hash = MD5(ts + "a6c1b1386110f40bc7d0f1a9bea900eaedf1d346" + "62141ba7ffa110340e47f1e262a96511")

    const response = fetch(`https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=62141ba7ffa110340e47f1e262a96511&hash=${hash}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify()
    }).then(res => res.json()).then(res => {
      console.log(res.data.results)
      setPersonajes(res.data.results)
    })

    // if (response.ok) {
    //   const data = response.json();
    //   console.log(data.data.results)
    //   const newPersonaje = data.data.results

    //   setPersonajes(newPersonaje);

    // // Guardar todos los viajes en el localStorage
    // localStorage.setItem('personajes', JSON.stringify(lista));
      
    // } else {
    //   console.log("Error de autenticación")
    // }
  }, []); 
  
      
    return (
        <div >
        {JSON.stringify(lista)}
    </div>
    );
  }
  
  export default Personajes;