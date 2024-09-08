'use client';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import BackIcon from './icons/back.icon';

type Item = {
  url: string;
  alt: string;
  description: string;
};

type ArticleCarouselProps = {
  items?: Item[];
};

export default function ArticleCarousel({ items }: ArticleCarouselProps) {
  return (
    <Carousel
      animation='slide'
      navButtonsAlwaysVisible={true}
      indicators={false}
      NextIcon={
        <BackIcon
          style={{
            transform: 'rotate(180deg)',
          }}
        />
      }
      PrevIcon={<BackIcon />}
    >
      {items?.map((item, i) => <ItemCard key={i} item={item} />)}
    </Carousel>
  );
}

function ItemCard({ item }: { item: Item }) {
  return (
    <Card sx={{ position: 'relative' }}>
      <CardMedia component='img' height='140' image={item.url} alt={item.alt} />
      <CardContent
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <Typography gutterBottom variant='h5' component='div'>
          {item.alt}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
