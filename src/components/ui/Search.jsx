import './search.css'
const Search = ({searchText,setSearchText}) => {
  const searchHandler = e => setSearchText(e.target.value)
  return <div className='searchBox'>
    <label className='searchLabel' htmlFor='contactSearch'>جستجو در مخاطبین</label>
    <input className='searchInput' id='contactSearch' type='text' placeholder='نام یا ایمیل مخاطب...'
      value={searchText} onChange={searchHandler}/>
  </div>
}
export default Search