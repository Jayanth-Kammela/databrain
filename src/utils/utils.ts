export interface InputData {
    label: string;
    placeholder: string;
    name: string;
    type: string | number | any;
}

export interface InputDataProps {
    data: InputData[];
}

export const firstName: InputData = {
    label: 'First Name',
    placeholder: 'Enter first name',
    name: 'firstName',
    type: 'string'
}

export const lastName: InputData = {
    label: 'Last Name',
    placeholder: 'Enter last name',
    name: 'lastName',
    type: 'string'
}

export const email: InputData = {
    label: 'E-mail',
    placeholder: 'Enter Email address',
    name: 'email',
    type: 'email'
}


export const mobileNumber: InputData = {
    label: 'Mobile Number',
    placeholder: 'Enter mobile number',
    name: 'mobileNumber',
    type: 'number'
}

export const doorNo = {
    label: 'Door No',
    placeholder: 'Enter Door No',
    name: 'doorNo',
    type: 'number'
}

export const street = {
    label: 'Street Name',
    placeholder: 'Enter Street Name',
    name: 'street',
    type: 'string'
}

export const city = {
    label: 'City',
    placeholder: 'Enter City Name',
    name: 'city',
    type: 'string'
}

export const zipCode = {
    label: 'Zip Code',
    placeholder: 'Enter Zip Code',
    name: 'zipCode',
    type: 'number'
}

export const state = {
    label: 'State',
    placeholder: 'Enter State',
    name: 'state',
    type: 'string'
}

export const paymentTypes: string[] = ['UPI', 'Net Banking']

export const amountdata = {
    label: 'Amount',
    placeholder: 'Enter Amount',
    name: 'amount',
    type: 'number'
}

