
import { BrowserRouter, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./App.css";
import CartProvider from "./context/CartContext";
import Dashboard from "./components/Dashboard/Dashboard";

function AppContent() {
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";

  return (
    <div className="mainContainer">
      <CartProvider>
        {isDashboard ? (
          <Dashboard />
        ) : (
          <>
            <Header />
            <div className="content">
              <Main />
            </div>
            <Footer />
          </>
        )}
      </CartProvider>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
