import React from 'react'
import { useToggle } from '../App'

function SearchFilters() {
    const [isOpen, setOpen] = useToggle(false)

    return (
        <section className="bg-gray-800 xl:w-72">
            <div className="flex justify-between px-4 py-3 xl:hidden">
                <div className="relative max-w-xs w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg
                            className="h-6 w-6 fill-current text-gray-600"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41l.01-.01zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                        </svg>
                    </div>
                    <input
                        className="block w-full bg-gray-900 focus:outline-none focus:bg-white focus:text-gray-900 text-white rounded-lg pl-10 pr-4 py-2"
                        placeholder="Search by keywords"
                    />
                </div>
                <button
                    type="button"
                    className={`ml-4 inline-flex items-center hover:bg-gray-600 focus:outline-none focus:shadow-outline rounded-lg shadow pl-3 pr-4 ${
                        isOpen ? 'bg-gray-600' : 'bg-gray-700'
                    }`}
                    onClick={() => setOpen(o => !o)}
                >
                    <svg
                        className="h-6 w-6 fill-current text-gray-500"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm3 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1zm4 5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4z" />
                    </svg>
                    <span className="ml-1 text-white font-medium">Filters</span>
                </button>
            </div>
            <form
                className={`xl:block xl:h-full xl:flex xl:flex-col xl:justify-between ${
                    isOpen ? 'block' : 'hidden'
                }`}
            >
                <div className="lg:flex xl:block xl:overflow-y-auto">
                    <div className="px-4 py-4 border-t border-gray-900 lg:w-1/3 xl:border-t-0 xl:w-full">
                        <div className="flex flex-wrap -mx-2">
                            <label className="block w-1/2 px-2 sm:w-1/4 lg:w-1/2">
                                <span className="text-sm font-semibold text-gray-500">
                                    Bedrooms
                                </span>
                                <select className="mt-1 form-select block w-full text-white shadow focus:bg-gray-600">
                                    <option>4</option>
                                </select>
                            </label>
                            <label className="block w-1/2 px-2 sm:w-1/4 lg:w-1/2">
                                <span className="text-sm font-semibold text-gray-500">
                                    Bathrooms
                                </span>
                                <select className="mt-1 form-select block w-full text-white shadow focus:bg-gray-600">
                                    <option>2</option>
                                </select>
                            </label>
                            <label className="mt-4 block w-full px-2 sm:mt-0 sm:w-1/2 lg:mt-4 lg:w-full">
                                <span className="text-sm font-semibold text-gray-500">
                                    Price Range
                                </span>
                                <select className="mt-1 form-select block w-full text-white shadow focus:bg-gray-600">
                                    <option>Up to $2,000/wk</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="px-4 py-4 border-t border-gray-900 lg:w-1/3 lg:border-l xl:w-full">
                        <span className="block text-sm font-semibold text-gray-500">
                            Property Type
                        </span>
                        <div className="sm:flex sm:-mx-2 lg:block lg:mx-0">
                            <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
                                <input
                                    className="form-radio bg-gray-900 focus:bg-gray-700"
                                    type="radio"
                                    name="propertyType"
                                    value="house"
                                />
                                <span className="ml-2 text-white">House</span>
                            </label>
                            <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
                                <input
                                    className="form-radio bg-gray-900 focus:bg-gray-700"
                                    type="radio"
                                    name="propertyType"
                                    value="apartment"
                                />
                                <span className="ml-2 text-white">Apartment</span>
                            </label>
                            <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
                                <input
                                    className="form-radio bg-gray-900 focus:bg-gray-700"
                                    type="radio"
                                    name="propertyType"
                                    value="loft"
                                />
                                <span className="ml-2 text-white">Loft</span>
                            </label>
                            <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
                                <input
                                    className="form-radio bg-gray-900 focus:bg-gray-700"
                                    type="radio"
                                    name="propertyType"
                                    value="townhouse"
                                />
                                <span className="ml-2 text-white">Townhouse</span>
                            </label>
                        </div>
                    </div>
                    <div className="px-4 py-4 border-t border-gray-900 lg:w-1/3 lg:border-l xl:w-full">
                        <span className="block text-sm font-semibold text-gray-500">Amenities</span>
                        <div className="sm:flex sm:-mx-2 sm:flex-wrap">
                            <label className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                                <input
                                    className="form-checkbox bg-gray-900 focus:bg-gray-700"
                                    type="checkbox"
                                    name="balcony"
                                />
                                <span className="ml-2 text-white">Balcony</span>
                            </label>
                            <label className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                                <input
                                    className="form-checkbox bg-gray-900 focus:bg-gray-700"
                                    type="checkbox"
                                    name="pool"
                                />
                                <span className="ml-2 text-white">Pool</span>
                            </label>
                            <label className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                                <input
                                    className="form-checkbox bg-gray-900 focus:bg-gray-700"
                                    type="checkbox"
                                    name="beach"
                                />
                                <span className="ml-2 text-white">Beach</span>
                            </label>
                            <label className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                                <input
                                    className="form-checkbox bg-gray-900 focus:bg-gray-700"
                                    type="checkbox"
                                    name="petFriendly"
                                />
                                <span className="ml-2 text-white">Pet friendly</span>
                            </label>
                            <label className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                                <input
                                    className="form-checkbox bg-gray-900 focus:bg-gray-700"
                                    type="checkbox"
                                    name="kidFriendly"
                                />
                                <span className="ml-2 text-white">Kid friendly</span>
                            </label>
                            <label className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                                <input
                                    className="form-checkbox bg-gray-900 focus:bg-gray-700"
                                    type="checkbox"
                                    name="parking"
                                />
                                <span className="ml-2 text-white">Parking</span>
                            </label>
                            <label className="mt-3 flex items-center sm:w-1/2 sm:px-2 lg:w-full">
                                <input
                                    className="form-checkbox bg-gray-900 focus:bg-gray-700"
                                    type="checkbox"
                                    name="airConditioning"
                                />
                                <span className="ml-2 text-white">Air conditioning</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-900 px-4 py-4 sm:text-right">
                    <button className="block w-full sm:w-auto sm:inline-block bg-indigo-500 hover:bg-indigo-400 font-semibold text-white px-4 py-2 rounded-lg xl:block xl:w-full">
                        Update results
                    </button>
                </div>
            </form>
        </section>
    )
}

export default SearchFilters
