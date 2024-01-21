import React from 'react'
import { Link } from "react-router-dom";
import Cafe3 from "../images/cafe.jpg";
import Cannoli3 from "../images/cannoli.jpg";
import Cereza3 from "../images/cereza.jpg";
import Cheesecake3 from "../images/cheescake.jpg";
import Chocolate3 from "../images/chocolate.jpg";
import Fruta3 from "../images/fruta.jpg";
import Macarron3 from "../images/macarron.jpg";
import Oreo3 from "../images/oreo.jpg";
import Pancake3 from "../images/pancake.jpg";
import Split3 from "../images/split.jpg";
import Tiramisu3 from "../images/tiramisu.jpg";
import Vainilla3 from "../images/vainilla.jpg";

const Navegacion = () => {
  return (
    <div className='container mt-3'>
        <Link to="/Cafe">
            <figure>
                <img className='tamaño-img' src={Cafe3} alt=''/>
                <figcaption>Cafe</figcaption>
            </figure>
        </Link>

        <Link to="/Cannoli">
            <figure>
                <img className='tamaño-img' src={Cannoli3} alt=''/>
                <figcaption>Cannoli</figcaption>
            </figure>
        </Link>

        <Link to="/Cereza">
            <figure>
                <img className='tamaño-img' src={Cereza3} alt=''/>
                <figcaption>Cereza</figcaption>
            </figure>
        </Link>

        <Link to="/Cheesecake">
            <figure>
                <img className='tamaño-img' src={Cheesecake3} alt=''/>
                <figcaption>Cheesecake</figcaption>
            </figure>
        </Link>

        <Link to="/Chocolate">
            <figure>
                <img src={Chocolate3} alt=''/>
                <figcaption>Chocolate</figcaption>
            </figure>
        </Link>

        <Link to="/Fruta">
            <figure>
                <img className='tamaño-img' src={Fruta3} alt=''/>
                <figcaption>Fruta</figcaption>
            </figure>
        </Link>

        <Link to="/Macarron">
            <figure>
                <img className='tamaño-img' src={Macarron3} alt=''/>
                <figcaption>Macarron</figcaption>
            </figure>
        </Link>

        <Link to="/Oreo">
            <figure>
                <img className='tamaño-img' src={Oreo3} alt=''/>
                <figcaption>Oreo</figcaption>
            </figure>
        </Link>

        <Link to="/Pancake">
            <figure>
                <img className='tamaño-img' src={Pancake3} alt=''/>
                <figcaption>Pancake</figcaption>
            </figure>
        </Link>

        <Link to="/Split">
            <figure>
                <img className='tamaño-img' src={Split3} alt=''/>
                <figcaption>Split</figcaption>
            </figure>
        </Link>

        <Link to="/Tiramisu">
            <figure>
                <img className='tamaño-img' src={Tiramisu3} alt=''/>
                <figcaption>Tiramisu</figcaption>
            </figure>
        </Link>

        <Link to="/Vainilla">
            <figure>
                <img className='tamaño-img' src={Vainilla3} alt=''/>
                <figcaption>Vainilla</figcaption>
            </figure>
        </Link>
    </div>
  )
}

export default Navegacion