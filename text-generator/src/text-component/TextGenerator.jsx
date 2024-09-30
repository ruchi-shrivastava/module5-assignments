 import { useState } from 'react'
 import Data from './Data'
 import style from './TextGenerator.module.css'

const TextGenerator = () =>{
    const[count,setCount] = useState(0);
    const[text,setText] = useState([]);

    const handleSubmit=(e)=>{
       e.preventDefault()

       let amount = parseInt(count);
       if(count <= 0){
        amount = 1;
       }
       if(count > 11){
           amount = 11;
       }
       setText(Data.slice(0,amount))
    }
    return(
        <div className={style.container}>
        <h2 className={style.h2Text}>TIRED OF BOARING LOREM IPSUM?</h2>
        <form onSubmit={handleSubmit}>
        <div className={style.inputText}>
            <label  className={style.text} for="number">Paragraphs:</label>
            <input className={style.inputBox} onChange={(e)=>{
                setCount(e.target.value)
            }} type="number" name="amount" id="amount" value={count}></input>
            <button className={style.btn}>GENERATE</button>
           
        </div>
        </form>
         <article className={style.articleText} >
            {
                text.map((item,index)=>{
                    return <p key={index}>{item}</p>
                })
            }
           
         </article>
         {/* <h3>{count}</h3> */}
        </div>
    )
}
export default TextGenerator