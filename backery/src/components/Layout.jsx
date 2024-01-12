// Layout.jsx
import PropTypes from 'prop-types';


import Nav from './Nav';
import { useGetLogoutMutation, useGetMeQuery } from '../slices/gameApiSlice';
import { Link, useNavigate } from 'react-router-dom';


export default function Layout(props) {
  const navigate = useNavigate()
  const [logout] = useGetLogoutMutation();
  const { content } = props;
  const{data, isSuccess} = useGetMeQuery()

  const handleLogout = async () => {
    try{
      await logout()
      navigate('/')
    }catch(error){
      console.error('Logout failed', error)
    }
  }


  return (
    <>
      <header>
        {isSuccess ? (
          <>
            <span>Welcome, {data.name}!</span>
            <button onClick={handleLogout}>Logout</button>
            <Link to="/backoffice">backoffice</Link>
            
          </>
        ) : (
          <span>Not logged in</span>
        )}
      </header>
      <Nav />
      <main>{content}</main>
    </>
  );
}

Layout.propTypes = {
  content: PropTypes.node.isRequired,
};
