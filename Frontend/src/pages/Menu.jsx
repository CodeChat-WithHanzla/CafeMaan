import { useState, useEffect } from 'react';
import { MenuItems, AddToCart } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { clearSelectedItem } from '../slice/SelectedSlice';

function Menu() {
    const selectedItem = useSelector(state => state.selectedItem);
    const dispatch = useDispatch();
    const [showCart, setShowCart] = useState(true);

    useEffect(() => {
        if (!showCart) {
            dispatch(clearSelectedItem());
        }
    }, [showCart, dispatch]);

    return (
        <div className="bg-[#121212] w-screen min-h-screen flex flex-col">
            <div className="bg-[#121212] flex-grow mt-20">
                <MenuItems item={'Deal'} setShowCart={setShowCart} />
                <MenuItems item={'Deal'} setShowCart={setShowCart} />
                <MenuItems item={'Deal'} setShowCart={setShowCart} />
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
