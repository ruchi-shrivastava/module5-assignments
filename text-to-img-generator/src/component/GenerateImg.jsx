import axios from "axios";
import { useState } from "react";
import style from "./GenerateImg.module.css";

const GenerateImg = () => {
 const[text,setText] = useState("");
  const[img,setImg] = useState([]);
 
  const accessKey = 'QmJuLZvBZTB-WcAjcNDtzZHB1Xdo3dy62RdMflXAUHw';

 const handleSearch = async() =>{
  if(text.trim()){
try {


  const response = await axios.get(
    `https://api.unsplash.com/search/photos`,
    {
        params:{
            query: text,
            client_id: accessKey,
            per_page: 12, // Request 20 images
        },
    });
  console.log( response);
  setImg(response.data.results);
  setText(''); //clear the input after search

 }catch(error){
  console.log("Error fetching image:",error);
 }
}
};


  return (
    <div className={style.container}>
      <h2 className={style.heading}>Image Generation App</h2>
      <div className={style.textBox}>
        <input onChange={(e)=>{
         setText(e.target.value)
        }}  type="text" id="text" value={text} placeholder="Enter text" />
        <button onClick={handleSearch}>Generate</button>
      </div>

      <div style={{ display: 'flex',justifyContent:'center', flexWrap: 'wrap', margin: '20px'  }}>
        {img.map((image)=>(
            <img key={image.id}
            src={image.urls.small}
            alt= {image.description}
            style = {{width:'150px',height: '150px', objectFit: 'cover', margin: '10px'}} />
    ))}
      </div>
     
    </div>
  );
};
export default GenerateImg;
