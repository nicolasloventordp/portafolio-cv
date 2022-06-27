import Carousel from 'react-bootstrap/Carousel'
import photoCv from '../../assets/images/foto-cv.png'
import fondo from '../../assets/images/fondo.jpg'
import "./style.css"

export default function Portafolio() {
    return (
        <div id="portafolio" className="portafolio">
            <div className="portafolio-box">
           <Carousel>
            <Carousel.Item>
                <img
                    src={photoCv}
                    alt="foto cv"
                />
                <Carousel.Caption>
                <h3>Sitio web tipo portafolio-cv</h3>
                <p>Diseñado en figma y desarrollado con React</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={fondo}
                    alt="foto cv"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            </div>
        </div>
    );
}