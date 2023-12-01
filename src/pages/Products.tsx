import React, { useEffect, useState } from 'react'
import { productsService } from '../services/services'
import styles from "../app.module.css";
import Card from '../components/Card';

export interface Product {
    id: string;
    title: string;
    price: number;
    category: string;
    image: string;
    rating: any
}

const Products = () => {

    const [data, setData] = useState<Product[]>([])
    const [originalData, setOriginalData] = useState<Product[]>([]);
    const [search, setSearch] = useState<string>('')
    const [load, setLoad] = useState<boolean>(false)
    const [sortOrder, setSortOrder] = useState(false)

    const forGetProducts = async () => {
        try {
            setLoad(true)
            const res = await productsService();
            setData(res);
            setOriginalData(res);
        } catch (error) {
            console.log(error);
            setLoad(false)
        }
    }

    const forFilter = (newItem: string) => {
        if (newItem === '') {
            setData(originalData);
        } else {
            const filterData = originalData.filter((item: Product) => {
                return item.category.toLocaleLowerCase() === newItem.toLocaleLowerCase();
            });
            setData(filterData);
        }
    };


    const forSortTitle = () => {
        setSortOrder(!sortOrder)
        const res = [...data].sort((a: Product, b: Product) => {
            return sortOrder ? (a.title > b.title ? 1 : -1) : (a.title < b.title ? 1 : -1)
        })
        setData(res)
    }

    const forSortRating = () => {
        setSortOrder(!sortOrder)
        const res = [...data].sort((a: Product, b: Product) => {
            return sortOrder ? (a.rating.rate > b.rating.rate ? 1 : -1) : (a.rating.rate < b.rating.rate ? 1 : -1)
        })
        setData(res)
    }


    useEffect(() => {
        forGetProducts()
    }, [])

    return (
        <React.Fragment>


            <div className="flex justify-center my-8">
                <input className={`${styles.input} py-3 px-4 my-1 block w-4/5 bg-white text-md border-solid border-2 border-black`}
                    type="text"
                    placeholder="Search products by title & category..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>


            <div className="flex justify-around items-center flex-col md:flex-row sm:flex-row">
                <div>
                    Sort By : <button type="button" onClick={forSortTitle} className="text-gray-900 bg-white border border-gray-300 font-medium rounded-3xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600">Title</button>

                    <button type="button" onClick={forSortRating} className="text-gray-900 bg-white border border-gray-300 font-medium rounded-3xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600">Rating</button>
                </div>


                <div>
                    Filter By : <button className="text-gray-900 bg-white border border-gray-300 font-medium rounded-3xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600" onClick={() => forFilter('')}>All</button>

                    <button className="text-gray-900 bg-white border border-gray-300 font-medium rounded-3xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600" onClick={() => forFilter('electronics')}>Electronics</button>
                    <button className="text-gray-900 bg-white border border-gray-300 font-medium rounded-3xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600" onClick={() => forFilter("jewelery")}>Jewelery</button>
                    <button className="text-gray-900 bg-white border border-gray-300 font-medium rounded-3xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600" onClick={() => forFilter("men's clothing")}>Mens</button>
                    <button className="text-gray-900 bg-white border border-gray-300 font-medium rounded-3xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600" onClick={() => forFilter("women's clothing")}>Womens</button>
                </div>
            </div>

            <div className='flex flex-wrap justify-center items-center h-full'>
                {load ? data.filter((item: Product) => {
                    return (
                        item.title.toLowerCase().includes(search.toLowerCase()) ||
                        item.category.toLowerCase().includes(search.toLowerCase())
                    );
                }).map((item: Product) => {
                    return <Card key={item.id} item={item} />;
                }) : 'loading...'}
            </div>

        </React.Fragment>
    )
}

export default Products