import React from 'react'
import Tag from './Elements/Tag'
import Rating from './Elements/Rating'

function formattedPrice(price) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })

    return formatter.format(price / 100)
}

function PropertyCard(props) {
    const { property } = props
    return (
        <div>
            <div className="relative pb-5/6">
                <img
                    className="absolute inset-0 h-full w-full rounded-lg shadow-md object-cover"
                    src={property.imageUrl}
                    alt=""
                />
            </div>
            <div className="relative px-4 -mt-16">
                <div className="bg-white rounded-lg px-4 py-4 shadow-lg">
                    <div className="flex items-baseline">
                        <Tag text={'Plus'} color={'teal'} background={'teal'} />
                        <div className="ml-2 text-xs text-gray-600 font-semibold uppercase tracking-wide">
                            {property.beds} {property.beds === 1 ? 'bed' : 'beds'} &bull;{' '}
                            {property.baths} {property.baths === 1 ? 'bath' : 'baths'}
                        </div>
                    </div>
                    <h4 className="mt-1 text-gray-900 font-semibold text-lg">{property.title}</h4>
                    <div className="mt-1">
                        <span className="text-gray-900">{formattedPrice(property.price)}</span>
                        <span className="ml-1 text-sm text-gray-600">/wk</span>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-600">
                        <Rating rating={property.rating} color={'teal'} background={'grey'} />
                        <span className="ml-2">{property.reviewCount} reviews</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyCard
