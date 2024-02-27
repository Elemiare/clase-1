// import React from 'react'
import Counter from './Counter';
import img from'./img/ball.jpg';
import './css/Counter.css';


function Main(){
    return(
        <div>
            <Counter datos={['Emiliano Arellano Guerra', '20965', '5A']} />
            <img src={img} alt="ball.jpg" class='img'/>
            
        </div>
    )
}

export default Main