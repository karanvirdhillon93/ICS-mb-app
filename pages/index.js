import Head from 'next/head'
import Header from '../components/Header.js';
import MsgItem from '../components/MsgItem.js';
import MsgBoard from '../components/MsgBoard.js';
import Footer from '../components/Footer.js';
import { Container, Row, Col } from 'react-bootstrap';
import ky from 'ky-universal';

//. You now need to pass jsonData into the Home Component as props. Use object destructuring
export async function getStaticProps() {
  let jsonData;

  try {
    jsonData = await ky(`${process.env.NEXT_PUBLIC_HOST}/api/messages`).json();
  } catch (err) {
    console.log('API Error: ' + err);
  }
  return {
    props: {
      jsonData
    }
  }
 }
 /*
  In the Home Component's return() statement, pass jsonData to the Component that you're rendering
that has your State Hook with all the messages. Again, use object destructuring.*/

export default function Home({jsonData}) {
  return (
    <Row>
    <Col>
      <Container>
        <Header />
        <MsgBoard jsonData={jsonData}/>
        <Footer/>
      </Container>
    </Col>
  </Row>
  )
}


