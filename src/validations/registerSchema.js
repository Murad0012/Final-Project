import * as Yup from 'yup'

export const RegisterSchema = Yup.object().shape({
    name: Yup.string().required("Name required!").min(3,"Min length is 3!").max(15,"Max length is 15!"),
    userName: Yup.string().required("Username required!").min(3,"Min length is 4!").max(15,"Max length is 12!"),
    email: Yup.string().required('Email is required!').email('Invalid email format!'),
    password: Yup.string()
        .required('Password is required!')
        .matches(/^(?=.*[a-zA-Z])(?=.*\d)/, 'Password needs a letter and a number'),
})