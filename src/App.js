import "./App.css";
import Brands from "./components/Brands";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <main>
                    <Brands />
                    <Products />
                </main>
            </div>
        </Router>
    );
}

export default App;
