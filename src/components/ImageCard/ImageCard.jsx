import css from './ImageCard.module.css';

export default function ImageCard({ image, onClick }) {
  const altText =
    image.alt_description || image.description || 'Unsplash image';

  return (
    <div className={css.card}>
      <button className={css.button} type="button" onClick={onClick}>
        <img className={css.image} src={image.urls.small} alt={altText} />
      </button>
    </div>
  );
}
