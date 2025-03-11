import { DollarSign } from 'lucide-react';

const PriceInput = ({ name, value, onChange, placeholder, error, required }) => {
    return (
        <div>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <DollarSign size={16} className="text-gray-400" />
                </div>
                <input
                    type="text"
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder || "0.00"}
                    required={required}
                    className={`pl-8 pr-4 py-2 w-full border ${error ? 'border-red-500' : 'border-gray-300'
                        } rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500`}
                />
            </div>
            {error && (
                <p className="mt-1 text-sm text-red-500">{error}</p>
            )}
        </div>
    );
};

export default PriceInput;