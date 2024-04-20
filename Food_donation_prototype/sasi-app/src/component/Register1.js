import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { hashSync } from 'bcryptjs';

const Register = () => {
  const navigate = useNavigate();

  let {register,handleSubmit,formState:{errors}}=useForm()
  function handleFormSubmit(newUser){
    let hashedPassword=hashSync(newUser.password,5)
    newUser.password=hashedPassword
    fetch('http://localhost:4000/ngo',{
      method:'POST',
      headers:{'Content-Type':"application/json"},
      body: JSON.stringify(newUser)
    })
    .then(res=>{
      if(res.status===201){
        navigate('/ngo/Login1')
      }
    })
    .catch(err=>console.log("Error : ",err));
  }

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="register-form">
          <div className="input-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              {...register('firstname',{required:true})}
            />
            {errors.firstname?.type==='required'&& <p className='text-danger'>First Name Required</p> }
          </div>

          <div className="input-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              {...register('lastname',{required:true})}
            />{errors.lastname?.type==='required'&& <p className='text-danger'>Last Name Required</p> }
          </div>
          <div className="input-group">
            <label htmlFor="userid">User Id:</label>
            <input
              type="text"
              id="userid"
              {...register('userid',{required:true})}
            />{errors.userid?.type==='required'&& <p className='text-danger'>User Id Required</p> }
          </div>

          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              {...register('email',{required:true})}
            />
            {errors.email?.type==='required'&& <p className='text-danger'>Email Required</p> }
          </div>

          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              {...register('password',{required:true})}
            />
            {errors.password?.type==='required'&& <p className='text-danger'>Password Required</p> }
          </div>

          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <Link to="/ngo/login1">Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
