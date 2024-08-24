import React from 'react';
import {
  Card as MuiCard,
  CardContent,
  CardMedia,
  Typography,
  CardProps as MuiCardProps,
  CardActions,
} from '@mui/material';
import { Button } from './button.component';
export interface CardProps extends MuiCardProps {
  title: string;
  subtitle: string;
  content: string;
}

export const Card = ({ title, subtitle, content, sx, ...rest }: CardProps) => (
  <MuiCard
    {...rest}
    sx={{
      textAlign: 'center',
      backgroundColor: 'grey.200',
      ...sx,
    }}
  >
    <CardContent>
      <Typography variant='h4'>{subtitle}</Typography>
      <Typography
        gutterBottom
        variant='h3'
        sx={{
          fontWeight: 'bold',
          mt: 0,
          mb: 1,
        }}
      >
        {title}
      </Typography>
      <Typography variant='body2'>{content}</Typography>
    </CardContent>
    <CardActions
      sx={{
        mt: '45px',
        justifyContent: 'center',
      }}
    >
      <Button size='small' label='Learn More' />
    </CardActions>
  </MuiCard>
);
