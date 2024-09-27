import sectionImg  from '../../../assets/sectionImg.avif'
import style from '../../../Components/Main/Section2/Section2.module.css'

const Section2 = () => {
    return(
        <div className={style.section2Container}>
        <div>
            <img className={style.section2Img} src={sectionImg} />
        </div>
       
            {/* <div className={style.section2Text}> */}
                <div className={style.rightText}>
                <h2 className={style.h1Text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h2>
                <p className={style.pText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
                <button className={style.btn}>Get in Touch</button>
                </div>
               
            </div>
       
        // </div>
    )
}
export default Section2