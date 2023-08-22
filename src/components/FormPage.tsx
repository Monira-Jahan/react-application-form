import {useNavigate} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {  Container } from '@mui/material'
import { useState } from 'react';
const FormPage = () => {
    const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const navigate=useNavigate();
  const handleSubmit = () => {
    if (name && phone && email) {
      const userDetails = {
        name,
        phone,
        email,
      };
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
      
    } else {
      alert('Please enter all details.');
    }
    navigate('/secondpage');
  };
    return (
        <>
            <h1 className='text-xl font-bold py-8'>User Details Form</h1>
    <Container className="" maxWidth="sm">
      
      <form onSubmit={handleSubmit}>
        <TextField className='pb-4'
          label="Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
         ></TextField>
        <TextField
          label="Phone Number"
          fullWidth
          onChange={(e) => setPhone(e.target.value)}
          required
          />
        <TextField
          label="Email"
          fullWidth
          onChange={(e) => setEmail(e.target.value)}
          required
          
        />
        <Button className="mt-12" type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </Container>
        </>
    );
};

export default FormPage;