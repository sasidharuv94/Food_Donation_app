import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { useForm } from 'react-hook-form';
import { compareSync } from 'bcryptjs';

const Login = () => {
  let navigate=useNavigate();

  let {register,handleSubmit,formState:{errors}}=useForm();
  function handleFormSubmit(userCredentials){
    fetch(`http://localhost:4000/donar?userid=${userCredentials.userid}`)
    .then(res =>res.json())
    .then(userObj=>
      {
        if(userObj.length===0)
          alert("Invalid User")
        else
        {
          if(compareSync(userCredentials.password,userObj[0].password))
            navigate('/donar/Login/donarstatus')
          else
            alert('Invalid Password')
        }
      }
      )
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="login-form">
          <div className="input-group">
            <label htmlFor="userid">User Id:</label>
            <input
              type="text"
              id="userid"
              {...register('userid',{required:true})}
            />
            {errors.userid?.type==='required'&& <p className='text-danger'>User Id Required</p> }
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

          <button type='submit' className='btn btn-sucess'>Login</button>
          {/* type="submit" */}
        </form>
        <p>Don't have an account? <Link to="/donar/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
