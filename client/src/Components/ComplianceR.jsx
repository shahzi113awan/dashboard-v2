import React from 'react';
import '../assets/css/trading-book.css'


const ComplianceR = (props) => {
    return (
        
            
        <tr>
        <td width="58%"><div class="compliance-td-fonts min_heightt marign_bt3">{props.name}</div></td>
        <td width="35%"><div class="compliance-td-fonts yellobg text-center min_heightt marign_bt3"> {props.status}</div></td>
      </tr>
      
    );
}

export default ComplianceR;
