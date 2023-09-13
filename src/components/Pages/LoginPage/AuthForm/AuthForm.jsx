import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import Button from "@mui/material/Button";
import {TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {logInThunk} from "../../../../store/Reducers/authReducer";


const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

const AuthForm = () => {

    const dispatch = useDispatch();


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            dispatch(logInThunk(values.email, values.password))
        },
    });


    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                fullWidth
                size="small"
                margin="normal"
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
                sx={{marginBottom: 3}}
                fullWidth
                size="small"
                margin="normal"
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
            />
            <Button
                color="primary"
                variant="contained"
                size="small"
                fullWidth type="submit">
                Sign In
            </Button>
        </form>
    );
};

export default AuthForm;