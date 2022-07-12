import React, { useState } from 'react'
import country from './country.json'
import state from './state.json'

function Main() {

    const [cs,setCs]=useState('')
 
    
console.log(cs)
   const handelchange=(e)=>{
       
       setCs(e.target.value)
   }

   


  return (
    <div>
          <select onChange={handelchange}>
           
            {
                country.map((el)=>{
                    return(
                    <option key={el.code} value={el.code}> {el.name} </option>
                    )
                })
            }
            
        </select>
           

        <select>
            {
                !cs && <option>--None--</option>
            }
            
              {
                  cs&&state[cs].map((st) => {
                    return (
                    <option key={st}> {st} </option>
                    )
                    
                  })
              }


        </select>
      
    </div>
  )
}

export default Main
