import React from 'react'

const MenuCollection = (props) => {
    return (
        <>
       <div className="w-32 h-32 md:w-48 md:h-48 flex flex-col">
       <div className="w-full h-full overflow-hidden rounded-lg">
            <img src={props.image}
            alt="menu"
            className="w-full h-full transform transistion duration-500 hover:scale-110 rounded-lg"/>
        </div>
        <strong>{props.menutitle}</strong>
        <p>{props.pages}</p>
       </div>
        </>
    )
};

export default MenuCollection;
