import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Image from 'next/image';

type HeroComponentProps = {
  sideAsset?: {
    url: string;
    alt: string;
  };
  backgroundAsset?: {
    url: string;
    alt: string;
  };
  title?: string;
  subtitle?: string;
  author?: string;
  publishingDate?: string;
};

export const ArticleHero = ({
  sideAsset,
  backgroundAsset,
  title,
  subtitle,
  author,
  publishingDate,
}: HeroComponentProps) => {
  return (
    <>
      <Card sx={{ display: 'flex', width: '100%' }}>
        {sideAsset && (
          <CardMedia
            component='img'
            image={sideAsset.url}
            alt={sideAsset.alt}
            sx={{
              width: '40%',
            }}
          />
        )}

        <Box
          sx={{
            position: 'relative',
            width: '60%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'end',
          }}
        >
          {backgroundAsset && (
            <CardMedia
              component='img'
              image={backgroundAsset.url}
              alt={backgroundAsset.alt}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1, // Ensures the background image is behind the content
                objectFit: 'cover', // Ensures the image covers the entire box
              }}
            />
          )}

          <CardContent
            sx={{
              position: 'relative',
              zIndex: 1,
              color: 'white',
              textAlign: 'right',
            }}
          >
            <Typography variant='subtitle2' gutterBottom>
              {subtitle}
            </Typography>
            <Typography variant='h4'>{title}</Typography>
          </CardContent>
        </Box>
      </Card>
      <Box display='flex' justifyContent='space-between' mt={3} mb={3}>
        <Typography variant='caption'>{publishingDate}</Typography>
        <Typography variant='caption'>Author: {author}</Typography>
      </Box>
    </>
  );
};
