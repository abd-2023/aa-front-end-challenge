const Product = ({ item: { id, title, image, price }, addToCart }) => {
    price = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumSignificantDigits: 3,
    }).format(price);

    return (
        <div className="single-product">
            <div className="product-image">
                <img src={image} alt=""/>
            </div>
            <div className="product-meta">
                <h2> {title} </h2>
                <p>{price}</p>
                <button className="add-to-cart" onClick={() => addToCart(id)}>Add to cart</button>
            </div>
        </div>
    );
};

export default Product;
