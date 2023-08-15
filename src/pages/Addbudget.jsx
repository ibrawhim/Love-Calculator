import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Novelist from '../images/Novelist.gif'
import 'animate.css';
import { useFormik } from 'formik';



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
            console.log(values);
            axios.post(endpoint,values)
        .then((response)=>{
            if(response){
                console.log(response.data.result);
                navigate('/cart')
            }
        })
        .catch((err)=>{
            console.log(err);
        })
        }
    })

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
                <select className='form-control' name="category" onChange={formik.handleChange}>
                    <option value="">Category</option>
                    <option value="Housing">Housing</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Food">Food</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Entertainment">Entertainment</option>
                </select>
                <input className='form-control' type="text" placeholder='Budget For?' name='budget' onChange={formik.handleChange}/>
                <input className='form-control' type="text" placeholder='Estimsted price'  name='price' onChange={formik.handleChange}/>
                <input className='form-control' type="text" placeholder='Quantity'  name='quantity' onChange={formik.handleChange}/>
            <button style={myBtn} className='btn w-100 text-light fw-bold' type='submit'>Add Budget</button>
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