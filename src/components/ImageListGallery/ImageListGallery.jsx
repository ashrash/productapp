import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import PropTypes from 'prop-types';
import ImageListItem from '@mui/material/ImageListItem';

export default function ImageListGallery({ imageData }) {
  return (
    <ImageList sx={{ width: 1000, height: 800 }} cols={3} rowHeight={164}>
      {imageData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

ImageListGallery.propTypes = {
  imageData: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string,
  })).isRequired,
};
