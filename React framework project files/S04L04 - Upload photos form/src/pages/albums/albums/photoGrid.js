// PhotoGrid.js

import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

const samplePhotos = [
  { id: 1, url: 'https://placekitten.com/300/200', title: 'Cute Cat 1' },
  { id: 2, url: 'https://placekitten.com/300/201', title: 'Cute Cat 2' },
  { id: 3, url: 'https://placekitten.com/300/202', title: 'Cute Cat 3' },
  { id: 4, url: 'https://placekitten.com/300/203', title: 'Cute Cat 4' },
  { id: 5, url: 'https://placekitten.com/300/204', title: 'Cute Cat 5' },
  { id: 6, url: 'https://placekitten.com/300/205', title: 'Cute Cat 6' },
  { id: 7, url: 'https://placekitten.com/300/206', title: 'Cute Cat 7' },
  { id: 8, url: 'https://placekitten.com/300/207', title: 'Cute Cat 8' },
  { id: 9, url: 'https://placekitten.com/300/208', title: 'Cute Cat 9' },
  { id: 10, url: 'https://placekitten.com/300/209', title: 'Cute Cat 10' },
  // Add more sample photos as needed
];

const PhotoGrid = () => {
  return (
    <Grid container spacing={2}>
      {samplePhotos.map((photo) => (
        <Grid item key={photo.id} xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardMedia component="img" height="200" image={photo.url} alt={photo.title} />
            <CardContent>
              <Typography variant="subtitle1">{photo.title}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default PhotoGrid;
