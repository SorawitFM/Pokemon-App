import React from 'react'

const SearchForm = () => {
    return (
        <div className='grid grid-cols-4'>
            <div>
                <label htmlFor="generation"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Generation
                </label>
                <select id="generation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select>
            </div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </div>
    )
}

export default SearchForm