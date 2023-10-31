import Carousel from 'react-bootstrap/Carousel';
import './Carousels.css';

function Carousels() {
  return (
    <Carousel fade className="carousels">
      <Carousel.Item interval={1800}>
        <img className="d-block w-100" src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png" alt="Image One"/>
      </Carousel.Item>

      <Carousel.Item interval={1800}>
        <img className="d-block w-100" src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png" alt="Image Two"/>
      </Carousel.Item>

      <Carousel.Item interval={1800}>
        <img className="d-block w-100" src="https://as2.ftcdn.net/v2/jpg/03/85/04/25/1000_F_385042599_DaGziXAON3pqdolBx2MxJQVARLFhqemt.jpg" alt="Image Three"/>
      </Carousel.Item>

      <Carousel.Item interval={1800}>
        <img className="d-block w-100" src="https://www.artmajeur.com/medias/standard/l/o/louis-treserras/artwork/8817088_ecole-de-danse-300x115-2-2011.jpg" alt="Image four"/>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;