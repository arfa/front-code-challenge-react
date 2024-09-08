import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Logo from './icons/logo.svg?url';
import Image from 'next/image';

export default function Header() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Image src={Logo} alt='Valtech Logo' width={100} height={40} />
      </Toolbar>
    </AppBar>
  );
}
