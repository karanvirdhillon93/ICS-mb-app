import Table from 'react-bootstrap/Table';
import MsgItem from '../components/MsgItem.js';
import NewMessageForm from '../components/NewMessageForm.js'
import { useState } from 'react';

const MsgBoard=()=>{
 /* const messages=[
    {id:0, Name:"Bill",msgText:"Hi All!"},
    {id:1, Name:"Ann",msgText:"ICS 211 is fun!"},
    {id:2, Name:"Johnny",msgText:"I'm stranded !"},
    {id:3, Name:"Barb",msgText:"Hi"},
    {id:4, Name:"Frank",msgText:"Who's tired?"},
    {id:5, Name:"Sarah",msgText:"I heart React"}
  ]
*/
  let [messages,setMessages]=useState([
    {id:0, name:"Bill",msgText:"Hi All!"},
    {id:1, name:"Ann",msgText:"ICS 211 is fun!"},
    {id:2, name:"Johnny",msgText:"I'm stranded !"},
    {id:3, name:"Barb",msgText:"Hi"},
    {id:4, name:"Frank",msgText:"Who's tired?"},
    {id:5, name:"Sarah",msgText:"I heart React"}
  ])
  // handler for submission of Form in
  // NewMessageForm Component
 

  const addNewMessage = (values) => {
    console.log(values);
    values.id = messages.length;
    //messages.unshift(values);
    console.log(messages);
    setMessages( [values, ...messages] );
    console.log(messages);
  }
    return(
      <>
      <NewMessageForm addNewMessage={addNewMessage} />
        <Table striped bordered hover> 
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>   
          {messages.map( (message, index) =>
 <MsgItem key={ message.id } {...message} msgNum={index+1} />
)}
          </tbody>
        </Table>
      </>
    );
}

export default MsgBoard;