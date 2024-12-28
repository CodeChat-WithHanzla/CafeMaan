import React from 'react'
import { MenuItems } from '../components'
function Menu() {
    return (
        <div className="bg-[#121212] w-screen min-h-screen flex flex-col">
            <div className="bg-[#121212] flex-grow mt-20">
                <MenuItems item={'Deal'} />
                <MenuItems item={'Deal'} />
                <MenuItems item={'Deal'} />
            </div>
        </div>
    )
}

export default Menu