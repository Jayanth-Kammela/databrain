import React from 'react'
import styles from "../app.module.css";

interface componetProps {
    data: any;
    changeFunction: any;
}

const InputComponent: React.FC<componetProps> = (data) => {

    return (
        <React.Fragment>
            <div className='my-4' key={data.data}>
                <label className={styles.emaillb}>{data.data.label}</label>
                <div>
                    <input type={data.data.type} name={data.data.name} className={`${styles.input} py-3 px-4 my-1 block w-full bg-white text-md border-solid border-2 border-black`} placeholder={data.data.placeholder} onChange={data.changeFunction} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default InputComponent