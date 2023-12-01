import React from 'react'
import { amountdata, paymentTypes } from '../utils/utils';
import styles from "../app.module.css";
import InputComponent from './InputComponent';

interface PersonalProps {
  forPaymentDetails: any;
  Errors: any
}

const Payment: React.FC<PersonalProps> = ({ forPaymentDetails, Errors }) => {
  console.log(Errors);
  
  return (
    <React.Fragment>
      <div className={styles.container}>
        <form className={styles.formContainer} action="">
            <select name="paymentType" className={`${styles.opt} w-full`} onChange={forPaymentDetails}>
              <option value="" disabled>Payment Type</option>
              {paymentTypes.map((item: string) => {
                return <option key={item} className={styles.opt} value={item}>{item}</option>
              })}
            </select>
            {Errors.paymentType && <p className={styles.errorMsg}>{Errors.paymentType}</p>}
            <InputComponent data={amountdata} changeFunction={forPaymentDetails} />
            {Errors.amount && <p className={styles.errorMsg}>{Errors.amount}</p>}
        </form>
      </div>
    </React.Fragment>
  )
}

export default Payment