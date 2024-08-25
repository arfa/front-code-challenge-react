import React from 'react';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';

type HeroBannerProps = {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundAsset?: {
    url: string;
    alt: string;
  };
  foregroundAsset?: {
    url: string;
    alt: string;
  };
};

const HeroBanner = ({
  title,
  subtitle,
  description,
  backgroundAsset,
  foregroundAsset,
}: HeroBannerProps) => {
  return (
    <Card
      sx={{
        position: 'relative',
        width: '100%',
        overflow: 'visible',
      }}
    >
      {backgroundAsset && (
        <CardMedia component='img' image={backgroundAsset.url} alt={backgroundAsset.alt} />
      )}

      {foregroundAsset && (
        <CardMedia
          component='img'
          image={foregroundAsset.url}
          alt={foregroundAsset.alt}
          sx={{
            width: '345px',
            position: 'absolute',
            bottom: '-40px',
            top: '-40px',
            left: '40px',
            height: 'calc(100% + 80px)',
          }}
        />
      )}

      <CardContent
        sx={{
          position: 'absolute',
          textAlign: 'right',
          bottom: '40px',
          right: '40px',
        }}
      >
        <Typography variant='h4' fontWeight='bold'>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant='subtitle1' color='textSecondary'>
            {subtitle}
          </Typography>
        )}
        {description && (
          <Typography variant='body1' mt={2}>
            {description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default HeroBanner;
