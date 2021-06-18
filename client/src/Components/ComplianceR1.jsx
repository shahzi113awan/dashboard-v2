import React from 'react';
import '../assets/css/trading-book.css'


const ComplianceR1 = (props) => {
    return (
      <React.Fragment  >
      <tr    >
      <td width="5%">&nbsp;</td>
      <td width="15%"><div class="checkbox-workbook text-center zero-padding min_heightt marign_bt">
          <div class="checkbox">
            <input type="checkbox" value="yes" id="check28" name="merchant-checkbox"/>
            <label for="check28"></label>
          </div>
        </div></td>
      <td width="5%">&nbsp;</td>
      <td width="50%"><table width="100%" cellspacing="0">
          <tbody>
            <tr>
              <td width="30%"><div class="checkbox-workbook text-center zero-padding min_heightt marign_bt">
                  <div class="checkbox">
                    <input type="checkbox" value="yes" id="check29" name="merchant-checkbox"/>
                    <label for="check29"></label>
                  </div>
                </div></td>
              <td width="5%">&nbsp;</td>
              <td width="30%"><div class="checkbox-workbook text-center zero-padding min_heightt marign_bt">
                  <div class="checkbox">
                    <input type="checkbox" value="yes" id="check30" name="merchant-checkbox"/>
                    <label for="check30	"></label>
                  </div>
                </div></td>
              <td width="5%">&nbsp;</td>
              <td width="30%"><div class="compliance-td-fonts yellobg text-center min_heightt marign_bt"><img src="images/card-img8.png"/></div></td>
            </tr>
          </tbody>
        </table></td>
      <td width="5%">&nbsp;</td>
      <td width="15%"><div class="compliance-td-fonts yellobg text-center min_heightt marign_bt"><img src="images/card-img9.png"/></div></td>
      <td width="5%">&nbsp;</td>
    </tr>
    </React.Fragment>
    );
}

export default ComplianceR1;
