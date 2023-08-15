import axios from 'axios'
import React, { useEffect, useState } from 'react'



const Budget = () => {
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
  let myDiv = {
    height: '80vh',
    backgroundColor: '#f5dcb0'
  }

  return (
      <>
      <div style={myDiv}>
      {
        myBudget.length==0?<p className='fw-semibold fs-3 ms-5'>You haven't made a budget yet</p>:
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
    <a href="/addbudget" className='text-decoration-none ms-5'>Click here to add budgets</a>
    </div>
    </>
  )
}

export default Budget