import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function GridExample() {
  return (
    <div style={{padding: 120}}>
      <Row xs={1} md={3} className="g-4" >
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png" />
              <Card.Body>
                <Card.Title>Nome Produto</Card.Title>
                <Card.Text>R$: 100,00</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default GridExample;