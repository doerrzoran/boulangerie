import { useState } from 'react';
import { usePostLoginMutation } from '../slices/gameApiSlice';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [postLogin] = usePostLoginMutation(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const response = await postLogin({ email, password }).unwrap();
      console.log(response);

    } catch (error) {
      console.error('Login failed:', error);
    }
    navigate('/')
  };

  
  return (
    <>
      
        <div>
          <h1>Login</h1>
          <form>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="password">Mot de passe:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </form>
        </div>
    
       <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;
