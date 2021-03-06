import Table from 'react-bootstrap/Table';
import MsgItem from '../components/MsgItem.js';
import NewMessageForm from '../components/NewMessageForm.js'
//import { useState } from 'react';
import ky from 'ky-universal';
import React from 'react';
import jwt_decode from 'jwt-decode';
import { useState, useRef } from 'react';
//Importing LoginForm
import LoginForm from '/home/student/ics221-mb-app/components/LoginForm.js'

const MsgBoard=({jsonData})=>{
  const usernameRef = useRef(null);
  //Boolean State Hook to keep track if the User is logged in or not.
  const [isLogged, setIsLogged] = React.useState(false);
  let [messages,setMessages]=useState(jsonData) 

  //In AJAX POST Request to your API:
  const logInUser = async (values) => {
    console.log(values);
    // change the state of the boolean state hook (call the updater function)
    setIsLogged(true);
    try{
      const isLog = await ky.post(`${process.env.NEXT_PUBLIC_HOST}/api/login`,
      {
        json: values
       }).json();
       console.log(values);
       sessionStorage.setItem('token', isLog.token);
       const decodedTokenPayload = jwt_decode(isLog.token);
       usernameRef.current = decodedTokenPayload.username;
    }catch(e){
      console.log(e);
    }
    
   }  

  const addNewMessage = async (values) => {
    try{
      values.name = usernameRef.current;
      const message = await ky.post(`${process.env.NEXT_PUBLIC_HOST}/api/messages`,
      {
       json: values,
       headers: {
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }
       
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
  /*
If the User is not Authenticated, render LoginForm. If the User is Authenticated, render NewMessageForm. You've done this before in 211.
You should know how to do this. Refer back to the ICS 211 Course Notes if you don't remember. Use
a Boolean State Hook to keep track if the User is logged in or not.*/
    return(
      <>
     {isLogged? <><NewMessageForm addNewMessage={addNewMessage} />
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
        </Table></>: <LoginForm logInUser={logInUser}></LoginForm>}
      </>
    );
}


export default MsgBoard;