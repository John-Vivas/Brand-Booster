import { useState } from 'react';
import { Image, Upload, X } from 'lucide-react';

const MediaUploader = ({ onFileSelected, currentImage }) => {
    const [previewUrl, setPreviewUrl] = useState(
        currentImage instanceof File
            ? URL.createObjectURL(currentImage)
            : currentImage
    );
    const [isDragging, setIsDragging] = useState(false);

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            handleFile(file);
        }
    };

    const handleFile = (file) => {
        // Create preview URL
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);

        // Call parent callback
        if (onFileSelected) {
            onFileSelected(file);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);

        const file = e.dataTransfer.files?.[0];
        if (file) {
            handleFile(file);
        }
    };

    const handleRemove = () => {
        setPreviewUrl(null);
        if (onFileSelected) {
            onFileSelected(null);
        }
    };

    return (
        <div className="bg-white rounded-md shadow-sm border border-gray-200">
            <div className="p-4 border-b border-gray-200">
                <h2 className="text-sm font-medium text-gray-700">Media</h2>
            </div>
            <div className="p-4">
                {previewUrl ? (
                    <div className="relative">
                        <img
                            src={previewUrl}
                            alt="Product preview"
                            className="w-full h-64 object-contain border border-gray-200 rounded-md"
                        />
                        <button
                            type="button"
                            onClick={handleRemove}
                            className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-100"
                        >
                            <X size={16} className="text-gray-600" />
                        </button>
                    </div>
                ) : (
                    <div
                        className={`border-2 border-dashed rounded-md p-8 text-center ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                            }`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >
                        <div className="mx-auto h-12 w-12 text-gray-400 flex items-center justify-center rounded-full bg-gray-100">
                            <Image size={24} />
                        </div>
                        <div className="mt-4">
                            <p className="text-sm text-gray-500">
                                Drag and drop file to upload
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                                or
                            </p>
                            <div className="mt-2">
                                <label
                                    htmlFor="file-upload"
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
                                >
                                    <Upload size={16} className="mr-2" />
                                    Upload file
                                </label>
                                <input
                                    id="file-upload"
                                    name="file-upload"
                                    type="file"
                                    accept="image/*"
                                    className="sr-only"
                                    onChange={handleFileChange}
                                />
                            </div>
                            <p className="text-xs text-gray-400 mt-2">
                                PNG, JPG, GIF up to 10MB
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MediaUploader;