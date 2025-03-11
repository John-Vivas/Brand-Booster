import { Atom, X, Menu, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { storeInfo } from '../mock/stores.js';
import { Link } from "react-router-dom";
import CartWidget from "../Cart/CartWidget.jsx";
import SearchBar from '../Search/Search.jsx';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Función para manejar la búsqueda
    const handleSearch = (query) => {
        console.log("Buscando:", query);
    };

    // Obtener las primeras 3 tiendas y categorías únicas
    const firstStores = storeInfo.slice(0, 3).map(store => store.nameCompany);
    const allCategories = storeInfo.flatMap(store => store.categorySeller);
    const uniqueCategories = [...new Set(allCategories)];
    const firstCategories = uniqueCategories.slice(0, 3);

    return (
        <nav className="bg-gradient-to-r from-gray-900 to-black text-white shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo de la tienda */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <Atom className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-200" />
                        <span className="text-2xl font-bold bg-white bg-clip-text text-transparent">
                            Quantum Shop
                        </span>
                    </Link>

                    {/* Barra de búsqueda */}
                    <SearchBar onSearch={handleSearch} />

                    {/* Navegación de escritorio */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <Link to="/" className="nav-link">Inicio</Link>

                        {/* Menú desplegable de Tiendas */}
                        <div className="relative group">
                            <button className="nav-link flex items-center space-x-1">
                                <span>Tiendas</span>
                                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className="absolute left-0 hidden group-hover:block mt-2 w-56 bg-white rounded-lg shadow-xl py-2 z-50 transform opacity-0 group-hover:opacity-100 transition-all duration-200">
                                {firstStores.map((store, index) => (
                                    <Link key={index} to={`/category/${store}`} className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200">
                                        {store}
                                    </Link>
                                ))}
                                <div className="border-t border-gray-100 my-2" />
                                <Link to="/stores" className="block px-4 py-2 text-blue-600 hover:bg-blue-50 transition-colors duration-200 font-medium">
                                    Ver todas las tiendas →
                                </Link>
                            </div>
                        </div>

                        {/* Menú desplegable de Categorías */}
                        <div className="relative group">
                            <button className="nav-link flex items-center space-x-1">
                                <span>Categorías</span>
                                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className="absolute left-0 hidden group-hover:block mt-2 w-56 bg-white rounded-lg shadow-xl py-2 z-50 transform opacity-0 group-hover:opacity-100 transition-all duration-200">
                                {firstCategories.map((category, index) => (
                                    <Link key={index} to={`/category/${category}`} className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200">
                                        {category}
                                    </Link>
                                ))}
                                <div className="border-t border-gray-100 my-2" />
                                <Link to="/categories" className="block px-4 py-2 text-blue-600 hover:bg-blue-50 transition-colors duration-200 font-medium">
                                    Ver todas las categorías →
                                </Link>
                            </div>
                        </div>

                        <Link to="/about" className="nav-link">Acerca de nosotros</Link>
                    </div>

                    {/* Icono del carrito - Versión de escritorio */}
                    <div className="hidden lg:block">
                        <Link to="/cart">
                            <CartWidget />
                        </Link>
                    </div>

                    {/* Botón del menú móvil */}
                    <div className="flex items-center space-x-4 lg:hidden">
                        <Link to="/cart" className="relative">
                            <ShoppingCart className="w-6 h-6 text-white" />
                            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                0
                            </span>
                        </Link>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Menú móvil */}
                {isMenuOpen && (
                    <div className="lg:hidden py-4 fixed inset-0 top-20 bg-gray-900/95 backdrop-blur-sm z-50 overflow-y-auto">
                        <div className="container mx-auto px-4 py-6">
                            {/* Barra de búsqueda - Versión móvil */}
                            <SearchBar onSearch={handleSearch} />

                            <div className="space-y-4">
                                <Link to="/" className="mobile-nav-link flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
                                    <span>Inicio</span>
                                </Link>

                                {/* Sección de Tiendas en el menú móvil */}
                                <div className="space-y-2">
                                    <div className="mobile-nav-link font-medium">Tiendas</div>
                                    <div className="pl-4 space-y-2">
                                        {firstStores.map((store, index) => (
                                            <Link
                                                key={index}
                                                to={`/category/${store}`}
                                                className="block py-2 px-4 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {store}
                                            </Link>
                                        ))}
                                        <Link
                                            to="/stores"
                                            className="block py-2 px-4 text-blue-400 hover:text-blue-300 hover:bg-gray-800/50 rounded-lg transition-colors duration-200 font-medium"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Ver todas las tiendas →
                                        </Link>
                                    </div>
                                </div>

                                {/* Sección de Categorías en el menú móvil */}
                                <div className="space-y-2">
                                    <div className="mobile-nav-link font-medium">Categorías</div>
                                    <div className="pl-4 space-y-2">
                                        {firstCategories.map((category, index) => (
                                            <Link
                                                key={index}
                                                to={`/category/${category}`}
                                                className="block py-2 px-4 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {category}
                                            </Link>
                                        ))}
                                        <Link
                                            to="/categories"
                                            className="block py-2 px-4 text-blue-400 hover:text-blue-300 hover:bg-gray-800/50 rounded-lg transition-colors duration-200 font-medium"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Ver todas las categorías →
                                        </Link>
                                    </div>
                                </div>

                                <Link
                                    to="/about"
                                    className="mobile-nav-link flex items-center space-x-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <span>Acerca de nosotros</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;