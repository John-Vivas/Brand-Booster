import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-8">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Sección de información */}
                <div>
                    <h2 className="text-xl font-bold">Quantum Shop</h2>
                    <p className="text-gray-400 mt-2">Tu tienda online de confianza.</p>
                </div>
                
                {/* Sección de enlaces rápidos */}
                <div>
                    <h3 className="text-lg font-semibold">Enlaces</h3>
                    <ul className="mt-2 space-y-2">
                        <li><Link to="/" className="hover:text-blue-400">Inicio</Link></li>
                        <li><Link to="/stores" className="hover:text-blue-400">Tiendas</Link></li>
                        <li><Link to="/categories" className="hover:text-blue-400">Categorías</Link></li>
                        <li><Link to="/about" className="hover:text-blue-400">Acerca de nosotros</Link></li>
                    </ul>
                </div>
                
                {/* Sección de redes sociales */}
                <div>
                    <h3 className="text-lg font-semibold">Síguenos</h3>
                    <div className="flex space-x-4 mt-2">
                        <a href="#" className="hover:text-blue-400"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-pink-400"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-blue-500"><Twitter size={20} /></a>
                        <a href="#" className="hover:text-gray-300"><Mail size={20} /></a>
                    </div>
                </div>
            </div>
            <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
                &copy; {new Date().getFullYear()} Quantum Shop. Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;
