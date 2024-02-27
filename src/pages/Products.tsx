import React, { useEffect, useState } from 'react'
import { productsService } from '../services/services';
import Card from '../components/Card';
import styles from "../app.module.css";

const Products = () => {

    interface Product {
        id: string;
        title: string;
        price: number;
        category: string;
        image: string;
        rating: any
    }

    const [data, setData] = useState<Product[]>([]);
    const [originalData, setOriginalData] = useState<Product[]>([]);
    const [load, setLoad] = useState<boolean>(false);
    const [search, setSearch] = useState<string>("");
    const [sort, setSort] = useState<boolean>(false)

    const getProducts = async () => {
        try {
            setLoad(true)
            const response = await productsService()
            setData(response);
            setOriginalData(response);
            setLoad(false)
        } catch (error: any) {
            setLoad(false)
            throw Error(error.message)
        }
    }

    const forFilter = (item: string) => {
        if (item === '') {
            setData(originalData);
        } else {
            const filteredData = [...originalData].filter((itemx: Product) => {
                return itemx.category.toLowerCase() === item.toLowerCase();
            });
            setData(filteredData);
        }
    }
    

    const sortingFunTitle = () => {
        setSort(!sort)
        const sortedData = [...data].sort((x: Product, y: Product) => {
            return (sort ? (x.title < y.title ? 1 : -1) : (x.title > y.title ? 1 : -1))
        })
        setData(sortedData);
    }

    const sortingFunRating = () => {
        setSort(!sort);
        const sortedData = [...data].sort((x: Product, y: Product) => {
            return sort ? (x.rating.rate < y.rating.rate ? 1 : -1) : (x.rating.rate > y.rating.rate ? 1 : -1)
        })
        console.log(sortedData);

        setData(sortedData)
    }

    useEffect(() => {
        getProducts()
    }, [])


    return (
        <React.Fragment>

            <div className="flex justify-center my-8">
                <input className={`${styles.input} py-3 px-4 my-1 block w-4/5 bg-white text-md border-solid border-2 border-black`}
                    type="text"
                    placeholder="Search products by title & category..." value={search} onChange={(e: any) => setSearch(e.target.value)} />
            </div>

            <div className="flex justify-around items-baseline my-8">
                <div>
                    Sort by :
                    <button className="text-gray-900 bg-white border border-gray-300 font-medium rounded-3xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600" onClick={sortingFunTitle}>
                        Title
                    </button>
                    <button className="text-gray-900 bg-white border border-gray-300 font-medium rounded-3xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600" onClick={sortingFunRating}>
                        Rating
                    </button>
                </div>

                <div>
                    Filter by :
                    <button className="text-gray-900 bg-white border border-gray-300 font-medium rounded-3xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600" onClick={()=>forFilter('')}>
                        All
                    </button>
                    <button className="text-gray-900 bg-white border border-gray-300 font-medium rounded-3xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600" onClick={() => forFilter('electronics')}>Electronics</button>
                    <button className="text-gray-900 bg-white border border-gray-300 font-medium rounded-3xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600" onClick={() => forFilter("jewelery")}>Jewelery</button>
                    <button className="text-gray-900 bg-white border border-gray-300 font-medium rounded-3xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600" onClick={() => forFilter("men's clothing")}>Mens</button>
                    <button className="text-gray-900 bg-white border border-gray-300 font-medium rounded-3xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600" onClick={() => forFilter("women's clothing")}>Womens</button>
                </div>
            </div>

            <div className="flex flex-wrap justify-center items-center">
                {
                    load ? <h1>Loading...</h1> : data.filter((item: Product) => {
                        return (item.category.toLowerCase().includes(search.toLowerCase()) || item.title.toLowerCase().includes(search.toLowerCase()))
                    }).map((item: Product) => {
                        return <Card key={item.id} item={item} />
                    })

                }
            </div>
        </React.Fragment>
    )
}

export default Products