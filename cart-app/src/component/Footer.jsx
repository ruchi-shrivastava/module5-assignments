import style from '../component/Cart.module.css'
const Footer = (props) => {
    return(
      <>
      <div className={style.footer}>
        <h3>Total</h3>
        <p>Amount:${props.totalAmount.toFixed(2)}</p>
      </div>
     <button onClick={props.clearCart} style={{marginLeft:"40rem",marginBottom:"20px",background:"#567483",color:"white"}}>Clear Cart</button>
      </>
    )
}
export default Footer