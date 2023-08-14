import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Novelist from '../images/Novelist.gif'




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
  return (
    <>
    <div className='row'>
        <div className='col-lg-6 col-md-6 col-sm-12'>
            <select name="Category" value={category} onChange={(e)=>setcategory(e.target.value)}>
                <option value="">Category</option>
                <option value="Housing">Housing</option>
                <option value="Utilities">Utilities</option>
                <option value="Food">Food</option>
                <option value="Transportation">Transportation</option>
                <option value="Entertainment">Entertainment</option>
            </select>
            <input type="text" placeholder='budget for?' name='budget' onChange={(e)=>setbudget(e.target.value)} value={budget}/>
            <input type="text" placeholder='Estimsted price'  name='price' onChange={(e)=>setprice(e.target.value)} value={price}/>
            <input type="text" placeholder='Quantity'  name='quantity' onChange={(e)=>setquantity(e.target.value)} value={quantity}/>
            <button onClick={addBudget}>Add Budget</button>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12'>
            <img className='img-fluid' src={Novelist} alt="" />
        </div>
    </div>
    </>
  )
}

export default Addbudget