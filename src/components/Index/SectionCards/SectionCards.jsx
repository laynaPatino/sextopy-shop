import React, { Fragment, useState } from 'react';
import './SectionCards.scss';
import Contador from '../../utils/Contador';
import {Link} from 'react-router-dom';


const SectionCards = ({producto, productos, carritoCompra, setCarritoCompra}) => {

    const {id, url, nombre, descripcion, precio, stock} = producto;

    const [contador, setContador]= useState(1);

    function agregarCarrito() {
        alert(`Has agregado ${contador} items al carrito`);
    }

    return (

        <Fragment>
            
           <div className="col-12 col-lg-4 mb-4">

            <div className="card-producto text-center animate__animated animate__zoomIn">
              
                <img src={url} alt={nombre} className="img-fluid pt-3"/>
                <div className="info-producto text-center p-4 Bellota-text">
                    <Link to="/detail/:id" className="links">
                        <h3 className="text-center mb-3 Bellota-text-bold">{nombre}</h3>
                    </Link>
                    <p>{descripcion}</p>
                    <p className="precio font-weight-bold">$ {precio*contador}</p>
                    <Contador
                    contador={contador}
                    setContador={setContador}
                    stock={stock}
                    id={id}
                    />
                    <a href="#index" className="btn color-primario text-white btn-lg text-uppercase mt-3" onClick={ () => agregarCarrito(id)}>Agregar al Carrito</a>
                </div>
            </div>
            </div>  
   
        </Fragment>
      );
}
 
export default SectionCards;