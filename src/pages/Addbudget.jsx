import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Novelist from '../images/Novelist.gif'
import 'animate.css';
import { useFormik } from 'formik';
import * as Yup from 'yup'



const Addbudget = () => {

    let endpoint = 'http://localhost:4999/budget/addbudget'
    let navigate = useNavigate()
    
    let formik = useFormik({
        initialValues: {
            budget: '',
            price: '',
            quantity: '',
            category: ''
        },
        onSubmit: (values)=>{
            // console.log(values);
            axios.post(endpoint,values)
        .then((response)=>{
            if(response){
                console.log(response.data.result);
                navigate('/budget')
            }
        })
        .catch((err)=>{
            console.log(err);
        })
        },
        validationSchema: Yup.object({
            budget: Yup.string().required('Field is empty'),
            price: Yup.number().typeError('Please enter a valid number')
            .required('Field is empty'),
            quantity: Yup.number().typeError('Please enter a valid number').required('Field is empty'),
            category: Yup.string().required('Please select a category')
        })
    })
    // console.log(formik.errors);
    let myDiv = {
        height: '80vh',
    }
    let myBtn = {
        backgroundColor: '#6b533b'
    }
  return (
    <>
        <div style={myDiv} className='row container-fluid' >
        <div className='col-lg-5 col-md-6 col-sm-12 my-3 mt-lg-5 ms-lg-5 animate__animated  animate__backInLeft'>
            <form action="" onSubmit={formik.handleSubmit}>
                <select className={formik.touched.category && formik.errors.category? 'form-control mt-2 is-invalid':'form-control mt-2'} name="category" onChange={formik.handleChange} onBlur={formik.handleBlur}>
                    <option value="">Select a category</option>
                    <option value="Housing">Housing</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Food">Food</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Entertainment">Entertainment</option>
                </select>
                <small className='text-danger'>{formik.touched.category && formik.errors.category}</small>
                <input className={formik.touched.budget && formik.errors.budget? 'form-control mt-2 is-invalid':'form-control mt-2'} type="text" placeholder='Budget For?' name='budget' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                <small className='text-danger'>{formik.touched.budget && formik.errors.budget}</small>
                <input className={formik.touched.price && formik.errors.price? 'form-control mt-2 is-invalid':'form-control mt-2'} type="text" placeholder='Estimsted price'  name='price' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                <small className='text-danger'>{formik.touched.price && formik.errors.price}</small>
                <input className={formik.touched.quantity && formik.errors.quantity? 'form-control mt-2 is-invalid':'form-control mt-2'} type="text" placeholder='Quantity'  name='quantity' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                <small className='text-danger'>{formik.touched.quantity && formik.errors.quantity}</small>
            <button style={myBtn} className='btn w-100 mt-2 text-light fw-bold' type='submit'>Add Budget</button>
            </form>
        </div>
        <div className='col-lg-5 col-md-6 col-sm-12 ms-lg-5 mt-lg-4'>
            <img  className='img-fluid h-75 w-100' src={Novelist} alt="" />
        </div>
    </div>
    </>
  )
}

export default Addbudget