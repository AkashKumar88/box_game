import React, { useState, useEffect } from 'react';
import Direction from './Direction';

function Game(props){
    const [boxLimit, setBoxLimit] = useState([]);

    useEffect(()=> {
        const arr =[];
        for(let i=1; i<= 70; i++){
            arr[i]=i;
        }
        setBoxLimit(arr);
    },[])

    return (
        <div>
            <div className="ui_grid">
                {boxLimit.map(box => <div className="box" id={box} key ={box}>
                            {props.goal === box 
                                ? 
                                <div className='circular green'><div>Goal</div> </div> 
                                : 
                                <div className={props.position === box ? `circular red` : `cell${box}`}>
                                    {props.position === box ? `Player` : ''}
                                </div>
                            }    
                        </div>)}
            </div>
            <Direction onButtonClick={props.onButtonClick} position={props.position}/>
        </div>
        
    );
}


export default Game; 