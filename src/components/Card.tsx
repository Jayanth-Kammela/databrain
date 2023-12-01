import React from 'react'
import { Product } from '../pages/Products'

type CardProps = {
    item: Product
}

const Card = ({ item }: CardProps) => {
    return (
        <React.Fragment>
            <div key={item.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
                <img className="p-8 rounded-t-lg custimg" src={item.image} alt="product image" />
                <div className="px-5 pb-5">
                    <a href="">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.title.substring(0, 30) + `...`}</h5>
                    </a>
                    <div className="flex items-center mt-2.5 mb-5">
                        <div className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{item.rating.rate}</div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="text-3xl font-bold text-gray-900 dark:text-white">${item.price}</div>
                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Card
