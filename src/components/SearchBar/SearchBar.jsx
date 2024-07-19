import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import s from "./SearchBar.module.css" 

const SearchBar = ({ setQuery }) => {
   
  const [query, setLocalQuery] = useState('');
  
const notify = () => toast('Please, fill keyword for searching...');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!event.target.querySelector("input").value) { notify(); return }
    setQuery(query);
     };
  
  return (
<header className={s.hdr}>
  <form onSubmit={handleSubmit} className={s.form}>
    <input className={s.inp}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      value={query}  
      onChange={(e) => setLocalQuery(e.target.value)}
    />
        <button type="submit" className={s.btn} > Search</button>
        {!query && <Toaster />} 
     </form>
</header>
    );
};

export default SearchBar;
