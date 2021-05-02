import {useSelector} from "react-redux";
import Album from "./Album";

function Albums() {
    const albums = useSelector(state => state.albums);
    return (
        <div className="albums">
            {albums.map(album => {
                return <Album album={album} key={album.id} />
            })}
        </div>
    );
}

export default Albums;