import s from './LoadMoreButton.module.css'; 

const LoadMoreButton = ({ setPage }) => {
  
    return (
        <button className={s.btn} onClick={() => setPage(prev => prev + 1)}>Load more</button>
         );
};
export default LoadMoreButton;