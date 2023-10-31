import Carousel from 'react-bootstrap/Carousel';
import './Carousels.css';

function DarkVariantExample() {
  return (
    <Carousel style={{ display: 'block', padding: 50 }}>
      <Carousel.Item>
        <img className="d-block w-100"
          src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
          alt="Image One"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100"
          src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
          alt="Image Two"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100"
          src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
          alt="Image Three"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100"
          src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
          alt="Image four"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;