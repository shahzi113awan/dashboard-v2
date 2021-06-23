import React from 'react';
import '../../assets/css/trading-book.css'



const ComplianceR = (props) => {
  return (


    
    <div>




    
   <div className="row" >
      <div className="col-4 border">
        <input
     style={{position:"relative"}}
          type="date"
          name={props.nameD}
          value={props.valueD}
          onChange={props.dateChange}
          class="acri-sec no_bordr"
        />
     </div>
      <div className="col-8 border"> 
        <input
          type="text"
          name={props.name}
          value={props.value}
          onChange={props.textChangeHandle}
          class="acri-sec no_bordr"
        />
        </div>
     
      
      </div>
      <h1>{props.length}</h1>
      {/* <button  className="btn btn-primary ml-3 mt-3" onClick={props.delete }>Delete</button> */}
      </div>


  );
}

export default ComplianceR;
