import Head from 'next/head'
import Header from '../components/Header.js';
import MsgItem from '../components/MsgItem.js';
import MsgBoard from '../components/MsgBoard.js';
import Footer from '../components/Footer.js';
import { Container, Row, Col } from 'react-bootstrap';


export default function Home() {
  return (
    <Row>
    <Col>
      <Container>
        <Header />
        <MsgBoard />
        <Footer/>
      </Container>
    </Col>
  </Row>
  )
}
