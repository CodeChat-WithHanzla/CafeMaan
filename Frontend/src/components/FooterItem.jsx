import React from 'react'

function FooterItem({ Heading, items }) {
    return (
        <div className="text-white p-4">
            <h3 className='font-bold text-xl hover:text-[#FCB116] cursor-pointer mb-2'>{Heading}</h3>
            {items.map((item, index) => (<h2 key={index} className='font-semibold text-sm hover:text-[#FCB116] cursor-pointer'>{item}</h2>))}
        </div>
    )
}

export default FooterItem