/* eslint-disable react/prop-types */
import { Search } from 'lucide-react';
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const handleSearch = () => {
        onSearch(searchQuery);
        setSearchQuery(''); // Limpiar la barra de búsqueda después de buscar
    };

    return (
        <div className={`hidden lg:flex items-center transition-all duration-300 ${isSearchOpen ? 'w-96' : 'w-72'}`}>
            <div className="relative w-full flex">
                <input
                    type="text"
                    placeholder="Buscar productos..."
                    className="w-full px-4 py-2 bg-gray-800/50 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400 pl-10 border border-gray-700 focus:border-blue-400"
                    onFocus={() => setIsSearchOpen(true)}
                    onBlur={() => setIsSearchOpen(false)}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                <button
                    onClick={handleSearch}
                    className="px-6 py-2 text-white rounded-r-lg hover:bg-blue-700 transition-colors duration-200 border border-blue-600">
                    Buscar
                </button>
            </div>
        </div>
    );
};

export default SearchBar;