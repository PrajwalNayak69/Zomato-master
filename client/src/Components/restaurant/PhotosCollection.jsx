import React from 'react';


const MenuCollection = (props) => {
    
    return (
        <>
       <div className="w-32 h-32 md:w-48 md:h-48 flex flex-col" onClick={props.openViewer}>
       <div className="w-full h-full overflow-hidden rounded-lg">
            <img src={props.image}
            alt="menu"
            className="w-full h-full transform transistion duration-500 hover:scale-110 rounded-lg"/>
        </div>

       </div>
        </>
    )
};

export default MenuCollection;
