import { useState} from "react";
import style from './Forms.module.css';
import imagen from './logoform.jpg'
import validation from "../Validation/Validation";







const Forms = ({ login }) => {
  
  
    const [userData, setUserData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({
         ...userData, [event.target.name]: event.target.value });
    
    setErrors(validation({
  ...userData,
  [event.target.name]: event.target.value
}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);

  }

  return(
    <form onSubmit={handleSubmit} className={style.containerPrincipal}>
      <img src="" alt="" />

      <div >
        <img className={style.imageLogo} src={imagen} alt="" />
        <label className={style.email} htmlFor="email">Email</label>
        <input className={style.input} type="text" name="email" placeholder="Enter your email.." value={userData.email} onChange={handleChange} />
        {errors.email && <p className={style.errors}>{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input className={style.input} type="password" name="password" placeholder="Enter your password.." value={userData.password} onChange={handleChange} />
        {errors.password && <p className={style.errors}>{errors.password}</p>}

      </div>
      <div>
        <button className={style.button}>Submit</button>
      </div>
    </form>
  );
}

export default Forms;
