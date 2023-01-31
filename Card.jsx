import React from 'react';

function Card({iconNum,iconShown,isThere,iconUrl,selected,select,handleTwoSelect}) {
    function handleClick(){
        if(selected){
            handleTwoSelect(iconNum)
        }else{
            select(iconNum)
        }
    }
    return (
        <div className='card' onClick={handleClick}>
            {iconShown && <img className="iconShown" src={iconUrl}/>}
            {!iconShown && <img className="iconHidden" src={"https://www.pngkey.com/png/full/349-3492792_card-back.png"}/>}
        </div>

    );
}

export default Card