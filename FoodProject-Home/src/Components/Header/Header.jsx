import logo from '../../assets/logo.svg';
import style from '../../Components/Header/header.module.css'
const Header = () => {
  return (
    <>
      <div className={style.header}>
        <div className={style.logo}>
          <img className={style.logoImg} src={logo} alt="Logo" />
          <h2>GeekFoods</h2>
        </div>

        <ul className={style.list}>
          <li className={style.home}>Home</li>
          <li>Quote</li>
          <li>Restaurant</li>
          <li>Foods</li>
          <li>Contact</li>
        </ul>
       
        <button className= {style.headerBtn}>Get started</button>
       
       
      </div>
      
    </>
  );
};
export default Header;