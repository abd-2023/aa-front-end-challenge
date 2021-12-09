import { Link, useLocation } from "react-router-dom";

function Brands() {
    let { pathname } = useLocation();

    console.log("pathname in brands", pathname);

    return (
        <div className="brands-list">
            <nav>
                <div className={pathname === "/" ? "active-path" : ""}>
                    <Link to="/"> All </Link>
                </div>
                <div className={pathname === "/brand/samsung" ? "active-path" : ""}>
                    <Link to="/brand/samsung"> Samsung </Link>
                </div>
                <div className={pathname === "/brand/redmi" ? "active-path" : ""}>
                    <Link to="/brand/redmi"> Redmi </Link>
                </div>
                <div className={pathname === "/brand/nokia" ? "active-path" : ""}>
                    <Link to="/brand/nokia"> Nokia </Link>
                </div>
            </nav>
        </div>
    );
}

export default Brands;
