import React from 'react';
import {useContext} from 'react';
import {Store} from '../../../store';

const NavShopItem = () => {
    const [data, setData] = useContext(Store);

    return ( 
        <div className="icons shop_image" key={data.cantidad}>                            
            <span className="shop_cantidad d-flex justify-content-center pt-2">{data.cantidad}</span>
        </div>  
     );
}
 
export default NavShopItem;