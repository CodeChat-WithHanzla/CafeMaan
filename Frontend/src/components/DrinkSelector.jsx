import React from 'react';
import Select from 'react-select';

const DrinkSelector = ({ selectedOption, handleChange }) => {
    const options = [
        { value: 'Regular', label: 'Regular' },
        { value: '1.5L', label: '1.5L' }
    ];

    return (
        <div className="flex flex-col">
            <label htmlFor="drink" className="text-white font-medium mb-2 mt-5">Choose Drink Size:</label>
            <Select
                id="drink"
                value={selectedOption}
                onChange={handleChange}
                options={options}
                className="w-full md:w-56"
                classNamePrefix="custom-select"
                styles={{
                    control: (provided) => ({
                        ...provided,
                        backgroundColor: '#1a1a1a',
                        color: 'white',
                        borderColor: '#FCB116',
                        padding: '0.5rem',
                        borderRadius: '0.5rem',
                        boxShadow: 'none',
                    }),
                    option: (provided) => ({
                        ...provided,
                        backgroundColor: '#1a1a1a',
                        color: 'white',
                        padding: '0.5rem',
                        '&:hover': {
                            backgroundColor: '#FCB116',
                        }
                    }),
                    singleValue: (provided) => ({
                        ...provided,
                        color: 'white',
                    }),
                    menu: (provided) => ({
                        ...provided,
                        backgroundColor: '#1a1a1a',
                        borderColor: '#FCB116',
                        borderRadius: '0.5rem',
                    }),
                }}
            />
        </div>
    );
};

export default DrinkSelector;
