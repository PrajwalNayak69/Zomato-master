import React, {useState} from 'react';

//compone
import MenuCollection from '../../Components/restaurant/MenuCollection';

const Menu = () => {
    const [menus, setMenus] = useState([]);
    return (
        <>
            <div className="flex flex-wrap gap-3">
                {menus.map((menu) => (
                    <MenuCollection {...menu} />
                ))
                }
            </div>
        </>
    )
}

export default Menu
