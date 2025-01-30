import React from 'react';
import Header from './albums/header';
import PhotoGrid from './albums/photoGrid';


const photoUrls = [
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
  
];


const Albums = () => {

  return (
    <div>
      <Header/>
      <div style={{ marginTop: '20px', padding: '20px' }}>         
       <PhotoGrid  photoUrls={photoUrls}/>
      </div>
    </div>
  );
};

export default Albums;
