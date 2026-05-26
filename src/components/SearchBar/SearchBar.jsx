import { useState } from 'react';
import toast from 'react-hot-toast';
import css from './SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const normalizedValue = searchValue.trim();

    if (!normalizedValue) {
      toast.error('Please enter text to search for images.');
      return;
    }

    onSubmit(normalizedValue);
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
