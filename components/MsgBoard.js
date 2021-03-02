import Table from 'react-bootstrap/Table';
import MsgItem from '../components/MsgItem.js';
import NewMessageForm from '../components/NewMessageForm.js'
import { useState } from 'react';
import ky from 'ky-universal';

const MsgBoard=({jsonData})=>{
  let [messages,setMessages]=useState(jsonData)
  //In AJAX POST Request to your API:
  const addNewMessage = async (values) => {
    try{
      const message = await ky.post('http://10.21.75.56:3004/api/messages',
      {
       json: values
      }).json();
      console.log(values);
      // values.id = messages.length;
      //messages.unshift(values);
      //Move your existing State Hook update function into the try clause after the POST Request
      console.log(messages);
      setMessages( [values, ...messages] );
      console.log(messages)
    }catch(e){
      console.log(e);
    };
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
 <MsgItem key={ index } {...message} msgNum={index+1} />
)}
          </tbody>
        </Table>
      </>
    );
}

export default MsgBoard;