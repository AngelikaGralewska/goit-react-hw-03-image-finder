import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import PropTypes from 'prop-types';
import style from './ImageGallery.module.css';



export const ImageGallery = ({ selectImage, hits }) => {
return(
  <ul className={style.ImageGallery}>
    {hits.map(hit => {
        return (
          <ImageGalleryItem
            selectImage={selectImage}
            tags={hit.tags}
            key={hit.id}
            webformatURL={hit.webformatURL}
            largeImageURL={hit.largeImageURL}
          />
    )})}
  </ul>
);};

ImageGallery.propTypes = {
      hits: PropTypes.array.isRequired,
      selectImage: PropTypes.func.isRequired,
  };