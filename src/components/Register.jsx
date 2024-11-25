import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react'

export default function Register() {

    const formik = useFormik({
        initialValues: {
            name:'',
            email:'',
            password:''
        },onSubmit: newRegister,

        validate: (values) =>{
                let errors = {};

                if(values.name.length < 5){
                    errors.name = 'Name must be at least 5 characters long';
                }

                if(values.email.length < 10 ){
                    errors.email = 'Invalid Email Address';
                }
    
                if(values.password.length < 8){
                    errors.password = 'Password must be at least 8 characters long';
                }
    
                return errors;
        }
    });

     async  function newRegister(){
        const {data} =  await axios.post('https://ecommerce-node4.onrender.com/auth/signup',formik.values);
        console.log(data);
       }
  return (
    <div>
        <h1 className='text-center mt-4 text-success'>Register</h1>

        <form onSubmit={formik.handleSubmit} className='mt-4'>
            <div className="row">
       <div className="form-floating mb-3 col-lg-5 offset-1">
            <input type="text" className="form-control" id="floatingInput" name='name' onBlur={formik.handleBlur} value={formik.name} onChange={formik.handleChange} placeholder="" />
            <label htmlFor="floatingInput">userName</label>
            {formik.touched.name && formik.errors.name ? <div className='alert alert-danger'>{formik.errors.name}</div> :null}
        </div>

        <div className="form-floating mb-3 col-lg-5 ">
            <input type="email" className="form-control" id="floatingInput" name='email' onBlur={formik.handleBlur} value={formik.email} onChange={formik.handleChange} placeholder="" />
            <label htmlFor="floatingInput">userEmail</label>
            {formik.touched.email && formik.errors.email ? <div className='alert alert-danger'>{formik.errors.email}</div>   :null}
        </div>

        <div className="form-floating mb-3 col-lg-5 offset-3">
            <input type="password" className="form-control" id="floatingInput" name='password' onBlur={formik.handleBlur} value={formik.password} onChange={formik.handleChange} placeholder="" />
            <label htmlFor="floatingInput">userPassword</label>
            {formik.touched.password && formik.errors.password ? <div className='alert alert-danger'>{formik.errors.password}</div>   :null}
        </div>

        <button type='submit' className='btn btn-outline-success col-lg-5 offset-3'>Register</button>
        </div>

        </form>
    </div>
  )
}
