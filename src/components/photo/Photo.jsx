import React from 'react';
import PropTypes from 'prop-types';

function Photo(props) {
  return (
    <div>
      <img src={props.photo.url} alt="" width="200" />
    </div>
  );
}

Photo.propTypes = {
  photo: PropTypes.shape({
    url: PropTypes.string
  })
};

export default Photo;
