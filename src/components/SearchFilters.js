import React from 'react'
import { useToggle } from '../App'
import Button from './Elements/Button'
import Checkbox from './Elements/Checkbox'
import Radio from './Elements/Radio'
import { useDispatch, useSelector } from 'react-redux'
import { locationActions } from '../locationSlice'

function RadioGroup() {
    const dispatch = useDispatch()
    const value = useSelector((s) => s.filters.reviews)

    function onChange(e) {
        dispatch(
            locationActions.updateFilter({
                filter: 'reviews',
                value: e.target.value,
            })
        )
    }

    return (
        <div className="sm:flex sm:-mx-2 lg:block lg:mx-0">
            <Radio
                content={'All'}
                value={'all'}
                onChange={onChange}
                checked={'all' === value}
                name={'reviews'}
            />
            <Radio
                content={'+2'}
                value={'+2'}
                onChange={onChange}
                checked={'+2' === value}
                name={'reviews'}
            />
            <Radio
                content={'+3'}
                value={'+3'}
                onChange={onChange}
                checked={'+3' === value}
                name={'reviews'}
            />
            <Radio
                content={'+4'}
                value={'+4'}
                onChange={onChange}
                checked={'+4' === value}
                name={'reviews'}
            />
            <Radio
                content={'5'}
                value={'5'}
                onChange={onChange}
                checked={'5' === value}
                name={'reviews'}
            />
        </div>
    )
}

function CheckBoxGroup() {
    const dispatch = useDispatch()
    const value = useSelector((s) => s.filters.amenities)

    function onChange(e) {
        dispatch(locationActions.updateAmenitiesFilter(e.target.name))
    }

    return (
        <div className="sm:flex sm:-mx-2 sm:flex-wrap">
            <Checkbox
                onChange={onChange}
                checked={value === 'any'}
                name={'any'}
                content={'Any'}
            />
            <Checkbox
                onChange={onChange}
                checked={value.includes('balcony')}
                name={'balcony'}
                content={'Balcony'}
            />
            <Checkbox
                onChange={onChange}
                checked={value.includes('pool')}
                name={'pool'}
                content={'Pool'}
            />
            <Checkbox
                onChange={onChange}
                checked={value.includes('beach')}
                name={'beach'}
                content={'Beach'}
            />
            <Checkbox
                onChange={onChange}
                checked={value.includes('petFriendly')}
                name={'petFriendly'}
                content={'Pet friendly'}
            />
            <Checkbox
                onChange={onChange}
                checked={value.includes('kidFriendly')}
                name={'kidFriendly'}
                content={'Kid friendly'}
            />
            <Checkbox
                onChange={onChange}
                checked={value.includes('parking')}
                name={'parking'}
                content={'Parking'}
            />
            <Checkbox
                onChange={onChange}
                checked={value.includes('airConditioning')}
                name={'airConditioning'}
                content={'Air Conditioning'}
            />
        </div>
    )
}

function SearchFilters() {
    const [isOpen, setOpen] = useToggle(false)

    const filters = useSelector((s) => s.filters)

    const dispatch = useDispatch()

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
                    onClick={() => setOpen((o) => !o)}
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
                                <select
                                    value={filters.bedrooms}
                                    onChange={(e) => {
                                        dispatch(
                                            locationActions.updateFilter({
                                                filter: 'bedrooms',
                                                value: e.target.value,
                                            })
                                        )
                                    }}
                                    className="mt-1 form-select block w-full bg-gray-900 text-white shadow focus:bg-gray-600"
                                >
                                    <option value={'all'}>All</option>

                                    <option value={'2'}>2</option>
                                    <option value={'3'}>3</option>
                                    <option value={'4'}>4</option>
                                    <option value={'5'}>5</option>
                                </select>
                            </label>
                            <label className="block w-1/2 px-2 sm:w-1/4 lg:w-1/2">
                                <span className="text-sm font-semibold text-gray-500">
                                    Bathrooms
                                </span>
                                <select
                                    value={filters.bathrooms}
                                    onChange={(e) => {
                                        dispatch(
                                            locationActions.updateFilter({
                                                value: e.target.value,
                                                filter: 'bathrooms',
                                            })
                                        )
                                    }}
                                    className="mt-1 form-select bg-gray-900 block w-full text-white shadow focus:bg-gray-600"
                                >
                                    <option value={'all'}>All</option>

                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </label>
                            <label className="mt-4 block  bg-gray-900w-full px-2 sm:mt-0 sm:w-1/2 lg:mt-4 lg:w-full">
                                <span className="text-sm font-semibold text-gray-500">
                                    Price Range
                                </span>
                                <select
                                    value={filters.priceRange}
                                    onChange={(e) => {
                                        dispatch(
                                            locationActions.updateFilter({
                                                value: e.target.value,
                                                filter: 'priceRange',
                                            })
                                        )
                                    }}
                                    className="mt-1 bg-gray-900 form-select block w-full text-white shadow focus:bg-gray-600"
                                >
                                    <option value={'all'}>All</option>
                                    <option value={'250'}>Up to $250/wk</option>
                                    <option value={'350'}>Up to $350/wk</option>
                                    <option value={'500'}>Up to $500/wk</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="px-4 py-4 border-t border-gray-900 lg:w-1/3 lg:border-l xl:w-full">
                        <span className="block text-sm font-semibold text-gray-500">
                            Reviews
                        </span>
                        <RadioGroup />
                    </div>
                    <div className="px-4 py-4 border-t border-gray-900 lg:w-1/3 lg:border-l xl:w-full">
                        <span className="block text-sm font-semibold text-gray-500">
                            Amenities
                        </span>
                        <CheckBoxGroup />
                    </div>
                </div>
                <div className="bg-gray-900 px-4 py-4 space-y-2 space-x-0 sm:space-x-2 xl:space-x-0 sm:text-right">
                    <Button
                        onClick={(e) => {
                            dispatch(locationActions.filterLocations())
                        }}
                        content={'Update Filter'}
                        background={'blue'}
                    />
                    <Button
                        onClick={(e) => {
                            dispatch(locationActions.reset())
                        }}
                        content={'Reset'}
                        background={'red'}
                    />
                </div>
            </form>
        </section>
    )
}

export default SearchFilters
