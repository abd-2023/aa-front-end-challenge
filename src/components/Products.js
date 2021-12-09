import Product from "./Product";
import Cart from "./Cart";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// all products to be displayed

const Products = () => {
    // list of all products with respective brands
    var allProducts = [
        {
            id: 1,
            title: "Samsung Galaxy M21",
            brand: "Samsung",
            image: "https://m.media-amazon.com/images/I/811lrGbXwIL._AC_UL640_FMwebp_QL65_.jpg",
            price: 12999,
        },
        {
            id: 2,
            title: "Samsung Galaxy M12",
            brand: "Samsung",
            image: "https://m.media-amazon.com/images/I/71r69Y7BSeL._AC_UL640_FMwebp_QL65_.jpg",
            price: 11499,
        },
        {
            id: 3,
            title: "Samsung Galaxy M32",
            brand: "Samsung",
            image: "https://m.media-amazon.com/images/I/71F4jU7MRUS._AC_UL640_FMwebp_QL65_.jpg",
            price: 16999,
        },
        {
            id: 4,
            title: "Redmi 10 Prime",
            brand: "Redmi",
            image: "https://m.media-amazon.com/images/I/817clKAKcqL._AC_UL640_FMwebp_QL65_.jpg",
            price: 12499,
        },
        {
            id: 5,
            title: "Redmi 9 Activ",
            brand: "Redmi",
            image: "https://m.media-amazon.com/images/I/911TJ1CDbLL._AC_UL640_QL65_.jpg",
            price: 9499,
        },
        {
            id: 6,
            title: "Redmi 9A",
            brand: "Redmi",
            image: "https://m.media-amazon.com/images/I/71sxlhYhKWL._AC_UL640_FMwebp_QL65_.jpg",
            price: 7299,
        },
        {
            id: 7,
            title: "Nokia 105 Single SIM (Black)",
            brand: "Nokia",
            image: "https://m.media-amazon.com/images/I/31Z2ee9oYQL._AC_UL640_FMwebp_QL65_.jpg",
            price: 1249,
        },
        {
            id: 8,
            title: "NOKIA 105 Dual SIM (Black)",
            brand: "Nokia",
            image: "https://m.media-amazon.com/images/I/31epIjp9ToL._AC_UL640_FMwebp_QL65_.jpg",
            price: 1349,
        },
        {
            id: 9,
            title: "Nokia 105 Single SIM (Blue)",
            brand: "Nokia",
            image: "https://m.media-amazon.com/images/I/41euA6Oiq4L._AC_UL640_FMwebp_QL65_.jpg",
            price: 1249,
        },
    ];

    // using useState for cart to track it changes
    const [cart, setCart] = useState([]);

    // getting the brand matched from url
    let { pathname } = useLocation();

    // const finalProducts = useSt;
    const [finalProducts, setFinalProducts] = useState(allProducts);

    // handling event when add to cart button is clikced and adding product to cart
    function addToCart(productId) {
        console.log("productId", productId);

        // getting product object to be added in the cart
        var addProduct = allProducts.filter((item) => item.id === productId)[0];
        console.log("addProduct", addProduct);

        // checking if the product to be added in cart already exists using the given product id

        if (cart.length) {
            console.log("filled cart", cart);
            let productIndex = cart.findIndex(
                (cartItem) => cartItem.id === productId
            );

            console.log("productIndex", productIndex, typeof productIndex);
            if (productIndex >= 0) {
                console.log("product exists", productIndex);
                let tempCart = cart;

                tempCart[productIndex].count += 1;

                setCart([...tempCart]);
            } else {
                setCart(() => [...cart, { ...addProduct, count: 1 }]);
            }
        } else {
            console.log("no items in cart ");
            setCart(() => [{ ...addProduct, count: 1 }]);
        }
    }

    function removeFromCart(productId){
        var newCart = cart.filter(item => item.id !== productId);
        setCart([...newCart]);
        console.log("product removed",productId)
    }

    // showing products based on the pathname of the brands
    useEffect(() => {
        switch (pathname) {
            case "/":
                // finalProducts = allProducts;
                setFinalProducts([...allProducts]);
                console.log("all products rendered");
                break;
            case "/brand/samsung":
                setFinalProducts(() => {
                    let newState = allProducts.filter(
                        (item) => item.brand === "Samsung"
                    );
                    return [...newState];
                });
                break;
            case "/brand/redmi":
                setFinalProducts(() => {
                    let newState = allProducts.filter(
                        (item) => item.brand === "Redmi"
                    );
                    return [...newState];
                });
                break;
            case "/brand/nokia":
                setFinalProducts(() => {
                    let newState = allProducts.filter(
                        (item) => item.brand === "Nokia"
                    );
                    return [...newState];
                });
                break;
            default:
                break;
        }
    }, [pathname]);

    // console.log("finalProducts", finalProducts);

    // console.log("path", pathname);

    var renderFinalProducts = finalProducts.map((item) => (
        <Product item={item} key={item.id} addToCart={addToCart} />
    ));
    var renderCartItems = cart.map((item) => <Cart key={item.id} item={item} removeFromCart={removeFromCart} />);

    var cartTotal = cart.reduce((prev, current) => prev + current.count, 0);
    return (
        <div className="all-products">
            {renderFinalProducts}
            <div className="cart-container hidden">
                <p className="cart-total"> {cartTotal} </p>
                {cart.length ? renderCartItems : ""}
            </div>
        </div>
    );
};

export default Products;
