import { useEffect, useState } from 'react';
import Loader from "./Loader/Loader";
import SearchBar from "./SearchBar/SearchBar";
import {requestPictures} from "./Api/api-unsplash"
import ImageGallery from './ImageGallery/ImageGallery';
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreButton from "./LoadMoreButton/LoadMoreButton";
import ImageModal from "./ImageModal/ImageModal";

const App = () => {
  
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isError, setIsError] = useState(false);
  const [alt, setAlt] = useState(" ");
  const [largeImage, setLargeImage] = useState(" ");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (largeImage, alt) => {
    setLargeImage(largeImage);
    setAlt(alt);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setLargeImage("");
    setAlt("");
  };

   const handleSetQuery = query => {
     setQuery(query);
     setPage(1);
     setItems([]);
    };

  // const openLargeImage = (largeImage, alt) => {
  //   console.log('openLargeImage called with:', { largeImage, alt });
  //   setLargeImage(largeImage);
  //   setAlt(alt);
  //   openModal();
  // };

 useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await requestPictures(query, page);
        setItems(prev => [...prev, ...response.results]);
        setTotalPages(response.total_pages)
        } catch (error) {
        console.log(error);
        setIsError(true);
        } finally {
        setIsLoading(false);
      }
    };
   if (query) { getData() }
     }, [query, page]);

  console.log(largeImage, alt);
  console.log(modalIsOpen);
  
  return (
    <div>
     
      <SearchBar setQuery={handleSetQuery} />
      {isError && <ErrorMessage/>}
      {isLoading && <Loader />}
      {query && !isError && <ImageGallery
                            items={items}
                            openModal={openModal} />} 
      {totalPages > page && !isLoading && <LoadMoreButton setPage={setPage} />}
      {/* {largeImage && ( */}
        <ImageModal
        largeImage={largeImage}
        alt={alt}
        isOpen={modalIsOpen}
        onRequestClose={closeModal} />
      {/* )} */}
      </div>
  );
};

export default App;