const Cart = ({ item: { id, title, image, price, count }, removeFromCart }) => {
    price = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumSignificantDigits: 3,
    }).format(count * price);
    return (
        <div className="cart-item">
            <div className="product-image">
                <img src={image} alt="" />
            </div>
            <div className="product-meta">
                <h2> {title} </h2>
                <p> Qunatity: {count}</p>
                <p> Price: {price}</p>
                <button className="remove-cart-item" onClick={() => {removeFromCart(id)}} >Remove</button>
            </div>
        </div>
    );
};

export default Cart;
