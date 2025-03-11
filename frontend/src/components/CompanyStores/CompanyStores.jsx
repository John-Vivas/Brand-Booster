
import { DollarSign, ShoppingBag, Tag } from 'lucide-react'
import { } from 'react'

const Stores = ({ id, nameCompany, logoCompany, description, itemsCompany, categorySeller }) => {
    return (
        <div key={id} className="h-full shadow-sm hover:shadow-lg transition-all duration-300 bg-white rounded-lg">
            <div className="bg-dark text-white p-4 flex justify-between items-center rounded-t-lg">
                <h3 className="text-sm font-semibold mb-0">{nameCompany}</h3>
                <img
                    src={logoCompany || "/placeholder.svg"}
                    alt={nameCompany}
                    className="rounded-full w-10 h-10"
                />
            </div>
            <div className="p-4">
                <div className="mb-3 flex flex-wrap">
                    {categorySeller.map((category, index) => (
                        <span key={index} className="bg-gray-500 text-white text-xs rounded-full px-2 py-1 mr-2 mb-2 inline-flex items-center">
                            <Tag size={14} className="mr-1" />
                            {category}
                        </span>
                    ))}
                </div>
                <p className="text-gray-700">{description}</p>
                <ul className="divide-y divide-gray-200">
                    {itemsCompany.map((item) => (
                        <li key={item.id} className="flex justify-between items-center py-3">
                            <span className="flex items-center">
                                <ShoppingBag size={16} className="mr-2 text-blue-500" />
                                {item.name}
                            </span>
                            <span className="bg-green-500 text-white text-xs font-semibold py-1 px-2 rounded-full flex items-center">
                                <DollarSign size={14} className="mr-1" />
                                {item.price.toFixed(2)}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Stores
