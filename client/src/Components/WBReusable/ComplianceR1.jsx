import React,{useState} from "react";
import "../../assets/css/trading-book.css";
import { GiCheckMark } from "react-icons/gi";
import { Link } from "react-router-dom";
import { firebase } from "../../Config";
import "firebase/storage"
import axios from "axios";
import { async } from "regenerator-runtime";

const ComplianceR1 = (props) => {
  const handleClickRead = (e) => {
    // console.log(props.path.slice("./"));
    console.log(props.notesVal);
    if (props.path != "fileName") window.open(props.path);
    else alert("No file");
    console.log(props.path);
  };
const download = async(imageSrc) => {
  // const image = await fetch(imageSrc)
  // const imageBlog = await image.blob()
  // const imageURL = URL.createObjectURL(imageBlog)
  
  // const link = document.createElement('a')
  // link.href = imageURL
  // link.download = imageURL
  // document.body.appendChild(link)
  // link.click()
  // document.body.removeChild(link)
  
  if(imageSrc!='fileName'){

  const name = imageSrc.split(RegExp('files%2F'))[1].split('?alt')[0];
console.log(name);
   await  axios({
        url:imageSrc,
        method:'GET',
         
        responseType: 'blob',
      
})
.then((response) => {
 
  
       const url = window.URL
       .createObjectURL(new Blob([response.data]));
              const link = document.createElement('a');
             
              link.href = url;
              link.setAttribute('download', name);
              document.body.appendChild(link);
              link.click();
})
}
else{
  alert("No File to Download")
}
}

  const [urlstate, seturl] = useState(null);
//   var storage = firebase.storage();
// var pathReference = storage.ref(props.path);
// var gsReference = storage.refFromURL(`gs://bucket/${props.path}`);
// var httpsReference = storage.refFromURL(`https://firebasestorage.googleapis.com/b/bucket/o/${props.path}`);  
// function downloadViaUrl(path) {
//   const storageRef = firebase.storage().ref();

  // [START storage_download_via_url]
//   storageRef.child(path).getDownloadURL()
//     .then((url) => {
//       // `url` is the download URL for 'images/stars.jpg'
    
//       // This can be downloaded directly:
//       var xhr = new XMLHttpRequest();
//       xhr.responseType = 'blob';
//       xhr.onload = (event) => {
//         var blob = xhr.response;
//       };
//       xhr.open('GET', url);
//       xhr.send();
//     seturl(url)
//       // Or inserted into an <img> element
//       var img = document.getElementById('myimg');
//       img.setAttribute('src', url);
//     })
//     .catch((error) => {
//       // Handle any errors
//     });
//   // [END storage_download_via_url]
// }

// console.log(urlstate);
  // const resetHandler = (props) => {};
  return (
    <React.Fragment>
      <tr>
        <td width="5%">&nbsp;</td>
        <td onClick={e=>{download(props.path)}}  width="2%">
          
            <label
              class="checkbox-workbook text-center zero-padding min_heightt"
              style={{}}
            >
              <input
                type="checkbox"
                onChange={props.check1}
                checked={props.checked}
                name={props.checkName}
              />
              {props.checked === true ? <GiCheckMark size={24} /> : ""}
            </label>
          
         
        </td>
        <td width="5%">&nbsp;</td>
        <td width="50%">
          <table width="100%" cellspacing="0">
            <tbody>
              <tr>
                <td width="30%">
                  <label
                    class="checkbox-workbook text-center zero-padding min_heightt marign_bt"
                    style={{}}
                  >
                    <input
                      type="checkbox"
                      checked={props.checked2}
                      onChange={props.check1}
                      name={props.checkName2}
                    />
                    {props.checked2 === true ? <GiCheckMark size={24} /> : ""}
                  </label>
                </td>
                <td width="5%">&nbsp;</td>
                <td width="30%">
                  <label
                    class="checkbox-workbook text-center zero-padding min_heightt marign_bt"
                    style={{}}
                  >
                    <input
                      type="file"
                      class="display_None"
                      name={props.fc}
                      value={props.file}
                      onChange={props.FileUpload}
                    />
                    {props.path === "fileName" ? "" : <GiCheckMark size={24} />}
                  </label>
                </td>
                <td width="5%">&nbsp;</td>
                <td width="30%">
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                      handleClickRead(e, props.path);
                    }}
                    class="compliance-td-fonts yellobg text-center min_heightt marign_bt"
                  >
                    <img src="/images/card-img8.png" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
        <td width="5%">&nbsp;</td>
        <td width="15%">
          <div
            onClick={props.resetHandler}
            class="compliance-td-fonts yellobg text-center min_heightt marign_bt"
          >
            <img src="/images/card-img9.png" />
          </div>
        </td>
        <td width="5%">&nbsp;</td>
      </tr>
    </React.Fragment>
  );
};

export default ComplianceR1;
