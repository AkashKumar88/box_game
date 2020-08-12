import React from 'react';

function Direction(props) {

    const onLeftClick =() => {
        if(props.position > 1 && (props.position%10) !== 1){
            props.onButtonClick(props.position-1);
        }
        
    }
    const onRightClick =() => {
        if(props.position <70 && (props.position%10) !== 0 ){
            props.onButtonClick(props.position+1);
        }
        
    }
    const onUpClick =() => {
        if(props.position > 10){
            props.onButtonClick(props.position-10);
        }
        
    }
    const onDownlick =() => {
        if(props.position < 61){
            props.onButtonClick(props.position+10);
        }
    
    }    
 
    return (
        <div>
            <button className="button_left" onClick={onLeftClick}>Left</button>
            <button className="button_right" onClick={onRightClick}>Right</button>
            <button className="button_up" onClick={onUpClick}>Up</button>
            <button className="button_down" onClick={onDownlick}>Down</button>
        </div>
    );
}

export default Direction;