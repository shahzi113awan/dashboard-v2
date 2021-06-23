import React from 'react';
import '../../assets/css/trading-book.css'
import {GiCheckMark} from 'react-icons/gi'



const ComplianceR1 = (props) => {
    return (
      <React.Fragment  >
      <tr    >
      <td width="5%">&nbsp;</td>
       
      <td width="5%">&nbsp;</td>
      <td width="50%"><table width="100%" cellspacing="0">
          <tbody>
            <tr>
               
            <td width="2%">
                            <label class="checkbox-workbook text-center zero-padding min_heightt" style={{}}>
            <input    type="checkbox" onChange={props.check1}  checked={props.checked} name={props.checkName}/>
            {props.checked===true?<GiCheckMark size={24}/>:""}
          </label>

         </td>
              <td width="5%">&nbsp;</td>
             
            </tr>
          </tbody> 
        </table></td>
      <td width="5%">&nbsp;</td>
      <td width="5%">&nbsp;</td>
    </tr>
    </React.Fragment>
    );
}

export default ComplianceR1;
