import React from 'react';
import {useDispatch} from "react-redux";
import {selectAlbum} from "../redux/actions";

function Album(props) {
    const dispatch = useDispatch();

    const handleSelectAlbum = () => {
        dispatch(selectAlbum(props.album.id))
    }

    return (
        <div className='album' onClick={handleSelectAlbum}>
            {props.album.title}
        </div>
    );
}

export default Album;