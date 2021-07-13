import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().trim().required('Name is required'),
    username: yup.string()
        .min(8, 'Username must be at least 8 characters')
        .required('Email is required'),
    role: yup.mixed().oneOf(['engineer', 'admin']),
    password: yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(/^(?=.{8,}$)(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/, 'Password be at least 1 uppercase, 1 numeric, and 1 special character.'),
    confirm_password: yup.string()
        .oneOf([yup.ref('password'), null], 'Confirm Passoword must match Password')
        .required('Confirm Password is required')
});

export default schema;
