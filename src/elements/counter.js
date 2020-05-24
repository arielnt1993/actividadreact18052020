import React , {useState} from 'react';
import "semantic-ui-css/semantic.min.css"



const Counter = (text) =>{
    const [counter,setCounter]= useState(0);
    const addCounter = () => setCounter(counter+5);
    const subCounter = () => setCounter(counter-5);
    /* lei mal y pense que era de uno en uno hasta 5....
    if (counter >= 6){
        alert('no podes is mas alla de 5')
        setCounter(counter-1);
    } else if (counter <= -6){
        alert('no podes ir mas alla de -5');
        setCounter(counter+1);}*/



    return (<div id="btnCounter">  
                <button className="ui button" onClick={subCounter} >restar</button>
                <button className="ui button" onClick={addCounter} >sumar</button>
                <p id="contador">{counter}</p>
            </div>
    );
}

export default Counter; 