import React from 'react';
import { Button } from '@mui/material';

export default function NavBar() {
  return (
    <div>
      <Button color='primary' variant='contained'>
        Click me
      </Button>

      <button type='button' className='btn btn-primary'>
        Primary
      </button>
      <button type='button' className='btn btn-secondary'>
        Secondary
      </button>
    </div>
  );
}
