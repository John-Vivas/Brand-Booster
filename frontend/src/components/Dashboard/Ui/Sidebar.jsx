import { Package, Home, ShoppingCart, Users, BarChart2, Mail, Tag, Grid } from 'lucide-react';

const Sidebar = ({ activeView, onNavigate }) => {
    const isActive = (view) => activeView === view;

    return (
        <div className="w-64 bg-white border-r border-gray-200">
            <div className="p-4 border-b border-gray-200">
                <h1 className="text-xl font-semibold text-gray-800">Seller Central</h1>
            </div>
            <nav className="mt-4">
                <SidebarItem
                    icon={<Home size={18} />}
                    text="Home"
                    active={isActive('home')}
                    onClick={() => onNavigate('home')}
                />
                <SidebarItem
                    icon={<ShoppingCart size={18} />}
                    text="Orders"
                    active={isActive('orders')}
                    onClick={() => onNavigate('orders')}
                />
                <SidebarItem
                    icon={<Package size={18} />}
                    text="Products"
                    active={isActive('products')}
                    onClick={() => onNavigate('products')}
                >
                    <SidebarSubItem
                        text="All products"
                        active={isActive('products')}
                        onClick={() => onNavigate('products')}
                    />
                    <SidebarSubItem
                        text="Inventory"
                        active={isActive('inventory')}
                        onClick={() => onNavigate('inventory')}
                    />
                    <SidebarSubItem
                        text="Transfers"
                        active={isActive('transfers')}
                        onClick={() => onNavigate('transfers')}
                    />
                    <SidebarSubItem
                        text="Collections"
                        active={isActive('collections')}
                        onClick={() => onNavigate('collections')}
                    />
                    <SidebarSubItem
                        text="Gift cards"
                        active={isActive('giftCards')}
                        onClick={() => onNavigate('giftCards')}
                    />
                </SidebarItem>
                <SidebarItem
                    icon={<Users size={18} />}
                    text="Customers"
                    active={isActive('customers')}
                    onClick={() => onNavigate('customers')}
                />
                <SidebarItem
                    icon={<BarChart2 size={18} />}
                    text="Analytics"
                    active={isActive('analytics')}
                    onClick={() => onNavigate('analytics')}
                />
                <SidebarItem
                    icon={<Mail size={18} />}
                    text="Marketing"
                    active={isActive('marketing')}
                    onClick={() => onNavigate('marketing')}
                />
                <SidebarItem
                    icon={<Tag size={18} />}
                    text="Discounts"
                    active={isActive('discounts')}
                    onClick={() => onNavigate('discounts')}
                />
                <SidebarItem
                    icon={<Grid size={18} />}
                    text="Apps"
                    active={isActive('apps')}
                    onClick={() => onNavigate('apps')}
                />
                <div className="mt-4 border-t border-gray-200 pt-4">
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">Sales channels</div>
                    <SidebarItem
                        icon={<ShoppingCart size={18} />}
                        text="Online Store"
                        active={isActive('onlineStore')}
                        onClick={() => onNavigate('onlineStore')}
                    />
                </div>
            </nav>
        </div>
    );
};

const SidebarItem = ({ icon, text, active, onClick, children }) => (
    <div>
        <button
            onClick={onClick}
            className={`flex items-center w-full px-4 py-2 text-sm ${active ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-100'
                }`}
        >
            <span className="mr-3">{icon}</span>
            <span>{text}</span>
        </button>
        {children && <div className="ml-7">{children}</div>}
    </div>
);

const SidebarSubItem = ({ text, active, onClick }) => (
    <button
        onClick={onClick}
        className={`block w-full text-left px-4 py-2 text-xs ${active ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-100'
            }`}
    >
        {text}
    </button>
);

export default Sidebar;