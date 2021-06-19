import React from 'react';
import '../assets/css/trading-book.css'


const ComplianceR1 = (props) => {
    return (
      <React.Fragment  >
      <tr    >
      <td width="5%">&nbsp;</td>
       
      <td width="5%">&nbsp;</td>
      <td width="50%"><table width="100%" cellspacing="0">
          <tbody>
            <tr>
               
              <td width="5%">&nbsp;</td>
              <td width="30%"><div class="checkbox-workbook text-center zero-padding min_heightt marign_bt">
                  <div class="checkbox">
                    <input type="checkbox" value="yes" id={props.id3} name="merchant-checkbox"/>
                    <label for={props.id3}></label>
                  </div>
                </div></td>
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
