import s from "./ImageCard.module.css";

const ImageCard = ({ item, openModal }) => {
      const { alt_description, urls: { small, regular  } } = item;
  
  return (
      <img
        src={small}
        alt={alt_description}
        className={s.card}
        onClick={() => openModal(regular, alt_description)}
      />
    );
}

export default ImageCard