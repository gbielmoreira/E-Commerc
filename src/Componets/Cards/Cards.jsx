import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Cards.css'

function Grids() {
  return (
    <div className="cards">
      <Row xs={1} md={4} className='g-5'>
        {Array.from({ length: 8 }).map((_, idx) => (
          <Col key={idx}>
            <a href="/produto">
              <Card className='card'>
                <Card.Img className="img" src="https://www.myideability.com/wp-content/uploads/2016/07/Logo-PNG-150x150px.png" />
                <Card.Body>
                  <Card.Title>Nome Produto</Card.Title>
                  <Card.Text>R$: 100,00</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Grids;