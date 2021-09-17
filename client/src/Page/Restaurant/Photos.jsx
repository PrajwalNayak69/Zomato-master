import React, {useState} from 'react';
import ImageViewer from 'react-simple-image-viewer';
import PhotosCollection from "../../Components/restaurant/PhotosCollection";

const Photos = () => {
 const [photos, setPhotos] = useState(["https://b.zmtcdn.com/data/pictures/4/18698854/5d6628fa88cf8a5407088a597fcbf9a0.jpg","https://b.zmtcdn.com/data/pictures/4/18698854/21b575f0e0e6a81918e19204e9df1f3f.jpg","https://b.zmtcdn.com/data/pictures/4/18698854/31bf37d8173e929ad8a35dd8013f0c49.jpg"]);
 const [ isMenuOpen, setIsMenuOpen] = useState(false);
    const [ CurrentImg, setCurrentImg] = useState(0);
    const closeViewer = () => setIsMenuOpen(false);
    const openViewer = () => setIsMenuOpen(true);
    return (
        <>
        {isMenuOpen && (
        <ImageViewer
          src={ photos}
          currentIndex={ CurrentImg }
          disableScroll={ false }
          onClose={ closeViewer }
        />
        )}
         <div className="flex flex-wrap gap-2">
        {photos.map((photo) => (
          <PhotosCollection image={photo} openViewer={openViewer} />
        ))}
      </div>
        </>
    )}

export default Photos
