import React from 'react';
import { LinearProgress } from '@mui/material';

export default function CircularIndeterminate() {
  return (
    <div sx={{
        display: 'flex',
        justifyContent: "center",
        '& > * + *': {
          marginLeft: '2em',
        }}}>
      <LinearProgress />
    </div>
  );
}
