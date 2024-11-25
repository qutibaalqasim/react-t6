import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react'

export default function Login() {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },onSubmit: async()=>{
            const {data} = await axios.post('https://ecommerce-node4.onrender.com/auth/signup',formik.values);
            console.log(data);
        }, validate: (values) =>{
            let errors = {};

            if(values.email.length < 10 ){
                errors.email = 'Invalid Email Address';
            }

            if(values.password.length < 8){
                errors.password = 'Password must be at least 8 characters long';
            }

            return errors;
    }
    });
  return (
    <div>
        <h1 className='text-center mt-4 text-success'>Login</h1>

        <form onSubmit={formik.handleSubmit} className='mt-4'>
            <div className="row">
       <div className="form-floating mb-3 col-lg-5 offset-1">
            <input type="email" className="form-control" id="floatingInput" name='email' onBlur={formik.handleBlur} value={formik.email} onChange={formik.handleChange} placeholder="" />
            <label htmlFor="floatingInput">userEmail</label>
            {formik.touched.email && formik.errors.email ? <div className='alert alert-danger'>{formik.errors.email}</div>   :null}
        </div>

        <div className="form-floating mb-3 col-lg-5 ">
            <input type="password" className="form-control" id="floatingInput" name='password' onBlur={formik.handleBlur} value={formik.password} onChange={formik.handleChange} placeholder="" />
            <label htmlFor="floatingInput">userPassword</label>
            {formik.touched.password && formik.errors.password ? <div className='alert alert-danger'>{formik.errors.password}</div>   :null}
        </div>


        <button type='submit' className='btn btn-outline-success col-lg-5 offset-3'>Login</button>
        </div>

        </form>
    </div>
  )
}
