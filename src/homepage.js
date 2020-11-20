import React, { useState } from "react";
import {BrowserRouter as Router,
Link,
Switch,
Route,
useHistory} from "react-router-dom"
import Cart from "./cart"
export default function Homepage(){
    
 
 return(
     
     <>
     <h1>SHOPPING</h1>
     <Router>
     <Link to="/"><button>home</button></Link>
         <Link to="/cart"><button>CART</button>
         </Link>
         <Switch>
             <Route exact path="/"><Home/></Route>
             <Route path="/cart"><Cart/></Route>

         </Switch>
     </Router>
     </>
 )
}
const items=[{name:"air-purifier",price:4000},{name:"cricket-kit",price:7000},{name:"Phone",price:12000}];
function Home(){ 
    // let history=useHistory();
    


    return(<>
        <div>
            {items[0].name}<br/>
            {items[0].price} <br/>
            
            <button onClick={()=>{Additem(items[0]); 
                // history.push("/cart")
                }  }>Add</button>
            {/* <button onClick={AddCartItem}> add</button> */}
        </div>
        <div>
        {items[1].name}<br/>
            {items[1].price}<br/>
            <button  onClick={()=>{Additem(items[1]);
                // history.push("/cart")
                }}>Add</button>
        </div>
        <div>
        {items[2].name}<br/>
            {items[2].price}<br/>
            <button  onClick={()=>{Additem(items[2]);
                // history.push("/cart")
                }}>Add</button>
        </div>
    </>
    )  
    function Additem(e){
        
        if(localStorage.getItem("products")==null){
           let arr=[e];
            localStorage.setItem("products",JSON.stringify(arr));
        }
        else{
            
        
           let  arr=JSON.parse(localStorage.getItem("products"));
            
            
            console.log("new",arr)
          
            arr.push(e)
            localStorage.setItem("products",JSON.stringify(arr));
            
        
        }
       
    }
}

