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
  return (
      <>
      <div style={myDiv}>
        <section className='container'>
          {/* <div className='row'>
            <div className='col-lg-3 col-md-4 col-sm-6 card-header' style={cardDiv}>
              {
                myBudget.length==0?<p className='fw-semibold fs-3 ms-5'>You haven't made a budget yet</p>:
                myBudget.map((item,index)=>(
                <div key={index}>
                <div>{index+1}.</div>
                <div className='fw-bold'>{item.category}</div>
                <div>{item.budget}</div>
                <div>{item.price}</div>
                <button style={mybtn} className='btn' onClick={()=>deleteOne(item.budget,item.price)}>Delete</button>
                </div>
              ))
              }
            </div>
         </div> */}
         <div className='col-lg-3 col-md-6 col-sm-12'>
         {
          myBudget.length==0?<p className='fw-semibold fs-3 ms-5'>You haven't made a budget yet</p>:
          myBudget.map((item,index)=>(
         <div className="card col-lg-3 col-md-3 col-sm-12" key={index}>
          <div className="card-header">
            Featured
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{item.category}</li>
            <li className="list-group-item">{item.budget}</li>
            <li className="list-group-item">{item.price}</li>
          </ul>
        </div>
          ))
        }
        </div>
      </section>
    <a href="/addbudget" className='text-decoration-none ms-lg-5'>Click here to add budgets</a>
    </div>
    </>
  )
}

export default Budget