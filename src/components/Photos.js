import {useDispatch, useSelector} from "react-redux";
import Photo from "./Photo";
import {setFilterPhoto} from "../redux/actions";

function Photos() {
    const dispatch = useDispatch();

    const photos = useSelector(state => state.photos);
    const selectedAlbumsId = useSelector(state => state.selectedAlbumsId);
    const filter = useSelector(state => state.filter);


    const filterAlbums = photos
        .filter((photo) => photo.albumId === selectedAlbumsId)
        .filter(photo => {
            if (photo.id > filter) {
                return false
            }
            return true
        })

    const handleChangeFilter = (event) => {
        dispatch(setFilterPhoto(event.target.value))
    }

    if (selectedAlbumsId === null) {
        return (
            <div className='no-use-selected'>
                yyyyyyyyyy
            </div>
        )
    }

    return (
        <div className='photos'>
            <div>
                <input type="number"
                       placeholder='фильтер картинок: от 1 до 50'
                       value={filter}
                       onChange={handleChangeFilter}
                />
            </div>
            <div className='photo'>
            {filterAlbums.map(photo => {
                return <Photo photo={photo} key={photo.id} />
            })}
            </div>
        </div>
    );
}

export default Photos;