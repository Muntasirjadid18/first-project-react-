import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default function AppContact(){
    return(
       <section id='contact' className='block contact-block'>
        <Container fluid>
            <div className='title-holder'>
                <h2>Contact us</h2>
            <div className='subtitle'>get connected with us</div>
            </div>
            <Form className='contact-form'>
      <Row>
        <Col sm={4}>
          <Form.Control type="text" placeholder="Enter your full name" required/>
        </Col>
        <Col sm={4}>
          <Form.Control type="email" placeholder="Enter your email address" required/>
        </Col>
         <Col sm={4}>
          <Form.Control type="tel" placeholder="Enter your contact number" required/>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
        <Form.Control as="textarea" placeholder="Enter your message" required/>
        </Col>
      </Row>
        <div className='btn-holder'>
        <Button type='submit'>Submit</Button>            
                </div>
    </Form>
        </Container>
        <div className='google-map'>
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29557.641511577396!2d92.195071!3d22.1752914!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sbd!4v1728981077205!5m2!1sen!2sbd"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <Container fluid>
            <div className='contact-info'>
            <ul>
            <li>
              <i className="fas fa-envelope"></i>
              hello@domain.com
            </li>
            <li>
              <i className="fas fa-phone"></i>
              000-000-0000
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              London, United Kingdom
            </li>
          </ul>
            </div>
        </Container>
       </section>
    )
}