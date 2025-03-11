import { useState } from 'react';
import { Package, Home, ShoppingCart, Users, BarChart2, Mail, Tag, Settings, Grid, Search, ChevronLeft } from 'lucide-react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import Sidebar from './ui/Sidebar';
import Header from './ui/Header';


const Dashboard = () => {
    const [activeView, setActiveView] = useState('addProduct');
    const [searchQuery, setSearchQuery] = useState('');
    // const { logout } = useAuth();

    const handleNavigation = (view) => {
        setActiveView(view);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        if (activeView !== 'products') {
            setActiveView('products');
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar
                activeView={activeView}
                onNavigate={handleNavigation}
            />

            {/* Main Content */}
            <div className="flex-1">
                {/* Header */}
                <Header
                    onSearch={handleSearch}
                // onLogout={logout}
                />

                {/* Content */}
                <div className="p-6">
                    {activeView === 'addProduct' && (
                        <>
                            <div className="flex items-center mb-6">
                                <button
                                    onClick={() => handleNavigation('products')}
                                    className="flex items-center text-sm text-gray-600 hover:text-gray-900 mr-4"
                                >
                                    <ChevronLeft size={16} className="mr-1" />
                                    Products
                                </button>
                                <h1 className="text-xl font-medium text-gray-900">Add product</h1>
                            </div>
                            <ProductForm onProductSaved={() => handleNavigation('products')} />
                        </>
                    )}

                    {activeView === 'products' && (
                        <>
                            <div className="flex justify-between items-center mb-6">
                                <h1 className="text-xl font-medium text-gray-900">Products</h1>
                                <button
                                    onClick={() => handleNavigation('addProduct')}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                                >
                                    Add product
                                </button>
                            </div>
                            <ProductList
                                searchQuery={searchQuery}
                                onEdit={(productId) => {
                                    console.log(`Edit product ${productId}`);
                                    handleNavigation('addProduct');
                                }}
                                onDelete={(productId) => {
                                    console.log(`Delete product ${productId}`);
                                }}
                            />
                        </>
                    )}

                    {activeView === 'home' && (
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h1 className="text-xl font-medium text-gray-900 mb-4">Welcome to your Dashboard</h1>
                            <p className="text-gray-600">This is your home page. Navigate using the sidebar.</p>
                        </div>
                    )}

                    {activeView === 'orders' && (
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h1 className="text-xl font-medium text-gray-900 mb-4">Orders</h1>
                            <p className="text-gray-600">Your orders will appear here.</p>
                        </div>
                    )}

                    {activeView === 'customers' && (
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h1 className="text-xl font-medium text-gray-900 mb-4">Customers</h1>
                            <p className="text-gray-600">Your customer list will appear here.</p>
                        </div>
                    )}

                    {activeView === 'analytics' && (
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h1 className="text-xl font-medium text-gray-900 mb-4">Analytics</h1>
                            <p className="text-gray-600">Your analytics data will appear here.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;