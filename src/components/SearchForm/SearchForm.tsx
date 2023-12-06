import React from 'react'
import { generationList, typesList, sortList } from '@/utils/optionList'
import { useSearchForm } from '@/components/SearchForm'


const SearchForm = () => {
    const { fieldKeyword, fieldGeneration, fieldSort, fieldType } = useSearchForm() //เป็น pattern ของ library "react-hook-form"
    return (
        <form className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-[20px]'>
            <div>
                <label htmlFor="generation"
                    className="block mb-2 text-mb font-medium text-gray-900 dark:text-white">
                    Generation
                </label>
                <select {...fieldGeneration}
                    id="generation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {generationList.map((item, index) => {
                        return <option key={`generation-key-${index}`} value={index}>{item.name}</option>
                    })}
                </select>
            </div>
            <div>
                <label htmlFor="type"
                    className="block mb-2 text-mb font-medium text-gray-900 dark:text-white">
                    Type
                </label>
                <select {...fieldType}
                    id="type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {typesList.map((item, index) => {
                        return <option key={`type-key-${index}`} value={item}>{item}</option>
                    })}
                </select>
            </div>
            <div>
                <label htmlFor="sort"
                    className="block mb-2 text-mb font-medium text-gray-900 dark:text-white">
                    Sort by
                </label>
                <select {...fieldSort}
                    id="sort" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {sortList.map((item, index) => {
                        return <option key={`sort-key-${index}`} value={item}>{item}</option>
                    })}
                </select>
            </div>
            <div>
                <label htmlFor="keyword"
                    className="block mb-2 text-mb font-medium text-gray-900 dark:text-white">
                    Search
                </label>
                <input
                    {...fieldKeyword} //เป็น pattern ของ library "react-hook-form"
                    id="keyword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
        </form>
    )
}

export default SearchForm