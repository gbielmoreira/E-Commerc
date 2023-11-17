import React from 'react';

import Menu from '../../Componets/Navbar/Navbar'
import Footer from '../../Componets/Footer/Footer';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';

function Home(){
    return (
        <React.StrictMode>
            <Menu/>

            <Carousel fade style={{display: 'block'}}>
                <Carousel.Item interval={1800}>
                    <img className="d-block w-100" src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png" alt="Image One"/>
                </Carousel.Item>

                <Carousel.Item interval={1800}>
                    <img className="d-block w-100" src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png" alt="Image Two"/>
                </Carousel.Item>

                <Carousel.Item interval={1800}>
                    <img className="d-block w-100" src="https://as2.ftcdn.net/v2/jpg/03/85/04/25/1000_F_385042599_DaGziXAON3pqdolBx2MxJQVARLFhqemt.jpg" alt="Image Three"/>
                </Carousel.Item>
            </Carousel>

            <h1 style={{textAlign:'center',marginTop:40}}>Alguns de nossos produtos</h1>

            <div style={{padding:100}} id='produtos'>
                <Row xs={1} md={4} className='g-5'>
                    {Array.from({ length: 8 }).map((_, idx) => (
                    <Col key={idx}>
                        <a href="/produto" style={{textDecoration:'none'}}>
                        <Card className='card' style={{borderColor: '#FFFFFF'}}>
                            <Card.Img className="img" src="https://www.myideability.com/wp-content/uploads/2016/07/Logo-PNG-150x150px.png" style={{padding: 10,}}/>
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
            <Footer/>
        </React.StrictMode>
    )
}
export default Home;