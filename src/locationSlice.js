import { createSlice } from '@reduxjs/toolkit'

const locations = [
    {
        title: 'Los Angeles',
        description:
            'Live like the stars in these luxurious Southern California estates.',
        properties: [
            {
                imageUrl:
                    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                beds: 3,
                baths: 2,
                title: 'Modern home in city center',
                price: 190000,
                reviewCount: 34,
                rating: 2,
                amenities: [
                    'balcony',
                    'pool',
                    'beach',
                    'kidFriendly',
                    'parking',
                    'airConditioning',
                ],
            },
            {
                imageUrl:
                    'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                beds: 4,
                baths: 1,
                title: 'Quiet living outside the city',
                price: 175000,
                reviewCount: 12,
                rating: 3,
                amenities: [
                    'balcony',
                    'pool',
                    'beach',
                    'petFriendly',
                    'kidFriendly',
                    'parking',
                ],
            },
            {
                imageUrl:
                    'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
                beds: 5,
                baths: 4,
                title: 'Renovated apartment uptown',
                price: 200000,
                reviewCount: 54,
                rating: 5,
                amenities: [
                    'pool',
                    'beach',
                    'petFriendly',
                    'kidFriendly',
                    'parking',
                    'airConditioning',
                ],
            },
            {
                imageUrl:
                    'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                beds: 3,
                baths: 2,
                title: 'Family home in the suburbs',
                price: 115000,
                reviewCount: 34,
                rating: 4,
                amenities: [
                    'balcony',
                    'pool',
                    'beach',
                    'petFriendly',
                    'kidFriendly',
                    'parking',
                    'airConditioning',
                ],
            },
        ],
    },
    {
        title: 'Phoenix',
        description:
            'Escape the cold and enjoy great weather without breaking the bank.',
        properties: [
            {
                imageUrl:
                    'https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
                beds: 3,
                baths: 2,
                title: 'Modern home in city center',
                price: 190000,
                reviewCount: 34,
                rating: 4,
                amenities: [
                    'balcony',
                    'pool',
                    'petFriendly',
                    'kidFriendly',
                    'parking',
                    'airConditioning',
                ],
            },
            {
                imageUrl:
                    'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
                beds: 4,
                baths: 1,
                title: 'Quiet living outside the city',
                price: 175000,
                reviewCount: 12,
                rating: 3,
                amenities: [
                    'pool',
                    'petFriendly',
                    'kidFriendly',
                    'parking',
                    'airConditioning',
                ],
            },
            {
                imageUrl:
                    'https://images.unsplash.com/photo-1472224371017-08207f84aaae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                beds: 5,
                baths: 4,
                title: 'Renovated apartment uptown',
                price: 200000,
                reviewCount: 54,
                rating: 5,
                amenities: [
                    'balcony',
                    'pool',
                    'beach',
                    'kidFriendly',
                    'parking',
                    'airConditioning',
                ],
            },
            {
                imageUrl:
                    'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                beds: 3,
                baths: 2,
                title: 'Family home in the suburbs',
                price: 115000,
                reviewCount: 34,
                rating: 4,
                amenities: [
                    'balcony',
                    'pool',
                    'petFriendly',
                    'kidFriendly',
                    'parking',
                ],
            },
        ],
    },
    {
        title: 'Dallas',
        description:
            'Experience Texas living in these awesome ranch-style homes.',
        properties: [
            {
                imageUrl:
                    'https://images.unsplash.com/photo-1471231681582-352356ab45a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
                beds: 3,
                baths: 2,
                title: 'Modern home in city center',
                price: 190000,
                reviewCount: 34,
                rating: 4,
                amenities: [
                    'balcony',
                    'pool',
                    'petFriendly',
                    'kidFriendly',
                    'parking',
                    'airConditioning',
                ],
            },
            {
                imageUrl:
                    'https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
                beds: 4,
                baths: 1,
                title: 'Quiet living outside the city',
                price: 175000,
                reviewCount: 12,
                rating: 3,
                amenities: [
                    'balcony',
                    'pool',
                    'petFriendly',
                    'kidFriendly',
                    'parking',
                    'airConditioning',
                ],
            },
            {
                imageUrl:
                    'https://images.unsplash.com/photo-1432303492674-642e9d0944b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                beds: 5,
                baths: 4,
                title: 'Renovated apartment uptown',
                price: 200000,
                reviewCount: 54,
                rating: 5,
                amenities: [
                    'balcony',
                    'pool',
                    'beach',
                    'kidFriendly',
                    'parking',
                    'airConditioning',
                ],
            },
            {
                imageUrl:
                    'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                beds: 3,
                baths: 2,
                title: 'Family home in the suburbs',
                price: 115000,
                reviewCount: 34,
                rating: 4,
                amenities: [
                    'balcony',
                    'pool',
                    'beach',
                    'petFriendly',
                    'kidFriendly',
                    'parking',
                    'airConditioning',
                ],
            },
        ],
    },
]
const isAll = (value, all = 'all') => value === all

const isBathFilter = (value, filter) =>
    isAll(filter) ? true : Number(filter) === Number(value)

const isBedroomFilter = (value, filter) =>
    isAll(filter) ? true : Number(filter) === Number(value)

const isReviewFilter = (value, filter) =>
    isAll(filter) ? true : Number(filter) <= Number(value)

const isPriceFilter = (value, filter) =>
    isAll(filter) ? true : Number(filter) <= Number(value / 100 / 4)

const isAmenityFilter = (value, filter) =>
    isAll(filter, 'any')
        ? true
        : value.sort().join('_') === filter.sort().join('_')

const initialFilters = {
    bathrooms: 'all',
    bedrooms: 'all',
    priceRange: 'all',
    reviews: 'all',
    amenities: 'any',
}
const allAmenities = [
    'balcony',
    'pool',
    'beach',
    'petFriendly',
    'kidFriendly',
    'parking',
    'airConditioning',
]
export const locationSlice = createSlice({
    name: 'location',
    initialState: {
        allLocations: locations,
        locations,
        filters: initialFilters,
    },
    reducers: {
        updateFilter: (state, action) => {
            state.filters[action.payload.filter] = action.payload.value
        },
        updateAmenitiesFilter: (state, action) => {
            const amenity = action.payload
            const value = state.filters.amenities
            if (amenity === 'any' && value === 'any') {
                state.filters.amenities = allAmenities
                return
            } else if (amenity === 'any' && value !== 'any') {
                state.filters.amenities = amenity
                return
            }

            let index = value.indexOf(amenity)
            if (index !== -1) {
                state.filters.amenities = value.filter((v) => v !== amenity)
            } else state.filters.amenities = [...value, amenity]
        },
        filterLocations: (state) => {
            state.locations = state.allLocations.map((location) => {
                const props = location.properties.filter((p) => {
                    return (
                        isBathFilter(p.baths, state.filters.bathrooms) &&
                        isBedroomFilter(p.beds, state.filters.bedrooms) &&
                        isReviewFilter(p.rating, state.filters.reviews) &&
                        isAmenityFilter(p.amenities, state.filters.amenities) &&
                        isPriceFilter(p.price, state.filters.priceRange)
                    )
                })
                return { ...location, properties: props }
            })
        },

        reset: (state) => {
            state.filters = initialFilters
            state.locations = state.allLocations
        },
    },
})

export const locationReducer = locationSlice.reducer

export const locationActions = locationSlice.actions
