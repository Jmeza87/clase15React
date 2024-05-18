import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';
import Carousel from 'react-bootstrap/Carousel';

const Carrusel = () => {
  return (
    <Carousel>
    <Carousel.Item>
    <img src={banner1} alt="" />
    <Carousel.Caption>
        <h3 className='color-text'>Godzilla y Kong: El nuevo imperio</h3>
        <p className='color-text'>"Una aventura cinematográfica completamente nueva, que enfrentará al todopoderoso Kong y al temible Godzilla contra una colosal."</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src={banner2} alt="" />
    <Carousel.Caption>
        <h3 className='color-text'>Kung Fu Panda 4</h3>
        <p className='color-text'>"Po se prepara para ser el líder espiritual del Valle de la Paz, buscando un sucesor como Guerrero Dragón.".</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src={banner3} alt="" />
    <Carousel.Caption>
        <h3 className='color-text'>Dune Parte dos</h3>
        <p className='color-text'>"Sigue el viaje mítico de Paul Atreides mientras se une a Chani y los Fremen en una guerra de venganza contra los conspiradores que destruyeron a su familia."
        </p>
    </Carousel.Caption>
    </Carousel.Item>
</Carousel>
  )
}

export default Carrusel