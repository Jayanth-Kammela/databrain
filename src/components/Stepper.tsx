import React, { useState } from 'react';
import { Box, Stepper, Step, StepLabel, Button, Typography } from '@mui/material';
import Personal from './Personal';
import Address from './Address';
import Payment from './Payment';

const steps = ['Personal details', 'Address', 'Payment'];

const StepperComponent = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    const [personal, setPersonal] = useState({ firstName: '', lastName: '', email: '', mobileNumber: '' });
    const [address, setAddress] = useState({ doorNo: '', street: '', city: '', state: '', zipCode: '' });
    const [payment, setPayment] = useState({ paymentType: '', amount: '', });


    const [personalErrors, setPersonalErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
    });

    const [addressErrors, setAddressErrors] = useState({
        doorNo: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
    });

    const [paymentErrors, setPaymentErrors] = useState({
        paymentType: '',
        amount: '',
    });

    const forPersonalDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        let formatData: any = value;

        if (value.trim() === '' && name !== 'mobileNumber') {
            setPersonalErrors((prevErrors) => ({ ...prevErrors, [name]: 'This field is required' }));
        } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            setPersonalErrors((prevErrors) => ({ ...prevErrors, [name]: 'Invalid email address' }));
        } else {
            setPersonalErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
            formatData = name === 'mobileNumber' ? parseInt(value) : value;
            setPersonal({ ...personal, [name]: formatData });
        }
    };

    const forAddressDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        let formatData: any = value;

        if (value.trim() === '' && name !== 'zip') {
            setAddressErrors((prevErrors) => ({ ...prevErrors, [name]: 'This field is required' }));
        } else {
            setAddressErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
            formatData = name === 'zip' ? parseInt(value) : value;
            setAddress({ ...address, [name]: formatData });
        }
    };


    const forPaymentDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        let formatData: any = value;

        if (value.trim() === '' && name !== 'amount') {
            setPaymentErrors((prevErrors) => ({ ...prevErrors, [name]: 'Please select payment type' }));
        } else {
            setPaymentErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
            formatData = name === 'amount' ? parseInt(value) : value;
            setPayment({ ...payment, [name]: formatData });
        }
    };

    const handleNext = () => {
        let isValid = true;

        if (activeStep === 0) {
            const { firstName, lastName, email, mobileNumber } = personal;

            if (firstName.trim() === '') {
                setPersonalErrors((prevErrors) => ({ ...prevErrors, firstName: 'First Name is required' }));
                isValid = false;
            } else {
                setPersonalErrors((prevErrors) => ({ ...prevErrors, firstName: '' }));
            }

            if (lastName.trim() === '') {
                setPersonalErrors((prevErrors) => ({ ...prevErrors, lastName: 'Last Name is required' }));
                isValid = false;
            } else {
                setPersonalErrors((prevErrors) => ({ ...prevErrors, lastName: '' }));
            }

            if (email.trim() === '' || !/\S+@\S+\.\S+/.test(email)) {
                setPersonalErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email address' }));
                isValid = false;
            } else {
                setPersonalErrors((prevErrors) => ({ ...prevErrors, email: '' }));
            }

            if (mobileNumber.toString().length !== 10) {
                setPersonalErrors((prevErrors) => ({ ...prevErrors, mobileNumber: 'Invalid mobile number' }));
                isValid = false;
            } else {
                setPersonalErrors((prevErrors) => ({ ...prevErrors, mobileNumber: '' }));
            }
        } else if (activeStep === 1) {
            const { doorNo, street, city, state, zipCode } = address;

            // Validate address details
            if (doorNo.trim() === '') {
                setAddressErrors((prevErrors) => ({ ...prevErrors, doorNo: 'Door Number is required' }));
                isValid = false;
            } else {
                setAddressErrors((prevErrors) => ({ ...prevErrors, doorNo: '' }));
            }

            if (street.trim() === '') {
                setAddressErrors((prevErrors) => ({ ...prevErrors, street: 'Street Name is required' }));
                isValid = false;
            } else {
                setAddressErrors((prevErrors) => ({ ...prevErrors, street: '' }));
            }

            if (city.trim() === '') {
                setAddressErrors((prevErrors) => ({ ...prevErrors, city: 'City Name is required' }));
                isValid = false;
            } else {
                setAddressErrors((prevErrors) => ({ ...prevErrors, city: '' }));
            }

            if (state.trim() === '') {
                setAddressErrors((prevErrors) => ({ ...prevErrors, state: 'State Name is required' }));
                isValid = false;
            } else {
                setAddressErrors((prevErrors) => ({ ...prevErrors, state: '' }));
            }

            if (zipCode.toString().length === 6) {
                setAddressErrors((prevErrors) => ({ ...prevErrors, zip: 'Invalid ZIP code' }));
                isValid = false;
            } else {
                setAddressErrors((prevErrors) => ({ ...prevErrors, zip: '' }));
            }
        } else if (activeStep === 2) {
            const { paymentType, amount } = payment;

            if (paymentType.trim() === '') {
                setPaymentErrors((prevErrors) => ({ ...prevErrors, paymentType: 'Please select payment type' }));
                isValid = false;
            } else {
                setPaymentErrors((prevErrors) => ({ ...prevErrors, paymentType: '' }));
            }

            if (amount.trim() === '') {
                setPaymentErrors((prevErrors) => ({ ...prevErrors, amount: 'This field is required' }));
                isValid = false;
            } else {
                setPaymentErrors((prevErrors) => ({ ...prevErrors, amount: '' }));
            }
        }

        if (isValid) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleFinish = () => {
        console.log({ 'Personal Details:': personal, 'Address Details': address, 'Payment Details': payment });
        handleReset()
    };

    const renderStepContent = (stepIndex: number) => {
        switch (stepIndex) {
            case 0:
                return (
                    <Personal
                        forPersonalDetails={forPersonalDetails}
                        Errors={personalErrors}
                    />
                );
            case 1:
                return (
                    <Address
                        forAddressDetails={forAddressDetails}
                        Errors={addressErrors}
                    />
                );
            case 2:
                return <Payment forPaymentDetails={forPaymentDetails} Errors={paymentErrors} />;
            default:
                return null;
        }
    };

    return (
        <Box sx={{ width: '50%', mx: 'auto',my:14 }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: { optional?: React.ReactNode } = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>

            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    {renderStepContent(activeStep)}
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={activeStep === steps.length - 1 ? handleFinish : handleNext}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
};

export default StepperComponent;
