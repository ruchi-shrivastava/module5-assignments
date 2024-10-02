import style from '../component/Cart.module.css'
const Footer = ({totalAmount}) => {
    return(
      <>
      <div className={style.footer}>
        <h3>Total</h3>
        <p>Amount:${totalAmount.toFixed(2)}</p>
      </div>
      <button>Clear Cart</button>
      </>
    )
}
export default Footer