import React from 'react'
import { useToggle } from '../App'
import Button from './Elements/Button'
import Checkbox from './Elements/Checkbox'
import Radio from './Elements/Radio'

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
                                <select className="mt-1 form-select block w-full bg-gray-900 text-white shadow focus:bg-gray-600">
                                    <option>4</option>
                                </select>
                            </label>
                            <label className="block w-1/2 px-2 sm:w-1/4 lg:w-1/2">
                                <span className="text-sm font-semibold text-gray-500">
                                    Bathrooms
                                </span>
                                <select className="mt-1 form-select bg-gray-900 block w-full text-white shadow focus:bg-gray-600">
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </label>
                            <label className="mt-4 block  bg-gray-900w-full px-2 sm:mt-0 sm:w-1/2 lg:mt-4 lg:w-full">
                                <span className="text-sm font-semibold text-gray-500">
                                    Price Range
                                </span>
                                <select className="mt-1 bg-gray-900 form-select block w-full text-white shadow focus:bg-gray-600">
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
                            <Radio
                                content={'House'}
                                value={'house'}
                                name={'propertyType'}
                            />
                            <Radio
                                content={'Apartment'}
                                value={'apartment'}
                                name={'propertyType'}
                            />
                            <Radio
                                content={'Loft'}
                                value={'loft'}
                                name={'propertyType'}
                            />
                            <Radio
                                content={'Townhouse'}
                                value={'townhouse'}
                                name={'propertyType'}
                            />
                        </div>
                    </div>
                    <div className="px-4 py-4 border-t border-gray-900 lg:w-1/3 lg:border-l xl:w-full">
                        <span className="block text-sm font-semibold text-gray-500">
                            Amenities
                        </span>
                        <div className="sm:flex sm:-mx-2 sm:flex-wrap">
                            <Checkbox name={'balcony'} content={'Balcony'} />
                            <Checkbox name={'pool'} content={'Pool'} />
                            <Checkbox name={'beach'} content={'Beach'} />
                            <Checkbox
                                name={'petFriendly'}
                                content={'Pet friendly'}
                            />
                            <Checkbox
                                name={'kidFriendly'}
                                content={'Kid friendly'}
                            />
                            <Checkbox name={'parking'} content={'Parking'} />
                            <Checkbox
                                name={'airConditioning'}
                                content={'Air Conditioning'}
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-gray-900 px-4 py-4 sm:text-right">
                    <Button content={'Update Filter'} background={'blue'} />
                </div>
            </form>
        </section>
    )
}

export default SearchFilters
