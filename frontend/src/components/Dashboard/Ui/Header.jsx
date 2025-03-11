import { useState } from 'react';
import { Search, Bell, User } from 'lucide-react';

const Header = ({ onSearch, onLogout }) => {
    const [searchValue, setSearchValue] = useState('');
    const [showUserMenu, setShowUserMenu] = useState(false);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        onSearch(searchValue);
    };

    return (
        <header className="bg-white border-b border-gray-200 flex justify-between items-center px-6 py-3">
            <div className="flex items-center">
                <form onSubmit={handleSearchSubmit} className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 w-64"
                    />
                </form>
            </div>
            <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
                    <Bell size={20} />
                </button>
                <div className="relative">
                    <button
                        onClick={() => setShowUserMenu(!showUserMenu)}
                        className="flex items-center text-sm text-gray-700 hover:text-gray-900"
                    >
                        <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white mr-2">
                            <User size={16} />
                        </div>
                        <span>Admin</span>
                    </button>

                    {showUserMenu && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Your Profile
                            </button>
                            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Settings
                            </button>
                            <div className="border-t border-gray-100 my-1"></div>
                            <button
                                onClick={onLogout}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;