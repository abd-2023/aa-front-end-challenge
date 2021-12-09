//creating a Header for the site

const Header = () => {
    function toggleCart() {
        let cartContainer= document.querySelector(".cart-container");
        cartContainer.classList.toggle("hidden")
        console.log("cartContainer", cartContainer);

    }
    return (
        <header className="App-header">
            <a href="/">
                <img src="/amazon-logo.png" className="brand-logo" alt="logo" />
            </a>
            <div className="header-meta">
                <img
                    src="/images/cart-icon.png"
                    className="cart-icon"
                    alt="cart icon"
                    onClick={toggleCart}
                />
                <img
                    src="/images/profile-pic.jpg"
                    className="profile-pic"
                    alt="user profile picture"
                />
            </div>
        </header>
    );
};

export default Header;
