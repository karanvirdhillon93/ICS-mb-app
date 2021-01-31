const MsgItem=({id,Name,msgText})=>(
  <tr>
    <td>{id+1}</td>
    <td>{Name}</td>
    <td>{msgText}</td>
  </tr>
);

export default MsgItem;