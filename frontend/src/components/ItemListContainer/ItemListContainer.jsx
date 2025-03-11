

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ItemList from "../ItemList/ItemList";
import { itemsProducts } from "../mock/items";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadProducts = async () => {
            setIsLoading(true);
            setTimeout(() => {
                setProducts(itemsProducts);
                setIsLoading(false);
            }, 1000);
        };
        loadProducts();
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? itemsProducts.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === itemsProducts.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Slider */}
            <div className="relative w-full mx-auto h-[70vh] overflow-hidden bg-gray-900">
                <div
                    className="flex transition-transform duration-700 ease-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {itemsProducts.map((item) => (
                        <div key={item.id} className="w-full flex-shrink-0 relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-[70vh] object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                <div className="max-w-7xl mx-auto">
                                    <h3 className="text-4xl font-bold mb-2 transform translate-y-0 transition-transform duration-500">
                                        {item.title}
                                    </h3>
                                    <p className="text-lg text-gray-200 max-w-2xl">
                                        {item.description || "Descubre nuestra colección exclusiva"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200"
                    aria-label="Next slide"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Slide indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {itemsProducts.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-white w-4" : "bg-white/50"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Products Section */}
            <div className="py-10 flex flex-col px-6 w-full min-h-screen bg-gray-100">
                <h2 className="text-center mb-4 text-3xl font-bold">{greeting}</h2>
                <div className="w-full h-full">
                    <ItemList items={products} />
                </div>
            </div>
        </div>
    );
};

export default ItemListContainer;

