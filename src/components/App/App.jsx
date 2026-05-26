import { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { fetchImages } from '../../services/images-api.js';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';
import ImageGallery from '../ImageGallery/ImageGallery.jsx';
import ImageModal from '../ImageModal/ImageModal.jsx';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn.jsx';
import Loader from '../Loader/Loader.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import css from './App.module.css';

export default function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }

    async function loadImages() {
      try {
        setIsLoading(true);
        setError(false);

        const { images: newImages, totalPages: newTotalPages } =
          await fetchImages(query, page);

        setImages((prevImages) =>
          page === 1 ? newImages : [...prevImages, ...newImages],
        );
        setTotalPages(newTotalPages);

        if (page === 1 && newImages.length === 0) {
          toast(`No images found for "${query}"`);
        }
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    loadImages();
  }, [query, page]);

  const handleSearch = (nextQuery) => {
    if (nextQuery === query) {
      toast(`Already showing results for "${nextQuery}"`);
      return;
    }

    setQuery(nextQuery);
    setPage(1);
    setImages([]);
    setTotalPages(0);
    setSelectedImage(null);
  };

  const handleLoadMore = () => {
    setPage((currentPage) => currentPage + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const hasImages = images.length > 0;
  const canLoadMore = hasImages && page < totalPages && !isLoading;

  return (
    <div className={css.app}>
      <SearchBar onSubmit={handleSearch} />
      <main className={css.main}>
        {error ? (
          <ErrorMessage />
        ) : (
          <>
            {hasImages && (
              <ImageGallery images={images} onImageClick={openModal} />
            )}
            {isLoading && <Loader />}
            {canLoadMore && <LoadMoreBtn onClick={handleLoadMore} />}
          </>
        )}
      </main>
      <ImageModal
        image={selectedImage}
        isOpen={Boolean(selectedImage)}
        onClose={closeModal}
      />
      <Toaster position="top-right" />
    </div>
  );
}
