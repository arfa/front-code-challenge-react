import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions } from '@mui/material';
import Link from 'next/link';
export interface CardProps {
  backgroundAsset?: {
    url: string;
    alt: string;
  };
  title?: string;
  subtitle?: string;
  description?: string;
  cta?: {
    url: string;
    ariaLabel: string;
    text: string;
    target: string;
  };
}

export const HomeCard = ({ backgroundAsset, title, subtitle, description, cta }: CardProps) => (
  <Card sx={{ position: 'relative', minHeight: '479px' }}>
    {backgroundAsset && (
      <CardMedia
        component='img'
        height='140'
        image={backgroundAsset.url}
        alt={backgroundAsset.alt}
        sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      />
    )}
    <CardContent sx={{ position: 'relative', zIndex: 1 }}>
      <Typography gutterBottom variant='h5' component='div'>
        {title}
      </Typography>
      <Typography variant='subtitle1' color='text.secondary'>
        {subtitle}
      </Typography>
      <Typography variant='body2' color='text.secondary'>
        {description}
      </Typography>
    </CardContent>
    {cta && (
      <CardActions sx={{ position: 'relative', zIndex: 1 }}>
        <Link href={cta.url} aria-label={cta.ariaLabel}>
          {cta.text}
        </Link>
      </CardActions>
    )}
  </Card>
);
