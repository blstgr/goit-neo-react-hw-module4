import Modal from 'react-modal';
import css from './ImageModal.module.css';

const modalStyles = {
  overlay: {
    zIndex: 20,
    backgroundColor: 'rgb(7 13 29 / 82%)',
  },
  content: {
    inset: '50% auto auto 50%',
    width: 'min(940px, calc(100% - 32px))',
    maxHeight: 'calc(100vh - 48px)',
    padding: 0,
    border: 0,
    borderRadius: '8px',
    overflow: 'auto',
    transform: 'translate(-50%, -50%)',
    background: '#ffffff',
  },
};

export default function ImageModal({ image, isOpen, onClose }) {
  if (!image) {
    return null;
  }

  const altText =
    image.alt_description || image.description || 'Unsplash image';
  const author = image.user?.name || 'Unknown author';
  const location = image.user?.location;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick
      style={modalStyles}
      contentLabel={altText}
    >
      <div className={css.modal}>
        <img className={css.image} src={image.urls.regular} alt={altText} />
        <div className={css.info}>
          <div>
            <h2 className={css.title}>{altText}</h2>
            <p className={css.author}>
              by {author}
              {location ? `, ${location}` : ''}
            </p>
          </div>
          <p className={css.likes}>{image.likes} likes</p>
        </div>
      </div>
    </Modal>
  );
}
