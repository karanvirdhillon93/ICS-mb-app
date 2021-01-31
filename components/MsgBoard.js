import Table from 'react-bootstrap/Table';
import MsgItem from '../components/MsgItem.js';

const MsgBoard=()=>{
  const messages=[
    {id:0, Name:"Bill",msgText:"Hi All!"},
    {id:1, Name:"Ann",msgText:"ICS 211 is fun!"},
    {id:2, Name:"Johnny",msgText:"I'm stranded !"},
    {id:3, Name:"Barb",msgText:"Hi"},
    {id:4, Name:"Frank",msgText:"Who's tired?"},
    {id:5, Name:"Sarah",msgText:"I heart React"}
  ]
  return(
  <Table striped bordered hover> 
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Message</th>
      </tr>
    </thead>
      <tbody>   
        {messages.map(msg =><MsgItem key={msg.id}{...msg} />)}
      </tbody>
    </Table>
);
}

export default MsgBoard;