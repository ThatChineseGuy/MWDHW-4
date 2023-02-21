const SearchBar = ({search, setSearch, maxLength, setMaxLength, Order, SetOrder, movies, setMovies}) => {

    const searchHandler = (e) => {
        setSearch(e.target.value);
    }

    const maxLengthHandler = (e) => {
        setMaxLength(e.target.value);
    }

    const SortedMovies=[...movies];

    const sorted = () => {
        if(Order === 'ascend'){
            SortedMovies.sort((a,b) => b.length - a.length);
            setMovies(SortedMovies);
            SetOrder('descend');
        } else {
            SortedMovies.sort((a,b) => a.length - b.length);
            setMovies(SortedMovies);
            SetOrder('ascend');
        }
    }

    return <>
        <label htmlFor="search">Search Query</label>
        <input type="text" name="search" onChange={searchHandler} value={search} />
        <label htmlFor="max-length">Max Length</label>
        <input type="number" name="max-length" onChange={maxLengthHandler} value={maxLength} />
        <button onClick={sorted}>Sort</button>
    </>
}

export default SearchBar;