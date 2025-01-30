import React, { useState } from 'react';
import axios from 'axios';
import Header from './albums/header';
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  IconButton,
  CircularProgress 
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { AddCircleOutline, Close } from '@mui/icons-material';
import { useDropzone } from 'react-dropzone';

const useStyles = makeStyles((theme) => ({
  dropzoneContainer: {
    border: `2px dashed ${theme.palette.primary.main}`,
    borderRadius: theme.spacing(2),
    padding: theme.spacing(4),
    textAlign: 'center',
    cursor: 'pointer',
  },
  uploadedFile: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: theme.spacing(1),
  },
}));

const FileUploadPage = () => {
  const classes = useStyles();
  const [files, setFiles] = useState([]);
  const [processing, setProcessing] = useState(false);

  const onDrop = (acceptedFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const removeFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleUpload = async () => {
    setProcessing(true);
    try {
        const formData = new FormData();
    
        // Append files with the part name 'files'
        files.forEach((file) => {
          formData.append('files', file);
        });


      const token = localStorage.getItem('token');
      const response = await axios.post('/api/v1/albums/1/upload-photos', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          "Authorization": `Bearer ${token}`,
        },
      });

      console.log('Upload successful:', response.data);

      // Reset the files state after successful upload
      setFiles([]);


      
    } catch (error) {
      console.error('Error uploading files:', error.message);
    }finally {
        setProcessing(false); // Reset loading state regardless of success or failure
      }
  };

  

  return (
    <Container>
        <Header/>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center" gutterBottom>
              Artistic Photo Upload
            </Typography>
          </Grid>
          <Grid item xs={12} {...getRootProps()}>
            <input {...getInputProps()} />
            <Paper elevation={3} className={classes.dropzoneContainer}>
              <AddCircleOutline fontSize="large" color="primary" />
              <Typography variant="h6">
                Drag and drop photos or click to select files
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Box>
              {files.map((file, index) => (
                <Paper
                  key={index}
                  elevation={3}
                  className={classes.uploadedFile}
                >
                  <Typography>{file.name}</Typography>
                  <IconButton
                    onClick={() => removeFile(index)}
                    color="secondary"
                  >
                    <Close />
                  </IconButton>
                </Paper>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12}>
            {processing ? (
              <Box textAlign="center">
                <CircularProgress />
                <Typography
                  variant="body2"
                  color="textSecondary"
                  marginTop="10px"
                >
                  Uploading...
                </Typography>
              </Box>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={handleUpload}
                disabled={files.length === 0}
              >
                Upload Masterpiece
              </Button>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default FileUploadPage;