import React from 'react';
import InputComponent from './InputComponent';
import styles from "../app.module.css";
import { email, firstName, lastName, mobileNumber } from '../utils/utils';

interface PersonalProps {
  forPersonalDetails: any;
  Errors: any
}

const Personal: React.FC<PersonalProps> = ({ forPersonalDetails, Errors }) => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <form className={styles.formContainer} action="">
          <div>
            <InputComponent data={firstName} changeFunction={forPersonalDetails} />
            {Errors.firstName && <p className={styles.errorMsg}>{Errors.firstName}</p>}
            <InputComponent data={lastName} changeFunction={forPersonalDetails} />
            {Errors.lastName && <p className={styles.errorMsg}>{Errors.lastName}</p>}
            <InputComponent data={email} changeFunction={forPersonalDetails} />
            {Errors.email && <p className={styles.errorMsg}>{Errors.email}</p>}
            <InputComponent data={mobileNumber} changeFunction={forPersonalDetails} />
            {Errors.mobileNumber && <p className={styles.errorMsg}>{Errors.mobileNumber}</p>}

          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Personal;
