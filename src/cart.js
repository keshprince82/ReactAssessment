import React, { useState } from "react"

export default function Cart(){
    
 
 const[del,setDel]=useState(false);

   
   
  
    return(<table>

       <tr><th>item</th><th>cost</th> </tr>
       <Tbody/>
      
      
    

   
        </table>
    )


function Tbody(){
  let arra=JSON.parse(localStorage.getItem("products"));
  if(arra){
    return(<>
      {arra.map((val,ind)=><tr><td>{val.name}</td>  <td>{val.price}</td> <td> <button onClick={()=>Delete(ind)}>remove</button></td> </tr>)}
      <h1>total{arra.reduce((ac,val)=>ac+val.price,0)}</h1>
      </>
    )
  } else{
    return (<h1>no items</h1>)
  }

 

}



function Delete(item){
  let arra=JSON.parse(localStorage.getItem("products"));
  arra.splice(item,1);

  localStorage.setItem("products",JSON.stringify(arra));
  setDel(r=>!r);
  

}
}