import { Routes, Route } from "react-router-dom";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import Cart from "../Cart/Cart";
import StoresListContainer from "../StoresListContainer/StoresListContainer";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Dashboard from "../Dashboard/Dashboard";
import About from "../About/About"

const Main = () => {
    return (
        <main>
            <Routes>
                <Route
                    path="/"
                    element={<ItemListContainer greeting="Bienvenidos a Quantum Shop" />}
                />
                <Route path="/items/:productos" element={<ItemListContainer />} />
                <Route path="/stores" element={<StoresListContainer />} />
                <Route path="/about" element={<About />} />
                <Route path="/category/:categorySeller" element={<StoresListContainer />} />
                <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Dashboard tiene su propia ruta y se manejará en App.js */}
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </main>
    );
};

export default Main;
