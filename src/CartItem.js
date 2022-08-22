import React from 'react';

const CartItem = (props) => {
  
    const { price, title, qty} = props.product;
    const {
      product,
      onIncreaseQuantity,
      onDecreaseQuantity,
      onDeleteProduct}=props;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} src={product.img} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>{price}</div>
          <div style={ { color: '#777' } }>{qty}</div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img 
               alt="increse" 
               className='action-icons' 
               src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png"
              // onClick={this.increaseQuantity.bind(this)}
              //  onClick={this.increaseQuantity}
              onClick={() => onIncreaseQuantity(product)}
            />
            <img 
                alt="decrese" 
                className='action-icons' 
                src='https://cdn-icons-png.flaticon.com/512/1828/1828906.png'
                onClick={() => onDecreaseQuantity(product)}
            />
            <img 
               alt="delete" 
               className='action-icons' 
               src='https://cdn-icons-png.flaticon.com/512/3096/3096673.png'
              onClick={()=> onDeleteProduct(product.id)}
            />
          </div>
        </div>
      </div>
    );
  }


const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;