import React from 'react'
import SiteHeader from './components/SiteHeader.js'
import SearchFilters from './components/SearchFilters.js'
import PropertyCard from './components/PropertyCard'
import {useSelector} from "react-redux";



export function useToggle(initialState) {
    const [value, setValue] = React.useState(initialState)

    const toggle = React.useCallback(
        newValue => {
            if (newValue === true || newValue === false) setValue(newValue)
            else {
                setValue(v => !v)
            }
        },
        [value]
    )

    return [value, toggle]
}

function App() {
    const locations = useSelector(s=>s.locations)
    return (
        <div
            id="app"
            className="min-h-screen bg-gray-200 antialiased xl:flex xl:flex-col xl:h-screen"
        >
            <SiteHeader className="xl:flex-shrink-0" />
            <div className="xl:flex-1 xl:flex xl:overflow-y-hidden">
                <SearchFilters />
                <main className="py-6 xl:flex-1 xl:overflow-x-hidden">
                    {locations.map(location => (
                        <div className="{'mt-6': i > 0}">
                            <div className="px-4 xl:px-8">
                                <h3 className="text-gray-900 text-xl">{location.title}</h3>
                                <p className="text-gray-600">{location.description}</p>
                            </div>
                            <div className="mt-6 sm:overflow-x-auto sm:overflow-y-hidden">
                                <div className="px-4 sm:inline-flex sm:pt-2 sm:pb-8 xl:px-8">
                                    {location.properties.map((property, index) => (
                                        <div
                                            className={`sm:mt-0 sm:w-80 sm:flex-shrink-0 ${
                                                index > 0 ? 'mt-10 sm:ml-4' : ''
                                            }`}
                                        >
                                            <PropertyCard property={property} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </main>
            </div>
        </div>
    )
}

export default App
