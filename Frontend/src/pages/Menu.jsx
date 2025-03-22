import { useState, useEffect } from 'react';
import { MenuItems, AddToCart, MenuHeader } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { clearSelectedItem } from '../slice/SelectedSlice';
import { menuBar } from '../assets/cafemaan';
function Menu() {
    const selectedItem = useSelector((state) => state.selectedItem);
    const dispatch = useDispatch();
    const [showCart, setShowCart] = useState(true);

    useEffect(() => {
        if (!showCart) {
            dispatch(clearSelectedItem());
        }
    }, [showCart, dispatch]);

    const handleScroll = (item) => {
        const section = document.getElementById(item.replace(/\s/g, ""));
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="bg-[#121212] min-h-screen flex flex-col w-screen overflow-x-hidden">
            <div className={`bg-[#171717] w-screen fixed ${!(selectedItem && showCart) ? "z-10" : ""}`}>
                <MenuHeader menuBar={menuBar} />
            </div>

            <div className="bg-[#121212] flex-grow  w-screen mt-[200px]">
                {menuBar.map((item, index) => (
                    <div key={index} id={item.replace(/\s/g, "")} className="min-h-[80vh] p-6">
                        <MenuItems item={item} setShowCart={setShowCart} />
                    </div>
                ))}
            </div>

            {selectedItem && showCart && (
                <AddToCart
                    setShowCart={setShowCart}
                    DealHeading={selectedItem.DealHeading}
                    DealText={selectedItem.DealText}
                    Price={selectedItem.Price}
                    imageUrl={selectedItem.imageUrl}
                    rating={selectedItem.rating}
                    category={selectedItem.category}
                />
            )}
        </div>
    );
}

export default Menu;
