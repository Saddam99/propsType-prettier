import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAlbum } from '../../redux/actions';
import PropTypes from 'prop-types';

function Album(props) {
  const dispatch = useDispatch();

  const handleSelectAlbum = () => {
    dispatch(selectAlbum(props.album.id));
  };

  const selected = useSelector((state) => state.albums.selected);

  return (
    <div
      className={`album ${selected === props.album.id ? 'selected' : ''}`}
      onClick={handleSelectAlbum}
    >
      {props.album.title}
    </div>
  );
}

Album.propTypes = {
  album: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number
  })
};

export default Album;
