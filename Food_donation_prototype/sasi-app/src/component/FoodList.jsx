import React, { useEffect,useState } from 'react'

export default function FoodList() {

    let [foodList,setFoodList]=useState([]);

    function deleteFood(index){
        let foodCopy=[...foodList]
        foodCopy.splice(index,1)
        setFoodList([...foodCopy])
        alert("Food has been taken!")
    }

    
    useEffect(()=>{
        fetch("http://localhost:4000/food")
        .then(res=>res.json())
        .then(data=>setFoodList(data))
    },[]);
  return (
    <div className='table-responsive'>
        <table className="table text-center table-striped table-sm">
            <thead className="table-dark">
                <tr>
                    <th>S.No</th>
                    <th>Type of Food</th>
                    <th>Amount(kg)</th>
                    <th>Restaurant Name</th>
                    <th>Restaurant Mobile No</th>
                    <th>Restaurant Address</th>
                    <th>Accept</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                {
                    foodList.map((food,index)=>
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{food.typeoffood}</td>
                        <td>{food.amount}</td>
                        <td>{food.restaurantname}</td>
                        <td>{food.restaurantmobileno}</td>
                        <td>{food.restaurantaddress}</td>
                        <td>
                            <button className="btn btn-success btn-sm" onClick={()=>deleteFood(index)}>✅</button>
                        </td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}
