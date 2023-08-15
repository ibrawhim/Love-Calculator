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
  let mybtn = {
    backgroundColor: '#6b533b',
    color: 'white'
  }
  let cardDiv = {
    width: '18rem'
  }
  let creamBg = {
    backgroundColor: '#f5dcb0'
  }
  let myLink = {
    color: '#6b533b'
  }
  return (
      <>
      <div style={myDiv}>
        <section className='container-fluid'>
         <div className='row'>
         {
          myBudget.length==0?<p className='fw-semibold fs-3 ms-5'>You haven't made a budget yet</p>:
          myBudget.map((item,index)=>(
         <div className="card col-lg-2 col-md-3 col-sm-12 m-2 ms-0" style={creamBg} key={index}>
          <div className="card-header" style={mybtn}>Category: {item.category}</div>
          <ul className="list-group list-group-flush" style={creamBg}>
            <li style={creamBg} className="list-group-item">Budget: {item.budget}</li>
            <li style={creamBg} className="list-group-item">Estimated Price: ${item.price}</li>
            <li style={creamBg} className="list-group-item">Quantity: {item.quantity}</li>
            <li style={creamBg} className="list-group-item">Total: ${item.quantity * item.price}</li>
            <li>
            <button style={mybtn} className='btn w-100 my-1' onClick={()=>deleteOne(item.budget,item.price)}>Delete</button>
            </li>
          </ul>
        </div>
          ))
        }
        </div>
      </section>
    <a href="/addbudget" style={myLink} className=' ms-lg-2 fw-semibold'>Click here to add budgets</a>
    </div>
    </>
  )
}

export default Budget