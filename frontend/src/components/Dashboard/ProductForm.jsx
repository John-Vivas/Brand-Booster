import { useState } from 'react';
import { Bold, Italic, Underline, List, AlignLeft, AlignCenter, AlignRight, Image, Link as LinkIcon, MoreHorizontal } from 'lucide-react';
import TextEditor from './ui/TextEditor';
import MediaUploader from './ui/MediaUploader';
import PriceInput from './ui/PriceInput';

const ProductForm = ({ onProductSaved }) => {
    const [product, setProduct] = useState({
        title: '',
        price: '',
        comparePrice: '',
        description: '',
        image: null,
        type: '',
        vendor: '',
        tags: '',
        status: 'draft',
        onlineStore: true
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setProduct({
            ...product,
            [name]: type === 'checkbox' ? checked : value
        });

        // Clear error when field is edited
        if (formErrors[name]) {
            setFormErrors({
                ...formErrors,
                [name]: null
            });
        }
    };

    const handleDescriptionChange = (content) => {
        setProduct({ ...product, description: content });
    };

    const handleImageChange = (file) => {
        setProduct({ ...product, image: file });
    };

    const validateForm = () => {
        const errors = {};

        if (!product.title.trim()) {
            errors.title = 'Title is required';
        }

        if (!product.price) {
            errors.price = 'Price is required';
        } else if (isNaN(parseFloat(product.price)) || parseFloat(product.price) < 0) {
            errors.price = 'Price must be a valid number';
        }

        if (product.comparePrice && (isNaN(parseFloat(product.comparePrice)) || parseFloat(product.comparePrice) < 0)) {
            errors.comparePrice = 'Compare-at price must be a valid number';
        }

        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        setIsSubmitting(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('Product submitted:', product);

            // Show success message
            alert('Product saved successfully!');

            // Navigate back to product list
            if (onProductSaved) {
                onProductSaved();
            }
        } catch (error) {
            console.error('Error saving product:', error);
            alert('Failed to save product. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDiscard = () => {
        if (confirm('Are you sure you want to discard your changes?')) {
            if (onProductSaved) {
                onProductSaved();
            }
        }
    };

    return (
        <div className="grid grid-cols-3 gap-6">
            {/* Left Column - Main Form */}
            <div className="col-span-2 space-y-6">
                {/* Title Section */}
                <div className="bg-white rounded-md shadow-sm border border-gray-200">
                    <div className="p-4 border-b border-gray-200">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={product.title}
                            className={`w-full px-3 py-2 border ${formErrors.title ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500`}
                            placeholder="Short sleeve t-shirt"
                            onChange={handleChange}
                            required
                        />
                        {formErrors.title && (
                            <p className="mt-1 text-sm text-red-500">{formErrors.title}</p>
                        )}
                    </div>

                    {/* Description Section */}
                    <div className="p-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Description
                        </label>
                        <TextEditor
                            initialValue={product.description}
                            onChange={handleDescriptionChange}
                        />
                    </div>
                </div>

                {/* Media Section */}
                <MediaUploader
                    onFileSelected={handleImageChange}
                    currentImage={product.image}
                />

                {/* Pricing Section */}
                <div className="bg-white rounded-md shadow-sm border border-gray-200">
                    <div className="p-4 border-b border-gray-200">
                        <h2 className="text-sm font-medium text-gray-700">Pricing</h2>
                    </div>
                    <div className="p-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Price
                                </label>
                                <PriceInput
                                    name="price"
                                    value={product.price}
                                    onChange={handleChange}
                                    placeholder="0.00"
                                    error={formErrors.price}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Compare-at price
                                </label>
                                <PriceInput
                                    name="comparePrice"
                                    value={product.comparePrice}
                                    onChange={handleChange}
                                    placeholder="0.00"
                                    error={formErrors.comparePrice}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="col-span-1 space-y-6">
                {/* Product Status */}
                <div className="bg-white rounded-md shadow-sm border border-gray-200">
                    <div className="p-4 border-b border-gray-200">
                        <h2 className="text-sm font-medium text-gray-700">Product status</h2>
                    </div>
                    <div className="p-4">
                        <select
                            name="status"
                            value={product.status}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="draft">Draft</option>
                            <option value="active">Active</option>
                            <option value="archived">Archived</option>
                        </select>
                    </div>
                </div>

                {/* Product Availability */}
                <div className="bg-white rounded-md shadow-sm border border-gray-200">
                    <div className="p-4 border-b border-gray-200">
                        <h2 className="text-sm font-medium text-gray-700">Product availability</h2>
                    </div>
                    <div className="p-4">
                        <p className="text-sm text-gray-600 mb-2">Available on 1 of 1 channels and apps</p>
                        <div className="flex items-center justify-between py-2">
                            <span className="text-sm text-gray-700">Online Store</span>
                            <input
                                type="checkbox"
                                name="onlineStore"
                                checked={product.onlineStore}
                                onChange={handleChange}
                                className="h-4 w-4 text-blue-600 rounded"
                            />
                        </div>
                    </div>
                </div>

                {/* Organization */}
                <div className="bg-white rounded-md shadow-sm border border-gray-200">
                    <div className="p-4 border-b border-gray-200">
                        <h2 className="text-sm font-medium text-gray-700">Organization</h2>
                    </div>
                    <div className="p-4 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Product type
                            </label>
                            <input
                                type="text"
                                name="type"
                                value={product.type}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="e.g., T-shirt"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Vendor
                            </label>
                            <input
                                type="text"
                                name="vendor"
                                value={product.vendor}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="e.g., Nike"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

                {/* Tags */}
                <div className="bg-white rounded-md shadow-sm border border-gray-200">
                    <div className="p-4 border-b border-gray-200">
                        <h2 className="text-sm font-medium text-gray-700">Tags</h2>
                    </div>
                    <div className="p-4">
                        <input
                            type="text"
                            name="tags"
                            value={product.tags}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Vintage, cotton, summer"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Save Button */}
                <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={handleDiscard}
                        className="mr-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                        disabled={isSubmitting}
                    >
                        Discard
                    </button>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Saving...' : 'Save'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductForm;