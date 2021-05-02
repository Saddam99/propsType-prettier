import React from 'react';

function Photo(props) {
    return (
        <div>
            <img src={props.photo.url} alt="" width="200"/>
        </div>
    );
}

export default Photo;