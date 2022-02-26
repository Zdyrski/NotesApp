import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const handleLink = () => {
    navigate('/');
  }

  return (
    <nav>
      <div className='logo' onClick={handleLink}>
        Note App
      </div>
    </nav>
  )
}

export default Navbar