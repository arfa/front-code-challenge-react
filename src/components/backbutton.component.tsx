'use client';

import { Button } from '@mui/material';
import BackIcon from '@/components/icons/back.icon';

export default function BackButton() {
  return (
    <Button
      variant='text'
      startIcon={<BackIcon />}
      color='inherit'
      onClick={() => window.history.back()}
    >
      Back
    </Button>
  );
}
