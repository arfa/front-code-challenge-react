import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface FooterProps {
  background: string;
  text: string;
}

const Footer: React.FC<FooterProps> = ({ background, text }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant='h6' sx={{ color: 'white' }}>
        {text}
      </Typography>
    </Box>
  );
};

export default Footer;
