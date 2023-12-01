import React, { useEffect, useState } from 'react'
import { productsService } from '../services/services'

interface List {
    userId: number
    id: number;
    title: string;
    completed: boolean
}

const ListPage = () => {

    const [data, setData] = useState<List[]>([])
    const [load, setLoad] = useState<boolean>(false)

    const forGetLists = async () => {
        try {
            setLoad(true)
            const res = await productsService();
            setData(res);
        } catch (error) {
            console.log(error);
            setLoad(false)
        }
    }

    useEffect(() => {
        forGetLists()
    }, [])

    return (
        <React.Fragment>
            <h1 className='text-3xl font-bold'>Lists From JSON Placeholder API</h1>
            <div>
                {load ? data.map((item: List) => {
                    return (<ul key={item.id}>
                        <li className='border p-2'>{item.title}</li>
                    </ul>)
                }) : 'loading...'}
            </div>
        </React.Fragment>
    )
}

export default ListPage