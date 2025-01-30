import React, {useState, useEffect} from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';


const PhotoGrid = ({photoUrls}) => {
  const [photos, setPhotos] = useState(new Set());
  useEffect(() => {
    const addPhotoAsync = async (link) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setPhotos(prevPhotos => new Set([...prevPhotos, link]));
    };

    const loadPhotos = async () => {
      for (const link of photoUrls) {
        await addPhotoAsync(link);
      }};
      loadPhotos();
  },
  []
  );

  return (
    <Grid container spacing={2}>
      {[...photos].map((photo) => (
        <Grid item key={photo.id} xs={8} sm={4} md={4} lg={2}>
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
