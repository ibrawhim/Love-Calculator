import axios from 'axios'
import React, { useEffect, useState } from 'react'



const Cart = () => {
  const [myBudget, setmyBudget] = useState([])
  let url = 'http://localhost:4999/budget/cart'
  let url2 = 'http://localhost:4999/budget/delete'
  useEffect(() => {
    axios.get(url)
    .then((response)=>{
      setmyBudget(response.data.result)
    })
    .catch((err)=>{
      console.log(err);
    })
  }, [])
  const deleteOne = (budget,price) => {
    console.log(budget,price);
    

    axios.post(url2,{budget,price})
    .then((res)=>{
      setmyBudget(res.data.newResult);
    })
  
  }

  return (
      <>
      <a href="/addbudget">Go back</a>
      
      {
        myBudget.length==0?<p>budget is empty</p>:
        myBudget.map((item,index)=>(
          <div key={index}>
        <div>{index+1}.</div>
        <div className='fw-bold'>{item.category}</div>
        <div>{item.budget}</div>
        <div>{item.price}</div>
        <button onClick={()=>deleteOne(item.budget,item.price)}>Delete</button>
        </div>
      ))
      
    }
    </>
  )
}

export default Cart