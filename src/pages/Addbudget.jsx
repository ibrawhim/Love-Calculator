import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Novelist from '../images/Novelist.gif'
import 'animate.css';



const Addbudget = () => {
    const [budget, setbudget] = useState('')
    const [price, setprice] = useState('')
    const [quantity, setquantity] = useState('')
    const [category, setcategory] = useState('')

    let endpoint = 'http://localhost:4999/budget/addbudget'
    
    let navigate = useNavigate()

   const addBudget = () => {
        let myBudget = {
            category,
            quantity,
            price,
            budget
        }
        console.log(myBudget);
        axios.post(endpoint,myBudget)
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
    let myDiv = {
        height: '80vh'
    }
    let myBtn = {
        backgroundColor: '#6b533b'
    }
  return (
    <>
    <div style={myDiv} className='row container-fluid' >
        <div className='col-lg-5 col-md-6 col-sm-12 my-3 mt-lg-5 ms-lg-5 animate__animated  animate__backInLeft'>
            <div className='my-3'>
                <select className='form-control' name="Category" value={category} onChange={(e)=>setcategory(e.target.value)}>
                    <option value="">Category</option>
                    <option value="Housing">Housing</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Food">Food</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Entertainment">Entertainment</option>
                </select>
            </div>
            <div className='my-3'>
                <input className='form-control' type="text" placeholder='budget for?' name='budget' onChange={(e)=>setbudget(e.target.value)} value={budget}/>
            </div>
            <div className='my-3'>
                <input className='form-control' type="text" placeholder='Estimsted price'  name='price' onChange={(e)=>setprice(e.target.value)} value={price}/>
            </div>
            <div className='my-3'>
                <input className='form-control' type="text" placeholder='Quantity'  name='quantity' onChange={(e)=>setquantity(e.target.value)} value={quantity}/>
            </div>
            <button style={myBtn} className='btn w-100 text-light fw-bold' onClick={addBudget}>Add Budget</button>
        </div>
        <div className='col-lg-5 col-md-6 col-sm-12 ms-lg-5 mt-lg-4'>
            <img  className='img-fluid h-75 w-100' src={Novelist} alt="" />
        </div>
    </div>
    </>
  )
}

export default Addbudget