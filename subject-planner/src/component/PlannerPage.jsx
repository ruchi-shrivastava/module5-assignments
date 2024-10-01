import style from './PlannerPage.module.css'
import { useState } from 'react'
import { useEffect } from 'react';

const PlannerPage = () => {
    const[subject,setSubject] = useState("");
    const[hours,setHours] = useState("");
 
    const[planner,setPlanner] = useState([])

    useEffect(()=>{
    //  1. check if the data is present in local Storage.apply
    //  2. if present use the data and render it on screen
    const plannerData = localStorage.getItem("plannerData");
    console.log(plannerData);
    if(plannerData){
        console.log("planner Data available");
        setPlanner(JSON.parse(plannerData));
    }

    },[])
    
    const btnHandleClick =(e)=>{
        e.preventDefault();
      console.log('button clicked');

      const obj = {
       subject : subject,
       hours : hours
      }
      const plannerArray = [...planner,obj]
      setPlanner(plannerArray);
      localStorage.setItem("plannerData",JSON.stringify(plannerArray));
      setSubject("");
      setHours("");
    };

    const handlePlusBtn = (index) =>{
        // console.log(index);
       const plannerCopy = [...planner];
       const updatedObj = {
        ...plannerCopy[index],
        hours:parseInt(planner[index].hours) + 1  //add 1 to existing hours key at perticular index
        }
        plannerCopy.splice(index,1,updatedObj);
        setPlanner(plannerCopy);
    }

    const handleMinusBtn = (index)=>{
        console.log("minusClicked");
        const plannerCopy = [...planner];
        plannerCopy.splice(index,1,{...planner[index],
            hours:parseInt(planner[index].hours) -1
        });
        setPlanner(plannerCopy);
    }

    return (
        <div className={style.container}>
        <h2 className={style.h2Text}>Geekster Education Planner</h2>
        <form className={style.forms}>
         <input className={style.subBox} onChange={(e)=>{
             setSubject(e.target.value)
         }} type="text" placeholder='Subject' value={subject} ></input>
         <input className={style.hourBox} onChange={(e)=>{
           setHours(e.target.value) 
         }} type="number" placeholder='Hours' value={hours}></input>
         <button className={style.handleClick} onClick={btnHandleClick}>Add</button>
        </form>
        {
            planner.map((data,index)=>{
                return <div className={style.displayText} key={`${index}`}>
                    {data.subject} - {data.hours} hours
                    <button className={style.plusBtn} onClick={()=>{handlePlusBtn(index)}}>+</button>
                    <button className={style.minusBtn} onClick={()=>{handleMinusBtn(index)}}>-</button>
                </div>
            })
        }
        </div>
    )
} 
export default PlannerPage