import SearchForm from './SearchForm';
import './SearchInput.css'
import { IoSearchOutline } from "react-icons/io5";

const SearchInput = () => {
  return (
    <div className='container-search'>
      <div className='icon'>
        <IoSearchOutline />
      </div>

      <SearchForm>
        {({ input, setInput, handleSubmit }) => (

          <form onSubmit={handleSubmit}>
            <div className="search">
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text"
                placeholder='Search Pirates...'
              />
            </div>
          </form>
        )}
      </SearchForm >
    </div>

  )
}

export default SearchInput