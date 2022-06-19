import React from 'react'

export default function Counter() {
    const [count,setCount]=React.useState(0);

    const increment=()=>{
        setCount(count+1);
    }
    
    const decrement=()=>{
        setCount(count-1);
    }

    const double=()=>{
        setCount(count*2);

    }

    
    return (
        <div>
        <h1>Counter</h1>

        
       
        <h3 style={{color : "red", fontSize:"42px"  }}>{count}</h3>

        <h3 style={{color : "blue", fontSize:"42px"  }}>{count}</h3>
        <button onClick={()=>increment()}>Increment</button>
        <button onClick={()=>decrement()}>Decrement</button>
        <button onClick={()=>double()}>Double</button>
      
    </div>
  )
}
