import React from 'react';
import '../assets/css/trading-book.css'


const ComplianceR = (props) => {
  return (


    <tr>
      <td width="58%"><div class="compliance-td-fonts min_heightt marign_bt3">{props.name1}</div></td>
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
