import React from 'react';
import '../../assets/css/trading-book.css'
import {GiCheckMark} from 'react-icons/gi'


const ComplianceR1 = (props) => {
  const handleClickRead = (e) => {
    // console.log(props.path.slice("./"));
    console.log(props.notesVal);
    if (props.path != "fileName") window.open(props.path);
    else alert("No file");
    console.log(props.path);
    
  };
    return (
      <React.Fragment  >
      <tr    >
      <td width="5%">&nbsp;</td>
      <td width="2%">
                            <label class="checkbox-workbook text-center zero-padding min_heightt" style={{}}>
            <input    type="checkbox" onChange={props.check1}  checked={props.checked} name={props.checkName}/>
            {props.checked===true?<GiCheckMark size={24}/>:""}
          </label>

         </td>
      <td width="5%">&nbsp;</td>
      <td width="50%"><table width="100%" cellspacing="0">
          <tbody>
            <tr>
            <td width="30%">
                            <label class="checkbox-workbook text-center zero-padding min_heightt marign_bt" style={{}}>
                    <input type="checkbox"  checked={props.checked2} onChange={props.check1}   name={props.checkName2}/>
                    {props.checked2===true?<GiCheckMark  size={24}/>:""}
                   </label></td>
              <td width="5%">&nbsp;</td>
              <td width="30%">
                            <label class="checkbox-workbook text-center zero-padding min_heightt marign_bt" style={{}}>
                              <input type="file" class="display_None" name={props.fc} value={props.file} onChange={props.FileUpload}/>
                              {props.path === "fileName" ? "" : <GiCheckMark  size={24}/>}
                            </label>
                          </td>
              <td width="5%">&nbsp;</td>
              <td width="30%"><div style={{cursor:'pointer'}} onClick={(e) => {
            handleClickRead(e, props.path);
          }} class="compliance-td-fonts yellobg text-center min_heightt marign_bt"><img src="/images/card-img8.png"/></div></td>
            </tr>
          </tbody> 
        </table></td>
      <td width="5%">&nbsp;</td>
      <td width="15%"><div class="compliance-td-fonts yellobg text-center min_heightt marign_bt"><img src="/images/card-img9.png"/></div></td>
      <td width="5%">&nbsp;</td>
    </tr>
    </React.Fragment>
    );
}

export default ComplianceR1;
