import landingPage from "../../../assets/landingPage.avif";
import style from './Section1.module.css';
// import style from "../../../Components/Main/Section1/Section1.module.css";

import Section2 from "../Section2/section2";

const Section1 = () => {
  return (
    <>
     <div
        className={style.landingPage}
        style={{ backgroundImage: `url(${landingPage})` }}
      ></div>
        
          <div className={style.text}>
            <h1 className={style.h1Black}>Let us find your</h1>
            <h1 className={style.h1Red}>Forever Food.</h1>
            <p className={style.section1pText}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>
          </div>

          <div className={style.landingBtns}>
            <button className={style.btn1}>Search Now</button>
            <button className={style.btn2}>Know more</button>
          </div>
       
       
    
      {/* <Section2 /> */}
    </>
   
  );
};
export default Section1;
