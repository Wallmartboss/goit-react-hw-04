import s from "./ImageCard.module.css";

const ImageCard = ({ item }) => {
      const { alt_description, urls: { small  } } = item;
  
  return (
      <img
        src={small}
        alt={alt_description}
        className={s.card}
      />
    );
}

export default ImageCard