// material-ui
import { Typography } from '@mui/material';
import MainCard from 'components/MainCard';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const SamplePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('token');
    if (!isLoggedIn) {
      navigate('/login');
    } 
  }, []); // The empty dependency array ensures that the effect runs only once, on mount
  return (<MainCard title="Albums">
    <Typography variant="body2">
      Albums
    </Typography>
  </MainCard>
)};

export default SamplePage;
