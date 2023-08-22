import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SecondPage = () => {
    const userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');
    const navigate = useNavigate();
    useEffect(() => {
       
        if (!userDetails) {
          alert('Please provide your details first.');
          navigate('/');
        }
      }, []);
    return (
        <div>
           <h1>Welcome to the Second Page</h1> 
        </div>
    );
};

export default SecondPage;