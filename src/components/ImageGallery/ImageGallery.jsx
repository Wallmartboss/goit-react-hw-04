import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css"; 

const ImageGallery = ({ items, openModal }) => {
     
    if (!items || items.length === 0) {
        return <h3> No items to display </h3>; // перевірка на пустий масив
    }
       
    return (
        <ul className={s.set_images}>
            {items.map((item) => (
                <li key={item.id} className={s.image}>
                    <ImageCard item={item} openModal={openModal} />
                </li>
             ))}
        </ul>
    );
};

export default ImageGallery;