import {useState} from "react";
const Calculator = () => {

    const[result,setResult]=useState('');

    const handleClick=(e)=>{
        e.preventDefault();
        setResult(result.concat(e.target.name));
    }

    const clear=(e)=>{
        e.preventDefault();
        setResult(" ");
    }

    const backSpace=(e)=>{
        e.preventDefault();
        setResult(result.slice(0,result.length -1));
    }

    const calculate=(e)=>{
        e.preventDefault();
        try{
            setResult(eval(result).toString());
        }catch(error){
            setResult(Error);
        }
        }
        
    return ( 
        <div className="container" >
            <form>
                <input type="text" value={result} />
                <div>
                <button onClick={clear} id="highlight" name="clear">CE</button>
                <button onClick={backSpace} id="highlight" name="backspace">C</button>
                <button onClick={handleClick} id="highlight" name="%">%</button>
                <button onClick={handleClick} id="highlight" name="/">&divide;</button>
                </div><div>
                <button onClick={handleClick} name="7">7</button>
                <button onClick={handleClick} name="8">8</button>
                <button onClick={handleClick} name="9">9</button>
                <button onClick={handleClick} id="highlight" name="*">&times;</button>
                </div><div>
                <button onClick={handleClick} name="4">4</button>
                <button onClick={handleClick} name="5">5</button>
                <button onClick={handleClick}name="6">6</button>
                <button onClick={handleClick} id="highlight" name="-">&ndash;</button>
                </div><div>
                <button onClick={handleClick} name="1">1</button>
                <button onClick={handleClick} name="2">2</button>
                <button onClick={handleClick} name="3">3</button>
                <button onClick={handleClick} id="highlight" name="+">+</button>
                </div><div>
                <button onClick={handleClick} className="equal" name="0">0</button>
                <button onClick={handleClick}  name=".">.</button>
                <button onClick={calculate}  id="highlight">=</button>
                </div>
            </form>
        </div>
     );
}
 
export default Calculator;