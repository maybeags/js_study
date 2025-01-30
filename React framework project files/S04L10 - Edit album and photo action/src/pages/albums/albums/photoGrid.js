import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Grid, Typography, Tooltip} from '@mui/material';
import { fetchGetDataWithAuthArrayBuffer, fetchGetDataWithAuth } from 'client/client';
import { Buffer } from 'buffer';
import { useLocation } from 'react-router-dom';



const PhotoGrid = () => {
  const [photos, setPhotos] = useState({}); // State to store fetched photos
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const album_id = queryParams.get('id'); // Extract album ID from URL query parameters
  const [albumInfo, setAlbumInfo] = useState({}); // State to store album information

  const handleView = () => {console.log("View clicked")}
  const handleEdit = () => {console.log("Edit clicked")}
  const handleDownload = () => {console.log("Download clicked")}
  const handleDelete = () => {console.log("Delete clicked")}
   
  useEffect(() => {
    // Fetch album data when component mounts or album_id changes
    fetchGetDataWithAuth('/albums/' + album_id).then(res => {
      setAlbumInfo(res.data);
      const photosList = res.data.photos; // Extract list of photos from album data
  // Fetch and update photos one by one as they are downloaded
  photosList.forEach(photo => {
    // Fetch individual photo data
    fetchGetDataWithAuthArrayBuffer(photo.download_link).then(response => {
      // Construct a unique ID for the photo
      const albumPhotoID = 'album_' + album_id + '_photo+' + photo.id;
      // Convert photo data to base64 format
      const buffer = Buffer.from(response.data, 'binary').toString('base64');
      // Update state with the fetched photo
      const temp = {
        'album_id': album_id,
        'photo_id': photo.id,
        'name': photo.name,
        'description': photo.desciption,
        'content': buffer
      }
      setPhotos(prevPhotos => ({ ...prevPhotos, [albumPhotoID]: temp }));
    });
  });
});
}, [album_id]); // Dependency array ensures useEffect runs when album_id changes
   return (
    <div>
     <Typography variant="h4" gutterBottom>{albumInfo.name}</Typography>
      <Typography variant="subtitle1" gutterBottom>{albumInfo.description}</Typography>
    <Grid container spacing={2}>
      {/* Render each photo */}
      {Object.keys(photos).map(key => (
        <Grid item key={key} xs={8} sm={4} md={4} lg={2}>
          <Card>
          <Tooltip title={photos[key]['description']}>
            <CardMedia component="img" height="200" image={'data:image/jpeg;base64,' + photos[key]['content']} alt={photos[key]['description']} title={photos[key]['description']}/>
            </Tooltip>
            <CardContent>
            <Tooltip title={photos[key]['description']}>
              <Typography variant="subtitle1">{photos[key]['name']}</Typography>
            </Tooltip>
            <a href="#" onClick={handleView}> View </a>|
            <a href="#" onClick={handleEdit}> Edit </a>|
            <a href="#" onClick={handleDownload}> Download </a>|
            <a href="#" onClick={handleDelete}> Delete </a>

            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </div>
  );
};

export default PhotoGrid;
