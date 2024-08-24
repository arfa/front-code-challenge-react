import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

export interface ButtonProps extends MuiButtonProps {
  label: string;
}

export const Button = ({ label, ...rest }: ButtonProps) => (
  <MuiButton
    {...rest}
    sx={{
      '&.MuiButton-containedSecondary': {
        border: '1px solid black',
      },
    }}
  >
    {label}
  </MuiButton>
);
