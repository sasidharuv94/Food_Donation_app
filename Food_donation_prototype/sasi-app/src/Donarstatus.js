
import './Donarstatus.css'; // Import the CSS file for styles


import { useForm } from 'react-hook-form'
import {  useNavigate } from 'react-router-dom';

export default function Donarstatus() {
  const navigate = useNavigate();
  
  let {register,handleSubmit,formState:{errors}}=useForm()
  function handleFormSubmit(foodDetails){
      fetch(`http://localhost:4000/food`,{
        method:'POST',
        headers:{'Content-Type':"application/json"},
        body: JSON.stringify(foodDetails)
      })
      .then(res=>{
        if(res.status===201)
        {
          alert("Successfully uploaded your donation details!")
        }
        if(res.status===201){
          navigate('/donar/Login')
        }
      })
  }

  return (
    <div className="donar-status-container">
      <h1>Hello Donar</h1>

      <form onSubmit={handleSubmit(handleFormSubmit) }className="submission-form">
        <label >
          Type of Food:
          <select {...register('typeoffood',{required:true})}>
            {errors.firstname?.type==='required'&& <p className='text-danger'>First Name Required</p> }
            <option value="" disabled selected >Select</option>
            <option value="veg">Veg</option>
            <option value="non-veg">Non-Veg</option>
          </select>
          {errors.typeoffood?.type==='required'&& <p className='text-danger'>Type of Food Required</p> }
          </label>
        

        <label>
          Amount of Food (kg):
          <input type="number" {...register('amount',{required:true})} />
          {errors.amount?.type==='required'&& <p className='text-danger'>Amount Required</p> }
        </label>

        <label>
          Restaurant Name:
          <input type="text" {...register('restaurantname',{required:true})} />
          {errors.restaurantname?.type==='required'&& <p className='text-danger'>Restaurant Name Required</p> }
        </label>

        <label>
          Restaurant Mobile No:
          <input type="tel" {...register('restaurantmobileno',{required:true})}/>
          {errors.restaurantmobileno?.type==='required'&& <p className='text-danger'>Restaurant Mobile No Required</p> }
        </label>
        <label>
          Restaurant Address:
          <input type="text" {...register('restaurantaddress',{required:true})} />
          {errors.restaurantaddress?.type==='required'&& <p className='text-danger'>Restaurant Address Required</p> }
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
