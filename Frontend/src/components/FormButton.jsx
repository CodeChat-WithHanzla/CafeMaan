import React from 'react'

function FormButton({ text, handleSubmit }) {
    return (
        <button type='submit' className="bg-[#FCB116] hover:bg-[#661111] p-3 rounded-3xl w-[80%] text-black hover:text-white text-lg md:text-xl transition-colors duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            {text}
        </button>
    )
}

export default FormButton