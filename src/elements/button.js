import React , {useState} from 'react';
import "semantic-ui-css/semantic.min.css"



const Counter = (text) =>{
    const [counter,setCounter]= useState(0);
    const updateCounter = () => text.name === 'sumar' ? setCounter(counter+1) : setCounter(counter-1);
    
    return (<div>
                {counter}
                <button className="ui button" onClick={updateCounter} >{text.name}</button>
            </div>
    );
}

export default Counter;