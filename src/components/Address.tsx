import React from 'react'
import InputComponent from './InputComponent';
import styles from "../app.module.css";
import { city, doorNo, state, street, zipCode } from '../utils/utils';

interface PersonalProps {
  forAddressDetails: any;
  Errors: any
}

const Address: React.FC<PersonalProps> = ({ forAddressDetails, Errors }) => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <form className={styles.formContainer} action="">
          <div>
            <InputComponent data={doorNo} changeFunction={forAddressDetails} />
            {Errors.doorNo && <p className={styles.errorMsg}>{Errors.doorNo}</p>}
            <InputComponent data={street} changeFunction={forAddressDetails} />
            {Errors.street && <p className={styles.errorMsg}>{Errors.street}</p>}
            <InputComponent data={city} changeFunction={forAddressDetails} />
            {Errors.city && <p className={styles.errorMsg}>{Errors.city}</p>}
            <InputComponent data={state} changeFunction={forAddressDetails} />
            {Errors.state && <p className={styles.errorMsg}>{Errors.state}</p>}
            <InputComponent data={zipCode} changeFunction={forAddressDetails} />
            {Errors.zip && <p className={styles.errorMsg}>{Errors.zip}</p>}
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}

export default Address