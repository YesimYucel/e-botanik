import { Col, Row, Container } from 'react-bootstrap';
import image1 from './img/botanical1.jpg';


export default function Footer() {



  return (
    <Container className='mt-5'>
      <div className='bg-dark text-white text-center p-3' >
        © 2023 Copyright:
        <a className='text-white' href='/'>
          E-Botanik
        </a>
      </div>

    </Container>

  );
}
