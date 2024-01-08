import {useState,useEffect} from "react"
const Final = () => {
    const [count,setCount]=useState(0);

    useEffect(()=>{
        console.log("Hello Iam coming from useEffect",count);
    },[count]);

    const handleButton=()=>{
        setCount(count+1);
    }
    return ( 
        <div>
            <h1>Count:{count}</h1>
            <button onClick={handleButton}>+</button>
        </div>
     );
}
 
export default Final;