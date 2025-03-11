import { useEffect, useState } from 'react';
import { Search, Filter, ChevronDown, Package, Trash, Edit, AlertCircle } from 'lucide-react';
import ConfirmDialog from './ui/ConfirmDialog';

const ProductList = ({ searchQuery = '', onEdit, onDelete }) => {
    const [products, setProducts] = useState([
        // Dummy data for demonstration
        {
            id: '1',
            title: 'Wireless Headphones',
            status: 'Active',
            price: 99.99,
            inventory: 45,
            type: 'Electronics',
            vendor: 'AudioTech',
            description: 'High-quality wireless headphones with noise cancellation',
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300',
        },
        {
            id: '2',
            title: 'Smart Watch',
            status: 'Active',
            price: 199.99,
            inventory: 28,
            type: 'Electronics',
            vendor: 'TechGear',
            description: 'Feature-rich smartwatch with health tracking',
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300',
        },
        {
            id: '3',
            title: 'Organic Cotton T-Shirt',
            status: 'Draft',
            price: 29.99,
            inventory: 120,
            type: 'Apparel',
            vendor: 'EcoWear',
            description: 'Comfortable and sustainable cotton t-shirt',
            image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=300',
        },
    ]);

    const [filteredProducts, setFilteredProducts] = useState(products);
    const [localSearchQuery, setLocalSearchQuery] = useState('');
    const [filterType, setFilterType] = useState('all');
    const [showFilterMenu, setShowFilterMenu] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // Apply search from parent component
    useEffect(() => {
        if (searchQuery) {
            setLocalSearchQuery(searchQuery);
            filterProducts(searchQuery, filterType);
        }
    }, [searchQuery]);

    // Filter products based on search and filter type
    const filterProducts = (search, type) => {
        let filtered = [...products];

        // Apply search filter
        if (search) {
            const searchLower = search.toLowerCase();
            filtered = filtered.filter(product =>
                product.title.toLowerCase().includes(searchLower) ||
                product.description.toLowerCase().includes(searchLower) ||
                product.type.toLowerCase().includes(searchLower) ||
                product.vendor.toLowerCase().includes(searchLower)
            );
        }

        // Apply type filter
        if (type !== 'all') {
            filtered = filtered.filter(product => product.status.toLowerCase() === type.toLowerCase());
        }

        setFilteredProducts(filtered);
    };

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setLocalSearchQuery(value);
        filterProducts(value, filterType);
    };

    const handleFilterChange = (type) => {
        setFilterType(type);
        filterProducts(localSearchQuery, type);
        setShowFilterMenu(false);
    };

    const handleDeleteClick = (product) => {
        setProductToDelete(product);
        setShowDeleteConfirm(true);
    };

    const confirmDelete = async () => {
        if (!productToDelete) return;

        setIsLoading(true);
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 800));

            // Remove from state
            const updatedProducts = products.filter(p => p.id !== productToDelete.id);
            setProducts(updatedProducts);
            setFilteredProducts(updatedProducts.filter(p =>
                filterType === 'all' || p.status.toLowerCase() === filterType.toLowerCase()
            ));

            // Call parent callback
            if (onDelete) {
                onDelete(productToDelete.id);
            }

            setShowDeleteConfirm(false);
            setProductToDelete(null);
        } catch (error) {
            console.error('Error deleting product:', error);
            alert('Failed to delete product. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleEditClick = (productId) => {
        if (onEdit) {
            onEdit(productId);
        }
    };

    return (
        <>
            <div className="bg-white rounded-md shadow-sm border border-gray-200">
                {/* Toolbar */}
                <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="relative mr-4">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                            <input
                                type="text"
                                placeholder="Search products"
                                value={localSearchQuery}
                                onChange={handleSearchChange}
                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 w-64"
                            />
                        </div>
                        <div className="relative">
                            <button
                                onClick={() => setShowFilterMenu(!showFilterMenu)}
                                className="flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 bg-white hover:bg-gray-50"
                            >
                                <Filter size={16} className="mr-2" />
                                {filterType === 'all' ? 'All' : filterType === 'active' ? 'Active' : 'Draft'}
                                <ChevronDown size={16} className="ml-2" />
                            </button>

                            {showFilterMenu && (
                                <div className="absolute left-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                                    <button
                                        onClick={() => handleFilterChange('all')}
                                        className={`block w-full text-left px-4 py-2 text-sm ${filterType === 'all' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
                                    >
                                        All
                                    </button>
                                    <button
                                        onClick={() => handleFilterChange('active')}
                                        className={`block w-full text-left px-4 py-2 text-sm ${filterType === 'active' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
                                    >
                                        Active
                                    </button>
                                    <button
                                        onClick={() => handleFilterChange('draft')}
                                        className={`block w-full text-left px-4 py-2 text-sm ${filterType === 'draft' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
                                    >
                                        Draft
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="text-sm text-gray-500">
                        {filteredProducts.length} products
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    {filteredProducts.length > 0 ? (
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Product
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Inventory
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Type
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Vendor
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredProducts.map((product) => (
                                    <tr key={product.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="h-10 w-10 flex-shrink-0">
                                                    <img className="h-10 w-10 rounded-md object-cover" src={product.image} alt="" />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{product.title}</div>
                                                    <div className="text-sm text-gray-500">${product.price.toFixed(2)}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${product.status.toLowerCase() === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                                                }`}>
                                                {product.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {product.inventory} in stock
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {product.type}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {product.vendor}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button
                                                onClick={() => handleEditClick(product.id)}
                                                className="text-blue-600 hover:text-blue-900 mr-3"
                                            >
                                                <Edit size={16} />
                                            </button>
                                            <button
                                                onClick={() => handleDeleteClick(product)}
                                                className="text-red-600 hover:text-red-900"
                                            >
                                                <Trash size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="py-12 flex flex-col items-center justify-center">
                            <div className="bg-gray-100 p-3 rounded-full mb-4">
                                {localSearchQuery ? (
                                    <AlertCircle className="w-6 h-6 text-gray-500" />
                                ) : (
                                    <Package className="w-6 h-6 text-gray-500" />
                                )}
                            </div>
                            <h3 className="text-sm font-medium text-gray-900">
                                {localSearchQuery ? 'No products found' : 'No products yet'}
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                                {localSearchQuery
                                    ? 'Try changing your search or filter criteria.'
                                    : 'Add your first product to get started.'}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Delete Confirmation Dialog */}
            <ConfirmDialog
                isOpen={showDeleteConfirm}
                title="Delete Product"
                message={`Are you sure you want to delete "${productToDelete?.title}"? This action cannot be undone.`}
                confirmText="Delete"
                cancelText="Cancel"
                onConfirm={confirmDelete}
                onCancel={() => setShowDeleteConfirm(false)}
                isLoading={isLoading}
            />
        </>
    );
};

export default ProductList;