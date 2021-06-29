import React from 'react';
import {GiCheckMark} from 'react-icons/gi'

import '../../assets/css/trading-book.css'



const ComplianceR = (props) => {
  const handleClickRead = (e) => {
    // console.log(props.path.slice("./"));
    console.log(props.notesVal);
    if (props.path != "fileName") window.open(props.path);
    else alert("No file");
    console.log(props.path);
  }
  return (


    <tr>
      <td width="58%"><input onChange={props.spareChange} name={props.name1} onChange={props.change}  width="100%" type= "text" class="compliance-td-fonts min_heightt marign_bt3 padInput"/></td>
      <td width="35%">
        <select  value={props.status}
            // id="1"
            name={props.name}
            onChange={props.Change} class="compliance-td-fonts yellobg text-center min_heightt marign_bt3 width_100">
          <option>complete</option>
          <option>pending</option>
        </select>
      </td>
       
   
    </tr>

  );
}

export default ComplianceR;
